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
}

new Car('BMW', 100000).getInfo()

console.log(Car)

