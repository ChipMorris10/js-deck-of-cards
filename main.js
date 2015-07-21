var showCards = document.getElementById("cards");

showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
};

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}

// Creates a deck of 52 cards
function newDeck(){
  var deck = [];
  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  for (var i = 0; i < ranks.length; i++) {
    for (var n = 0; n < suits.length; n++) {
      deck.push({
        card: ranks[i].card,
        suit: suits[n]
      });
    }
  }
  // console.log(deck);
  return deck;
}

// Shuffles the Deck
function shuffleCards(cardDeck){
  var shuffled_array= [];
  var workArr = cardDeck.slice(0);
   for (var i = 0; i < cardDeck.length; i++) {
     var random = Math.floor(Math.random() * workArr.length);
     shuffled_array.push(workArr.splice(random,1)[0]);
   }
   console.log(shuffled_array);
   return shuffled_array;
}
