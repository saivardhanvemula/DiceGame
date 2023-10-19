// function getRandImg(){
//     let n=Math.random()*6;
//     n=Math.floor(n)+1;
//     // console.log("./assets/dice"+n+".png");
//     return "assets/dice"+n+".png";
// }
var dices =document.getElementsByTagName("img");
var n1=Math.floor(Math.random()*6)+1;
dices[0].setAttribute("src","./assets/dice"+n1+".png");
var n2=Math.floor(Math.random()*6)+1;
dices[1].setAttribute("src","./assets/dice"+n2+".png");
var txt=document.getElementsByTagName("h1");
if(n1>n2){
    txt[0].innerHTML="Player 1 wins!";
}
else if (n2 > n1) {
    txt[0].innerHTML="Player 2 wins!";
}else{
    txt[0].innerHTML="It's a tie."
}
// d1=rand(6);
// dices[0].getAttribute("src")="./"
// d2=rand(6);