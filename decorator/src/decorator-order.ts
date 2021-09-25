// 装饰器的执行顺序
// 1: 实例成员：参数装饰器 > 方法 / 访问器 / 属性 装饰器 
// 2. 静态成员: 参数装饰器 > 方法 / 访问器 / 属性 装饰器 
// 3. 构造器: 参数装饰器 
// 4. 类装饰器


function f(key: string): any {
    console.log("evaluate: ", key);
    return function () {
      console.log("call: ", key);
    };
  }
  
  @f("Class Decorator")
  class C {
    @f("Static Property")
    static prop?: number;
  
    @f("Static Method")
    static method(@f("Static Method Parameter") foo: any) {}
  
    constructor(@f("Constructor Parameter") foo: any) {}
  
    @f("Instance Method")
    method(@f("Instance Method Parameter") foo: any) {}
  
    @f("Instance Property")
    prop?: number;
}

// 当多个装饰器应用在一个声明上执行顺序
// 1. 求值外层装饰器
// 2. 求值内层装饰器
// 3. 调用内层装饰器
// 4. 调用外层装饰器



// function f(key: string) {
//     console.log("evaluate: ", key);
//     return function (target: any, key: string, descriptor: PropertyDescriptor) {
//       console.log("call: ", key);
//     };
//   }
  
//   class C {
//     @f("Outer Method")
//     @f("Inner Method")
//     method() {}
//   }

  
  