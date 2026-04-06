// Sample route data with distances (approximate in km) and coordinates (lat, lon)
const routes = {
    'sajha-lagankhel-satdobato': {
        stops: [
            { name: 'Lagankhel', lat: 27.6650, lon: 85.3250 },
            { name: 'Satdobato', lat: 27.6500, lon: 85.3250 },
            { name: 'Koteshwor', lat: 27.6750, lon: 85.3500 },
            { name: 'Airport', lat: 27.6960, lon: 85.3590 },
            { name: 'Bhaktapur', lat: 27.6720, lon: 85.4290 }
        ],
        name: 'Lagankhel ↔ Satdobato ↔ Koteshwor ↔ Airport ↔ Bhaktapur',
        distance: 25
    },
    'sajha-kalanki-tripureshwor': {
        stops: [
            { name: 'Kalanki', lat: 27.6930, lon: 85.2800 },
            { name: 'Tripureshwor', lat: 27.6940, lon: 85.3130 },
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Gaushala', lat: 27.7060, lon: 85.3450 },
            { name: 'Boudhanath', lat: 27.7210, lon: 85.3620 }
        ],
        name: 'Kalanki ↔ Tripureshwor ↔ Ratna Park ↔ Gaushala ↔ Boudhanath',
        distance: 15
    },
    'sajha-gongabu-ratnapark': {
        stops: [
            { name: 'Gongabu New Bus Park', lat: 27.7330, lon: 85.3110 },
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Balkhu', lat: 27.6780, lon: 85.2990 },
            { name: 'Kirtipur', lat: 27.6780, lon: 85.2750 },
            { name: 'TU', lat: 27.6820, lon: 85.2860 }
        ],
        name: 'Gongabu New Bus Park ↔ Ratna Park ↔ Balkhu ↔ Kirtipur ↔ TU',
        distance: 20
    },
    'nepal-ratna-koteshwor': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Koteshwor', lat: 27.6750, lon: 85.3500 },
            { name: 'Bhaktapur', lat: 27.6720, lon: 85.4290 },
            { name: 'Suryabinayak', lat: 27.6570, lon: 85.4210 }
        ],
        name: 'Ratna Park ↔ Koteshwor ↔ Bhaktapur ↔ Suryabinayak',
        distance: 20
    },
    'nepal-new-balaju': {
        stops: [
            { name: 'New Bus Park', lat: 27.7330, lon: 85.3110 },
            { name: 'Balaju', lat: 27.7290, lon: 85.3020 },
            { name: 'Maharajgunj', lat: 27.7370, lon: 85.3260 },
            { name: 'Budhanilkantha', lat: 27.7780, lon: 85.3590 }
        ],
        name: 'New Bus Park ↔ Balaju ↔ Maharajgunj ↔ Budhanilkantha',
        distance: 15
    },
    'nepal-lagankhel-gwarko': {
        stops: [
            { name: 'Lagankhel', lat: 27.6650, lon: 85.3250 },
            { name: 'Gwarko', lat: 27.6640, lon: 85.3390 },
            { name: 'Koteshwor', lat: 27.6750, lon: 85.3500 },
            { name: 'Jadibuti', lat: 27.6760, lon: 85.3750 },
            { name: 'Bhaktapur', lat: 27.6720, lon: 85.4290 }
        ],
        name: 'Lagankhel ↔ Gwarko ↔ Koteshwor ↔ Jadibuti ↔ Bhaktapur',
        distance: 25
    },
    'mahanagar-ratna-thamel': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Thamel', lat: 27.7150, lon: 85.3110 },
            // FIX: Removed duplicate "Gongabu" stop — Gongabu and New Bus Park are the same
            // location. Merged into single "Gongabu New Bus Park" entry with correct coords.
            { name: 'Gongabu New Bus Park', lat: 27.7330, lon: 85.3110 }
        ],
        name: 'Ratna Park ↔ Thamel ↔ Gongabu New Bus Park',
        distance: 10
    },
    'mahanagar-lagankhel-kalanki': {
        stops: [
            { name: 'Lagankhel', lat: 27.6650, lon: 85.3250 },
            { name: 'Satdobato', lat: 27.6500, lon: 85.3250 },
            { name: 'Balkhu', lat: 27.6780, lon: 85.2990 },
            { name: 'Kalanki', lat: 27.6930, lon: 85.2800 },
            { name: 'Kalimati', lat: 27.7000, lon: 85.2900 }
        ],
        name: 'Lagankhel ↔ Satdobato ↔ Balkhu ↔ Kalanki ↔ Kalimati',
        distance: 15
    },
    'mahanagar-ratna-lazimpat': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Lazimpat', lat: 27.7190, lon: 85.3190 },
            { name: 'Maharajgunj', lat: 27.7370, lon: 85.3260 },
            { name: 'Bansbari', lat: 27.7470, lon: 85.3360 }
        ],
        name: 'Ratna Park ↔ Lazimpat ↔ Maharajgunj ↔ Bansbari',
        distance: 10
    },
    'mayur-ratna-chabahil': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Chabahil', lat: 27.7170, lon: 85.3460 },
            { name: 'Jorpati', lat: 27.7220, lon: 85.3740 },
            { name: 'Sundarijal', lat: 27.7690, lon: 85.4110 }
        ],
        name: 'Ratna Park ↔ Chabahil ↔ Jorpati ↔ Sundarijal',
        distance: 20
    },
    'mayur-gongabu-chapali': {
        stops: [
            { name: 'Gongabu', lat: 27.7330, lon: 85.3110 },
            { name: 'Maharajgunj', lat: 27.7370, lon: 85.3260 },
            { name: 'Chapali', lat: 27.7470, lon: 85.3440 }
        ],
        name: 'Gongabu ↔ Maharajgunj ↔ Chapali',
        distance: 10
    },
    'mayur-lagankhel-thankot': {
        stops: [
            { name: 'Lagankhel', lat: 27.6650, lon: 85.3250 },
            { name: 'Kalanki', lat: 27.6930, lon: 85.2800 },
            { name: 'Thankot', lat: 27.6830, lon: 85.2410 }
        ],
        name: 'Lagankhel ↔ Kalanki ↔ Thankot',
        distance: 15
    },
    'mikro-ratna-gaushala': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Gaushala', lat: 27.7060, lon: 85.3450 },
            { name: 'Boudhanath', lat: 27.7210, lon: 85.3620 },
            { name: 'Sundarijal', lat: 27.7690, lon: 85.4110 }
        ],
        name: 'Ratna Park ↔ Gaushala ↔ Boudhanath ↔ Sundarijal',
        distance: 20
    },
    'mikro-ratna-baneshwor': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Baneshwor', lat: 27.6900, lon: 85.3360 },
            { name: 'Tinkune', lat: 27.6880, lon: 85.3490 },
            { name: 'Koteshwor', lat: 27.6750, lon: 85.3500 }
        ],
        name: 'Ratna Park ↔ Baneshwor ↔ Tinkune ↔ Koteshwor',
        distance: 10
    },
    'mikro-jamal-pashupati': {
        stops: [
            { name: 'Jamal', lat: 27.7080, lon: 85.3130 },
            { name: 'Pashupatinath', lat: 27.7100, lon: 85.3480 },
            { name: 'Chabahil', lat: 27.7170, lon: 85.3460 },
            { name: 'Jorpati', lat: 27.7220, lon: 85.3740 }
        ],
        name: 'Jamal ↔ Pashupatinath ↔ Chabahil ↔ Jorpati',
        distance: 15
    },
    'city-ratna-kalanki': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Tripureshwor', lat: 27.6940, lon: 85.3130 },
            { name: 'Kalimati', lat: 27.7000, lon: 85.2900 },
            { name: 'Kalanki', lat: 27.6930, lon: 85.2800 }
        ],
        name: 'Ratna Park ↔ Tripureshwor ↔ Kalimati ↔ Kalanki',
        distance: 10
    },
    'city-new-baluwatar': {
        stops: [
            { name: 'New Bus Park', lat: 27.7330, lon: 85.3110 },
            { name: 'Maharajgunj', lat: 27.7370, lon: 85.3260 },
            { name: 'Baluwatar', lat: 27.7270, lon: 85.3290 },
            { name: 'Bansbari', lat: 27.7470, lon: 85.3360 }
        ],
        name: 'New Bus Park ↔ Maharajgunj ↔ Baluwatar ↔ Bansbari',
        distance: 10
    },
    'city-ratna-lagankhel': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Lagankhel', lat: 27.6650, lon: 85.3250 },
            { name: 'Patan Durbar Square', lat: 27.6720, lon: 85.3250 }
        ],
        name: 'Ratna Park ↔ Lagankhel ↔ Patan Durbar Square',
        distance: 5
    },
    'blue-lagankhel-gwarko': {
        stops: [
            { name: 'Lagankhel', lat: 27.6650, lon: 85.3250 },
            { name: 'Gwarko', lat: 27.6640, lon: 85.3390 },
            { name: 'Koteshwor', lat: 27.6750, lon: 85.3500 }
        ],
        name: 'Lagankhel ↔ Gwarko ↔ Koteshwor',
        distance: 5
    },
    'blue-sundhara-chabahil': {
        stops: [
            { name: 'Sundhara', lat: 27.7000, lon: 85.3120 },
            { name: 'Chabahil', lat: 27.7170, lon: 85.3460 },
            { name: 'Boudhanath', lat: 27.7210, lon: 85.3620 }
        ],
        name: 'Sundhara ↔ Chabahil ↔ Boudhanath',
        distance: 5
    },
    'blue-ratna-kirtipur': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Kirtipur', lat: 27.6780, lon: 85.2750 },
            { name: 'TU', lat: 27.6820, lon: 85.2860 }
        ],
        name: 'Ratna Park ↔ Kirtipur ↔ TU',
        distance: 10
    },
    'safaa-ratna-kalimati': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'New Road', lat: 27.7040, lon: 85.3100 },
            { name: 'Tripureshwor', lat: 27.6940, lon: 85.3130 },
            { name: 'Kalimati', lat: 27.7000, lon: 85.2900 }
        ],
        name: 'Ratna Park ↔ New Road ↔ Tripureshwor ↔ Kalimati',
        distance: 5
    },
    'safaa-lagankhel-kirtipur': {
        stops: [
            { name: 'Lagankhel', lat: 27.6650, lon: 85.3250 },
            { name: 'Satdobato', lat: 27.6500, lon: 85.3250 },
            { name: 'Balkhu', lat: 27.6780, lon: 85.2990 },
            { name: 'Kirtipur', lat: 27.6780, lon: 85.2750 }
        ],
        name: 'Lagankhel ↔ Satdobato ↔ Balkhu ↔ Kirtipur',
        distance: 10
    },
    'safaa-ratna-koteshwor': {
        stops: [
            { name: 'Ratna Park', lat: 27.7040, lon: 85.3150 },
            { name: 'Baneshwor', lat: 27.6900, lon: 85.3360 },
            { name: 'Koteshwor', lat: 27.6750, lon: 85.3500 }
        ],
        name: 'Ratna Park ↔ Baneshwor ↔ Koteshwor',
        distance: 5
    },
    'blue-sundhara-airport': {
        stops: [
            { name: 'Sundhara', lat: 27.7000, lon: 85.3120 },
            { name: 'Tinkune', lat: 27.6880, lon: 85.3490 },
            { name: 'Baneshwor', lat: 27.6900, lon: 85.3360 },
            { name: 'Airport', lat: 27.6960, lon: 85.3590 }
        ],
        name: 'Sundhara ↔ Tinkune ↔ Baneshwor ↔ Airport',
        distance: 10
    },
    'blue-lagankhel-pulchowk': {
        stops: [
            { name: 'Lagankhel', lat: 27.6650, lon: 85.3250 },
            { name: 'Pulchowk', lat: 27.6780, lon: 85.3160 },
            { name: 'Patan Durbar Square', lat: 27.6720, lon: 85.3250 }
        ],
        name: 'Lagankhel ↔ Pulchowk ↔ Patan Durbar Square',
        distance: 5
    },
    'blue-kalanki-swoyambhu': {
        stops: [
            { name: 'Kalanki', lat: 27.6930, lon: 85.2800 },
            { name: 'Swoyambhu', lat: 27.7150, lon: 85.2910 },
            { name: 'Sitapaila', lat: 27.7170, lon: 85.2740 }
        ],
        name: 'Kalanki ↔ Swoyambhu ↔ Sitapaila',
        distance: 5
    },
    'city-naxal-koteshwor': {
        stops: [
            { name: 'Naxal', lat: 27.7150, lon: 85.3260 },
            { name: 'Hattisar', lat: 27.7120, lon: 85.3190 },
            { name: 'PutaliSadak', lat: 27.7060, lon: 85.3170 },
            { name: 'New Baneshwor', lat: 27.6900, lon: 85.3360 },
            { name: 'Tinkune', lat: 27.6880, lon: 85.3490 },
            { name: 'Koteshwor', lat: 27.6750, lon: 85.3500 }
        ],
        name: 'Naxal ↔ Hattisar ↔ PutaliSadak ↔ New Baneshwor ↔ Tinkune ↔ Koteshwor',
        distance: 7
    }
};

