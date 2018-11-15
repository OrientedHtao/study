function inherit (p/*原型对象*/) {
  if (p === null) throw TypeError();
  // es5 创建对象的方法
  if (Object.create) return Object.create(p);
  var t = typeof p;
  if (t !== 'object' && t !== 'function') throw TypeError();
  function f () {}
  f.prototype=p;
  return new f();
}

// 对象上没有的属性，不会报错，直接是说undefined

var book = {
  name:'hello',
  author:'huangtao'
}
console.log(book.subtitle)// undefined
console.log(book.subtitle.length) // 报错
// undefined 没有length 属性， 则 报错，Cannot read property 'length' of undefined
// 怎么避免 这种报错
// 方法1： 冗余好懂
var len = undefined;
if (book) {
  if (book.subtitle) len = book.subtitle.length;
}
// 方法2：
var len = book && book.subtitle && book.subtitle.length // undefined
// 为什么可以？ && 短路行为
// var len = book.subtitle.length && book.subtitle && book // 换了位置 会报错


// 面试题 why？
function outer () {
  var a = 5;
  alert(a+b) ; // NaN
  var b = 2;
  return inner
  function inner () {
    var a = 10;
    alert(a+b)
    var b = 12;
  }
}
outer()
