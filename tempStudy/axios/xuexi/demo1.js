// get请求
axios.get('/user?ID=12345')
    .then(function (res) {
        console.log(res)
    })
    .catch(function (res){
        console.log(res)
    });
// 可选参数
axios.get('/user', {
    params:{
        ID:12345
    }
})
    .then(function (res) {
        console.log(res)
    })
    .catch(function (res) {
        console.log(res)
    })

// post请求
axios.post('/user',{
    firstName: 'tao',
    lastName:'huang'
})
.then(function (res) {
    console.log(res)
})
.catch(function (res) {
    console.log(res)
});

// 执行多个并发请求
function getUserAccount(){
    return axios.get('/user/12345');
}
function getUserPermissions () {
    return axios.get('/user/12345/permission')
}
axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct,perms){
    //两个请求都完成后
}))

// axios API 通过axios 传递相关配置来创建请求
// axios(config)
axios({
    method: 'post',
    url: '/user/1234',
    data:{
        firstName: 'tao',
        lastName:'huang'
    }
});
// axios(url [, config])
// get请求 默认方式
axios('/user/12345')

// 自定义配置新建一个 axios 实例
var instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
//  创建请求时，可以用的配置选项，只有url是必需的，其他都可配置
{
    url: '/user',
    method: 'get', // 默认
    baseURL: 'https://www/baidu.com', //baseURL 自动添加到url前面
    transformRequest: [function (data){
        // data 变化
        return data;
    }],
    transformResponse: [function (data){
        //data变化
        return data;
    }],
    headers: {
        'X-Requst-With': 'XMLHttpRequest'
    },
    params:{
        ID:12345
    },
    paramsSerializer: function (params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    data: {
        firstName: 'fred'
    },
    timeout: 1000,
    withCredential: false,
    // 自定义处理请求，
    adapter: function (config){

    },
    auth:{
        username: 'janedoe',
        password: 's00per3cret'
    },
    responseType:'json',
    xsrfCookieName: 'X-XSRF-TOKEN', // ……
    proxy: {
        host: '127.0.0.1',
        port: 900,
        auth: {
            username:'mikeymike',
            password:'rapunz31'
        }
    }
}