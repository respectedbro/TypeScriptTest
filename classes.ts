class Car {
    name:string
    price:number

    constructor(name:string, price:number) {
        this.name = name
        this.price = price
    }

    getInfo():string {
        return `${this.name} - ${this.price}`

    }

    anything() {
        this.getInfo()
    }
}

class Bus extends Car {
    constructor(name:string, price:number) {
        super(name, price)
    }

    test() {
        return this.getInfo()
    }
}


new Car('BMW', 100000).getInfo()

console.log(new Car('BMW', 100000).getInfo())

