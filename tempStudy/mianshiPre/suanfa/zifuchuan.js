// 题目一、 字符串反转
function reverseStr(val) {
    // 检测是不是字符串
    // 方式1: 只能 判断字面量和 基本类型
    if (typeof val !== 'string'){
        // 不是字符串
        return;
    }

    // 方式2 可以判断 string 类型和 String对象
    if (toString.call(val) !== '[object String]') {
        // 不是字符串
        return;
    }

    // 字符串为空
    if ( !val ) {
        return val;
    }

    // 借用 数组的 反转
    return val.split('').reverse().join('')
}

// 题目二、  驼峰命名式转换为 短横线命名
// 方式1: 数组的方法
function getKebabCase1 (str) {
    var arr = str.split('');
    str = arr.map( function (item) {
        if (item.toUpperCase() === item) {
            return '-'+item.toLowerCase();
        } else {
            return item;
        }
    }).join('');
    return str;
}
getKebabCase1('hdfjfdAfdsafDfafa')
// 方式2: 正则方式
function getKebabCase2 (str) {
    return str.replace(/[A-Z]/g, function (i) {
        return '-'+ i.toLowerCase();
    })
}
getKebabCase2('hdfjfdAfdsafDfafa')
// 方式3， 考虑缓存和闭包 提高性能和减少污染
var getKebabCase3 = (function () {
    var cache = {};
    return function ( str ) {
        var ret = cache[ str ] // undefined
        if ( ret ) { // 这一步的含义是什么？
            return ret;
        } else {
            return cache[ str ] = str.replace(/[A-Z]/g, function (i ) {
                return '-'+i.toLowerCase();
            })
        }
    }
})()
getKebabCase3( 'getElementById' )

// 题目三、 短横线命名 转换为 驼峰是命名
// 方式1：数组方式
function getCamelCase1 (str) {
    var arr = str.split('-');
    str = arr.map(function (item, index) {
        if (index > 0) {
            return item.charAt(0).toUpperCase()+item.slice(1)
        } else {
            return item
        }
    }).join('')
    return str
}
getCamelCase1('huagntao-zhagnzhongxiang-huangjianming')
// 方式2：正则
function getCamelCase2 (str) {
    return str.replace(/-([a-z])/g, function (all, i,j) {
        return i.toUpperCase()
    })
}
getCamelCase2('huagntao-zhagnzhongxiang-huangjianming')

// 方式3：考虑缓存和闭包 提高性能和减少污染
var getCamelCase3 = (function () {
    var cache = {};
    return function (str) {
        var ret = cache[ str ]
        if (ret) {
            return ret
        } else {
            return ret = str.replace(/-([a-z])/g, function (all, i) {
                return i.toUpperCase()
            })
        }
    }
})();
getCamelCase3('huagntao-zhagnzhongxiang-huangjianming')

// 题目四： 基本变量值 是否是  false  和  true
function  isTrueCount () {
    var arr = [true, false, 0, 1, -1, '', '123', ' ', undefined, null, {}, {'a': 1}, [], function (){return 0}, function () {return 1}, function () {return;}, function (){}]
    var count = 0;
    for (let i = 0, le = arr.length; i < le; i++ ) {
        if (arr[i]) {
            console.log('第'+ i+ '个: true')
            count += 1;
        }
    }
    return count;
}
isTrueCount ()
// 闭包相关
var isTrueCount = (function () {
    return function (arr) {
        // var arr = [true, false, 0, 1, -1, '', '123', ' ', undefined, null, {}, {'a': 1}, [], function (){return 0}, function () {return 1}, function () {return;}, function (){}]
        var count = 0;
        for (let i = 0, le = arr.length; i < le; i++ ) {
            if (arr[i]) {
                console.log('第'+ i+ '个: true')
                count += 1;
            }
        }
        return count;
    }
})();
isTrueCount([true, false, 0, 1, -1, '', '123', ' ', undefined, null, {}, {'a': 1}, [], function (){return 0}, function () {return 1}, function () {return;}, function (){}])
/*
第0个: true
第3个: true
第4个: true
第6个: true
第7个: true
第10个: true
第11个: true
第12个: true
第13个: true
第14个: true
第15个: true
第16个: true
12
*/
