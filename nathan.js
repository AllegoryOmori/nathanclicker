var count = 0;
document.getElementById("nathan").onclick = function(){
    document.getElementById("counter").innerHTML = count;
    count += 1;
    
if(count >= 30){
    document.getElementById("counter").innerHTML = count;
    count+= 2;
    document.getElementById("z").innerHTML="Level 2: Goofy Nathan";
}
if(count>=500){
    document.getElementById("counter").innerHTML = count;
    count+=5;
    document.getElementById("nathan").src="Nate1.png";
    document.getElementById("z").innerHTML="Level 3: Normal Nathan";
    document.getElementById("y").innerHTML="You have unlocked the amogusnotcopyrightedhopefully™ Nathan Skin!";
}
if(count>=5000){
    count+=10;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("nathan").src="Nate2.png";
    document.getElementById("y").innerHTML="You have unlocked the ShrenkxNate™ Nathan Skin! " + "You have reached the beta!";
    document.getElementById("z").innerHTML="Level 4: Based Nathan";

}
}

