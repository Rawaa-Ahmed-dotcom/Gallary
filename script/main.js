let image = document.querySelectorAll("img");
let fullImage = document.querySelector(".full-img");
let newImage = document.querySelector(".full-img img");
let closeIcon = document.querySelector(".full-img span");
let slider = document.querySelectorAll("i");
let currentIndex  = 0;
image.forEach(function(item,index) {
    item.onclick = function() {
    fullImage.style.cssText = "display: flex;";
    newImage.src = item.src;
    currentIndex = index;
    }
});
closeIcon.addEventListener("click", function(){
    fullImage.style.cssText = "display: none";
})

function updateImage(index) {
    if(index >= 0 && index < image.length) {
        newImage.src = image[index].src;
        currentIndex = index;
    }
}
