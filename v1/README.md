# 10月11日
## 主题： web 存储
### localStorage 局限
1. 兼容性： IE8以上的IE版本才支持。
2. 分配空间不同： 各浏览器分配给localStorage 的内存大小不一致
3. 类型： 解析localStorage 的值类型为 String类型，而我们常用 JSON 对象类型，需要做二次转换。
4. localStorage 在浏览器的隐私模式下是不可读取的。
5. 页面卡： String类型的原因，如果存储的内容多，将消耗内存而导致页面变卡
6. localStorage 不能被爬虫抓取。
7. 只支持String 类型的存储.
8. 进行存取时，要进行类型转换；读取数据时，类型转换尤其重要
9. 常用JSON 数据类型转换方法。parse(), stringify()

##### IE浏览器 UserData存储数据(IE6/7)

### localStorage 使用遵循同源策略。

###localStorage  相当于web的数据库
主要功能是：增删改查
1. 增加，.setItem("键"， "值")；
2. 查找， .getItem("键")；
3. 删除， .clear==> 清除所有 .removeItem("键名") ==> 清除某一键值对
4. 修改， 修改就是再次对这个键 赋值

---
5. 获取键名：storage.key(i); 获取第i-1 位置的键值对(获取索引号为i 位置的键值对)
    > 
    > window.localStorage 是一个对象
    > 


### 博客
 1. 资源： [html5资源](http://www.zhangxinxu.com/wordpress/2011/09/html5-localstorage%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8%E5%AE%9E%E9%99%85%E5%BA%94%E7%94%A8%E4%B8%BE%E4%BE%8B/)

---
 2. 简介

##### 常用： HTML5相关特性有：data-自定义属性、placeholder、以及email类型input文本框。

3. IE6~7浏览器依旧采用传统的cookie保持信息，而其他浏览器就使用HTML5的本地存储功能。这里不同浏览器不同做法的成本是很低的，尤其在某些JS库下（因为使用参数，格式等都一致）。
    >
    > 引申一个库：MooTools
    > 

##  同源策略。
1. [浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)
    [阮一峰的相关博客](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)

---
2. 源的定义：协议 端口号 和域名 相同，则是同源。
3. 跨源网络访问，例如：XMLHttpRequest、<img> 标签会受 同源策略约束
    - 交互分为三类
        + 1. 允许跨域写操作(Cross-origin writes)。 例如：链接<link>, 重定向和表单提交。
        + 2. 通常允许跨域资源嵌入(Cross-origin embedding)
        + 3. 通常不允许 跨域读操作(Cross-origin reads)
4. 使用CORS 允许 跨域访问。
5. 干货：
```
// 允许以下对窗口属性的跨源访问：
// 方法
window.blur
window.close
window.focus
window.postMessage
// 属性
window.closed   只读.
window.frames   只读.
window.length   只读.
window.location 读/写.
window.opener   只读.
window.parent   只读.
window.self 只读.
window.top  只读.
window.window 只读.
```


## 疑问
1. 同源策略 （已了解）
2. 多数情况下浏览器都不会遵守Conten-Type消息头。？