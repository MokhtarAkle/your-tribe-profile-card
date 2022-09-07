
var showButton = document.querySelector("#openButton");
var frontAnimation = document.querySelector("#animationFront");
var middleAnimation = document.querySelector("#animationMiddle");
var rightAnimation = document.querySelector("#animationRight");
var flipButton = document.querySelector("#showCards");



function testExpand(){
  if(frontAnimation.classList.contains("check") || frontAnimation.classList.contains("frontTransformationFlip")){ /* add class with styling for backside when available */
    frontAnimation.classList.remove("frontTransformationBack");
    frontAnimation.classList.remove("frontTransformationFlip");
    frontAnimation.classList.remove("check");
    frontAnimation.classList.remove("frontTransformationFlipB");
    frontAnimation.classList.toggle("frontTransformation");
    flipButton.disabled = true;

  }
  else{
    frontAnimation.classList.toggle("frontTransformation");
    frontAnimation.classList.add("frontTransformationBack");
    frontAnimation.classList.add("check");
    flipButton.disabled = false;
  }

  if(middleAnimation.classList.contains("check")){
    middleAnimation.classList.remove("middleTransformationBack");
    middleAnimation.classList.remove("check");
    middleAnimation.classList.toggle("middleTransformation");
  }
  else{
    middleAnimation.classList.toggle("middleTransformation");
    middleAnimation.classList.add("middleTransformationBack");
    middleAnimation.classList.add("check");
  }

  if(rightAnimation.classList.contains("check")){
    rightAnimation.classList.remove("rightTransformationBack");
    rightAnimation.classList.remove("check");
    rightAnimation.classList.toggle("rightTransformation");
  }
  else{
    rightAnimation.classList.toggle("rightTransformation");
    rightAnimation.classList.add("rightTransformationBack");
    rightAnimation.classList.add("check");
  }

}

function testFlip(){
  if(frontAnimation.classList.contains("check")){
    frontAnimation.classList.remove("frontTransformationFlipB");
    frontAnimation.classList.remove("check");
    frontAnimation.classList.toggle("frontTransformationFlip")
  }
  else{
    frontAnimation.classList.toggle("frontTransformationFlip");
    frontAnimation.classList.remove("frontTransformationBack");
    frontAnimation.classList.add("frontTransformationFlipB");
    frontAnimation.classList.add("check");
  }
}

showButton.addEventListener("click", testExpand);
flipButton.addEventListener("click", testFlip);



