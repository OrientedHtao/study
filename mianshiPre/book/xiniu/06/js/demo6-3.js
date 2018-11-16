Object.defineProperty (Object.prototype, "extend", {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function (o) {
    var names = Object.getOwnPropertyNames(o); // 获取 o对象中 所有 自有属性
    // names = [keys]
    for(var i = 0, len = names.length; i< len; i++) {
      if (names[i] in this) continue;
      var desc = Object.getOwnPropertyDescriptor(o, names[i]);
      Object.defineProperty (o, names[i], desc)
    }
  }
});