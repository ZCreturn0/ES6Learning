const fetch = require('node-fetch');
const URL = 'https://api.github.com/users/ZCreturn0';

// fetch(URL).then(res => {
//     res.then(data => {
//         console.log(data);
//     })
// });

function* gen() {
    let result = yield fetch(URL);
}

let g = gen();
let result = g.next();
result.value.then(res => {
    return res.json();
})
.then(data => {
    console.log(data);
})