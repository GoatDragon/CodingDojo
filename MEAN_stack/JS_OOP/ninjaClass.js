function Ninja (name) {
    this._name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function () {
        console.log(this._name);
    }
    this.showStats = function () {
        console.log('Name:', this._name, 'Health:', this.health, 'Speed:', speed, 'Strength:', strength);
    }
    this.drinkSake = function () {
        this.health += 10;
    }
    this.punch = function (ninja) {
        if (ninja instanceof Ninja){
            ninja.health -= 5
            return this
        }
        else{
            console.log("You can't punch that!")
        }
    }
    this.kick = function (ninja) {
        if (ninja instanceof Ninja){
            damage = strength * 15
            ninja.health -= damage
            return this
        }
        else{
            console.log("You can't kick that!")
        }
    }
}

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Steve");
ninja1.sayName();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
ninja1.punch(ninja2).punch(ninja2).kick(ninja2).kick(ninja2);
ninja2.showStats();


// ninja1.sayName = function(){
//     console.log('hi')
// }
// Ninja.prototype.sayName = function(){
//     console.log('hi')
// }
// ninja1.sayName()
// ninja2.sayName()
// var ninja3 = new Ninja("bob");
// ninja3.sayName()