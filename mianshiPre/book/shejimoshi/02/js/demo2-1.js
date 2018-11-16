// 包装明星--封装
/**
1. 创建一个类
函数内部 通过对 this 变量添加属性或者方法来实现 对实例化添加 属性和对象
*/
var Book = function (id, bookName, price) {
  this.id = id;
  this.bookName = bookName;
  this.price = price;
}
/**
1. 也可以通过 类的 原型上添加属性和方法
两种形式添加 ：
--1. 一一为 原型对象 属性赋值
--2. 将一个 对象赋值给类的 原型。
两种方式不一样，需要进行区分
*/
Book.prototype.display = function () {
  // 展示这本书
}
Book.prototype = {
  display: function () {
    // 展示这本书
  }
}
/**
使用：
-------- 使用的时候，不能直接使用Book类， 需要用new 关键字来实例化 ，然后通过点语法访问
*/
var book = new Book(10, 'javascript设计模式', 50);
console.log(book.bookName);

// 私有属性与 私有方法，特权方法，对象公有属性 和 独享共有方法， 构造器
var Book = function (id, name, price) {
  // 私有属性
  var num = 1;
  // 私有方法
  function checkId() {

  };
  // 特权方法
  this.getName = function (){};
  this.getPrice = function () {};
  this.setName = function () {};
  this.setPrice = function () {};
  // 对象公有属性
  this.id = id;
  // 对方公有方法
  this.copy = function () {};
  // 构造器
  this.setName(name);
  this.setPrice(price);
}

// 类静态公有属性(对象不能访问)
Book.isChinese = true;
// 类静态公有方法(对象不能访问)
Book.resetTime = function () {
  console.log('new time')
};
Book.prototype = {
  // 公有属性
  isJBook: false,
  // 公有方法
  display: function () {}
}
// 测试代码
var b = new Book(11,'javascript设计模式1', 51);
console.log(b.num); // undefined
console.log(b.isJBook);
console.log(b.id); 
console.log(b.isChinese); // undefined
// 类的自身可以访问
console.log(Book.isChinese)
Book.resetTime()

// 闭包实现： 经常将 类的静态变量通过闭包实现
var Book = (function () {
  // 静态私有变量
  var bookNum = 0;
  // 静态私有方法
  function checkBook (name) {
  };
  return function (newId, newName, newPrice) {
    // 私有变量
    var name, price,
    // 私有方法
    function checkId(id) {}
    // 特权方法
    this.getName = function () {};
    this.getPrice = function () {};
    this.setName = function () {};
    this.setPrice = function () {};
    // 公有属性
    this.id = newId;
    // 公有方法
    this.copy = function () {};
    bookNum++
    if (bookNum > 100) {
      throw Error('只有100本书')
    }
    // 构造器
    this.setName(name);
    this.setPrice(price);
  }
})();
Book.prototype = {
  // 静态公有属性
  isJBook: false,
  // 静态公有方法
  display: function() {}
}

