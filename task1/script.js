var imgSmallContainer = document.querySelector(".img-small");
var imgBigContainer = document.querySelector(".img-big");
var smallImg;
var errorFiller = document.createElement('div');
errorFiller.innerHTML = "Изображение не найдено";
errorFiller.className = "img-big__img";
errorFiller.style.display = "none";
imgBigContainer.appendChild(errorFiller);
var bigImg = document.createElement('img');
bigImg.className = "img-big__img";
bigImg.onerror = onError;
bigImg.onload = onLoad;
imgBigContainer.appendChild(bigImg);

for(var i=0; i<3; i++){
    smallImg = document.createElement('div');
    smallImg.className = "img-small__img";
    smallImg.id = i;
    smallImg.style.backgroundImage = "url(./small/picture" + (i+1) + ".jpg)";
    imgSmallContainer.appendChild(smallImg);
    smallImg.onclick = onClick;
}

function onClick(e) {
    var num = parseInt(e.target.id) + 1;
    bigImg.src = "./big/picture" + num + ".jpg";
}

function onError(e) {
    bigImg.style.display = "none";
    errorFiller.style.display = "block";
}

function onLoad(e) {
    if(errorFiller.style.display == "block"){
        errorFiller.style.display = "none";
        bigImg.style.display = "block";
    }
}