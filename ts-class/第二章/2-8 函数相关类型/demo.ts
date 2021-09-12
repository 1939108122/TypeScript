const hello = function(n1: number, n2:number):number { 
    return n1 + n2; 
} 
const dd = hello(1, 2);

function sayHello():void {  //void在英文中是 空、无效的意思 表明函数没有返回值
    console.log('hello');
}

function errorEmitter(): never {  //"返回never的函数必须存在无法达到的终点”
    while(true) {
        
    }
    console.log(123);
}

// 这里switch不可能走到default,
// 但是如果有人改动了 type All = Foo | Bar | Baz 那么会走入default 编译会报错 相当于有个兜底
interface Foo {
    type: 'foo'
}
  
interface Bar {
    type: 'bar'
}

type All = Foo | Bar 

function handleValue(val: All) {
    switch (val.type) {
      case 'foo':
        // 这里 val 被收窄为 Foo
        break
      case 'bar':
        // val 在这里是 Bar
        break
      default:
        // val 在这里是 never
        const exhaustiveCheck: never = val
        break
    }
  }
const val:All = {type: 'foo'};

handleValue(val);

// 函数传参数为对象且解构对象声明类型

function add ({first, second} : {first: number, second: number}):number {
    return first + second;
}

add( {first: 1, second: 2} );