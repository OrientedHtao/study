// 实现一个图书类
var Book = function (title, type, time) {
  this.title = title;
  this.type = type;
  this.time = time;
}
// 实例化一本书
var b = Book('javascr', 'js', 2016);
console.log(b) //
console.log(window.time);
console.log(window.title);
// 没有用 new 构造函数

// 实现一个 图书安全类
var Book = function (title, type, time) {
  if (this instanceof Book) {
    this.title = title;
    this.type = type;
    this.time = time;
  } else {
    return new Book(title, type, time)
  }
}
var c = Book('javascr11', 'js11', 2018);
console.log(c) //
console.log(c.time);
console.log(c.title);