// 数组

const numberArr: Array<number> = [1, 2, 3];

const arr: number[] = [1, 2, 3];

const arr1: (number | string) [] = [1, '2', 3];

// 二维数组
const twoArr: string[][] = [];
const twoArr1: Array<Array<number>> = [ [1], [2] ];

// 接口
interface Person {
    name:string
}

// type alias 类型别名
type User = {
    name: string
}

class People {
    name: string
}
// 数组类型四种方式

const objectArr: {name: string} [] = [ {name: 'aaa'} ];

const objectArr1: Person [] = [ {name: 'aaa'} ];

const objectArr2: User [] = [ {name: 'aaa'} ];

const objectArr3: People [] = [ {name: 'aaa'} ];

// 元组 tuple 固定类型和固定长度

const tuple: [string, string, number] = ['1', '2', 3];