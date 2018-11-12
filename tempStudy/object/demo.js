/**
* this
*/
// 

function aa(){
    console.log(this)
}
aa()

Date 日期
Array 数组
RegExp 正则

Object 空白对象


原型
prototype

css class

arr1 = [1,2,3,4,5];
Array.prototype.sum = function () {
    var result = 0;
    this.forEach(function (item, index, arr) {
        console.log(arr)
        result+=item;
    })
    return result;
}
console.log(arr1.sum())