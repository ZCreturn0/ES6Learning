let counter = 1;
function add() {
    counter++;
}
// module.exports = {
//     counter, add
// }

module.exports = {
    get counter() {         // 以函数形式导出可获取到修改的值
        return counter;
    },
    add
}