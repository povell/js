var imgContainer = document.querySelector(".img-container");
var buttonContainer = document.querySelector(".button-container");
var buttonLeft = document.createElement('button');
buttonLeft.innerHTML = "<";
buttonLeft.onclick = onClickLeft;
buttonContainer.appendChild(buttonLeft);
var buttonRight = document.createElement('button');
buttonRight.innerHTML = ">";
buttonRight.onclick = onClickRight;
buttonContainer.appendChild(buttonRight);
var images = [];
var currentImg = 0;

for(var i=0; i<3; i++){
    images.push({"id": i, "src": "./img/picture" + (i+1) + ".jpg"});
}

imgContainer.style.backgroundImage = "url(" + images[currentImg].src + ")";

console.log(currentImg);

function onClickRight(){
    if(currentImg == (images.length-1))
        currentImg = 0;
    else
        currentImg ++;

    imgContainer.style.backgroundImage = "url(" + images[currentImg].src + ")";
}

function onClickLeft(){
    if(currentImg == 0)
        currentImg = (images.length-1);
    else
        currentImg --;

    imgContainer.style.backgroundImage = "url(" + images[currentImg].src + ")";
}