var slideIndex = 1;

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("updates__slide");
    console.log("x is: " + x);
    var dots = document.getElementsByClassName("demo");
        console.log("What is 'n'?: " + n);
        console.log("What is 'x.length'?: " + x.length);
    if (n > x.length) {slideIndex = 1}
        console.log("n > x.lenght? (1 if YES): " + slideIndex);
    if (n < 1) {slideIndex = x.length}
        console.log("slideIndex is x.length: " + x.length);
    for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
    }
        console.log("x[slideIndex - 1]: " + x[slideIndex - 1]);
        console.log("x: " + x);
        console.log("x[0]: " + x[0]);
    x[slideIndex-1].style.display = "block";
        console.log("x[slideIndex - 1]: " + x[slideIndex - 1]);
    dots[slideIndex-1].className += " w3-white";
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

showDivs(1);
