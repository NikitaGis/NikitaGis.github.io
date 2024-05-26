document.addEventListener("DOMContentLoaded", () => {
    const imagePaths = [
        'paveiksliukai/vilnius-1029640_1280.jpg',
        'paveiksliukai/2dc8ec80-79d9-11ed-8ced-6f58a6938111.jpg',
        'paveiksliukai/4d0dfc00-54fb-11ed-9e15-5541a264a90e.jpg',
        'paveiksliukai/579525-334048-756x425.jpg',
        'paveiksliukai/1385830-454433-1287x836.jpg',
        'paveiksliukai/uzupis-29.jpg',
        'paveiksliukai/vilnius-senamiestis-stikliu-g.jpg',
        'paveiksliukai/yit_basanaicius_realu4-crop-1200x675.png',
        // Add more image paths here
    ];

    let currentIndex = 0;
    const backgroundDiv = document.getElementById('header');

    function changeBackground() {
        // Add CSS class to trigger transition
        backgroundDiv.classList.add('fade-out');

        // Set new background image after the transition
        setTimeout(() => {
            backgroundDiv.style.backgroundImage = `url(${imagePaths[currentIndex]})`;
            currentIndex = (currentIndex + 1) % imagePaths.length;
            // Remove CSS class after transition ends
            setTimeout(() => {
                backgroundDiv.classList.remove('fade-out');
            }, 500); // Adjust the duration to match transition time
        }, 500); // Adjust the duration to match transition time
    }

    setInterval(changeBackground, 7000);
    
    changeBackground();
});
