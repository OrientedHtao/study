// 函数语句
function printProp (o) {
  for(p in o) {
    console.log(p + ": " + o[p] + "\n")
  }
}