

document.querySelector(".button").addEventListener("click",handleClick);
var state=true;
  var myAudio = new Audio("http://51.15.208.163:8081/radio/kashmiri_1/icecast.audio");
function handleClick(){
  state =!state;
  //alert("Clicked");
  if(state){
    myAudio.pause();
  }else{
    myAudio.play();
  }
  //alert(""+Number(state) );
  document.querySelector(".control-image").setAttribute("src","images/"+Number(state)+".png");
}

//var name = new Audio("source.mp3");
//name.play();
