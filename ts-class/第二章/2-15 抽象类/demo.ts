// readonly只读不可改

// class Shoes {
//     public readonly name :string
//     constructor(name: string) {
//         this.name = name;
//     }

// }
// const newBalance = new Shoes('元祖灰');
// newBalance.name  = '996'; //只读不可改


// 抽象类 把公共方法抽离出来使用 只能被继承 不能实例化

abstract class Geom {
    abstract getArea()
}
// const aa = new Geom(); //无法创建抽象类的实例

class Cycle extends Geom {
    getArea() {
        return 'cycle';
    }
}

class Square extends Geom {
    getArea() {
        return 'square';
    }
}

// interface 

interface Person {
    name: string
}

interface Teacher extends Person {
    age: number
}

interface Student extends Person {
    studentAge: number
}

const getUser = (user:Person ):string => {
    return user.name;
}

const teacher1 = {
    name: 'sss',
    age: 22
}
const student1 = {
    name: 'sss',
    studentAge: 23
}
getUser(teacher1);
getUser(student1);