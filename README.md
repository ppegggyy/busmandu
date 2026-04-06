# 🚌 BusMandu — Kathmandu Bus Route Finder

> A web-based application to help commuters navigate Kathmandu's public bus network with ease.

![BusMandu Logo](Logo.png)

---

## 📌 Overview

BusMandu is a PHP-based web application that lets users search, browse, and plan journeys across **28+ bus routes** in the Kathmandu Valley. It features an interactive OpenStreetMap integration, fare estimation, and a simple user authentication system.

---

## ✨ Features

- 🗺️ **Interactive Map** — Real-time route visualization using Leaflet.js + OpenStreetMap
- 🔍 **Route Search** — Filter routes by location name (e.g., "Thamel", "Koteshwor")
- 🚏 **Stop Browser** — Click any route to see all stops; click a stop to auto-fill your journey
- 🧮 **Fare Calculator** — Normal and student fares (45% discount) calculated per route
- ⏱️ **Travel Time Estimate** — Approximate journey duration based on distance
- 🔐 **User Authentication** — Register, login, and logout with hashed passwords
- 💬 **Feedback Form** — Collect user ratings and comments

---

## 🗂️ Project Structure

```
busmandu/
├── index.php          # Main app (protected, requires login)
├── login.php          # Login page
├── register.php       # Registration page
├── logout.php         # Session destroy + redirect
├── config.php         # Database connection (DO NOT commit — see setup)
├── config.example.php # Template for database config
├── script.js          # All frontend logic (routes, map, search, fare)
├── styles.css         # Responsive stylesheet
└── Logo.png           # App logo
```

---

## ⚙️ Requirements

| Requirement | Version |
|-------------|---------|
| PHP         | 7.4+    |
| MySQL       | 5.7+ / MariaDB 10+ |
| Web Server  | Apache (XAMPP) or Nginx |
| Browser     | Any modern browser |

---

## 🚀 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/busmandu.git
cd busmandu
```

### 2. Set up the database

Open **phpMyAdmin** (or your MySQL client) and run:

```sql
CREATE DATABASE busmandu_db;

USE busmandu_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Configure the database connection

Copy the example config and fill in your credentials:

```bash
cp config.example.php config.php
```

Edit `config.php`:

```php
$host     = 'localhost';
$dbname   = 'busmandu_db';
$username = 'root';   // your MySQL username
$password = '';       // your MySQL password
```

> ⚠️ `config.php` is listed in `.gitignore` and must never be committed.

### 4. Place files in your server root

For **XAMPP**: copy the project folder into `htdocs/busmandu/`

### 5. Start Apache & MySQL, then visit:

```
http://localhost/busmandu/
```

---

## 🛣️ Supported Routes

BusMandu covers routes across these operators:

| Operator | Example Routes |
|----------|---------------|
| **Sajha Yatayat** | Lagankhel ↔ Bhaktapur, Kalanki ↔ Boudhanath |
| **Nepal Yatayat** | Ratna Park ↔ Suryabinayak, New Bus Park ↔ Budhanilkantha |
| **Mahanagar** | Ratna Park ↔ New Bus Park, Lagankhel ↔ Kalimati |
| **Mayur** | Ratna Park ↔ Sundarijal, Gongabu ↔ Chapali |
| **Mikro** | Ratna Park ↔ Sundarijal, Jamal ↔ Jorpati |
| **City Bus** | Ratna Park ↔ Kalanki, Ratna Park ↔ Patan Durbar Square |
| **Blue Line** | Lagankhel ↔ Koteshwor, Sundhara ↔ Airport |
| **Safaa Tempo** | Ratna Park ↔ Kalimati, Lagankhel ↔ Kirtipur |

---

## 💰 Fare Structure (2025)

| Distance | Normal Fare | Student Fare (~45% off) |
|----------|-------------|--------------------------|
| ≤ 5 km   | Rs. 20      | Rs. 15                   |
| ≤ 10 km  | Rs. 25      | Rs. 15                   |
| ≤ 15 km  | Rs. 30      | Rs. 20                   |
| ≤ 20 km  | Rs. 35      | Rs. 20                   |
| > 20 km  | Rs. 40      | Rs. 25                   |

---

## 🔒 Security Notes

- Passwords are hashed using PHP's `password_hash()` with `PASSWORD_DEFAULT`
- PDO prepared statements are used for all database queries
- `config.php` is excluded from version control via `.gitignore`
- All user output is passed through `htmlspecialchars()` to prevent XSS

---

## 🌐 External Dependencies (CDN)

| Library | Purpose |
|---------|---------|
| [Leaflet.js v1.9.4](https://leafletjs.com/) | Interactive map |
| [OpenStreetMap](https://www.openstreetmap.org/) | Map tiles |
| [OSRM](https://project-osrm.org/) | Route geometry |
| [Font Awesome 6.7.2](https://fontawesome.com/) | Icons |

---

## 📸 Screenshots

> _Add screenshots of the main page, route view, and map here._

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Team

Developed as part of a college project for navigating Kathmandu's public transport system.

---

> **BusMandu** — Because finding your bus in Kathmandu shouldn't be a journey in itself. 🚌
