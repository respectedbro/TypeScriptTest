var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.getInfo = function () {
        return "".concat(this.name, " - ").concat(this.price);
    };
    return Car;
}());
new Car('BMW', 100000).getInfo();
console.log(new Car('BMW', 100000).getInfo());