// FIX: calculateFare is now the single source of truth for fare calculation.
// The `fare` property has been removed from route data to avoid duplication.
// Distance-based fare calculation (2025 rates) with minimum fare of Rs. 15
function calculateFare(distance) {
    let fare = 0;
    if (distance <= 5) fare = 20;
    else if (distance <= 10) fare = 25;
    else if (distance <= 15) fare = 30;
    else if (distance <= 20) fare = 35;
    else fare = 40;
    return Math.max(fare, 15);
}

// Calculate student fare (45% less than normal fare) with minimum of Rs. 15
function calculateStudentFare(normalFare) {
    const studentFare = Math.round(normalFare * 0.55);
    return Math.max(Math.round(studentFare / 5) * 5, 15);
}

// Get DOM elements
const routeItems = document.querySelectorAll('.route-item');
const stopsContainer = document.getElementById('stops-container');
const stopsTitle = document.getElementById('stops-title');
const searchInput = document.getElementById('searchInput');
const startLocation = document.getElementById('start-location');
const endLocation = document.getElementById('end-location');
const busResult = document.getElementById('bus-result');
const feedbackName = document.getElementById('feedback-name');
const feedbackEmail = document.getElementById('feedback-email');
const feedbackRating = document.getElementById('feedback-rating');
const feedbackComment = document.getElementById('feedback-comment');

