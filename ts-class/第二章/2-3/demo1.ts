// 勾股定理
// function demo1 (data) {
//     return Math.sqrt(data.x ** 2, data.y **2);
// }
// demo1(); //ts报错

function demo1 (data: {x: number, y:number}) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}
demo1({x: 3, y: 4}); //ts报错
console.log(111);