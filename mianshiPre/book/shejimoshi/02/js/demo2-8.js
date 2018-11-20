// 寄生组合式继承
// 原型式继承
function inheritObject ( o ) {
  function  F(){};
  F.prototype = o;
  return new F();
}
// 寄生
function inheritPrototype (subClass, superClass) {
  var p = inheritObject(superClass.prototype)；
  p.constructor= subClass;
  subClass.prototype = p;
}