for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function (event){
        makesound(event.key);
        buttonAnimation(event.key);
    });
}
function makesound(key)
{
    switch (key) 
        {
            case "w":
                var audio=new Audio("/Drum/sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("/Drum/sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("/Drum/sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("/Drum/sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("/Drum/sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("/Drum/sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("/Drum/sounds/tom-4.mp3");
                audio.play();
                break;
            default:
                break;
            }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}