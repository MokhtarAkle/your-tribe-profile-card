
var showButton = document.querySelector("#showCards");
var frontAnimation = document.querySelector(".animationFront");
var middleAnimation = document.querySelector(".animationMiddle");
var rightAnimation = document.querySelector(".animationRight");



function testExpand(){
  if(frontAnimation.classList.contains("animationFront")){
    frontAnimation.classList.remove("animationFront");
    frontAnimation.classList.add("frontTransformation");
  }
  else{
    frontAnimation.classList.remove("frontTransformation");
    frontAnimation.classList.add("animationFront");
  }

  if(middleAnimation.classList.contains("animationMiddle")){
    middleAnimation.classList.remove("animationMiddle");
    middleAnimation.classList.add("middleTransformation");
  }
  else{
    middleAnimation.classList.remove("middleTransformation");
    middleAnimation.classList.add("animationMiddle");
  }

  if(rightAnimation.classList.contains("animationRight")){
    rightAnimation.classList.remove("animationRight");
    rightAnimation.classList.add("rightTransformation");
  }
  else{
    rightAnimation.classList.remove("rightTransformation");
    rightAnimation.classList.add("animationRight");
  }

}

showButton.addEventListener("click", testExpand);




