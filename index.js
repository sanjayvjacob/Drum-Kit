
var numberOfItems = document.querySelectorAll(".drum").length; //.length - to see how many elements we got that have a class of drum

for(var i=0;i<numberOfItems;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    
    console.log(this.innerHTML);
  });
  
}




// var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
