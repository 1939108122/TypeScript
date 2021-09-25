// 基础类型 number string boolean null undefined symbol void 

let count:number = 1;
let kk:string = 'kk';

// 对象类型
class Person {}

const obj: { name: string, age: number} = {name: '小米姑娘', age: 19};

const arrObj: number[] = [1, 2, 3];

const person: Person = new Person();

const getNumber: () => number = () => {
    return 123;
}

const getNumber2 = function ():number {
    return 13;
}