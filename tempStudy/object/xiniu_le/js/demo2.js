// 构造函数，创建一个 范围 类构造函数
function Range( from, to ) {
  this.from = from;
  this.to = to;
}
var p = Range.prototype;
var c = Range.prototype.constructor;
// Range.prototype 是一个对象  原型对象上面 没有构造函数
/*
Range.prototype = {} // 用一个字面量对象 重写了 原型对象
*/
Range.prototype = {
  constructor: Range,
  includes: function (x) {
    return (this.from <= x && x< this.to);
  },
  foreach: function (f) {
    for(var x = Math.ceil(this.from); x<= this.to; x++) {
      f(x)
    }
  },
  toString: function () {
    return "("+this.from+'...'+this.to+")";
  }
}
console.log('p', p)
console.log('c', c)
var r = new Range(1,3);
console.log(r);
console.log('constructor', r.constructor === Range)
console.log(r.includes(2)) // true
r.foreach(console.log);
console.log(r.toString());