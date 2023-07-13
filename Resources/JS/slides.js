var slideIndex = 0; //current slide
showSlides()
//autoSlides(5000); // makes current slide show and sets all other slides to invisible

// Incriments current slide used to make slideshow automatic
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// sets current slide to any value used with the buttons on bottom
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//makes current slide show and sets all other slides to invisible
function showSlides() { // Input slide index to show 0 - slide.length - 1

    console.log(slideIndex);
    let slides = document.getElementsByClassName("myslides"); //Get an array of all elements with class "mySlides"
    let dots = document.getElementsByClassName("dot"); //Get an array of all elements with class "dot"
    console.log(slides)

    if (slideIndex >= slides.length) {slideIndex = 0; console.log("N > slide.length")} // Prevent out of bounds error even though there should not be any way for an OOB to happen
    if (slideIndex < 0) {slideIndex = slides.length - 1; console.log("N < 0")} //Same but in reverse

    for (let i = 0; i < slides.length; i++) { // Make all slides in array invisible
        slides[i].style.display = "none";
        console.log('slides set to invis')
    }

    for (let i = 0; i < dots.length; i++) { // Turn all dots from active to NULL
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (screen.width <= 425){
        slides[slideIndex].style.display = "flex";
    } else {
        slides[slideIndex].style.display = "grid"; // sets active slide to display in grid
    }
    dots[slideIndex].className += " active"; // button corresponding to slide marked active'
    if (slideIndex === slides.length) {slideIndex = 0; console.log("N === slide.length")}
    slideIndex++;
}

function autoSlides(timer) {
    setInterval(showSlides, timer);
}