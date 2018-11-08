(function () {
    // if (!window.localStorage){
    //     console.log("您的浏览器不支持 localStorage");
    //     // 可以有相关的 UserData 存储内容
    //     return false;
    // } else {
    //     console.log("支持localStorage");
    //     var storage  = window.localStorage;
    //     storage["a"] = "aaaaaa";
    //     storage.b = "bbbbbb";
    //     storage.setItem("c", "ccccccc");
    //     var result = storage.getItem("c");
    //     storage.setItem("result", result);
    //     for (let i = 0; i < storage.length; i++) {
    //         var key = storage.key(i);
    //         console.log(key);
    //     }
    // }
    /**
    *   JSON 数据之间的转换
    *
    */
    // if(!window.localStorage){
    //         alert("浏览器支持localstorage");
    //     }else{
    //         var storage=window.localStorage;
    //         var data={
    //             name:'xiecanyong',
    //             sex:'man',
    //             hobby:'program'
    //         };
    //         var d=JSON.stringify(data);
    //         storage.setItem("data",d);
    //         console.log(storage.data);
    //     }

    /**
    *   项目代码
    *   
    *
    */
    // var visibleArr = [1,1,1,1];data-visible

    // data-visible
      
    var title = document.getElementsByClassName("mem-menu-title"),
        length = title.length,
        index = 0,
        storage,
        arr,
        item;
    //  页面加载时，检测 有没有指示显示状态的 本地存储    
    var visi = (window.localStorage) ? localStorage.getItem("str-ul-visible-condition") :[1,1,1,1];
    console.log(visi);
    
        if(visi){
            console.log(typeof visi);
            // error 点:
            // visi 此时是一个 String类型也就是 0,1,1,1，不是数组，也没有索引号。
            // 需要先根据 , 将其拆分成数组，才可以用
            arr = visi.split(",");
            console.log(arr);
            for (let i = 0; i< length; i++) {
                console.log(parseInt(arr[i]));
                var id = title[i].getAttribute("data-rel");
                var mul = document.getElementById(id);
                if(parseInt(arr[i]) === 1) {
                    mul.style.display = "block";
                    title[i].setAttribute("data-visible", "true");
                } else {
                    mul.style.display = "none";
                    title[i].setAttribute("data-visible", "false");
                }
            }
        }
    
    // 设置每个标题的点击事件 函数
    for (; index < length; index++) {
        item = title[index];
        item.addEventListener("click", func, false);
    }
    function SaveConsition (arrDisplay) {
        if( !window.localStorage) {
            console.log("您的浏览器不支持localStorage!")
            return false;
        } else {
            storage = window.localStorage;
            storage.setItem("str-ul-visible-condition", arrDisplay);
        }
    }
    function funStoreDisplay () {
        var arrDisplay = [];
        for(let i = 0; i < length; i ++) {
            if(title[i].getAttribute("data-visible") === "true") {
                arrDisplay[i] = 1;
            } else {
                arrDisplay[i] = 0;
            }
        }
        SaveConsition(arrDisplay);
    }
    // 点击事件
    function func (event) {
        var id = this.getAttribute("data-rel");
        console.log(id);
        var mul = document.getElementById(id);
        if(mul.style.display === "none") {
            mul.style.display = "block";
            this.setAttribute("data-visible", "true");
        } else {
             mul.style.display = "none";
            this.setAttribute("data-visible", "false");
        }
        // 存入web
        funStoreDisplay()
    }
} ())