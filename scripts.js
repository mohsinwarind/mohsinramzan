document.addEventListener("DOMContentLoaded", function() {
    const text = "Hey there! I'm Mohsin, a passionate developer who loves building creative digital experiences.";  
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 50); // Speed of typing
        }
    }
    setTimeout(typeEffect, 1000); // Delay before typing starts
});
