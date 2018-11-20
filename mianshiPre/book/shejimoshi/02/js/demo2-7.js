// 简单 常用的继承方式
// 原型式继承
function inheritObject ( o ) {
  function  F(){};
  F.prototype = o;
  return new F();
}
var book = {
  name:'javascrpt',
  alikeBook:['css', 'html']
}
var newBook  = inheritObject(book);
newBook.name = 'ajax book'
console.log(newBook.name);
newBook.alikeBook.push('heelo')
console.log(newBook.alikeBook)

var otherBook = inheritObject(book);
otherBook.name = 'flash';
console.log(otherBook.name)
otherBook.alikeBook.push('flash');
console.log(otherBook.alikeBook);
// 寄生式继承
// 声明基对象
var bookJi = {
  name: 'js book',
  alikeBook: ['123', 'css', 'html']
}
function createBook(obj) {
  var o = new inheritObject(obj);
  o.getName = function () {
    return this.name
  }
  // 返回拓展的新对象
  return o;
}
// 测试
var book1 = createBook(bookJi);
console.log(book1.getName())
book1.alikeBook.push('heelo')
console.log(book1.alikeBook)

var book2 = createBook(bookJi);
book2.name = 'flash';
console.log(book2.getName())
book2.alikeBook.push('flash');
console.log(book2.alikeBook);