// Leaflet map variables
let map;
let routeLayer = null;
let markers = []; // Track markers to clear them on reset
let baseLayer = null; // Track the base tile layer to preserve it

let selectedRouteId = null;
let selectionState = 0; // 0: no selection, 1: first stop selected, 2: second stop selected

// Initialize Leaflet map
function initMap() {
    map = L.map('map').setView([27.7000, 85.3000], 12); // Center on Kathmandu
    baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// Function to display stops and make them selectable
function displayStops(routeId) {
    selectedRouteId = routeId;
    const route = routes[routeId];
    stopsTitle.textContent = 'Bus Stops';
    stopsContainer.innerHTML = '';
    route.stops.forEach((stop, index) => {
        const stopElement = document.createElement('div');
        stopElement.className = 'stop-item';
        stopElement.textContent = stop.name;
        stopElement.style.animationDelay = `${index * 0.1}s`;
        stopElement.addEventListener('click', () => handleStopSelection(stop.name));
        stopsContainer.appendChild(stopElement);
    });
    updateStopSelection();
}

// Handle stop selection
function handleStopSelection(stop) {
    if (selectionState === 0) {
        startLocation.value = stop;
        selectionState = 1;
    } else if (selectionState === 1) {
        if (stop !== startLocation.value) {
            endLocation.value = stop;
            selectionState = 2;
            findBus(); // Automatically find bus after selecting destination
        }
    }
    updateStopSelection();
}

// Update stop selection styling
function updateStopSelection() {
    const stopItems = document.querySelectorAll('.stop-item');
    stopItems.forEach(item => item.classList.remove('selected'));
    if (startLocation.value) {
        const startItem = Array.from(stopItems).find(item => item.textContent === startLocation.value);
        if (startItem) startItem.classList.add('selected');
    }
    if (endLocation.value) {
        const endItem = Array.from(stopItems).find(item => item.textContent === endLocation.value);
        if (endItem) endItem.classList.add('selected');
    }
}

// Route click handler
routeItems.forEach(item => {
    item.addEventListener('click', function() {
        routeItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        const routeId = this.dataset.route;
        displayStops(routeId);
        startLocation.value = '';
        endLocation.value = '';
        busResult.style.display = 'none';
        selectionState = 0;
        resetMap();
    });
});

// Search functionality
function searchRoutes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let found = false;

    routeItems.forEach(item => {
        const routeText = item.textContent.toLowerCase();
        const routeId = item.dataset.route;

        if (searchTerm === '' || routeText.includes(searchTerm)) {
            item.style.display = 'block';
            if (!found && searchTerm !== '') {
                item.classList.add('active');
                routeItems.forEach(i => i !== item && i.classList.remove('active'));
                displayStops(routeId);
                found = true;
            }
        } else {
            item.style.display = 'none';
        }
    });

    if (!found && searchTerm !== '') {
        stopsTitle.textContent = 'Bus Stops';
        stopsContainer.innerHTML = '<div class="stop-item">No routes found matching your search.</div>';
    }
}

