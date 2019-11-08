console.log("Up and running!");

//var cardOne = "queen" ;
//var cardTwo = "queen" ;
//var cardThree = "king" ;
//var cardFour = "king" ;
//console.log("User flipped " + cardOne) ;
//console.log("User flipped " +cardThree) ;
//alert('Hello, Friends ^_^');
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];
function checkForMatch(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
				alert("You found a match :)");}
		else{
				alert("Sorry, try again :(");}}
			}
function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log(cardId);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	checkForMatch();

	}
function createBoard(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}
createBoard();
//flipCard(2);
//flipCard(3);
