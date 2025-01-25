document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to Good News Transportation!');

    function initAutocomplete() {
        var input1 = document.getElementById('pickup');
        var input2 = document.getElementById('dropoff');
        var input3 = document.getElementById('stops');

        new google.maps.places.Autocomplete(input1);
        new google.maps.places.Autocomplete(input2);
        new google.maps.places.Autocomplete(input3);
    }

    initAutocomplete();
});
function initAutocomplete(inputId) {
    var input = document.getElementById(inputId);
    if (input) {
        new google.maps.places.Autocomplete(input);
    }
}
