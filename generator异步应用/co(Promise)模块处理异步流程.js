const fs = require('fs');

const file1Path = './files/test.txt';
const file2Path = './files/test2.txt';

let readFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

let gen = function* () {
    yield readFile(file1Path);
    yield readFile(file2Path);
}

function run(gen) {
    let g = gen();
    function next() {
        let result = g.next();
        if (!result.done) {
            next();
        }
        else {
            return;
        }
        result.value.then((data) => {
            console.log(data.toString());
        });
    }
    next();
}

run(gen);