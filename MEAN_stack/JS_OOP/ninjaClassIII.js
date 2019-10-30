class Ninja {
    constructor (name) {
        this._name = name
        this.health = 100
        this.speed = 3
        this.strenght = 3
    }
    sayName () {
        console.log(this._name);
    }
    showStats () {
        console.log('Name:', this._name, 'Health:', this.health, 'Speed:', this.speed, 'Strength:', this.strength);
    }
    drinkSake () {
        console.log(`${this._name} drank sake, +10 health`)
        this.health += 10
    }
}
class Sensei extends Ninja {
    constructor (name) {
        super (name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom () {
        super.drinkSake()
        console.log('i am vewy wize')
    }
}
var ninja1 = new Ninja("Hyabusa");
var sensei_bob = new Sensei("Bob");
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()
sensei_bob.showStats()
sensei_bob.speakWisdom()
sensei_bob.showStats()