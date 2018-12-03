let [a,b,c='暂无数据'] = [1,2, undefined];
// [1, 2, undefined]
// [1, 2, null] null 是有值
console.log(a,b,c);
console.log(top) // window
console.log(top === window) // true
// 展开 数组
let arr = ['huangtao', '18', 'fec']
console.log(...arr);
// 拷贝一份数据
let arr2 = [...arr]; //数组深拷贝
arr2.push('hello')
console.log(arr2);  // ['huangtao', '18', 'fec', 'hello']
console.log(arr); // ['huangtao', '18', 'fec']
let arr3 = Array.from(arr);
arr3.push('nihao')
console.log(arr3); // ['huangtao', '18', 'fec', 'nihao']
console.log(arr); // ['huangtao', '18', 'fec']
// 伪数组
let ali = document.querySelectorAll('li');
console.log(ali);
let aliArr = [...ali]
console.log(aliArr)
// 验证... 是不是深拷贝
let ab = [1,2,3,4]
let arrR = [1,2,3,4]
arrR.push(ab)
console.log(arrR)
let arrR1 = [...arrR]
// 不是深拷贝
console.log(arrR1)
ab.push('demo')
console.log(arrR)
console.log(arrR1)


