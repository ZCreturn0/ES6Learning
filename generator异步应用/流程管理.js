const fs = require('fs');

const file1Path = './files/test.txt';
const file2Path = './files/test2.txt';

function Thunk(fn) {
    return (...args) => {
        return (callback) => {
            fn.apply(this, [...args, callback]);
        }
    }
}

let readFilreThunk = Thunk(fs.readFile);

// readFilreThunk 使用方法
// readFilreThunk(file1Path)((err, data) => {
//     if(err) {
//         console.log('error');
//     }
//     else {
//         console.log(data.toString());
//     }
// });

function* gen() {
    let r1 = yield readFilreThunk(file1Path);
    let r2 = yield readFilreThunk(file2Path);
}

// let g = gen();
// let r = g.next();               // r.value 是一个函数,需传入一个回调函数

// r.value((err, data) => {
//     if(err) {
//         console.log('error:' + err);
//     }
//     else {
//         console.log(data.toString());
//         let r2 = g.next();
//         r2.value((err, res) => {
//             if (err) {
//                 console.log('error:' + err);
//             }
//             else {
//                 console.log(res.toString());
//             }
//         });
//     }
// });


// 回调处理
function run(gen) {
    let g = gen();
    function next(err, data) {
        // 第一次 next 传入的 data 没作用
        let result = g.next(data);
        if(data) {
            console.log(data.toString());
        }
        if(result.done) {
            return;
        }
        // 回调参数会传入到 next
        result.value(next);
    }
    next();
}

run(gen);