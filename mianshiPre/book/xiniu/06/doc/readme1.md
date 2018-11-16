#### 对象

###### 对象常见的用法是
```
创建 create
设置 set
查找 query
删除 delete
检测 test
枚举 enumerate
```

###### 原型
> Object.prototype 也是对象。 这个对象没有原型了 __prototype__
> 
> 一系列链接的原型对象 就是  原型链
> 
> 属性继承的工作机制 6.2.2
> 
> 如何获取对象的原型 6.8.1
> 
> 原型和构造函数 9.
> 

###### 检测属性
```
方法： 
in运算符 ==> key in obj ==| 对象的自有属性和 继承属性 返回true
hasOwnProperty()   ==| 对象的自有属性 返回true 
propertyIsEnumerable()  ==| 对象是自有属性并且该属性是可枚举的
```

###### 遍历对象
```
方法：
for in ==| 遍历对象的所有 可枚举的属性(包括 自有属性和继承属性)
枚举属性名称的函数
Object.keys() = > return [keys => 可枚举的 自有属性名称 数组]

Object.getOwnPropertyNames() => return 所有自有属性的 名称
```

###### 属性的特性
```
一个数据属性 =  1一个名字 + 4个特性=|value  writable   enumerable  configurable

一个 存取器属性 = 1个名字 + setter写入  getter读  enumerable  configurable
 Object.getOwnPropertyDescriptor(obj, key) // 获取 对象 特定属性的  属性描述符 
 // 只能获取到 自有属性的 属性描述符
 Object.defineProperty(obj, key , {属性描述符}) // 操作 自有属性
```

##### 对象三属性 = 原型属性， 类属性，可扩展性

###### 原型属性
```
原型属性 是原型对象，用来继承属性的。

```



##### 难点： 对象属性的查询和设置机制

##### 有意义的话
> 1. 只有在查询属性的时候，才能体会到继承的存在，设置属性的时候，和继承无关
> 
> 2. 由getter 和 setter 定义的属性称作 ‘存取器属性’，不同于‘数据属性’，‘数据属性’只有一个简单的值
> 
> 