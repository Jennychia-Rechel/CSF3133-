document.addEventListener("DOMContentLoaded", function () {
    
    // --- Collapsible Logic ---
    const collapsibleButton = document.querySelector(".collapsible-wrapper .collapsible");
    const content = document.querySelector(".content");

    collapsibleButton.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });

    // --- Progress Bar Logic ---
    const progressBar = document.getElementById("progress-bar");
    const increaseButton = document.getElementById("increase-progress");
    let progress = 0;

    increaseButton.addEventListener("click", function () {
        if (progress < 100) {
            progress += 10;
            progressBar.style.width = progress + "%";
        } else {
            alert("Progress is complete!");
        }
    });

    // --- Automatic Slideshow Logic ---
    let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
    showSlides();
});