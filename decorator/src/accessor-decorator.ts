// 访问器装饰器
// 参数和方法装饰器一样
// 访问器 setter 和 getter只能存在一个装饰器

function accessorDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    // descriptor.writable = false;
 }


class Sports1 {
    private _name: string;
    constructor( name: string) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    @accessorDecorator
    set name(name: string) {
        this._name = name;
    }
    
}

const sport1 = new Sports1('running');

console.log(sport1.name);  //running
sport1.name = 'basketball';  
console.log(sport1.name);  //basketball

