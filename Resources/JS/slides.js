let slideIndex = 0; //current slide
autoSlides(slideIndex); // makes current slide show and sets all other slides to invisible

// Incriments current slide used to make slideshow automatic
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// sets current slide to any value used with the buttons on bottom
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//makes current slide show and sets all other slides to invisible
function showSlides(n) { // Input slide index to show 0 - slide.length - 1

    let slides = document.getElementsByClassName("myslides"); //Get an array of all elements with class "mySlides"
    let dots = document.getElementsByClassName("dot"); //Get an array of all elements with class "dot"
    console.log(slides)

    if (n > slides.length) {slideIndex = 0} // Prevent out of bounds error even though there should not be any way for an OOB to happen
    if (n < 0) {slideIndex = slides.length - 1} //Same but in reverse

    for (let i = 0; i < slides.length; i++) { // Make all slides in array invisible
        slides[i].style.display = "none";
        console.log('slides set to invis')
    }

    for (let i = 0; i < dots.length; i++) { // Turn all dots from active to NULL
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n].style.display = "grid"; // sets active slide to display in grid
    dots[n].className += " active"; // button corresponding to slide marked active'
    slideIndex++;
    if (slideIndex === slides.length) {slideIndex = 0;}
}

function autoSlides(timer) {
    setInterval(showSlides(slideIndex), timer);
}