var count = 0;
document.getElementById("nathan").onclick = function(){
    document.getElementById("counter").innerHTML = count;
    count += Math.floor(Math.random() *3 + 1);
    
if(count >= 30){
    document.getElementById("counter").innerHTML = count;
    count+=Math.floor(Math.random() *6 + 1);
    document.getElementById("z").innerHTML="Level 2: Goofy Nathan";
}
if(count>=500){
    document.getElementById("counter").innerHTML = count;
    count+=Math.floor(Math.random() *12+ 1);;
    Math.floor(Math.random() *12 + 1);
    document.getElementById("nathan").src="Nate1.png";
    document.getElementById("z").innerHTML="Level 3: Normal Nathan";
    document.getElementById("y").innerHTML="You have unlocked the amogusnotcopyrightedhopefully™ Nathan Skin!";
}
if(count>=5000){    

    count += Math.floor(Math.random() *18+ 1);
    document.getElementById("counter").innerHTML = count;
    document.getElementById("nathan").src="Nate2.png";
    document.getElementById("y").innerHTML="You have unlocked the ShrenkxNate™ Nathan Skin!";
    document.getElementById("z").innerHTML="Level 4: Based Nathan";

}
if(count>=100000){
    count += Math.floor(Math.random() *100+ 1);
    document.getElementById("nathan").src="Nate3.png";
    document.getElementById("counter").innerHTML = count;
    document.getElementById("y").innerHTML="You Have unlocked Goated™ Nathan Skin! " + "You have reached the End!";
    document.getElementById("z").innerHTML="Level 5: Goated Nathan";
    document.getElementById("nathan").src="Deadgoat.png";
 
}
}
