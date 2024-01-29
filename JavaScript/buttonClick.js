document.getElementById('LinkedInButton').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/iolivers/', '_blank');
}, true);

document.getElementById('GithubButton').addEventListener('click', function() {
    window.open('https://github.com/iOlivers', '_blank');
}, true);


let slideV = 0;

const sourceImg = ["Bluetooth Gym Occupancy Tracker", "HTML/CSS Portfolio Site","Webscrapping Discord Chat Bot"];

function slide(n){
    slideV += n;
    if (slideV >= sourceImg.length) {
        slideV = 0; 
    } else if (slideV < 0) {
        slideV = sourceImg.length - 1;
    }

    document.querySelector('.carousel-img').src = "assets/Project0" + (slideV + 1) + ".png";
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