// 登录模块的需求
// 用户名输入提示
var LoginAlert = function (text) {
  this.content = text;
}
LoginAlert.prototype.show = function () {
  // 显示弹窗
  return this.content;
}
var userNameAlert = new LoginAlert('用户名不能多于16个字母或数字');
userNameAlert.show();
// 密码输入提示
var passwordAlert = new LoginAlert('输入的密码不正确');
passwordAlert.show();
// 添加 用户名不存在 提示语
