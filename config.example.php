<?php
// Copy this file to config.php and fill in your database credentials
// config.php is excluded from version control (.gitignore)

$host     = 'localhost';
$dbname   = 'busmandu_db';
$username = 'your_mysql_username';
$password = 'your_mysql_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
