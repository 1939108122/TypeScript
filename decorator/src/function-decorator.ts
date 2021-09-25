// 方法装饰器

//  三个参数   target key(方法名字) descriptor （方法描述符）
//  实例方法：target对应的是类的prototype（类的原型对象）
//  静态方法  taget对应的是类的构造函数
 
 function getNameDecorator(target: any, key: string) {
    console.log(target, key);
    // console.log(target);
 }


class Sports {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @getNameDecorator
    getName() {

    }
    // static getName() {

    // }
}


// 第三个参数descriptor 类似于 Object.defineProperty(obj, prop, descriptor) 的 descriptor （要定义或修改的属性描述符）

// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//     // descriptor.writable = true;

//     // descriptor.value =  () => {
//     //     return 'descriptor';
//     // }
//  }


// class Sports {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     @getNameDecorator
//     getName() {
//         return '123';
//     }
// }

// const sport = new Sports('running');
// console.log(sport.getName());  //123

// sport.getName = () => {
//     return '456';
// }
// console.log(sport.getName());  //456