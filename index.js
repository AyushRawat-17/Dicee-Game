var randomnumber1;
var randomnumber2;
function Dice(){
    randomnumber1= Math.random();
    randomnumber1=Math.floor(randomnumber1*6)+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber1+".png");    
    randomnumber2= Math.random();
    randomnumber2=Math.floor(randomnumber2*6)+1;
    document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");
}
function changeName(){
    if(randomnumber1===randomnumber2)
    {
        document.querySelector("h1").innerHTML="Draw!";
    }
    if(randomnumber2>randomnumber1)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins!";   
    }
    if(randomnumber1>randomnumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 Wins!";   
    }
}
Dice()
changeName();
