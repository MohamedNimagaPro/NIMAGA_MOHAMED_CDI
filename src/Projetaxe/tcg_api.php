<?php
require '../vendor/autoload.php';

use GuzzleHttp\Client;

header('Content-Type: application/json');

// On désactive le crash automatique de Guzzle en cas d'erreur API pour mieux gérer les erreurs
$client = new Client(['http_errors' => false]); 

// --- 1. MODE BOOSTER ---
if (isset($_GET['action']) && $_GET['action'] === 'booster') {
    $randomPage = rand(1, 50); 
    $url = "https://api.pokemontcg.io/v2/cards?pageSize=10&page={$randomPage}";
    
    $response = $client->request('GET', $url);
    echo $response->getBody();
    exit; // On arrête le script ici
}

// --- 2. MODE RECHERCHE CLASSIQUE ---
$name = $_GET['name'] ?? '';
$type = $_GET['type'] ?? '';
$supertype = $_GET['supertype'] ?? '';
$page = (int)($_GET['page'] ?? 1);

// Construction intelligente des filtres
$queryParts = [];
if (!empty($name)) {
    // Les étoiles permettent de trouver "Dracaufeu" même si on tape juste "Dracau"
    $queryParts[] = 'name:"*' . trim($name) . '*"';
}
if (!empty($type)) {
    $queryParts[] = 'types:"' . $type . '"';
}
if (!empty($supertype)) {
    $queryParts[] = 'supertype:"' . $supertype . '"';
}

// Paramètres de base (la page et le nombre de cartes)
$queryParams = [
    'page' => $page,
    'pageSize' => 20
];

// /!\ LA CORRECTION EST ICI /!\
// On ajoute le paramètre 'q' UNIQUEMENT si l'utilisateur a filtré quelque chose
$qString = implode(' ', $queryParts);
if (!empty($qString)) {
    $queryParams['q'] = $qString;
}

// Requête finale
$response = $client->request('GET', 'https://api.pokemontcg.io/v2/cards', [
    'query' => $queryParams
]);

echo $response->getBody();
?>