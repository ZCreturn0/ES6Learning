const fs = require('fs');

let file1Path = './files/test.txt';
let file2Path = './files/test2.txt';

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
};

async function run() {
    let r1 = await readFile(file1Path);
    let r2 = await readFile(file2Path);
    return [r1, r2];
}

run().then(data => {
    data.forEach(d => {
        console.log(d.toString());
    })
})