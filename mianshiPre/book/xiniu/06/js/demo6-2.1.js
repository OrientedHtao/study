function inherit (p/*原型对象*/) {
  if (p === null) throw TypeError();
  // es5 创建对象的方法
  if (Object.create) return Object.create(p);
  var t = typeof p;
  if (t !== 'object' && t !== 'function') throw TypeError();
  function f () {}
  f.prototype=p;
  return new f();
}
var p = {
  x: 1.0,
  y: 1.0,
  get r() {
    console.log('get r')
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  set r(newValue) {
    console.log('set r')
    var oldValue = Math.sqrt(this.x * this.x + this.y * this.y);
    console.log('oldValue', oldValue)
    var ratio = newValue / oldValue;
    this.x *=ratio;
    this.y *= ratio;
    // 做了x y 变化 会印象 theta 值
  },
  get theta () {
    console.log('get theta')
    console.log(this.x, this.y)
    return Math.atan2(this.y, this.x);
  }
}

var q = inherit(p);
q.x = 1;
q.y = 1;
q.r = 2;
console.log(q.r);
console.log(q.theta);
