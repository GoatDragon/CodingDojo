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
                this.cards.push(n)
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
        let currenthand = []
        for (let card in this.hand) {
            currenthand.push(`<p> ${this.hand[card].show()} </p>`)
        }
        return currenthand
    }

    play(card) {
        return `\n${this._name} plays ${this.hand.splice(card, 1)}\n`
    }

    findTotal() {
        let total = 0
        for (let card in this.hand) {
            if (Number(this.hand[card]._number) < 10) {
                total += Number(this.hand[card]._number) + 1
            }else{
                total += 10
            }
        }
        return total
    }
}