// FIX: findBus now uses calculateFare(route.distance) instead of the removed route.fare property,
// making calculateFare the single, active fare calculation path.
function findBus() {
    const start = startLocation.value.trim();
    const end = endLocation.value.trim();
    let result = 'No suitable route found. Please enter or select valid start and end locations.';

    if (start && end) {
        for (const [routeId, route] of Object.entries(routes)) {
            const startStop = route.stops.find(s => s.name.toLowerCase() === start.toLowerCase());
            const endStop = route.stops.find(s => s.name.toLowerCase() === end.toLowerCase());

            if (startStop && endStop) {
                const startIndex = route.stops.findIndex(s => s.name.toLowerCase() === start.toLowerCase());
                const endIndex = route.stops.findIndex(s => s.name.toLowerCase() === end.toLowerCase());
                const minIndex = Math.min(startIndex, endIndex);
                const maxIndex = Math.max(startIndex, endIndex);
                const routePath = route.stops.slice(minIndex, maxIndex + 1).map(s => s.name).join(' ↔ ');

                // FIX: calculateFare() is now called here — it was previously defined but unused
                const normalFare = calculateFare(route.distance);
                const studentFare = calculateStudentFare(normalFare);

                // Calculate estimated travel time (assuming 20 km/h average speed in city traffic)
                const travelTimeHours = route.distance / 20;
                const travelTime = travelTimeHours < 1
                    ? Math.round(travelTimeHours * 60) + ' min'
                    : Math.round(travelTimeHours) + ' hr';

                result = `Route: ${routePath}<br>Distance: ${route.distance} km<br>Estimated Time: ${travelTime}<br>Normal Fare: Rs. ${normalFare}<br>Student Fare: Rs. ${studentFare}`;

                fetchRoute(startStop.lat, startStop.lon, endStop.lat, endStop.lon, startStop.name, endStop.name);
                selectedRouteId = routeId;
                break;
            }
        }
    }

    busResult.innerHTML = result;
    busResult.style.display = 'block';
}

