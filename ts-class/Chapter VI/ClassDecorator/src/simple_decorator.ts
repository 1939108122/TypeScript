// // 类的装饰器 —— 对类进行装饰的工具
// // 装饰器本身是一个函数
// // 使用 @ 符号装饰
// // 在声明类时便修饰了
function testDecorator(param: boolean) {
    if (param) {
        return function (target:any) {
            target.prototype.getName = () => {
                console.log('i am decorator');
            }
        }
    }
    else {
        return function (target:any) {}
    }
}

// function testDecorator1(target:any) {
//     console.log('decorator1');
//     // target.prototype.getName = () => {
//     //     console.log('i am decorator1');
//     // }
// }


@testDecorator(true)
// // @testDecorator1
class Test1 {

}
// // const test1 = new Test();

// // const test2 = new Test();
const test1 = new Test1();
(test1 as any ).getName()