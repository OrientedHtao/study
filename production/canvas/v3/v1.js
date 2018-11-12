
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
    
    
var endTime = new Date();
endTime.setTime(endTime.getTime()+3600*1000);

var curShowTimeSeconds = 0;

var balls = [];
var colors = ["#33b5e5","#0099cc","#aa66cc","#9933cc","#99cc00","#669900","#ffbb33","#ff8800","#ff4444","#cc000"];


window.onload = function () {
    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight;
    // WINDOW_WIDTH = window.innerWidth;
    // WINDOW_HEIGHT = window.innerHeight;

    MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
    MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);

    RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;

    var canvas = document.getElementById('canvas');
        canvas.width = WINDOW_WIDTH;
        canvas.height = WINDOW_HEIGHT;
        if(!canvas.getContext('2d')){
            alert("不支持canvas");
        } else {
             var ctx = canvas.getContext('2d');
        }
        curShowTimeSeconds = getShowTimeSeconds();
       setInterval(function(){
        render(ctx);
        // 负责数据的改变
        update();
        // console.log(balls.length);
       },50)
}
// 时间的变化
function update() {
    var nextShowTimeSeconds = getShowTimeSeconds();
    var nexthours = parseInt(nextShowTimeSeconds/3600);
    var nextminutes = parseInt((nextShowTimeSeconds-nexthours*3600)/60);
    var nextseconds = parseInt(nextShowTimeSeconds%60);

    var curhours = parseInt(curShowTimeSeconds/3600);
    var curminutes = parseInt((curShowTimeSeconds-curhours*3600)/60);
    var curseconds = parseInt(curShowTimeSeconds%60);
    // 事件改变，生成小球
    if (nextseconds != curseconds) {
        // 依次判断 所有小球 数据
        
        if (parseInt(curhours/10) != parseInt(nexthours/10)) {
            addBalls(MARGIN_LEFT+0, MARGIN_TOP, parseInt(curhours/10));
        }
        if (parseInt(curhours%10) != parseInt(nexthours%10)) {
            addBalls(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(curhours%10));
        }
        if (parseInt(curminutes/10) != parseInt(nextminutes/10)) {
            addBalls(MARGIN_LEFT+ 39*(RADIUS+1), MARGIN_TOP, parseInt(curminutes/10));
        }
        if (parseInt(curminutes%10) != parseInt(nextminutes%10)) {
            addBalls(MARGIN_LEFT+ 54*(RADIUS+1), MARGIN_TOP, parseInt(curminutes%10));
        }
        if (parseInt(curseconds/10) != parseInt(nextseconds/10)) {
            addBalls(MARGIN_LEFT+ 78*(RADIUS+1), MARGIN_TOP, parseInt(curseconds/10));
        }
        if (parseInt(curseconds%10) != parseInt(nextseconds%10)) {
            addBalls(MARGIN_LEFT+ 93*(RADIUS+1), MARGIN_TOP, parseInt(curseconds%10));
        }

        curShowTimeSeconds = nextShowTimeSeconds;
    }
    updateBalls();
}
function updateBalls() {
    for(var i = 0 ; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
            balls[i].y = WINDOW_HEIGHT - RADIUS;
            balls[i].vy = -balls[i].vy * 0.65;
        }
        
        if (balls[i].x >= WINDOW_WIDTH -RADIUS) {
            balls[i].x = WINDOW_WIDTH -RADIUS;
            balls[i].vx = -balls[i].vx *0.75;
        }
        // 应该讲小球 清除掉
        // if( balls[i].x <= RADIUS ) {
        //     balls[i].x = RADIUS;
        //     balls[i].vx = -balls[i].vx *0.75;
        // }
        
    }
    // console.log(balls.length);
    var cnt = 0;
    for(var i = 0; i < balls.length ; i++) {
        if(balls[i].x + RADIUS > 0 ) {
            balls[cnt++] = balls[i];
        }
    }
    // console.log(balls.length);
    // cnt ==》 Math.min(300,cnt) 之后，小球不产生，则不能使用这个性能优化的办法
    while (balls.length > cnt) {
        balls.pop();
    }
}
function getShowTimeSeconds () {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    // console.log(endTime);
    // console.log(ret);
    ret = Math.round(ret/1000);
    // console.log(ret);
    
    return ret >= 0 ? ret : 0;
    // return curTime.getHours()*3600 + curTime.getMinutes()*60 + curTime.getSeconds();
}
function render (ctx) {
    // 刷新整个canvas
    ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
    var hours = parseInt(curShowTimeSeconds/3600);

    var minutes = parseInt((curShowTimeSeconds-hours*3600)/60);
    var seconds = parseInt(curShowTimeSeconds%60);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);
    // var hour = 12;
    // var minute = 34;
    // var seconds = 55;
    renderDigit(MARGIN_TOP,MARGIN_LEFT,parseInt(hours/10), ctx);
    renderDigit(MARGIN_TOP + 15*(RADIUS+1),MARGIN_LEFT,parseInt(hours%10), ctx);
    renderDigit(MARGIN_TOP + 30*(RADIUS+1),MARGIN_LEFT,10, ctx);
    renderDigit(MARGIN_TOP + 39*(RADIUS+1),MARGIN_LEFT,parseInt(minutes/10), ctx);
    renderDigit(MARGIN_TOP + 54*(RADIUS+1),MARGIN_LEFT,parseInt(minutes%10), ctx);
    renderDigit(MARGIN_TOP + 69*(RADIUS+1),MARGIN_LEFT,10, ctx);
    renderDigit(MARGIN_TOP + 78*(RADIUS+1),MARGIN_LEFT,parseInt(seconds/10), ctx);
    renderDigit(MARGIN_TOP + 93*(RADIUS+1),MARGIN_LEFT,parseInt(seconds%10), ctx);

    for (var i = 0, le = balls.length; i < le; i++) {
        ctx.fillStyle = balls[i].color;
        ctx.beginPath()
        ctx.arc(balls[i].x , balls[i].y , balls[i].r,0,2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}
function renderDigit(x,y,num,ctx){
    // console.log(digit);
    ctx.fillStyle = "#aaa";

    for(let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if(digit[num][i][j] === 1) {
                ctx.beginPath();
                // 计算圆心坐标，
                // centerX: x+j*2*(RADIUS+1)+(RADIUS+1)
                // centerY: y+i*2*(RADIUS+1)+(RADIUS+1)
                ctx.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}
function addBalls (x,y,num) {
    var le = colors.length
    for(let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if(digit[num][i][j] === 1) {
                var aBall = {
                    x: x+j*2*(RADIUS+1)+(RADIUS+1),
                    y: y+i*2*(RADIUS+1)+(RADIUS+1),
                    r: RADIUS,
                    g: 1.5+Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random()*1000)) *4,
                    vy: -5,
                    color: colors[Math.floor(Math.random()*le)]
                }
                balls.push(aBall);
                // ctx.beginPath();
                // // 计算圆心坐标，
                // // centerX: x+j*2*(RADIUS+1)+(RADIUS+1)
                // // centerY: y+i*2*(RADIUS+1)+(RADIUS+1)
                // ctx.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                // ctx.closePath();
                // ctx.fill();
            }
        }
    }
}


