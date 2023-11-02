class Vehicle {
    constructor (regNum, color) {
        this.regNum = regNum;
        this.color = color
        this.speed = 30
    }
    increaseSpeed () {
        this.speed += 10
    }
}

class Car extends Vehicle {
    constructor (regNum, color, type, model) {
        super(regNum, color)
        this.type = type
        this.model = model
    }
}

let car = new Car ()
car.increaseSpeed ()
console.log(car.speed)

let nums = new Map ( [ [1, 1], [2, 4], [3, 9], [4, 16] ] )
// let sum = 0
// nums.forEach (num => {
//     sum += num
// })
// console.log(sum)
console.log(nums.get(4))

