// 实现Singleton 模式
// 单例模式
var Single = (function () {
  // 静态实例
  var _instance = null;
  // 构造函数设置为私有函数
  function Single () {
    return {
      publicProperty: 'hello',
      publicMethod: function () {}
    }
  }
  return function (){
    if( !_instance ) {
      _instance = new Single();
    }
    return _instance
  }
})();
console.log(Single())