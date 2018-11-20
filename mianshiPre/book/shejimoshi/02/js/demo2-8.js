// 寄生组合式继承
// 原型式继承
function inheritObject ( o ) {
  function  F(){};
  F.prototype = o;
  return new F();
}
// 寄生
function inheritPrototype (subClass, superClass) {
  var p = inheritObject(superClass.prototype);
  p.constructor= subClass;
  subClass.prototype = p;
}
function SuperClass (name) {
  this.name = name;
  this.books = ['html', 'css', 'javascript'];
}
SuperClass.prototype.getName = function () {
  return this.name
};
// 声明子类
function SubClass (name,time) {
  SuperClass.call(this, name);
  this.time = time;
}
inheritPrototype(SubClass, SuperClass);
// 子类原型自己的方法
SubClass.prototype.getTIme = function () {
  return this.time;
}

var val = new SubClass('js book', 2016)
var val1 = new SubClass('js book111', 1989)
val.books.push('hello');
console.log(val.books);
console.log(val1.books);
console.log(val.getName())
console.log(val1.getName())

