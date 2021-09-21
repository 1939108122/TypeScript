// getter setter

// class Person {
//     constructor(private _name:string){}
//     // getName() {
//     //     return this._name;
//     // };
//     get name() {
//         return this._name;
//     };
//     set name(name: string) {
//         this._name = name;
//     }
// }

// const teacher = new Person('kk');
// // console.log(teacher.getName());
// console.log(teacher.name);  //get
// teacher.name = 'aa';    //set
// console.log(teacher.name);


// get set起保护属性作用
class Person {
    constructor(private _name:string){}
    get name() {
        return this._name + ' lee';
    };
    set name(name: string) {
        const realName = name.split(' ')[0];
        this._name = realName;
    }
}

const teacher = new Person('dell');
console.log(teacher.name);
teacher.name = 'dell lee';
console.log(teacher.name);


