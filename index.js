
var numberOfItems = document.querySelectorAll(".drum").length; //.length - to see how many elements we got that have a class of drum

for(var i=0;i<numberOfItems;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    alert("I got clicked");
  });
  
}





