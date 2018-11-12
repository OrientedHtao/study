// 让对象拥有 forEach方法
function forEachValue (obj, fn) {
    // Object.keys(obj) ==> key 数组
    return Object.keys(obj).forEach(function (item) {
       fn(obj[item], item)
    })
}
var a = {
    "a": '1232',
    "b": '1231',
}
function func (val, index) {
    console.log('val', val)
    console.log('index', index)
    return val
}
forEachValue(a, func)

var a = [1,2,3,4]
// 修改了 引用值，引用的 对象。 外面a 和 arr 不一样
function demo(arrStr) {
    var arr = JSON.parse(arrStr)
    arr.push(5);
    console.log(arr)
}
demo(JSON.stringify(a))
console.log(a)