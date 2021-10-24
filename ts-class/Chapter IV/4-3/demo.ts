// 联合类型和类型保护
interface Bird {
    fly: Boolean,
    sing: () => {}
}

interface Dog {
    fly: Boolean,
    bark: () => {}
}

// 类型断言

function trainAnimals( animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing();
    } else {
        (animal as Dog).bark();
    }
}
