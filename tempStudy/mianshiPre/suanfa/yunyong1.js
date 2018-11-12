// 随机数生成
/* 生成 0-1 以内随机数*/
function randomNum(){
    return Math.random()
}
/* 生成 0 - 100 以内随机数 区间内*/
// 生成11-20 以内随机数
function randomNumInArea (startPoint, endPoint) {
    // 
    return Math.round(Math.random()*(endPoint - startPoint))+startPoint
}

// num 是个数， obj 中是两个区间
function randomNumInCount ( obj ){
    var arr = [];
    // var length = 0;
    // var startPoint = 0;
    // var endPoint = 100;
    if (toString.call(obj) !== '[object Object]' ){
        return ;
    }
    // 以下 的可优化点： 三元运算符
    var length = typeof obj.num === 'number' ? length = obj.num : 0;
    // if (typeof obj.num === 'number'){
    //     length = obj.num;
    // }
    var startPoint = typeof obj.start === 'number' ? startPoint = obj.start : 0;
    // if (typeof obj.start === 'number') {
    //     startPoint = obj.start
    // }
    var endPoint = typeof obj.end === 'number' ? endPoint = obj.end : 100;
    // if (typeof obj.end === 'number') {
    //     endPoint = obj.end
    // }
    for (var i = 0; i < length; i ++) {
       arr.push( Math.round(Math.random()*(endPoint-startPoint))+startPoint )
    }
    return arr
}
var obj = {
    num: 9,
    start: 11
}
randomNumInCount(obj)