# JavaScript Deck of Cards

## Setup

1. Create a new local project directory called "js-deck-of-cards".
1. Add a local git repository.
1. Create a remote repository on Github.
1. Add/commit to your local git repo, and then push your changes to Github.

## Steps

Within the *main.js* file-
  1. Make sure you understand the current code. Add comments. Read the code aloud!
  1. Finish the `newDeck()` function so that it returns a deck of cards as an array of objects - e.g., `[{card: "j"suit: "s"}, {card: "q"suit: "d"}, ...]`
  1. Write a function called `shuffleCards()` that takes the created card deck and returns the it shuffled.
  1. Review the following code, making certain you understand the DOM manipulation:

    ```javascript
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
    ```

Within the *index.html* file-
  1. Add a another button called "Reset!", which clears all cards from the DOM. Think about what needs to happen, if anything, within the JavaScript file.
  1. Make sure this button is only displayed after the end user clicks the "Deal!" button.
  1. After the "Reset!" button is clicked remove or hide it from the DOM.

