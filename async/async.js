async function f1() {
    return 'f1';
}
async function f2() {
    throw 'f2';
}

// async 函数的 return 会被 then 捕获, throw 会被 catch 捕获
f1().then(res => {
    console.log('then:' + res);
})
.catch(err => {
    console.log('catch:' + err);
});

f2().then(res => {
    console.log('then:' + res);
})
.catch(err => {
    console.log('catch:' + err);
});



// async 函数必须等内部所有 await 函数执行完后返回
// await: 返回一个 Promise
async function Sleep(fn, ms, ...args) {
    console.log(args);
    await new Promise((resolve) => {
        setTimeout(() => {
            fn.apply(null, args);
            resolve();
        }, ms);
    });
}

// Sleep(console.log, 1000, 1, 2, 3);

async function run() {
    await Sleep(console.log, 1000, 1, 2, 3);
    await Sleep(console.log, 1000, 'a', 'b', 'c');
    return 'done';
}
run().then(data => {
    console.log(data);
});