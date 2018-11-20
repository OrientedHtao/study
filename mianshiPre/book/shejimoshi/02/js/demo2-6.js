// 组合式继承
function SuperClass (name) {
  // 值类型共有属性
  this.name = name;
  // 引用类型
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
SubClass.prototype = new SuperClass();
// 子类原型自己的方法
SubClass.prototype.getTIme = function () {
  return this.time;
}
//测试代码
var val = new SubClass('javaa1', '2016')
var val1 = new SubClass('javaaaaa2', '3018')
val.books.push('c++');
console.log(val.books);
console.log(val1.books);
// 因为 构造函数 call(this, ……) 将作用环境改为了 当前this 指向，所以 是val   val1  引用类型属性也所属不同。可以实现，不会相互影响

console.log(val.getName())
console.log(val1.getName())
// 这是继承的原型中的方法

console.log(val.getTIme())
console.log(val1.getTIme())
// 自己的原型方法

/**
组合式继承 缺点： 调用两词 父级构造函数；
1. 使用构造函数继承时，调用了一次 父类构造函数
2. 在实现子类原型的类式继承时，又调用了一遍 父类构造函数。
*/