function checkName (name) {
  // 验证名字
}
function checkEmail (email) {
  // 验证邮箱
}
function checkPassword (password) {
  // 验证密码
}
// 声明了很多全局函数，污染了全局环境
/* 创建 对象字面量 管理，这样子： 全局就只有一个 变量*/
var checkObject = {
  checkName: function () {
    // 验证名字
  },
  checkEmail: function () {
    // 验证邮箱
  },
  checkPassword: function () {
    // 验证密码
  }
}
// 使用另一种形式声明对象
var checkObject = function () {} // function也是对象
checkObject.checkName = function () {
  // 验证名字
}
checkObject.checkEmail = function () {
  // 验证邮箱
}
checkObject.checkPassword = function () {
  // 验证密码
}
// 这种形式的 声明，不能进行复制
// 可以进行简单的复制，将方法都放入 一个函数对象中
var checkObject = function () {
  return  {
    checkName: function () {
      // 验证名字
    },
    checkEmail: function () {
      // 验证邮箱
    },
    checkPassword: function () {
      // 验证密码
    }
  }
}
var a = checkObject()
// 这样创建的 对象 与 checkObject 无关系
// 进行改造
var checkObject = function () {
    this.checkName = function () {
      // 验证名字
    },
    this.checkEmail = function () {
      // 验证邮箱
    },
    this.checkPassword = function () {
      // 验证密码
    }
}
var a = new checkObject();
a.checkEmail();
// 这种形式：new 一个对象，都会创建自己的方法

// 一个检测类。
var checkObject = function () {}
checkObject.prototype.checkName = function () {

}
checkObject.prototype.checkEmail = function () {
  
}
checkObject.prototype.checkPassword = function () {
  
}
// prototype 写了三次，可以直接给prototype 赋值 字面量
var checkObject = function () {}
checkObject.prototype = {
  checkName: function () {
    // 验证名字
  },
  checkEmail: function () {
    // 验证邮箱
  },
  checkPassword: function () {
    // 验证密码
  }
}
var a = new checkObject()
a.checkName()
a.checkEmail()
a.checkPassword()
// 调用的时候，使用了三次 a 调用了三哥方法
// 可以再每一个 函数内 返回当前对象，则可以进行链式调用了
var checkObject = function () {}
checkObject.prototype = {
  checkName: function () {
    // 验证名字
    return this;
  },
  checkEmail: function () {
    // 验证邮箱
    return this;
  },
  checkPassword: function () {
    // 验证密码
    return this;
  }
}
var a = new checkObject()
a.checkName().checkEmail().checkPassword()
// 比如给每一个函数 都添加 一个检测邮箱的方法。则可以直接 在Function.prototype上 绑定 一个checkEmail()函数
Function.prototype.checkEmail = function () {

}
// 创建1
var f = function () {}
f.checkEmail();
// 创建2
var f = new Function () {}
f.checkEmail()
// 这样子直接在 Function.prototype绑定数据，则会污染 全局 Function
// 可以抽象出一个统一添加函数的功能方法
Function.prototype.addMethod = function (name , fn) {
  this[name] = fn
}// 添加邮箱验证 名字验证方法可以这样做
var methods = new Function ();
// 或者
var methods = new Funciton ();
methods.addMethod('checkEmail', function (){
  // 验证邮箱
})
methods.addMethod('checkName', function () {
  //验证名字
})
// 满足  链式调用也是 添加 return this 返回值
Function.prototype.addMethod = function (name , fn) {
  this[name] = fn;
  return this;
}// 调用就可以链式
var methods = new Funciton ();
methods.addMethod('checkEmail', function (){
  // 验证邮箱
}).addMethod('checkName', function () {
  //验证名字
})
// 想链式 调用
//改写 
methods.addMethod('checkEmail', function (){
  // 验证邮
  return this
}).addMethod('checkName', function () {
  //验证名字
  return this
})
methods.checkEmail().checkName()
// 习惯类式 调用方式可以修改成
Function.prototype.addMethod = function (name , fn) {
  this.prototype[name] = fn;
}
var Methods = new Funciton ();
Methods.addMethod('checkEmail', function (){
  // 验证邮箱
})
Methods.addMethod('checkName', function () {
  //验证名字
})
// 调用的时候，要先生成对象
var a = new Methods()
m.checkEmail()