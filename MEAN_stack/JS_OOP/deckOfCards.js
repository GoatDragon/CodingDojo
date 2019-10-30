const values = {
    0: "Ace",
    1: "Two",
    2: "Three",
    3: "Four",
    4: "Five",
    5: "Six",
    6: "Seven",
    7: "Eight",
    8: "Nine",
    9: "Ten",
    10: "Jack",
    11: "Queen",
    12: "King"
}

const suits = [
    "Hearts",
    "Clubs",
    "Diamonds",
    "Spades"
]

class Card {
    constructor (suit, number) {
        this._suit = suit
        this._number = number
        this.string = values[number]
    }
    show() {
        return `${this.string} of ${this._suit}`
    }
}

class Deck {
    constructor() {
        this.reset()
    }
    reset() {
        this.cards = []
        for (let s in suits) {
            for (let v in values) {
                let n = new Card(suits[s], v)
                this.cards.push(n.show())
            }
        }
    }
    showDeck() {
        for (let c in this.cards) {
            console.log(this.cards[c])
        }
    }
    shuffle() {
        var m = this.cards.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this.cards;
    }
    remaining() {
        console.log(`\nThere are ${this.cards.length} cards remaining in the deck.\n`)
    }
    deal(){
        return this.cards.pop()
    }
}

class Player {
    constructor (name) {
        this._name = name
        this.hand = []
    }
    take(deck, num) {
        if (deck instanceof Deck) {
            for (let i = 0; i < num; i++) {
                this.hand.push(deck.deal())
                if (deck.cards.length <= 0) {
                    break
                }
            }
        }
        return this
    }
    showHand() {
        console.log(`${this._name} has ${this.hand.length} cards in hand:`)
        for (let card in this.hand) {
            console.log(card, this.hand[card])
        }
        return this
    }
    play(card) {
        return `\n${this._name} plays ${this.hand.splice(card, 1)}\n`
    }
}

d = new Deck
p = new Player('Hal')
d.shuffle()
d.remaining()
p.take(d, 7).showHand()
d.remaining()
console.log(p.play(3))
p.showHand()