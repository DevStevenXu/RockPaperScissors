var player = document.getElementById("Player");
var playerChoice = 0;
var computer = document.getElementById("Computer");
var computerChoice =0;
var body = document.querySelector("body");
var playerScore = 0;
var compScore=0;
var point1 = document.getElementsByClassName("points")[0];
var point2 = document.getElementsByClassName("points")[1];
var postplayerImage = document.getElementsByClassName("rock");
var preplayerImage = document.getElementsByClassName("image1");
var postComputerImage = document.getElementsByClassName("image2");
var gameCondition = document.getElementsByClassName("state");


function computerChoose(){
	var randomNumber= Math.random();
	if(randomNumber< .33){

		return 0;
	}
	else if ((randomNumber >= .33) && (randomNumber < .66)){

		return 1;
	}
	else{
		return 2;
	}
}

function setChoice(){
	computerChoice = computerChoose();
}
function battle(){
	// alert(computerChoice)
	if(playerChoice == computerChoice){
		gameCondition[0].innerHTML= "Tie";
	}

	else if(playerChoice <= 1){
		if(computerChoice == playerChoice+1){
			compScore++;
			point2.innerHTML = compScore;
			gameCondition[0].innerHTML= "Lose";
		}
		else{
			playerScore++;
			point1.innerHTML = playerScore;
			gameCondition[0].innerHTML= "Win";
		}
	}

	else if (playerChoice == 2){
		if(computerChoice ==0){
			compScore++;
			point2.innerHTML = compScore;
			gameCondition[0].innerHTML= "Lose";
		}
		else{
			playerScore++;
			point1.innerHTML = playerScore;
			gameCondition[0].innerHTML= "Win";
		}
	}
}

// function removeClass(className){
// 	className[0].classList.remove("reveal");
// }

function computerReveal(){
	if(computerChoice==0){
		postComputerImage[0].innerHTML = "<img src=\"img/Rock.png\">";
	}
	else if(computerChoice==1){
		postComputerImage[0].innerHTML = "<img src=\"img/Paper.png\">";	
	}
	else if(computerChoice==2){
		postComputerImage[0].innerHTML = "<img src=\"img/Scissor.png\">";		
	}
	else{
		postComputerImage[0].innerHTML = "error";
	}
}



// player.getElementsByClassName("outerCircle")[0].addEventListener("click", function(){
// 	playerChoice = 0;
// 	battle();
	// $("h1"){
	// 	$("#alsospecial").addClass("reveal");
	// 	var newrock = $(".image1").clone.removeClass("");
	// 	$(".image1").remove();
	// 	$(".unique").append(newrock);
	// 	$(".image1").addClass("reveal");
	// }
// });

// function setDelay(index, number){
// 	setTimeout(function(){
// 		computer.getElementsByClassName("outerCircle")[index].style.backgroundColor = "white";
// 	}, 1000);
// };

function clickAnimation(){
	var newCompRock =$("div .image2").clone().removeClass("");
	$("div .image2").remove();
	$(".status").append(newCompRock);
	computerReveal();
	$("div .image2").addClass("reveal");
}

function addGreen(){
	$("#compRock").removeClass("makeGreen");
	$("#compPaper").removeClass("makeGreen");
	$("#compScissor").removeClass("makeGreen");

	if(computerChoice==0){
		$("#compRock").addClass("makeGreen");
	}
	else if(computerChoice ==1){
		$("#compPaper").addClass("makeGreen");
	}
	else if(computerChoice ==2){
		$("#compScissor").addClass("makeGreen");	
	}
}

$("div .outerCircle").eq(0).click(function(){
	playerChoice = 0;
	setChoice();
	battle();
	var newrock = $("div .image1").clone().removeClass("");
	$("div .image1").remove();
	$(".status").append(newrock);
	$("div .image1").html("<img class=\"picture3\" src=\"img/Rock.png\">")
	$("div .image1").addClass("reveal");

	// var newCompRock =$("div .image2").clone().removeClass("");
	// $("div .image2").remove();
	// $(".status").append(newCompRock);
	// computerReveal();
	// $("div .image2").addClass("reveal");
	clickAnimation();
	addGreen();
	



	// $("#Computer").removeClass("");
	// var compRock = $("#compRock").clone().removeClass("");
	// $("#Computer .outerCircle").eq(0).remove();
	// $("#Computer").prepend(compRock);
	// $("#compRock").addClass("makeGreen");
	// $("#Computer").removeClass("makeGreen");

});

$("div .outerCircle").eq(1).click(function(){
	playerChoice=1;
	setChoice();
	battle();
	var newrock = $("div .image1").clone().removeClass("");
	$("div .image1").remove();
	$(".status").append(newrock);
	$("div .image1").html("<img src=\"img/Paper.png\">")
	$("div .image1").addClass("reveal");
	
	// var newCompRock =$("div .image2").clone().removeClass("");
	// $("div .image2").remove();
	// $(".status").append(newCompRock);
	// computerReveal();
	// $("div .image2").addClass("reveal");
	clickAnimation();
	addGreen();
	
});

$("div .outerCircle").eq(2).click(function(){
	playerChoice=2;
	setChoice();
	battle();
	var newrock = $("div .image1").clone().removeClass("");
	$("div .image1").remove();
	$(".status").append(newrock);
	$("div .image1").html("<img src=\"img/Scissor.png\">")
	$("div .image1").addClass("reveal");
	
	// var newCompRock =$("div .image2").clone().removeClass("");
	// $("div .image2").remove();
	// $(".status").append(newCompRock);
	// computerReveal();
	// $("div .image2").addClass("reveal");

	clickAnimation();
	addGreen();
	
});

// player.getElementsByClassName("outerCircle")[1].addEventListener("click", function(){
// 	playerChoice = 1;
// 	setChoice();
// 	battle();
	//preplayerImage[0].innerHTML = "<img src=\"img/Paper.png\">" ;
// });


// player.getElementsByClassName("outerCircle")[2].addEventListener("click", function(){
// 	setChoice();
// 	playerChoice = 2;
// 	battle();
	//preplayerImage[0].innerHTML = "<img src=\"img/Scissor.png\">" ;
// });


// computer.getElementsByClassName("outerCircle")[0].addEventListener("click", function(){
// });
// Player.addEventListener("click", function(){
// 	alert("Hi");
// });

// body.addEventListener("click", function(){
// 	alert("Hi");
// });



