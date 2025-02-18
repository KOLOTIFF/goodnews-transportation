document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded');
    
    // Initialize Google Maps Autocomplete
    function initAutocomplete(id) {
        let input = document.getElementById(id);
        new google.maps.places.Autocomplete(input);
    }

    // Smooth scrolling for menu links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
