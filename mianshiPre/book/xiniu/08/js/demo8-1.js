// 函数语句
// 输出o的每个属性的名称和值，返回undefined
function printProp (o) {
  for(p in o) {
    console.log(p + ": " + o[p] + "\n")
  }
}

// 计算两个笛卡尔坐标(x1, y1) 和 (x2, y2)之间的距离
function distance (x1, y1, x2, y2){
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx*dx + dy*dy);
}

// 计算阶乘的递归函数
function factorial(x) {
  if (x <= 1) return 1;
  return x* factorial(x-1)
}

var square = function ( x ){
  return x*x;
}

// 表达式函数，可以包含名称，在递归时更方便使用
var f = function fact(x) {
  if (x <= 1) return 1;
  else return x*fact(x-1);
}
// 函数表达式也可以作为参数，传递给其他函数
var data = [1,2,32,123,43,32,2,3,3,4];
data.sort(function (a, b) {
  return a-b;
})
// 函数表达式可以立即定义立即调用 IIFE
var tensquared = (function (x) {
  return x*x
})(10)
// console.log(tensquared())