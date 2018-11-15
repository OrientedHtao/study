// 用来 枚举属性的对象工具函数
/**
把P中可枚举属性赋值到o中，并返回o
如果o p中有相名的属性，则覆盖o中的属性
这个属性不处理 getter和 setter 和复制属性
*/
function extend(o, p) {
  for(prop in p) {
    o[prop] = p[prop];
  }
  return o;
}
/**
把P中可枚举属性赋值到o中，并返回o
如果o p中有相名的属性，o中的属性 将不受影响
这个属性不处理 getter和 setter 和复制属性
*/
function merge (o,p){
  for (prop in p) {
    if (o.hasOwnProperty(prop)){
      continue;
    }
    o[prop] = p[prop];
  }
  return o;
}
// extend升级版本
var extendUp = (function () {
  for (var p in {toString: null}) {
    return function extend(o) {
      for (var i =1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var prop in source){
          o[prop] = source[prop]
        }
      }
      return o;
    };
  }
  return function patched_extend(o) {
    for (var i =1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var prop in source){
          o[prop] = source[prop]
        }
        // 检查特殊属性
        for (var j=0;j < protoprops.length; j++) {
          prop = protoprops[j]
          if(source.hasOwnProperty(prop)){
            o[prop] = source[prop];
          }
        }
      }
      return o;
  };
  var protoprops = ['toString', 'valueOf', 'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocalString']
})();
// 在JS中定义类 分三步：
// 1. 定义一个构造函数，并设置初始化新对象的 实例属性。
// 2. 给构造函数的prototype对象定义实例的方法
// 3. 给构造函数 定义 类字段和类属性 ？？？ 
// 这三个步骤封装在此
function defineClass(
  constructor, // 用以设置实例的属性的函数
  methods, // 实例的方法，复制到原型中
  statics // 类属性，复制到构造函数中
  ){
  if (methods) {
    extend(constructor.prototype, methods)
  }
  if (statics) {
    extend(constructor, statics)
  }
  return constructor
}
// Range类的 另一个实现方式
var SimpleRange = defineClass(function (f,t){this.f = f;this.t=t},
{
  includes: function (x) {return this.f <= x && x <= this.t },
  toString: function () {return "("+this.from+'...'+this.to+")";}
},
{
  upto: function(t) {return new SimpleRange(o,t)}
});
var r = new SimpleRange(1,3)
console.log(r);
console.log('constructor', r.constructor === Range)
console.log(r.includes(2)) // true
// r.foreach(console.log);
console.log(r.toString());