(function () {
    var data = [
        {
            p:[{x:0, y:0},{x:0, y:800},{x:400, y:400}],
            color: "#caff67"
        },
        {
            p:[{x:0, y:0},{x:800, y:0},{x:400, y:400}],
            color: "#67becf"
        },
        {
            p: [{x:0, y:800},{x:400, y:800},{x:200, y:600}],
            color: "#ef3d61"
        },
        {
            p:[{x:400, y:800},{x:200, y:600},{x:400, y:400},{x:600, y:600}],
            color: "#f9f51a"
        },
        {
            p:[{x:600, y:600},{x:400, y:400},{x:600, y:200}],
            color:"#a594c0"
        },
        {
            p:[{x:600, y:600},{x:600, y:200},{x:800, y:0},{x:800, y:400}],
            color:"#fa8ecc"
        },
        {
            p:[{x:400, y:800},{x:800, y:800},{x:800, y:400}],
            color:"#f6ca29"
        }
    ];
    var canvas = document.getElementById('canvas');
    canvas.width = 800;
    canvas.height = 800;

   // 判断浏览器是否支持canvas.
    if(!canvas.getContext('2d')){
        alert("不支持canvas");
    } else {
         var ctx = canvas.getContext('2d');
    }
    var length = data.length;
    for(let i = 0; i < length; i++){
        draw(data[i],ctx);
    }

    function draw (data, ctx) {
        ctx.beginPath();
        console.log(data);
        var coordinate = data.p;

        ctx.moveTo(coordinate[0].x,coordinate[0].y);
        for(let i = 1, length = coordinate.length; i < length; i++) {
            ctx.lineTo(coordinate[i].x, coordinate[i].y);
        }
        ctx.closePath();
        ctx.fillStyle = data.color;
        ctx.fill();

        ctx.strokeWidth=3;
        ctx.strokeStyle="black";
        ctx.stroke();
    }
})()