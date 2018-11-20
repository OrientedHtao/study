// 继承大军开始
// 类式继承
// 声明父类
function SuperClass () {
  this.superValue = true;
  this.books = ['javascript', 'css', 'html']
}
// 为父类添加公有方法
SuperClass.prototype.getSuperValue = function () {
  return this.superValue;
};
// 声明子类
function SubClass () {
  this.subValue = false;
}
// 继承父类
SubClass.prototype = new SuperClass();
// 为子类添加公有方法
SubClass.prototype.getSubValue = function () {
  return this.subValue;
}

var sub = new SubClass();
var sub1 = new SubClass();
console.log(sub)
console.log(sub.getSubValue())
console.log(sub.getSuperValue())
// instanceof 判断对象与类之间的关系
console.log(sub instanceof SuperClass)
// 查看这个继承，是否有引用类型 的问题
sub.books.push('java');
console.log(sub.books);
// 这个对象的  属性books 也改变了

console.log(sub1.books)
console.log(sub instanceof SubClass)
