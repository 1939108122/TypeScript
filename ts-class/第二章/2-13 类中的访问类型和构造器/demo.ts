// private protected public 访问类型

// public(公有) —— 允许在类的外部被调用
// private(私有) —— 仅允许在类的内部被调用
// protected(保护) —— 允许在类的内部和子类被调用


// public 
// class Sports {
//     public name: string;
//     getName() {
//         return this.name;
//     }
// }

// const running = new Sports();
// running.name  = 'running';
// console.log(running.getName());


// // private 
// class Sports1 {
//     private name: string;
//     getName() {
//         return this.name;
//     }
// }

// const running1 = new Sports1();
// // running1.name  = 'running';  //报错 外部不能调用
// console.log(running1.getName());


// // protected 
// class Sports2 {
//     protected name: string;
//     getName() {
//         return this.name;
//     }
// }

// class Swim extends Sports2 {
//     aaa() {
//         return this.name;
//     }
// }


// constructor 构造器

class Animals {
    // 传统写法
    // name: string;
    // constructor(name:string) {
    //     this.name = name;
    // }
    // 简化写法
    constructor(public name:string) {}
}

const dog = new Animals('dog');
console.log(dog.name);

// 子类 继承中 constructor使用  父类有构造器子类要使用 super调用父类构造器 父类没有构造器就用super()

class Cat extends Animals {
    constructor(public age:number, public name:string) {
        super(name);
    }
}

const cat = new Cat(3, 'cat');


