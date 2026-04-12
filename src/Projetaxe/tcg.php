<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PokéGame - Cartes TCG</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Orbitron:wght@700&display=swap" rel="stylesheet">
    
    <style>
        /* --- CSS POUR L'ANIMATION DU BOOSTER --- */
        .booster-card {
            perspective: 1000px;
            width: 200px;
            height: 280px;
            cursor: pointer;
            margin: 10px;
        }
        .booster-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
            transform-style: preserve-3d;
        }
        .booster-card.flipped .booster-card-inner {
            transform: rotateY(180deg) scale(1.1);
        }
        .booster-card-front, .booster-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }
        /* Dos de la carte (Face cachée) */
        .booster-card-front {
            background: url('https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg') no-repeat center/cover;
            border: 2px solid #000;
        }
        /* Face de la carte (L'image API) */
        .booster-card-back {
            transform: rotateY(180deg);
            background: #111;
        }
        .booster-card-back img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        .booster-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <header class="main-header">
        <div class="logo">
            <h1>Poké<span>Game</span></h1>
        </div>
        
        <div class="header-controls">
            <button id="theme-toggle" class="theme-btn">🌙</button>
            <button id="burger-btn" aria-label="Ouvrir le menu">☰</button>
        </div>

        <nav id="sidebar" class="nav-menu">
            <button id="close-btn" aria-label="Fermer le menu">&times;</button>
            <ul>
                <li><a href="index.html">Collection</a></li>
                <li><a href="profile.html">Mon Inventaire</a></li>
                <li><a href="tcg.php" class="active" style="color: var(--secondary); text-shadow: 0 0 10px rgba(229,0,90,0.5);">🔥 Pokémon TCG</a></li>
                <li><a href="login.html">Déconnexion</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <div style="text-align: center; margin-bottom: 30px;">
            <button id="open-booster-btn" class="btn-primary" style="font-size: 1.5rem; padding: 15px 40px; border-radius: 50px; box-shadow: 0 0 20px rgba(229,0,90,0.5); width: auto;">
                🎁 Ouvrir un Booster (10 Cartes)
            </button>
        </div>

        <section class="filters glass-panel" style="justify-content: center; gap: 15px; flex-wrap: wrap;">
            <div class="search-box">
                <input type="text" id="tcg-search-input" placeholder="Chercher une carte (ex: Dracaufeu)...">
            </div>
            
            <select id="tcg-supertype-select" class="modal-select" style="width: auto;">
                <option value="">Toutes les catégories</option>
                <option value="Pokémon">Pokémon</option>
                <option value="Trainer">Dresseur</option>
                <option value="Energy">Énergie</option>
            </select>

            <select id="tcg-type-select" class="modal-select" style="width: auto;">
                <option value="">Tous les types</option>
                <option value="Colorless">Incolore</option>
                <option value="Darkness">Ténèbres</option>
                <option value="Dragon">Dragon</option>
                <option value="Fairy">Fée</option>
                <option value="Fighting">Combat</option>
                <option value="Fire">Feu</option>
                <option value="Grass">Plante</option>
                <option value="Lightning">Électrik</option>
                <option value="Metal">Métal</option>
                <option value="Psychic">Psy</option>
                <option value="Water">Eau</option>
            </select>

            <button id="tcg-search-btn" class="btn-primary" style="width: auto; padding: 12px 30px;">Filtrer</button>
        </section>

        <div id="tcg-loading" style="display:none; text-align:center; margin: 40px 0; font-size: 1.5rem; font-family: 'Orbitron', sans-serif;">
            Recherche dans la base de données... ⏳
        </div>

        <section class="card-grid" id="tcg-grid"></section>

        <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 40px;">
            <button id="tcg-prev-btn" class="btn-primary" style="width: auto; background: var(--text-muted);" disabled>⬅️ Précédent</button>
            <span id="tcg-page-info" style="font-weight: bold; font-size: 1.2rem; color: var(--text);">Page 1</span>
            <button id="tcg-next-btn" class="btn-primary" style="width: auto; background: var(--text-muted);" disabled>Suivant ➡️</button>
        </div>
    </main>

    <div id="tcg-detail-modal" class="modal hidden">
        <div class="modal-content" style="max-width: 800px; display: flex; flex-wrap: wrap; gap: 20px; background: rgba(20, 20, 40, 0.95); backdrop-filter: blur(10px);">
            <span class="close-modal" id="close-tcg-modal">&times;</span>
            <div id="tcg-modal-img" style="flex: 1; min-width: 250px; text-align: center;"></div>
            <div id="tcg-modal-info" style="flex: 2; min-width: 300px; color: white;"></div>
        </div>
    </div>

    <div id="booster-modal" class="modal hidden" style="z-index: 2000; background: rgba(0,0,0,0.95);">
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; overflow-y: auto;">
            <span class="close-modal" id="close-booster-modal" style="position: absolute; top: 20px; right: 30px; font-size: 3rem; color: white;">&times;</span>
            
            <h2 id="booster-title" style="color: var(--accent); font-family: 'Orbitron'; font-size: 2.5rem; text-shadow: 0 0 20px var(--accent); margin-bottom: 20px; text-align: center;">
                Déchirure du paquet... 🎁
            </h2>
            
            <div id="booster-cards-container" class="booster-grid"></div>
            
            <button id="reveal-all-btn" class="btn-primary hidden" style="margin-top: 30px; width: auto; font-size: 1.2rem;">Tout Retourner</button>
        </div>
    </div>

    <footer>
        <div class="footer-content">
            <img src="https://www.iim.fr/ecole-web/wp-content/uploads/2020/10/Logo-IIM-fd-blanc.png" alt="Logo IIM" class="footer-logo">
            <p>Projet Mohamed Nimaga IIM - Axe CDI 2025-2026</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>