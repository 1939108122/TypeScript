let arr: Array<number> = [];
let arr1: number[];


//void

function fnc():void {
    return undefined;
}

// never

function fnc1():never {
    throw new Error('error');
}

function fnc2():never {
    while(true) {

    }
}

// tuple

let tuple: [string, number?]

tuple = ['1',2]

// 枚举

enum Direction {
    d1,
    d2,
    d3
}

let directions:number[] = [Direction.d1, Direction.d2, Direction.d3];

console.log(directions);
console.log(Direction);

directions[0] = 5;
console.log(directions);
console.log(Direction);

// 类型别名 (自定义类型、 联合类型、原始值)

type Name = string;
// type Name = 11 | 22 | 33;

let n1: Name;