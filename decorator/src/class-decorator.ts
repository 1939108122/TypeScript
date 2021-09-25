// 类装饰器


// 不同类的构造函数不一样 需类型注解构造函数的类型 {new(...args:any[]):{}}

type Consturctor = { new (...args: any[]): any };

function classDecorator <T extends Consturctor> (constructor: T) {
    return class extends constructor {};
}

@classDecorator

class Sport {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const sports = new Sport('running');

console.log(sports.name);


// // 对类进行装饰
// type Consturctor = { new (...args: any[]): any };

// function classDecorator <T extends Consturctor> (constructor:T) {
//     return class extends constructor {
//         name = 'basketball';
//         getName() {
//             return this.name;
//         }
//     };
// }

// @classDecorator

// class Sport {
//     name: string;
//     constructor(name: string) {
//         console.log(1);
//         this.name = name;
//         console.log(2);
//     }
// }

// const sports = new Sport('running');

// console.log(sports.name);
// console.log(sports.getName());  //不存在




// 装饰器工厂加工让类有getName方法
// type Consturctor = { new (...args: any[]): any };
// function classDecorator () {
//     return function <T extends Consturctor> (constructor:T) {
//         return class extends constructor {
//             getName() {
//                 return this.name;
//             }
//         };
//     }
// }
// const Sport = classDecorator()(
//     class {
//         name: string;
//         constructor(name: string) {
//             this.name = name;
//         };
//     }
// )
// const sports = new Sport('running');

// console.log(sports.name);
// sports.getName();  //存在
