(function (win, doc){
    /*
    params: 
        type: ball
        ele: canvas 对象 dom
        colors: Array
        maxNum: number  30, // 一次点击出现的球球个数
        radius: number  10, // 球球的最大半径
        reduceRa: number (0,5] // 半径减小速率
        animationTime: number  50, // 动画时间间隔ms
        speedX: number 10, //球球 初始横向速度
        speedY: number 10, //球球 初始纵向速度
        addSX: number (0,3]
        addSY: number (0,3]
    */
    function ClickEffect (params) {
        if (params.ele && toString.call(params.ele) === "[object HTMLCanvasElement]") {
            this.domEle = params.ele
        } else {
            this.domEle = document.getElementsByTagName('canvas')[0];
        }
        this._ctx = this.domEle ? this.domEle.getContext('2d') : null
        
        this.type = params.type || 'ball'
        this.colors = params.colors || ["#33b5e5","#0099cc","#aa66cc","#9933cc","#99cc00","#669900","#ffbb33","#ff8800","#ff4444","#cc000"];
        this.maxNum = params.maxNum || 30; //最大数量
        this.radius = params.radius || 10;
        this.reduceRa = params.reduceRa || 0.4
        this.animationTime = params.animationTime || 50;
        this.speedX = params.speedX || 10;
        this.speedY = params.speedY || 10;
        this.addSX = params.addSX || 0.5;
        this.addSY = params.addSY || 0.5;
        this._balls = [];
        this._timer = null; // 定时器
        this._x = 0; // 鼠标点击位置 x
        this._y = 0; // 标书点击位置 y
    }
    // 暴露出去的接口，停止 定时器，可以截图效果
    ClickEffect.prototype.clear = function (){
        clearInterval(this._timer)
    }
    // 入口函数
    ClickEffect.prototype.alter = function (){
        var _this = this
        try {
           this.domEle.addEventListener('click', function (event){
                _this._fly(event)
            }, true)
        }catch(error){
            console.error('没有canvas元素，请在页面中写入canvas元素')
        }
    }
    // 点击事件调用函数，功能入口
    ClickEffect.prototype._fly = function (event) {
        // 添加球球
        var _this = this
        this._x = event.clientX;
        this._y = event.clientY;
        this._addBall()
        // 添加更新
        if (this._timer) {
            clearInterval(this._timer)
        }
        this._timer= setInterval(function () {
            if (_this._balls.length ===0) {
                clearInterval(_this._timer)
            }
            _this._updateBalls()
            _this._render()
        }, this.animationTime)
    }
    // 画好球球一帧
    ClickEffect.prototype._render = function () {
        // 可优化点 
        this._ctx.clearRect(0,0,800,800);
        for (var i = 0, le = this._balls.length; i < le; i++) {
            var ball = this._balls[i]
            this._ctx.fillStyle = ball.color;
            this._ctx.beginPath()
            this._ctx.arc(ball.x ,ball.y , ball.r,0,2 * Math.PI);
            this._ctx.closePath();
            this._ctx.fill();
        }
    }
    // 添加好球球 组件
    ClickEffect.prototype._addBall = function () {
        for (var i = 0, le = this.maxNum; i < le; i++){
            var vxP=  Math.random() > 0.5; // 采用正数 还是负数
            var vyP=  Math.random() > 0.5; // 采用正数 还是负数
            var aBall = {
                x: this._x,
                y: this._y,
                r: Math.min(this.radius, Math.ceil(Math.random()*this.radius)+this.reduceRa), // 半径
                rA: this.reduceRa,
                g: 1.5+Math.random(),
                vx: vxP ? Math.ceil(Math.random()*this.speedX) : -(Math.ceil(Math.random()*this.speedX)) ,
                vy: vyP? Math.ceil(Math.random()*this.speedY) : -(Math.ceil(Math.random()*this.speedY))  ,
                vxA: vxP ? -this.addSX: this.addSX,
                vyA: vyP? - this.addSY: this.addSY,
                color: this.colors[Math.floor(Math.random()* this.colors.length)]
            }
            this._balls.push(aBall);
        }
        this._render();
    }
    // 更新每个球球位置
    ClickEffect.prototype._updateBalls = function () {
        for (var i = 0, len = this._balls.length; i < len; i++) {
            this._balls[i].x +=  this._balls[i].vx;
            this._balls[i].y += this._balls[i].vy;
            this._balls[i].vx += this._balls[i].vxA;
            this._balls[i].vy += this._balls[i].vyA;
            this._balls[i].r -= this._balls[i].rA;
        }
        // 减少球球 可优化
        var cnt = 0;
        var arr = []
        for (var i = 0; i < this._balls.length; i++) {
            var ball = this._balls[i]
            if(ball.r >0 ) {
                // || (ball.vx > -0.5 && ball.vx < 0.5) || (ball.vy > -0.5 && ball.vy < 0.5)
                arr.push(ball)
            }
        }
        this._balls.length = 0;
        this._balls = arr;
    }
    // 可优化
    return win.ClickEffect = ClickEffect;
})(window, document)