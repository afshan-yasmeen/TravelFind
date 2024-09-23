const destinations = [
    {
        name: 'Beach Paradise',
        image: 'images/beach1.jpg', // Change to your image path
        description: 'A perfect getaway with golden sands and crystal-clear waters.'
    },
    {
        name: 'Mountain Escape',
        image: 'images/mountaineascape.jpg', // Change to your image path
        description: 'Experience the thrill of hiking and breathtaking views.'
    },
    {
        name: 'Cultural Haven',
        image: 'images/temple1.jpg', // Change to your image path
        description: 'Immerse yourself in rich history and vibrant cultures.'
    },
    {
        name: 'Historical Wonders',
        image: 'images/country2.jpg', // Change to your image path
        description: 'Explore ancient ruins and marvel at historical sites.'
    },
    // Add more destinations as needed
];

document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = ''; // Clear previous results

    const results = destinations.filter(destination => destination.name.toLowerCase().includes(query));
    
    if (results.length > 0) {
        results.forEach(destination => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}" class="result-image" />
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
            `;
            resultsList.appendChild(div);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No recommendations found';
        resultsList.appendChild(li);
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('search-bar').value = '';
    document.getElementById('results-list').innerHTML = ''; // Clear results on clear
});


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const dates = document.getElementById('dates').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || destination === '' || dates === '') {
        alert('Please fill out all required fields.');
    } else {
        alert(`Booking request submitted!\nName: ${name}\nEmail: ${email}\nDestination: ${destination}\nTravel Dates: ${dates}\nMessage: ${message}`);
        
        // Clear the form after submission
        document.getElementById('bookingForm').reset();
    }
});
