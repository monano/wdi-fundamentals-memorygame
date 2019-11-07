console.log("Up and running!");

//var cardOne = "queen" ;
//var cardTwo = "queen" ;
//var cardThree = "king" ;
//var cardFour = "king" ;
const cards = ["queen","queen","king","king"];
const cardsInPlay = [];
var cardOne = cards[2];
var cardTwo = cards[3];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);
//console.log("User flipped " + cardOne) ;
//console.log("User flipped " +cardThree) ;

//alert('Hello, Friends ^_^');

if(cardsInPlay.length === 2)
{
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match :)");
	}
	else
	{
		alert("Sorry, try again :(");
	}
}
