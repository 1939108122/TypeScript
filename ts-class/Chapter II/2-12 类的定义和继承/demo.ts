class Person {
    name = 'xxx';
    getPersonName() {
        return this.name;
    }
}

let aa = new Person();
console.log(aa.getPersonName()); //xxx

// 继承 增加方法
class Teacher extends Person {
    getTeacherName() {
        return 'teacher';
    };
    // getPersonName() {  //子类重写父类方法
    //     return 'rewrite Function';
    // }
    getPersonName() {  //想要父类的属性 使用super
        return super.getPersonName();
    }
}

const bb = new Teacher();
console.log(bb.getPersonName());  //xxx
console.log(bb.getTeacherName());  // teacher
// console.log(bb.getPersonName());  //  rewrite Function