// FIX: Changed http:// to https:// to prevent mixed-content errors on HTTPS-served pages
function fetchRoute(startLat, startLon, endLat, endLon, startName, endName) {
    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${endLon},${endLat}?overview=full&geometries=geojson`;

    fetch(osrmUrl)
        .then(response => response.json())
        .then(data => {
            if (data.code === 'Ok') {
                const routeCoords = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);

                if (routeLayer) {
                    map.removeLayer(routeLayer);
                }

                routeLayer = L.polyline(routeCoords, { color: '#567390', weight: 5 }).addTo(map);

                markers.forEach(marker => map.removeLayer(marker));
                markers = [];

                const startMarker = L.marker([startLat, startLon]).addTo(map).bindPopup(`Start: ${startName}`).openPopup();
                const endMarker = L.marker([endLat, endLon]).addTo(map).bindPopup(`End: ${endName}`);
                markers.push(startMarker, endMarker);

                map.fitBounds(routeLayer.getBounds());
            } else {
                console.error('No route found:', data.message);
            }
        })
        .catch(error => console.error('Error fetching route:', error));
}

// Reset map function
function resetMap() {
    map.eachLayer(layer => {
        if (layer !== baseLayer) {
            map.removeLayer(layer);
        }
    });
    routeLayer = null;
    markers = [];
    if (!map.hasLayer(baseLayer)) {
        baseLayer.addTo(map);
    }
    map.setView([27.7000, 85.3000], 12);
}

// Reset form and map
function resetForm() {
    startLocation.value = '';
    endLocation.value = '';
    busResult.style.display = 'none';
    selectionState = 0;
    updateStopSelection();
    resetMap();
}

// Reset everything
function resetAll() {
    routeItems.forEach(item => item.classList.remove('active'));
    stopsContainer.innerHTML = '';
    startLocation.value = '';
    endLocation.value = '';
    busResult.style.display = 'none';
    selectionState = 0;
    stopsTitle.textContent = 'Bus Stops';
    updateStopSelection();
    resetMap();
    routeItems[0].click();
}

// Submit feedback
function submitFeedback() {
    const name = feedbackName.value;
    const email = feedbackEmail.value;
    const rating = feedbackRating.value;
    const comment = feedbackComment.value;

    if (name && email && rating && comment) {
        alert('Thank you for your feedback!');
        feedbackName.value = '';
        feedbackEmail.value = '';
        feedbackRating.value = '';
        feedbackComment.value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Enter key press for search
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchRoutes();
    }
});

// Initialize map and display first route on page load
initMap();
routeItems[0].click();