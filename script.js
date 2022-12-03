//Add a jumping function for kirby in order to avoid the bad guys
var kirby =document.getElementById('kirby');
var counter=0;

function jump(){
    if(kirby.classList == "animate"){return}
    kirby.classList.add("animate");
    setTimeout(function(){
        kirby.classList.remove("animate");
    },300);
}