class Bike {
price: number;
max_speed: string;
miles: number;
    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;        
    }
    displayInfo(): object {
        console.log(`$${this.price}, max speed: ${this.max_speed}, miles: ${this.miles}`)
        return this;
    }
    ride(): object {
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse(): object {
        console.log('Reversing');
        this.miles -= 5;
        return this;
    }
}

var b1 = new Bike(200, "25mph");
var b2 = new Bike(300, "35mph");
var b3 = new Bike(400, "45mph");


b1.ride().ride().ride().reverse().displayInfo();
b2.ride().ride().reverse().reverse().displayInfo();
b3.reverse().reverse().reverse().displayInfo();