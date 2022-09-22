
var showButton = document.querySelector("#openButton");
var frontAnimation = document.querySelector("#animationFront");
var middleAnimation = document.querySelector("#animationMiddle");
var rightAnimation = document.querySelector("#animationRight");
var flipButton = document.querySelector("#showCards");
var frontBackanim = document.querySelector("#frontBackside");



function testExpand(){
  if(frontAnimation.classList.contains("check") || frontAnimation.classList.contains("frontTransformationFlip")){ /* add class with styling for backside when available */
    frontAnimation.classList.remove("frontTransformationBack", "frontTransformationFlip", "check", "frontTransformationFlipB");
    frontAnimation.classList.toggle("frontTransformation");
    flipButton.disabled = true;

  }
  else{
    frontAnimation.classList.toggle("frontTransformation");
    frontAnimation.classList.add("frontTransformationBack", "check");
    flipButton.disabled = false;
  }

  if(middleAnimation.classList.contains("check")){
    middleAnimation.classList.remove("middleTransformationBack", "check");
    middleAnimation.classList.toggle("middleTransformation");
  }
  else{
    middleAnimation.classList.toggle("middleTransformation");
    middleAnimation.classList.add("middleTransformationBack", "check");
  }

  if(rightAnimation.classList.contains("check")){
    rightAnimation.classList.remove("rightTransformationBack", "check");
    rightAnimation.classList.toggle("rightTransformation");
  }
  else{
    rightAnimation.classList.toggle("rightTransformation");
    rightAnimation.classList.add("rightTransformationBack", "check");
  }

}

function testFlip(){
  if(frontAnimation.classList.contains("check")){
    frontAnimation.classList.remove("frontTransformationFlipB", "check");
    frontAnimation.classList.toggle("frontTransformationFlip")
    setTimeout(testFlipChange, 2000);
    frontBackanim.style.opacity = "1";
  }
  else{
    frontAnimation.classList.toggle("frontTransformationFlip");
    frontAnimation.classList.remove("frontTransformationBack");
    frontAnimation.classList.add("frontTransformationFlipB", "check");
    frontBackanim.style.opacity = "0";

  }
}

function testFlipChange(){
  frontAnimation.classList.add("backSide");
}
showButton.addEventListener("click", testExpand);
flipButton.addEventListener("click", testFlip);



