// 单例模式 —— 只允许创建一个类的实例(所有实例都是一个)

class Demo {
    private static instance: Demo;
    private constructor(public name:string) {}  //不允许 new Demo 创建实例
    static getInstance(name:string) {  //static 将方法挂载在类上，而不是像以往的挂在类实例上
        // return new Demo();  //这样每个实例还是不一样
        if (!this.instance) {
            this.instance = new Demo(name);
        }
        return this.instance;

    }
}

// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();
// console.log(demo1 === demo2);  //true

const demo1 = Demo.getInstance('dell');
const demo2 = Demo.getInstance('lee');

console.log(demo1.name);  //dell
console.log(demo2.name);  //dell
console.log(demo1 === demo2);  //true
