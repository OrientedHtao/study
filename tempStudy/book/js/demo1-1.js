/* 函数式编程初衷--- 一个返回函数的函数 */
function splat (fun) {
    return function (array) {
        return fun.apply(null, array)
    };
}
function add (x, y){
    return x+y
}
var addArrayElements = splat(add)

console.log(addArrayElements([1,2]))

function unsplat (fun) {
    return function () {
        return fun.call(null, [].slice.apply(arguments));
        // [].slice.apply(arguments) 变成数组
        // Array.prototype.slice.apply(arguments)
    };
}
var joinElements = unsplat(function (array) {
    return array.join(' ')
});
console.log(joinElements(1,2,3))
