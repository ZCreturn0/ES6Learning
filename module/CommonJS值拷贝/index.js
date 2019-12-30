const mod = require('./lib');
console.log(mod.counter);
mod.add();              // 传的是值,不会被改变
console.log(mod.counter);