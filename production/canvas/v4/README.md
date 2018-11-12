# 今日项目记录
## 主题：canvas
### 绘图解析

#### 知识点
##### 回顾
1. canvas基于状态的绘制

#### 直线 状态设置中的状态有哪些
**属性**
1. lineStyle
2. strokeWidth

---
**线条的属性**
3. linCap: butt round square
3. lineJoin:miter bevel round 
4. miterLimit: 数值

**api**
1. beginPath() 清空了 坐标点。但是属性等 状态设置没有清空，会污染下一个绘制图
2. rect(x,y,width,height); //绘制路径
3. fillRect();
4. strokeRect();

#### 数学知识
1. 弧度 = 度 X PI / 180

### demo1
1. 图形变换
    位移 translate(x,y)
    旋转 rotate(deg)
    缩放 scale(sx,sy) // 缩放边框的属性， 缩放位置
        transform(a,b,c,d,e,f) // 倾斜度的情况   图形学的书
        setTransform(a,b,c,d,e,f) // 将之前的 变换清除，从现在的这个变换开始

2. 状态保存
    **有图形变换的时候，建议使用 状态保存和状态撤销两个 功能**
    1. save() //保存当前环境的状态 包括属性状态 都保存起来了，而不会污染下一个图像绘制
    2. restore() // 返回到 save() 之前的状态  返回之前保存过的路径状态和属性

### demo2
1. fillStyle 属性的 深入学习
    - 连用方法1：var grd = ctx.createLinearGradient(xstart,ystart,send,yend); // 参数是一条渐变线 ==> 线性渐变 || 水平渐变， 垂直渐变， 对角渐变  坐标可以超过画布大小
    - 连用方法2： grd.addColorStop(stopPosition==> (0,1), endColor)
    -  fillStyle = grd;
