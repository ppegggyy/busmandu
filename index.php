<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BusMandu - Kathmandu Bus Routes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <!-- Leaflet CSS for OpenStreetMap -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="#" onclick="resetAll()">
                <img src="Logo.png" alt="BusMandu Logo" class="header-logo">
            </a>
            <div class="header-text">
                <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?></h1>
                <p><a href="logout.php" style="color: white; text-decoration: none;">Logout</a></p>
            </div>
        </div>

        <div class="search-container">
            <button class="home-btn" onclick="resetAll()" aria-label="Return to Home">
                <i class="fa-solid fa-house"></i> Home
            </button>
            <input type="text" class="search-bar" id="searchInput" placeholder="Search routes by location (e.g., Thamel, Patan)">
            <button class="search-btn" onclick="searchRoutes()" aria-label="Search Routes">
                <i class="fa-solid fa-magnifying-glass"></i> Search
            </button>
        </div>

        <div class="content">
            <div class="route-list">
                <h2>Bus Routes</h2>
                <!-- FIX: Both Bhaktapur routes now have distinct labels -->
                <div class="route-item" data-route="sajha-lagankhel-satdobato">Lagankhel ↔ Bhaktapur (Sajha)</div>
                <div class="route-item" data-route="sajha-kalanki-tripureshwor">Kalanki ↔ Boudhanath</div>
                <div class="route-item" data-route="sajha-gongabu-ratnapark">Gongabu New Bus Park ↔ TU</div>
                <div class="route-item" data-route="nepal-ratna-koteshwor">Ratna Park ↔ Suryabinayak</div>
                <div class="route-item" data-route="nepal-new-balaju">New Bus Park ↔ Budhanilkantha</div>
                <!-- FIX: Renamed from "Lagankhel ↔ Bhaktapur" to distinguish from sajha route -->
                <div class="route-item" data-route="nepal-lagankhel-gwarko">Lagankhel ↔ Bhaktapur (via Gwarko)</div>
                <div class="route-item" data-route="mahanagar-ratna-thamel">Ratna Park ↔ New Bus Park</div>
                <div class="route-item" data-route="mahanagar-lagankhel-kalanki">Lagankhel ↔ Kalimati</div>
                <div class="route-item" data-route="mahanagar-ratna-lazimpat">Ratna Park ↔ Bansbari</div>
                <div class="route-item" data-route="mayur-ratna-chabahil">Ratna Park ↔ Sundarijal</div>
                <div class="route-item" data-route="mayur-gongabu-chapali">Gongabu ↔ Chapali</div>
                <div class="route-item" data-route="mayur-lagankhel-thankot">Lagankhel ↔ Thankot</div>
                <div class="route-item" data-route="mikro-ratna-gaushala">Ratna Park ↔ Sundarijal (Mikro)</div>
                <div class="route-item" data-route="mikro-ratna-baneshwor">Ratna Park ↔ Koteshwor</div>
                <div class="route-item" data-route="mikro-jamal-pashupati">Jamal ↔ Jorpati</div>
                <div class="route-item" data-route="city-ratna-kalanki">Ratna Park ↔ Kalanki</div>
                <div class="route-item" data-route="city-new-baluwatar">New Bus Park ↔ Bansbari</div>
                <div class="route-item" data-route="city-ratna-lagankhel">Ratna Park ↔ Patan Durbar Square</div>
                <div class="route-item" data-route="blue-lagankhel-gwarko">Lagankhel ↔ Koteshwor</div>
                <div class="route-item" data-route="city-naxal-koteshwor">Naxal ↔ Koteshwor</div>
                <div class="route-item" data-route="blue-sundhara-chabahil">Sundhara ↔ Boudhanath</div>
                <div class="route-item" data-route="blue-ratna-kirtipur">Ratna Park ↔ TU</div>
                <div class="route-item" data-route="safaa-ratna-kalimati">Ratna Park ↔ Kalimati</div>
                <div class="route-item" data-route="safaa-lagankhel-kirtipur">Lagankhel ↔ Kirtipur</div>
                <div class="route-item" data-route="safaa-ratna-koteshwor">Ratna Park ↔ Koteshwor (Safaa)</div>
                <div class="route-item" data-route="blue-sundhara-airport">Sundhara ↔ Airport</div>
                <div class="route-item" data-route="blue-lagankhel-pulchowk">Lagankhel ↔ Patan Durbar Square</div>
                <div class="route-item" data-route="blue-kalanki-swoyambhu">Kalanki ↔ Sitapaila</div>
            </div>

            <div class="stops-info">
                <div class="stops-list">
                    <h2 id="stops-title">Bus Stops</h2>
                    <div id="stops-container">
                        <!-- Stops will be populated by JavaScript -->
                    </div>
                </div>

                <div class="bus-finder">
                    <h3>Find Your Bus</h3>
                    <label for="start-location">Starting Location:</label>
                    <input type="text" id="start-location" placeholder="e.g., Ratna Park">
                    <label for="end-location">Destination:</label>
                    <input type="text" id="end-location" placeholder="e.g., Koteshwor">
                    <div class="button-group">
                        <button onclick="findBus()">Find Bus</button>
                        <button onclick="resetForm()">Reset</button>
                    </div>
                    <div id="bus-result" class="bus-result"></div>
                </div>
            </div>
        </div>

        <div class="map-section">
            <h2>Kathmandu Route Map</h2>
            <div class="map-placeholder">
                <div id="map"></div>
            </div>
        </div>

        <div class="feedback-section">
            <h2>Feedback</h2>
            <div class="feedback-form">
                <form id="feedback-form" onsubmit="event.preventDefault(); submitFeedback()">
                    <label for="feedback-name">Name:</label>
                    <input type="text" id="feedback-name" placeholder="Your Name" required>
                    <label for="feedback-email">Email:</label>
                    <input type="email" id="feedback-email" placeholder="Your Email" required>
                    <label for="feedback-rating">Rating (1-5):</label>
                    <input type="number" id="feedback-rating" min="1" max="5" placeholder="Rate us" required>
                    <label for="feedback-comment">Comments:</label>
                    <textarea id="feedback-comment" placeholder="Your Feedback" required></textarea>
                    <button type="submit">Submit Feedback</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script src="script.js"></script>
    <!-- FIX: Removed injected Cloudflare challenge script that was accidentally committed -->
</body>
</html>