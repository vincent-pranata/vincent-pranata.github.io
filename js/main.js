var index = 1;
var index_ = 0;

function next_image(n) {
  current_image(index += n);
}

function current_image(n) {
  show_image(index = n);
}

function init(){
    show_image(1);
    show_fun_fact();
}

function show_image(n) {
    var i;
    var images = document.getElementsByClassName("images");
    var dots = document.getElementsByClassName("dot");
    if (n > images.length) {
        index = 1;
    }    
    if (n < 1) {
        index = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[index-1].style.display = "block";  
    dots[index-1].className += " active";
}

function show_fun_fact(){
    var i;
    var images = document.getElementsByClassName("images-ff");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    index_++;
    if (index_ > images.length) {
        index_ = 1;
    }    
    if (index_ < 1) {
        index_ = images.length;
    }
    images[index_-1].style.display = "block"; 
    setTimeout(show_fun_fact, 3000);
}