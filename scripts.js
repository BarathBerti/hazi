document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

const apiEndpoint = 'https://randomuser.me/api/';


fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        document.getElementById('user-image').src = user.picture.large;
    })
    .catch(error => console.error('Error fetching data:', error));
