// 参数装饰器

function paramDecorator(target: any, method: string, index: number) {
    console.log(target, method, index);
 }


class Sports3 {
    getInfo(@paramDecorator name: string, age: number) {
        
        return name + age;
    }
    
}

const sport3 = new Sports3();
console.log(sport3.getInfo('running', 23));