callback = function () {
    return function () {
        if(callback){
            console.log('hello')
        } else {
            console.log('no')
        }
    }
}
callback()