function bubbleSort(arr) {
    // 1. 从小 到大排列
    // var i,j;
    // for (i = 1; i < arr.length; i++ ) {
    //     for (j = 0; j < arr.length-i; j++) {
    //         var temp;
    //         if (arr[j] > arr[j+1]) {
    //             temp = arr[j]
    //             arr[j] = arr[j+1];
    //             arr[j+1] = temp;
    //         }
    //     }
    // }
    // 2. 思考从大到小
    for (var i= 0; i<arr.length; i++) {
        for (var j = arr.length-1; j > i; j--) {
            var temp;
            if (arr[j] > arr[j-1]) {
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSort([3,2,123,543,34,65,67]))

// 快速排序
function quickSort(arr, low, high){
        var key=arr[low];
        var start=low;
        var end=high;
        while(end>start){
            while(end>start&&arr[end]>=key) end--;
            if(arr[end]<=key){
                var temp = arr[end];
                arr[end]=arr[start];
                arr[start] = temp;
            }
            while(end>start&&arr[start]<=key) start++;
            if(arr[start]>=key){
                var temp = arr[start];
                arr[start]=arr[end];
                arr[end]=temp;
            }
        }
        if(start>low) quickSort(arr,low,start-1);
        if(end<high) quickSort(arr,end+1,high);
        return arr;
}
console.log(quickSort([3,2,123,543,34,65,67], 0, 6))
function aa (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var keyIndex = Math.floor(arr.length / 2); //向下取整
    var key = arr.splice(keyIndex, 1)[0];
    var leftArr = [];
    var rightArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < key) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return aa(leftArr).concat([key], aa(rightArr));
}
aa([3,2,123,543,34,65,67])

