<?php
// Autoload
require '../vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

// Variables
$ville = $_GET['city'] ?? 'Nice';
$apiKey = '913d4f1af175b6dc281793742e320714';

$client = new Client();

try {
    // API
    $reponse = $client->request('GET', 'https://api.openweathermap.org/data/2.5/weather', [
        'query' => [
            'q' => $ville,
            'appid' => $apiKey,
            'units' => 'metric',
            'lang' => 'fr'
        ]
    ]);
    
    // JSON
    header('Content-Type: application/json');
    echo $reponse->getBody();
    
} catch (RequestException $e) {
    // Erreur
    http_response_code(404);
    echo json_encode(['erreur' => 'Introuvable']);
}