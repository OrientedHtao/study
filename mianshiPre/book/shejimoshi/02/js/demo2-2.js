// 闭包实现 一个完整的类，然后将其返回
var Book = (function () {
  // 静态私有变量
  var bookNum = 0;
  // 静态私有方法
  function checkBook(name) {};
  // 创建类
  function _book (newId, newName, newPrice) {
    // 私有变量
    var name, price;
    // 私有方法
    function checkId(id) {}
    // 特权方法
    this.getName = function () {};
    this.getPrice = function () {};
    this.setName = function() {};
    this.setPrice = function () {};
    // 公有属性
    this.id = newId;
    // 公有方法
    this.copy = function () {};
    bookNum ++;
    if (bookNum > 100) {
      throw Error('我们只制作100本书')
    }
    // 构造器
    this.setName(name);
    this.setPrice(price);
  }
  _book.prototype = {
    // 静态公有属性
    isJBook : true,
    // 静态公有方法
    display: function () {}
  };
  // 返回类
  return _book
})();
var book = new Book(13, 'helloworld', 21)
console.log(book)