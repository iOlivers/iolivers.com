document.getElementById('LinkedInButton').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/iolivers/', '_blank');
}, true);

document.getElementById('GithubButton').addEventListener('click', function() {
    window.open('https://github.com/iOlivers', '_blank');
}, true);

document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'https://iolivers.com';
}, true);


let slideV = 0;

const sourceImg = ["Webscrapping Discord Chat Bot","IoT Gym Occupancy Tracker", "HTML/CSS Portfolio Site"];

function slide(n){
    slideV += n;
    if (slideV >= sourceImg.length) {
        slideV = 0; 
    } else if (slideV < 0) {
        slideV = sourceImg.length - 1;
    }

    document.querySelector('.carousel-img').src = "assets/Project" + (slideV + 1) + ".png";
    document.querySelector('.projectTitle').textContent = sourceImg[slideV];
}

document.getElementById('Next').addEventListener('click', function() {
    slide(1);
    console.log(slideV);
}, true);

document.getElementById('Prev').addEventListener('click', function() {
    slide(-1);
    console.log(slideV);
}, true);

document.getElementById('viewProjectButton').addEventListener('click', function() {
    window.location.href = window.location.href + '/Projects/project' + (slideV + 1) + '.html';
    console.log(window.location.href);
}, true);