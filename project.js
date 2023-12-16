const accordion = document.getElementsByClassName('class-container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        // Use a closure to capture the value of i
        let currentElement = accordion[i];
        currentElement.classList.toggle('active');
    });
}
