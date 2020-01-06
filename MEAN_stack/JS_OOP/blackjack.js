const cards = require('./deckOfCards.js')

d = new cards.deck
p = new cards.player('Sam')
p.take(d, 3)
p.showHand()
console.log(p.play(0))
p.showHand()