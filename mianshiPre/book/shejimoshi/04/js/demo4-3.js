// 安全模式类。 避免不是实例化对象，而是 调用函数
// 如果是调用函数，则是全局上，不安全
function Factory  (type, content) {
  if (this instanceof Factory) {
    var s = new this[type](content);
    return s;
  }else {
    return new Factory(type, content)
  }
}
// Factory.prototype = {
//   Java: function (content) {
//     this.content = content;
//     (function (content){
//       var div = document.createElement('div');
//       div.innerHTML = content;
//       div.style.color="green";
//       document.getElementById('wra').appendChild(div);
//     })(content);
//   },
//   Php: function (content) {
//     this.content = content;
//     (function (content){
//       var div = document.createElement('div');
//       div.innerHTML = content;
//       div.style.color="yellow";
//       div.style.backgroundColor="red";
//       document.getElementById('wra').appendChild(div);
//     })(content);
//   },
//   Javascript: function (content) {
//     this.content = content;
//     (function (content){
//       var div = document.createElement('div');
//       div.innerHTML = content;
//       div.style.backgroundColor="pink";
//       document.getElementById('wra').appendChild(div);
//     })(content);
//   },
//   Ui: function (content) {
//     this.content = content;
//     (function (content){
//       var div = document.createElement('div');
//       div.innerHTML = content;
//       div.style.border= '1px solid red';
//       document.getElementById('wra').appendChild(div);
//     })(content);
//   }
// }
Factory.prototype.Java = function (content) {
  this.content = content;
  (function (content){
    var div = document.createElement('div');
    div.innerHTML = content;
    div.style.color="green";
    document.getElementById('wra').appendChild(div);
  })(content);
}
Factory.prototype.Php = function (content) {
  this.content = content;
  (function (content){
    var div = document.createElement('div');
    div.innerHTML = content;
    div.style.color="yellow";
    div.style.backgroundColor="red";
    document.getElementById('wra').appendChild(div);
  })(content);
}
Factory.prototype.Javascript = function (content) {
  this.content = content;
  (function (content){
    var div = document.createElement('div');
    div.innerHTML = content;
    div.style.backgroundColor="pink";
    document.getElementById('wra').appendChild(div);
  })(content);
}
Factory.prototype.Ui = function (content) {
  this.content = content;
  (function (content){
    var div = document.createElement('div');
    div.innerHTML = content;
    div.style.border= '1px solid red';
    document.getElementById('wra').appendChild(div);
  })(content);
}

var javademo = new Factory('Java','java广告3,安全工厂方法')
var phpdemo = new Factory('Php','php广告3,安全工厂方法')
var javascriptdemo = new Factory('Javascript','javascript广告3,安全工厂方法')
var uidemo = new Factory('Ui','ui广告3,安全工厂方法')