const fetch = require('node-fetch');
const URL = 'https://api.github.com/users/ZCreturn0';

function* gen() {
    let result = yield fetch(URL);
    console.log(result);
}

let g = gen();
let result = g.next();
result.value.then(res => {
    // 返回 Promise
    return res.json();
})
.then(data => {
    console.log(data);
    g.next(data);
})