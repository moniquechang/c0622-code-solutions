console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playerNames = ['player 1', 'player 2', 'player 3', 'player 4'];
var playerHands = [[], [], [], []];
var players = [];

function Player(name, hand, score) {
  this.name = name;
  this.hand = hand;
  this.score = score;
}

for (var i = 0; i < playerNames.length; i++) {
  players.push(new Player(playerNames[i], playerHands[i], 0));
}

var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var deck = [];

function Card(rank, suit, score) {
  this.rank = rank;
  this.suit = suit;
}

for (var r = 0; r < ranks.length; r++) {
  for (var s = 0; s < suits.length; s++) {
    deck.push(new Card(ranks[r], suits[s]));
  }
}

var shuffledDeck = _.shuffle(deck);

for (var p = 0; p < players.length; p++) {
  for (var c = 0; c < 2; c++) {
    players[p].hand.push(shuffledDeck[0]);
    shuffledDeck.shift();
    if (players[p].hand[c].rank === 'Ace') {
      players[p].score += 11;
    } else if (players[p].hand[c].rank === 'Jack' || players[p].hand[c].rank === 'Queen' || players[p].hand[c].rank === 'King') {
      players[p].score += 10;
    } else {
      players[p].score += parseInt(players[p].hand[c].rank);
    }
  }
}

var winner = players[0].name;
var highestScore = players[0].score;

for (var w = 1; w < players.length; w++) {
  if (players[w].score > highestScore) {
    winner = players[w].name;
    highestScore = players[w].score;
  }
}
console.log('winner of game is:', winner);
