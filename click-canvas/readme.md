#### clickEffect 点击特效

###### 看到ColdDay github： https://github.com/ColdDay/click-colorful 

**实现一个 canvas 点击效果**
![click-colorful](./demo.gif 'clickEffect')


> 使用方式：
> 
> > 引用 script clickEffect.js
> > 
> 
> 实例化：
>
```
config = {
     ele:document.getElementById('demo'),
 
     type: 'ball',
 
     colors: ["#eb125f", "#6eff8a", "#6386ff", "#f9f383"],
 
     maxNum: 10, // 一次点击出现的球球个数
 
     radius: 100, // 球球的最大半径
 
     reduceRa: 3, // (0,5]
 
     animationTime: 100, // 动画时间间隔ms
 
     speedX: 10,
 
     speedY: 10,
 
     addSX: 0.2, // (0,3]
 
     addSY: 0.2, // (0,3]  
      
 }
 
 var demo = new ClickEffect(config)
```


