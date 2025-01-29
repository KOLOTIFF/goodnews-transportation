// Google Places Autocomplete
let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        { types: ['geocode'] }
    );
}

// Add Multiple Stops
let stopCount = 1;
function addStop() {
    stopCount++;
    const newStop = document.createElement('input');
    newStop.type = 'text';
    newStop.name = `stop${stopCount}`;
    newStop.placeholder = 'Add another stop (optional)';
    document.getElementById('stopsContainer').appendChild(newStop);
}

// Flatpickr Calendar
flatpickr('#dateTime', {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today"
});

// Form Submission Handling
document.getElementById('serviceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add real-time tracking integration here (e.g., Websockets or API)
    this.submit();
    alert('Request submitted! We’ll send tracking details via email.');
});
