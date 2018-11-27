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

