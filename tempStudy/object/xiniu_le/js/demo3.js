// 构造函数，创建一个 范围 类构造函数
function Range( from, to ) {
  this.from = from;
  this.to = to;
}
var p = Range.prototype;
var c = Range.prototype.constructor;
// Range.prototype 是预定义的原型对象，包含constructor。指向构造函数 Range
Range.prototype.includes = function (x) {
  return (this.from <= x && x< this.to);
}
Range.prototype.toString = function () {
  return "("+this.from+'...'+this.to+")";
}
Range.prototype.foreach = function (f) {
  for(var x = Math.ceil(this.from); x<= this.to; x++) {
    f(x)
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