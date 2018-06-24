var modal = document.getElementById('myModal');
var reviewText = document.getElementById("review-text");
var reviewTitle = document.getElementById("review-title");
var bgImage = document.getElementById("bg-image");

var span = document.getElementsByClassName("close")[0];

function reviewButton_onClick(elem) {
    reviewText.innerHTML = elem.getAttribute("review");
    reviewTitle.innerHTML = elem.getAttribute("title");
    modal.style.display = "block";
}

function buyProduct(elem) {
    window.open(elem.getAttribute("url"), '_blank');
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

bgImage.onmouseenter = function () {
    bgImage.setAttribute("src", "smilingpanda.svg");
}

bgImage.onmouseleave = function () {
    bgImage.setAttribute("src", "panda.svg");
}