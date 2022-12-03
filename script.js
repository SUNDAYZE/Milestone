//Add a jumping function for kirby in order to avoid the bad guys
var kirby =document.getElementById('kirby');
var enemy = document.getElementById("enemy");
var counter=0;

function jump(){
    if(kirby.classList == "animate"){return}
    kirby.classList.add("animate");
    setTimeout(function(){
        kirby.classList.remove("animate");
    },300);
}
