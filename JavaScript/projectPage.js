document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'https://iolivers.com';
}, true);

document.getElementById('returnButton').addEventListener('click', function() {
    window.location.href = "https://iolivers.com"
}, true);

document.getElementById('githubButton').addEventListener('click', function() {
    window.open(this.getAttribute('data-url'), '_blank');
}, true);