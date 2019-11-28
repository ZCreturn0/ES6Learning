function Sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function run() {
    for (let i = 0; i < 5; i++) {
        await Sleep(1000);
        console.log(i);
    }
}

run();