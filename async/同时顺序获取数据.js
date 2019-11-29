const request = require('request');

// 包装返回Promise
function fetch(url) {
    return new Promise((resolve, reject) => {
        request({
            url: url
        }, (err, res, body) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(res.body);
            }
        });
    });
}

// fetch('http://127.0.0.1:8888/a').then(data => {
//     console.log(data);
// })

// 队列获取
async function fetchInOrder() {
    const URLS = [
        'http://127.0.0.1:8888/a',
        'http://127.0.0.1:8888/b',
        'http://127.0.0.1:8888/c',
        'http://127.0.0.1:8888/d'
    ];
    for (let url of URLS) {
        // 依次获取(不能同时获取)
        let text = await fetch(url);
        console.log(text);
    }
}
// fetchInOrder();

// 同时获取,队列输出
async function fetchAtSameTime() {
    console.time('run');
    const URLS = [
        'http://127.0.0.1:8888/a',
        'http://127.0.0.1:8888/b',
        'http://127.0.0.1:8888/c',
        'http://127.0.0.1:8888/d'
    ];
    let promises = [];
    for (let url of URLS) {
        // 获取 promise,同时启动 promise 里面的 request,所以这几个请求在这已经同时发出去了
        promises.push(fetch(url));
    }
    for (let promise of promises) {
        // 等待请求返回数据,按顺序等待(请求同时完成,所以同时输出)
        console.log(await promise);
    }
    console.timeEnd('run');
}
fetchAtSameTime();