// 使用严格模式
"use strict";
function calculate() {
  var amount = document.getElementById('amount');
  var apr = document.getElementById('apr');
  var years = document.getElementById('years');
  var zipcode = document.getElementById('zipcode');
  var payment = document.getElementById('payment');
  var total = document.getElementById('total');
  var totalinterest = document.getElementById('totalinterest');

  // 假设所有输入都是合法的
  //将百分比格式转化为 小数格式，年利率转换为月利率
  // 年度赔付转换为 月度赔付
  var principal = parseFloat(amount.value);
  var interest = parseFloat(apr.value) / 100 /12;
  var payments = parseFloat(years.value) *12;

  // 计算月度赔付的数据
  var x = Math.pow(1+ interest, payments);
  var monthly = (principal*x*interest) / (x-1);

  if (isFinite(monthly)) {
    payment.innerHTML = monthly.toFixed(2)
    total.innerHTML = (monthly * payments).toFixed(2);
    totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

    save(amount.value, apr.value, years.value, zipcode.value);

    try{
      getLenders(amount.value, apr.value, years.value, zipcode.value);
    }catch(e) {

    }
    chart(principal, interest, monthly, payments)
  }else {
    payment.innerHTML=""
    total.innerHTML=""
    totalinterest.innerHTML=""
    chart();
  }
}
function save(amount, apr, years, zipcode){
  if (window.localStorage){
    localStorage.loan_amount = amount;
    localStorage.loan_apr = apr;
    localStorage.loan_years = years;
    localStorage.loan_zipcode = zipcode;
  }
}

window.onload = function () {
  if (window.localStorage && localStorage.loan_amount) {
    document.getElementById('amount').value = localStorage.loan_amount ;
    document.getElementById('apr').value =localStorage.loan_apr ;
    document.getElementById('years').value =localStorage.loan_years;
    document.getElementById('zipcode').value =localStorage.loan_zipcode;
  }
}
function getLenders (amount, apr, years, zipcode) {
  console.log('异步请求', amount, apr, years, zipcode)
}
function chart(principal, interest, monthly, payments) {
  var graph = document.getElementById('graph');
  graph.width = graph.width; // 用巧妙的手法，清除并重置画布
  if (arguments.length === 0 || !graph.getContext)
    return;

  var g = graph.getContext('2d'),
    width = graph.width,
    height = graph.height;
  function paymentToX (n) {
    return n*width / payments;
  }
  function amountToY (a) {
    return height-(a*height / (monthly * payments*1.05));
  }

  // 付款数据 00 到
  g.moveTo(paymentToX(0), amountToY(0)); //从左下方开始
  g.lineTo(paymentToX(payments), amountToY(monthly*payments));
  g.lineTo(paymentToX(payments), amountToY(0));
  g.closePath();
  g.fillStyle= '#f88';
  g.fill();
  g.font="bold 12px sans-serif";
  g.fillText('total Interest payments', 20, 20);

  var equity = 0;
  g.beginPath();
  g.moveTo(paymentToX(0), amountToY(0))
  for(var p =1; p<= payments; p++) {
    var thisMonthInterest = (principal - equity) * interest;
    equity += (monthly-thisMonthInterest);
    g.lineTo(paymentToX(p), amountToY(equity));
  }
  g.lineTo(paymentToX(payments), amountToY(0));
  g.closePath()
  g.fillStyle="green";
  g.fill();
  g.fillText("total equity", 20,35)

  var bal = principal;
  g.beginPath();
  g.moveTo(paymentToX(0), amountToY(bal))
  for(var p =1; p<= payments; p++) {
    var thisMonthInterest = bal * interest;
    bal -= (monthly - thisMonthInterest);
    g.lineTo(paymentToX(p), amountToY(bal));
  }
  g.lineWidth = 3;
  g.stroke();
  g.fillStyle="black";
  g.fillText('loan balance', 20, 50);

  g.textAlign = 'center';
  var y = amountToY(0);
  for (var year = 1; year*12 <= payments; year++) {
    var x = paymentToX(year*12);
    g.fillRect(x-0.5, y-3, 1, 3);
    if(year === 1) {
      g.fillText('year', x, y-5);
    }
    if(year % 5 == 0 && year *12 !== payments) {
      g.fillText(String(year), x, y-5);
    }
  }

  g.textAlign="right";
  g.textBaseline = "middle";
  var ticks = [monthly*payments, principal];
  var rightEdge = paymentToX(payments);
  for(var i = 0; i < ticks.length; i++) {
    var y = amountToY(ticks[i]);
    g.fillRect(rightEdge-3, y-0.5, 3,1)
    g.fillText(String(ticks[i].toFixed(0)), rightEdge-5, y);
  }
}