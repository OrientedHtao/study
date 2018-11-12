window.onload = function () {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(!canvas.getContext('2d')) {
        alert("您的浏览器不支持canvas");
    } else {
        var ctx = canvas.getContext('2d');
    }
    // 绘制 黑色画布
    var grd = ctx.createLinearGradient(0,0,0, canvas.height);
    grd.addColorStop(0, "#000");
    grd.addColorStop(0.5, "#023");
    grd.addColorStop(1, "#035");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for( let i = 0 ; i < 200; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height * 0.5;
        if(y < 0.2* canvas.height){
            var r = Math.random() * 10 ;
            
        } else if (y < 0.3* canvas.height){
            var r = Math.random() * 8 ;
        } else {
            var r = Math.random() * 3 ;
        }
        
        var rot = Math.random() * 360 * Math.PI /180;
        drawStar (ctx, x, y, r, rot);
    }
}
function drawStar (ctx, x, y, r, rot) {
    ctx.fillStyle = "#fb3";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#fd5";

    ctx.save();
    // 图形变换必须写在  图像状态设置前面

    ctx.translate(x, y);
    ctx.rotate(rot);
    // scale() 除了缩放图之外，还对位置 和 边框属性有缩放作用。
    // 第一种解决方法是 将 不绘制边框。
    // 第二种解决方法是，将 绘制图的 fill() stroke() 函数 写在 restore() 之后
    ctx.scale(r,r);

    starPath(ctx);

    // ctx.fill();
    // ctx.stroke();
    ctx.restore();
    ctx.fill();
    ctx.stroke();
    
}
function starPath (ctx) {
    ctx.beginPath();
    for ( let i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos( (18 + i * 72) * Math.PI /180), -Math.sin( (18 + i * 72) * Math.PI /180));
        ctx.lineTo(Math.cos( (54 + i * 72) * Math.PI /180) * 0.5, -Math.sin( (54 + i * 72) * Math.PI /180) * 0.5);
    }
    ctx.closePath();
}