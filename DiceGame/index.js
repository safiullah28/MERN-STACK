var dice1=Math.floor(Math.random()*6)+1;
var randomdiceimage= "dice"+ dice1 +".png";
var randomImageSource = "images/"+randomdiceimage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var dice2= Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + dice2 + ".png";
var randomImageSource2 = "images/" + randomdiceimage;


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(dice1>dice2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if(dice1<dice2){
        document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}