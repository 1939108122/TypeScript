// 接口——对类型进行约束校验, 包括函数和类等

interface Person {
    name: string,
    age?: number,
    [propName: string]: any,
    say(): string
}

function getPersonName(person: Person):void {
    console.log(person.name);
}

function changePersonName(person: Person, name:string):void {
    person.name = name;
}

const person = {
    name: 'xxx',
    gender: 'female',
    say() {
        return 'hello';
    },
    teach() {
        return 'hello1';
    }
}


getPersonName(person);

// 以字面量形式传递参数typeScript会进行强校验 Person接口里不能有多余的属性 
// getPersonName(
//     {
//         name: 'xxx',
//         gender: 'female'
//     }
// );

changePersonName(person, 'sss');


// 类实现接口

class User implements Person {
    name = 'xxx';
    say():string {
        return 'hello';
    }
}

// 接口继承接口

interface Teacher extends Person {
    teach():string
}

function changeTeacherName(person: Teacher, name:string):void {
    person.name = name;
}
changeTeacherName(person, 'sss');

// 定义接口 -- 函数类型

interface Running {
    (time: number):string
}

const running:Running  = (time: number) => {
    return time.toString();
}