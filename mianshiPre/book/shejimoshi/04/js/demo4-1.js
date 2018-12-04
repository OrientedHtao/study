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
var javademo = new java('java广告1')
var phpdemo = new php('php广告1')
var javascriptdemo = new javascript('javascript广告1')
var uidemo = new ui('ui广告1')
