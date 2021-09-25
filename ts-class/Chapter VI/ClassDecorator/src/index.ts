// 类的装饰器 —— 对类进行装饰的工具
// 装饰器本身是一个函数
// 使用 @ 符号装饰
// 在声明类时便修饰了
function testDecorator1 (target:any) {
    target.prototype.getName = () => {
        console.log('i am decorator');
    }
    console.log(target);
    console.log(target.constructor);
}



@testDecorator1
class Test {
    constructor() {
        
    }
}
const test = new Test();
(test as any ).getName()