// 构造函数式继承
// 声明父类
function SuperClass (id) {
  this.id = id;
  this.books = ['javascript', 'css', 'html']
}
// 为父类添加公有方法
SuperClass.prototype.showBooks = function () {
  return this.books;
};
// 声明子类
function SubClass (id) {
  //改变函数的作用环境
  SuperClass.call(this, id);
}
// 继承父类
SubClass.prototype = new SuperClass();


var sub = new SubClass(23);
var sub1 = new SubClass(32);
console.log(sub)
// instanceof 判断对象与类之间的关系
// 查看这个继承，是否有引用类型 的问题
sub.books.push('java');
console.log(sub.showBooks());
// 这个对象的  属性showBooks 也改变了

console.log(sub1.showBooks())
console.log(sub.id);
console.log(sub1.id);
