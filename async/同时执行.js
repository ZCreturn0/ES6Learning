// await 可以理解为等待异步执行完并获取执行结果

// 模拟异步获取数据
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('aaaaa');
        }, 1000);
    });
}

function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('bbbbb');
        }, 2000);
    });
}

// 顺序执行
async function execInOrder() {
    let r1 = await fetchData();
    let r2 = await fetchData2();
    // 3s后一起输出
    console.log('execInOrder:');
    console.log(r1);
    console.log(r2);
}
execInOrder();

// 使用 Promise.all 一起执行
async function sameTimeUsingPromiseAll() {
    let [r1, r2] = await Promise.all([fetchData(), fetchData2()]);
    // 2s 输出
    console.log('sameTimeUsingPromiseAll:');
    console.log(r1, r2);
}
sameTimeUsingPromiseAll();

// 先分别获取 Promise,启动异步,然后等待结果
async function fetchFirst() {
    // 先获取2个 Promise
    let p1 = fetchData();
    let p2 = fetchData2();
    // 同时启动 Promise
    let r1 = await p1;
    let r2 = await p2;
    console.log('fetchFirst:');
    console.log(r1, r2);
}
fetchFirst();