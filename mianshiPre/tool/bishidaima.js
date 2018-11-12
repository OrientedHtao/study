console.log(aSome); // 弹出整个函数体，预解析函数
function aSome() {
    var aSome = 3;
    function bSome () {
        var aSome = 1;
        console.log(aSome); // 作用域，从内到外
    }
    bSome()
}
aSome()


console.log(aSome); // 报错，not defined
function cSome() {
    var aSome = 3;
    function bSome () {
        var aSome = 1;
        console.log(aSome); // 走不到这里
    }
    bSome()
}
cSome()


var a = 'a1'
a++ //隐式 转换 类型，转换失败
console.log(a) // NaN 



var a = 100;
function test (){
    console.log('a1', a);
    var a = 10;
    console.log('a2', a)
}
test()
console.log('a3', a)