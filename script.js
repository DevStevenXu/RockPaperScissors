var player = document.getElementById("Player");
var playerChoice = 0;
var computer = document.getElementById("Computer");
var computerChoice =0;
var body = document.querySelector("body");
var count1 = 0;
var count2=0;
var point1 = document.getElementsByClassName("points")[0];
var point2 = document.getElementsByClassName("points")[1];

function computerChoose(){
	if(Math.random()< .5){
		return 0;
	}
	else {
		return 1;
	}
}

function battle(){
	computerChoice = computerChoose();
	//alert(computerChoice + " is computer");

	if(playerChoice == computerChoice){
		alert("Tie");
	}
	else if(playerChoice < computerChoice){
		alert("Lose");
	}
	else{
		count1++;
		point1.innerHTML = count1;
		alert("Win")
	}
}


player.getElementsByClassName("outerCircle")[0].addEventListener("click", function(){
	playerChoice = 0;
	// count1++;
	// point1.innerHTML = count1;
	battle();

});

player.getElementsByClassName("outerCircle")[1].addEventListener("click", function(){
	//count1++;
	//point1.innerHTML = count1;
	playerChoice = 1;
	battle();
});



// computer.getElementsByClassName("outerCircle")[0].addEventListener("click", function(){
// 	count2++;
	//point2.innerHTML = count2;
// });
// Player.addEventListener("click", function(){
// 	alert("Hi");
// });

// body.addEventListener("click", function(){
// 	alert("Hi");
// });





