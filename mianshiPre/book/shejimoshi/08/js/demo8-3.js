// 惰性单例模式
var LazySingle = (function () {
  // 单例实例引用
  var _instance = null;
  function Single() {
    // 这里定义私有属性和方法
    return {
      publicProperty: '1.0',
      publicMethod: function () {},
    }
  }
  // 获取单例对象接口
  return function () {
    if ( !_instance ) {
      _instance = Single();
    }
    // 返回单例
    return _instance
  }
})()
// 测试
console.log(LazySingle())