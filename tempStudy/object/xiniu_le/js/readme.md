##### demo1.js && demo2.js区别
```
区别
1. 函数名字， 一个是大写，一个是小写。 range Range
2. 实例化的时候，一个是返回 对象， 一个是 new 实例化构造函数
3. 打印 实例化对象时， 一个是 {……}  一个是 Range {……}
4. ， 一个是 工厂生产 实例化， 一个是 new实例化、
5. 原型对象命名不同， range.methods 是原型对象， Range.prototype是远行对象。
```

#### demo2.js && demo3.js
```
区别
1. 原型对象： 将字面量对象重写 prototype  往prototype添加原型方法。没有重写
2. 导致的情况，重写的 prototype 需要显示 定义constructor  而没有覆盖的本身就存在constructor
```