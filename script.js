var playerChoice = 0;
var computerChoice =0;
var playerScore = 0;
var compScore=0;
var point1 = document.getElementsByClassName("points")[0];
var point2 = document.getElementsByClassName("points")[1];
var preplayerImage = document.getElementsByClassName("image1");
var postComputerImage = document.getElementsByClassName("image2");
var gameCondition = document.getElementsByClassName("state");
var newheight= $(".outerCircle").height();
var newwidth= $(".outerCircle").width();

function setComputerChoice(){
	var randomNumber= Math.random();
	if(randomNumber < .33){
		computerChoice = 0;
	}
	else if ((randomNumber >= .33) && (randomNumber < .66)){
		computerChoice = 1;
	}
	else{
		computerChoice = 2;
	}
}

function battle(){

	setComputerChoice();

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
}

function reuseAnimation(clone, append, classname){
	var playerImage =$(clone).clone().removeClass("");
	$(clone).remove();
	$(append).append(playerImage);
	$(clone).addClass(classname);
}


function addClickInteraction(buttonnumber, image){
	$("div .outerCircle").eq(buttonnumber).click(function(){
	playerChoice = buttonnumber;
	// setComputerChoice();
	battle();
	reuseAnimation("div .image1",".status","reveal");
	preplayerImage[0].innerHTML = "<img class=\"picture3\" src=\"img/"+ image +".png\">"
	// $("div .image1").html("<img class=\"picture3\" src=\"img/"+ image +".png\">")
	reuseAnimation("div .image2",".status","reveal");
	computerReveal();
	addGreen();
});
}


function addGreen(){
	$("#compRock").removeClass("makeGreen");
	$("#compPaper").removeClass("makeGreen");
	$("#compScissor").removeClass("makeGreen");

	if(computerChoice==0){

		var compbutton =$("#compRock").clone().removeClass("");
		$("#compRock").remove();
		$("#Computer").prepend(compbutton);
		$("#compRock").addClass("makeGreen");

	}
	else if(computerChoice ==1){

		var compbutton =$("#compPaper").clone().removeClass("");
		$("#compPaper").remove();
		$("#compRock").after(compbutton);
		$("#compPaper").addClass("makeGreen");
	}
	else if(computerChoice ==2){

		var compbutton =$("#compScissor").clone().removeClass("");
		$("#compScissor").remove();
		$("#Computer").append(compbutton);
		$("#compScissor").addClass("makeGreen");
	}
}

for(var i=0; i<3; i++){
	$("div .outerCircle").eq(i).one("click", function(){
		$(".compText").removeClass("fade");
		$("#Computer .outerCircle").removeClass("fade");
	});
}

addClickInteraction(0,"Rock");
addClickInteraction(1,"Paper");
addClickInteraction(2,"Scissor");



$(".outerCircle").height(newwidth);
// $("#Player").width(newheight);
// $("#Computer").width(newheight);

window.addEventListener("resize",function(){
	var newheight= $(".outerCircle").height();
	$("#Player").width(newheight);
	$("#Computer").width(newheight);
})

