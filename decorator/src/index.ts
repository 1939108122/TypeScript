// 用法
function demo(target: any){
  //do something with target
  console.log(11);
}

@demo

class Test {}



// 添加静态属性 isPsrson
// function user(target: any){
//     target.isPsrson = true;
//   }
  
//   @user
// class Person {}
// console.log((Person as any).isPsrson);




// 在声明类时就已经装饰了类

// function user(target:any){
//   console.log(' i am decorator');
// }

// @user
// class Person {}



// 装饰器工厂 传其他参数 

// function testDecorator(param: boolean) {
//   if (param) {
//       return function (target:any) {
//           target.prototype.getName = () => {
//               console.log('i am decorator');
//           }
//       }
//   }
//   else {
//       return function (target:any) {}
//   }
// }

// @testDecorator(true)
// class Test {

// }
// const test = new Test();
// (test as any ).getName()


