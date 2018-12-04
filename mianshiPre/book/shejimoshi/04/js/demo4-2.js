// 简单工厂模式
// 工厂方法模式。通过对产品类的抽象 创建业务需要负责的产品实例
// demo: 广告投放

// 创建java 学科类
var java = function (content) {
  this.content = content;
  (function (content){
    var div = document.createElement('div');
    div.innerHTML = content;
    div.style.color="green";
    document.getElementById('wra').appendChild(div);
  })(content);
}
// 创建php学科类
var php = function (content) {
  this.content = content;
  (function (content){
    var div = document.createElement('div');
    div.innerHTML = content;
    div.style.color="yellow";
    div.style.backgroundColor="red";
    document.getElementById('wra').appendChild(div);
  })(content);
}
// 创建javascript学科类
var javascript = function (content) {
  this.content = content;
  (function (content){
    var div = document.createElement('div');
    div.innerHTML = content;
    div.style.backgroundColor="pink";
    document.getElementById('wra').appendChild(div);
  })(content);
}
var ui = function (content) {
  this.content = content;
  (function (content){
    var div = document.createElement('div');
    div.innerHTML = content;
    div.style.border= '1px solid red';
    document.getElementById('wra').appendChild(div);
  })(content);
}

var AdvertiseFactory = function (type, content) {
  switch (type) {
    case 'java':
      return new java(content);
    case 'php':
      return new php(content);
    case 'javascript':
      return new javascript(content);
    case 'ui':
      return new ui(content);
  }
}
var javademo = new AdvertiseFactory('java','java广告2，简单工厂模式')
var phpdemo = new AdvertiseFactory('php','php广告2，简单工厂模式')
var javascriptdemo = new AdvertiseFactory('javascript','javascript广告2，简单工厂模式')
var uidemo = new AdvertiseFactory('ui','ui广告2，简单工厂模式')
