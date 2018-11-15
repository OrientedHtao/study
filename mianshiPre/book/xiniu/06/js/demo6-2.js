/*
// Object.prototype 上面新增方法，可以被 遍历出来，避免这种情况，可以使用以下两种方式中的一种
1.
for (p in o) {
  if (!o.hasOwnProperty(p)) continue;
}
2. 
for (p in o) {
  if (typeof o[p] === 'function') continue
}
*/
//实用工具库中的函数
function extend ( o, p ) {
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}

function merge ( o, p ) {
  for( prop in p) {
    if(o.hasOwnProperty(prop)) continue; //o中有的属性，不进行覆盖
    o[prop] = p[prop]
  }
}


function keys (o) {
  if(typeof o !== "object") throw TypeError();
  var result = [];
  for(prop in o) {
    if(o.hasOwnProperty(prop))
      result.push(prop);
  }
  return result;
}