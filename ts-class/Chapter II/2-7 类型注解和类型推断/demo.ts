// type annotation 类型注解
// type inference  类型推断

//类型注解
let x: number;
x = 123; 

// 类型推断
let countInference = 123;

function getNum (number1:number, number2:number) {
    return number1 + number2;
}

getNum(1, 2);