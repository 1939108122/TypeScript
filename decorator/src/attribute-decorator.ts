// 属性装饰器

function nameDecorator(target: any, key: string): any {
    const descriptor: PropertyDescriptor = {
        writable: false
    }
    return descriptor
 }


class Computer {
    @nameDecorator
    name = 'computer';
    
}
const computer = new Computer();

computer.name = 'mac';
