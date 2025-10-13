const circle = document.querySelector(".circle");
const cupImg = document.querySelector(".large-cup");

function changeColor(color){

    circle.style.backgroundColor = color;
}

function changeImg(image){
    cupImg.src = image
}