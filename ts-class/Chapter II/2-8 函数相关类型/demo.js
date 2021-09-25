var hello = function (n1, n2) {
    return n1 + n2;
};
var dd = hello(1, 2);
function sayHello() {
    console.log('hello');
}
function errorEmitter() {
    while (true) {
    }
    console.log(123);
}
function handleValue(val) {
    switch (val.type) {
        case 'foo':
            // 这里 val 被收窄为 Foo
            break;
        case 'bar':
            // val 在这里是 Bar
            break;
        default:
            // val 在这里是 never
            var exhaustiveCheck = val;
            break;
    }
}
var val = { type: 'foo' };
handleValue(val);
// 函数传参数为对象且解构对象声明类型
function add(_a) {
    var first = _a.first, second = _a.second;
    return first + second;
}
add({ first: 1, second: 2 });
// JSON.parse不能推断出类型
var raw = 'dsadsad';
var raw1 = parseInt(raw);
var rawData = '{"name": "xiaoming"}';
var rawData1 = JSON.parse(rawData);
var rawData3 = '{"name": "xiaoming"}';
var rawData4 = JSON.parse(rawData);
