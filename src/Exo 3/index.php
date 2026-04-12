<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Météo</title>
</head>
<body>
    <input type="text" id="city" placeholder="Ville">
    <button id="getWeather">Chercher</button>
    <div id="weather"></div>

    <script>
        // Clic
        document.getElementById("getWeather").addEventListener('click', () => {
            const city = document.getElementById('city').value || 'Nice';
            const url = `weather.php?city=${city}`;

            // Requête
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error("Erreur");
                    return response.json();
                })
                .then(data => {
                    // Affichage
                    document.getElementById('weather').innerHTML = `
                        <p><strong>Ville : </strong>${data.name}</p>
                        <p><strong>Météo : </strong>${data.weather[0].description}</p>
                        <p><strong>Température : </strong>${data.main.temp} °C</p>
                        <p><strong>Humidité : </strong>${data.main.humidity}%</p>
                    `;
                })
                .catch(error => {
                    // Erreur
                    document.getElementById('weather').innerText = "Données indisponibles";
                });
        });
    </script>
</body>
</html>