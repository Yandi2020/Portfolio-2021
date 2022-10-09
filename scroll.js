//Smooth Scroll

function smoothScroll(destination, duration){
    const target = document.querySelector(destination);

    //get the distancen between top of screen window and top of your target
    const targetPosition = target.getBoundingClientRect().top;

    //if you are at the top of screen window, the number is 0,
    //if you scroll down the page, the number will be increased,
    //it is relative to the top of window
    let startPosition = window.pageYOffset;

    //get the distance between target and your starting position
    let distance = targetPosition - startPosition;
    let startTime = null;

    //loop through function animation at 60 FPS
    function animation(currentTime){
        //console.log(startTime, currentTime);
        //startTime is when the page starts refreshing, the page is loaded
        //because we set startTime = null, startTime = currentTime
        //so startTime is time, after page loaded, until user actually clicked button
        if(startTime === null) startTime = currentTime;

        //currentTime is actually keeping tracking current moment, it keeps going
        //until timeElapsed > duration
        let timeElapsed = currentTime - startTime;
        const scrollAnimation = ease(timeElapsed, startPosition, distance, duration);
        //run this function only in vertical direction (horizontal, vertical)
        window.scrollTo(0, scrollAnimation);
        
        //when timeElapsed > duration, then it will not run this loop any more 
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    //easing in/out - acceleration until halfway, then deceleration
    //make animation looks nice 
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    //do the smooth scroll animation
    requestAnimationFrame(animation);
}

//scroll from Nav to About Section
const aboutButton = document.querySelector('#my-nav #about-button');
aboutButton.addEventListener('click', () => {
    smoothScroll('#about', 1000);
});

const skillsButton = document.querySelector('#my-nav #skills-button');
skillsButton.addEventListener('click', () => {
    smoothScroll('#skills', 1000);
});

const projectsButton = document.querySelector('#my-nav #projects-button');
projectsButton.addEventListener('click', () => {
    smoothScroll('#projects', 1000);
});

const arrowDown = document.querySelector('#intro .info .fas');
arrowDown.addEventListener('click', () => {
    smoothScroll('#about', 1000);
});

const arrowUp = document.querySelector('footer .goback .fas');
arrowUp.addEventListener('click', () => {
    smoothScroll('#my-nav', 1200);
});



