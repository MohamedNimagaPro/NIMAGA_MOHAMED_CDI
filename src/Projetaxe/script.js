// data des pokémons avec stats et attaques
const pokemonData = [
    // --- starters ---
    { id: 810, name: "Ouistempo", type: ["Plante"], rarity: "Commune", desc: "Il frappe avec son bâton pour garder le rythme.", evoChain: [810, 811, 812],
      stats: { hp: 50, atk: 65, def: 50 }, attacks: [{name: "Griffure", dmg: 40}, {name: "Fouet Lianes", dmg: 45}] },
    { id: 811, name: "Badabouin", type: ["Plante"], rarity: "Peu Commune", desc: "Il s'entraîne à battre le rythme sur des troncs.", evoChain: [810, 811, 812],
      stats: { hp: 70, atk: 85, def: 70 }, attacks: [{name: "Tranch'Herbe", dmg: 55}, {name: "Double Baffe", dmg: 70}] },
    { id: 812, name: "Gorythmic", type: ["Plante"], rarity: "Rare", desc: "Le maître des percussions de la forêt.", evoChain: [810, 811, 812],
      stats: { hp: 100, atk: 125, def: 90 }, attacks: [{name: "Tambour Bat", dmg: 80}, {name: "Martobois", dmg: 120}] },

    { id: 813, name: "Flambino", type: ["Feu"], rarity: "Commune", desc: "Il court partout pour faire monter sa température.", evoChain: [813, 814, 815],
      stats: { hp: 50, atk: 71, def: 40 }, attacks: [{name: "Charge", dmg: 40}, {name: "Flammèche", dmg: 40}] },
    { id: 814, name: "Lapyro", type: ["Feu"], rarity: "Peu Commune", desc: "Sa fourrure épaisse le protège du froid.", evoChain: [813, 814, 815],
      stats: { hp: 65, atk: 86, def: 60 }, attacks: [{name: "Nitrocharge", dmg: 50}, {name: "Coup d'Boule", dmg: 70}] },
    { id: 815, name: "Pyrobut", type: ["Feu"], rarity: "Rare", desc: "Un buteur exceptionnel avec des pierres brûlantes.", evoChain: [813, 814, 815],
      stats: { hp: 80, atk: 116, def: 75 }, attacks: [{name: "Ball'Brûle", dmg: 120}, {name: "Pied Brûleur", dmg: 85}] },

    { id: 816, name: "Larméléon", type: ["Eau"], rarity: "Commune", desc: "Il pleure des larmes qui font pleurer les autres.", evoChain: [816, 817, 818],
      stats: { hp: 50, atk: 40, def: 40 }, attacks: [{name: "Pistolet à O", dmg: 40}, {name: "Écras'Face", dmg: 40}] },
    { id: 817, name: "Arrozard", type: ["Eau"], rarity: "Peu Commune", desc: "Il crée des ballons d'eau avec ses mains.", evoChain: [816, 817, 818],
      stats: { hp: 65, atk: 60, def: 55 }, attacks: [{name: "Vibraqua", dmg: 60}, {name: "Demi-Tour", dmg: 70}] },
    { id: 818, name: "Lézargus", type: ["Eau"], rarity: "Rare", desc: "Un tireur d'élite caché dans l'eau.", evoChain: [816, 817, 818],
      stats: { hp: 70, atk: 85, def: 65 }, attacks: [{name: "Tir de Précision", dmg: 80}, {name: "Hydrocanon", dmg: 110}] },

    // --- salarsen ---
    { id: 848, name: "Toxizap", type: ["Électrik", "Poison"], rarity: "Commune", desc: "Il stocke du poison dans sa poche interne.", evoChain: [848, 849],
      stats: { hp: 40, atk: 38, def: 35 }, attacks: [{name: "Acide", dmg: 40}, {name: "Frotte-Frimousse", dmg: 20}] },
    
    { id: 849, useUrl: "https://img.pokemondb.net/sprites/home/normal/toxtricity-amped.png", name: "Salarsen (Aigüe)", type: ["Électrik", "Poison"], rarity: "Rare", desc: "Il gratte son torse comme une guitare électrique (Forme Jaune).", evoChain: [848, 849],
      stats: { hp: 75, atk: 98, def: 70 }, attacks: [{name: "Overdrive", dmg: 80}, {name: "Cradovague", dmg: 95}] },
    
    { id: 8491, useUrl: "https://img.pokemondb.net/sprites/home/normal/toxtricity-low-key.png", name: "Salarsen (Grave)", type: ["Électrik", "Poison"], rarity: "Rare", desc: "Il génère de l'électricité avec des sons de basse (Forme Bleue).", evoChain: [848, 8491],
      stats: { hp: 75, atk: 98, def: 70 }, attacks: [{name: "Overdrive", dmg: 80}, {name: "Choc Venin", dmg: 65}] },

    // --- shifours ---
    { id: 891, name: "Wushours", type: ["Combat"], rarity: "Rare", desc: "Il s'entraîne dur au Dojo.", evoChain: [891, 8921, 8922],
      stats: { hp: 60, atk: 90, def: 60 }, attacks: [{name: "Casse-Brique", dmg: 75}, {name: "Coup d'Boule", dmg: 70}] },
    
    { id: 8921, displayId: "892", name: "Shifours (Poing Final)", type: ["Combat", "Ténèbres"], rarity: "Légendaire", desc: "Il abat ses ennemis d'un seul coup dévastateur.", evoChain: [891, 8921],
      stats: { hp: 100, atk: 130, def: 100 }, attacks: [{name: "Torracoup", dmg: 80}, {name: "Close Combat", dmg: 120}] },
    
    { id: 8922, useUrl: "https://img.pokemondb.net/sprites/home/normal/urshifu-rapid-strike.png", name: "Shifours (Mille Poings)", type: ["Combat", "Eau"], rarity: "Légendaire", desc: "Il submerge l'ennemi sous une pluie de coups fluides.", evoChain: [891, 8922],
      stats: { hp: 100, atk: 130, def: 100 }, attacks: [{name: "Torrent de Coups", dmg: 25}, {name: "Aqua-Brèche", dmg: 85}] },

    // --- autres familles ---
    { id: 859, name: "Grimalin", type: ["Ténèbres", "Fée"], rarity: "Commune", desc: "Il se nourrit de l'énergie négative.", evoChain: [859, 860, 861],
      stats: { hp: 45, atk: 45, def: 30 }, attacks: [{name: "Fourberie", dmg: 60}, {name: "Vampibaiser", dmg: 50}] },
    { id: 860, name: "Fourbelin", type: ["Ténèbres", "Fée"], rarity: "Peu Commune", desc: "Il utilise ses cheveux comme une lance.", evoChain: [859, 860, 861],
      stats: { hp: 65, atk: 60, def: 45 }, attacks: [{name: "Câlinerie", dmg: 90}, {name: "Coup Bas", dmg: 70}] },
    { id: 861, name: "Angoliath", type: ["Ténèbres", "Fée"], rarity: "Rare", desc: "Il utilise ses cheveux comme des muscles.", evoChain: [859, 860, 861],
      stats: { hp: 95, atk: 120, def: 65 }, attacks: [{name: "Choc Émotionnel", dmg: 75}, {name: "Dark Lariat", dmg: 85}] },

    { id: 888, name: "Zacian", type: ["Fée", "Acier"], rarity: "Légendaire", desc: "Le héros à l'épée rouillée.", evoChain: [888],
      stats: { hp: 92, atk: 170, def: 115 }, attacks: [{name: "Lame Sainte", dmg: 90}, {name: "Tête de Fer", dmg: 80}] },
    
    { id: 890, name: "Éthernatos", type: ["Dragon", "Poison"], rarity: "Légendaire", desc: "La source du phénomène Dynamax.", evoChain: [890],
      stats: { hp: 140, atk: 85, def: 95 }, attacks: [{name: "Canon Dynamax", dmg: 100}, {name: "Choc Venin", dmg: 65}] }
];

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. GESTION DU THÈME NUIT/JOUR
    // ==========================================
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'night') {
        body.classList.add('night-mode');
        if(themeBtn) themeBtn.innerText = '☀️';
    } else {
        if(themeBtn) themeBtn.innerText = '🌙';
    }

    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('night-mode');
            if (body.classList.contains('night-mode')) {
                themeBtn.innerText = '☀️';
                localStorage.setItem('theme', 'night');
            } else {
                themeBtn.innerText = '🌙';
                localStorage.setItem('theme', 'day');
            }
        });
    }

    // ==========================================
    // 2. DONNÉES (INVENTAIRE & FAVORIS)
    // ==========================================
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let inventory = JSON.parse(localStorage.getItem('inventory')) || []; 

    function updateCounters() {
        const invCount = document.getElementById('inventory-count');
        const favCount = document.getElementById('fav-count');
        if(invCount) invCount.innerText = `Cartes : ${inventory.length}`;
        if(favCount) favCount.innerText = `Favoris : ${favorites.length}`;
    }

    function createCardHTML(pokemon) {
        const isFav = favorites.includes(pokemon.id);
        const isOwned = inventory.includes(pokemon.id);
        const favClass = isFav ? 'active' : '';
        const ownClass = isOwned ? 'owned' : '';
        const ownText = isOwned ? '✓' : '◓';

        let imgUrl = "";
        if (pokemon.useUrl) {
            imgUrl = pokemon.useUrl;
        } else {
            let imgId = pokemon.displayId ? pokemon.displayId : pokemon.id;
            imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgId}.png`;
        }

        const typesHTML = pokemon.type.map(t => `<span class="badge badge-${t}">${t}</span>`).join(' ');

        let attacksHTML = "";
        if(pokemon.attacks) {
            attacksHTML = pokemon.attacks.map(atk => `
                <div class="attack-item">
                    <span>${atk.name}</span>
                    <span class="attack-dmg">${atk.dmg}</span>
                </div>
            `).join('');
        }

        let statsHTML = "";
        if(pokemon.stats) {
            statsHTML = `
                <table class="stats-table">
                    <tr><td>PV</td><td><div class="stat-bar"><div class="stat-fill" style="width:${(pokemon.stats.hp/150)*100}%"></div></div> ${pokemon.stats.hp}</td></tr>
                    <tr><td>ATK</td><td><div class="stat-bar"><div class="stat-fill" style="width:${(pokemon.stats.atk/170)*100}%"></div></div> ${pokemon.stats.atk}</td></tr>
                    <tr><td>DEF</td><td><div class="stat-bar"><div class="stat-fill" style="width:${(pokemon.stats.def/150)*100}%"></div></div> ${pokemon.stats.def}</td></tr>
                </table>
            `;
        }

        let evoHTML = '';
        if (pokemon.evoChain && pokemon.evoChain.length > 1) {
            evoHTML = `<div class="evo-chain">`;
            pokemon.evoChain.forEach((evoId, index) => {
                let evoSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${evoId}.png`;
                if(evoId === 8921) evoSrc = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/892.png";
                if(evoId === 8922) evoSrc = "https://img.pokemondb.net/sprites/home/normal/urshifu-rapid-strike.png";
                if(evoId === 849) evoSrc = "https://img.pokemondb.net/sprites/home/normal/toxtricity-amped.png";
                if(evoId === 8491) evoSrc = "https://img.pokemondb.net/sprites/home/normal/toxtricity-low-key.png";

                const currentClass = (evoId === pokemon.id) ? 'current' : '';
                evoHTML += `<img src="${evoSrc}" class="evo-img ${currentClass}" alt="Evo">`;
                if (index < pokemon.evoChain.length - 1) evoHTML += `<span class="evo-arrow">➜</span>`;
            });
            evoHTML += `</div>`;
        }

        return `
            <article class="card ${pokemon.type[0]}">
                <div class="card-visual">
                    <img src="${imgUrl}" alt="${pokemon.name}" loading="lazy">
                    <div class="card-desc-overlay">
                        <p class="desc">${pokemon.desc}</p>
                        ${statsHTML}
                        <div class="attacks-list">${attacksHTML}</div>
                        <p class="rarity">${pokemon.rarity}</p>
                    </div>
                </div>
                <div class="card-info">
                    <div class="card-header-row">
                        <h3>${pokemon.name}</h3>
                        <div class="card-actions">
                            <button class="capture-btn ${ownClass}" data-id="${pokemon.id}" title="Capturer">${ownText}</button>
                            <button class="fav-btn ${favClass}" data-id="${pokemon.id}">❤</button>
                        </div>
                    </div>
                    <div class="types-row">${typesHTML}</div>
                    ${evoHTML}
                </div>
            </article>
        `;
    }

    // ==========================================
    // 3. AFFICHAGE DES GRILLES DE LA COLLECTION
    // ==========================================
    const collectionGrid = document.getElementById('collection-grid');
    const inventoryGrid = document.getElementById('inventory-grid');
    const favGrid = document.getElementById('favorites-grid');

    if (collectionGrid) {
        renderPokemons(pokemonData, collectionGrid);
        
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const type = btn.dataset.type;
                if (type === 'all') renderPokemons(pokemonData, collectionGrid);
                else renderPokemons(pokemonData.filter(p => p.type.includes(type)), collectionGrid);
            });
        });
        const searchInput = document.getElementById('search-input');
        if(searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                renderPokemons(pokemonData.filter(p => p.name.toLowerCase().includes(term)), collectionGrid);
            });
        }
    }

    if (inventoryGrid && favGrid) {
        updateCounters();
        const myPokemons = pokemonData.filter(p => inventory.includes(p.id));
        if (myPokemons.length > 0) renderPokemons(myPokemons, inventoryGrid);
        else {
            const noInvMsg = document.getElementById('no-inv-msg');
            if(noInvMsg) noInvMsg.style.display = 'block';
        }

        const favPokemons = pokemonData.filter(p => favorites.includes(p.id));
        if (favPokemons.length > 0) renderPokemons(favPokemons, favGrid);
    }

    function renderPokemons(list, container) {
        container.innerHTML = list.map(p => createCardHTML(p)).join('');
        attachEventListeners(container);
    }

    function attachEventListeners(container) {
        container.querySelectorAll('.fav-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const id = parseInt(this.dataset.id);
                if (favorites.includes(id)) {
                    favorites = favorites.filter(favId => favId !== id);
                    this.classList.remove('active');
                } else {
                    favorites.push(id);
                    this.classList.add('active');
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
                if (favGrid) location.reload();
            });
        });

        container.querySelectorAll('.capture-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const id = parseInt(this.dataset.id);
                if (!inventory.includes(id)) {
                    inventory.push(id);
                    this.classList.add('owned');
                    this.innerText = '✓';
                    localStorage.setItem('inventory', JSON.stringify(inventory));
                    alert("Pokémon capturé !");
                }
            });
        });
    }

    // ==========================================
    // 4. MODALE D'ÉCHANGE
    // ==========================================
    const fabTrade = document.getElementById('fab-trade');
    const modal = document.getElementById('trade-modal');
    const closeModal = document.querySelector('.close-modal');
    const tradeForm = document.getElementById('trade-form');
    const tradeSelect = document.getElementById('trade-select');

    if (fabTrade && modal) {
        fabTrade.addEventListener('click', () => {
            modal.classList.remove('hidden');
            if(tradeSelect) {
                tradeSelect.innerHTML = '<option value="">-- Choisis une carte --</option>';
                const myCards = pokemonData.filter(p => inventory.includes(p.id));
                if(myCards.length === 0) {
                    const opt = document.createElement('option');
                    opt.text = "T'as rien à échanger !";
                    opt.disabled = true;
                    tradeSelect.add(opt);
                } else {
                    myCards.forEach(card => {
                        const opt = document.createElement('option');
                        opt.value = card.id;
                        opt.text = card.name;
                        tradeSelect.add(opt);
                    });
                }
            }
        });

        if(closeModal) {
            closeModal.addEventListener('click', () => modal.classList.add('hidden'));
        }
        window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

        if (tradeForm) {
            tradeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const givenCardId = parseInt(tradeSelect.value);
                if(!givenCardId) return;

                inventory = inventory.filter(id => id !== givenCardId);
                const availableCards = pokemonData.filter(p => !inventory.includes(p.id));
                const pool = availableCards.length > 0 ? availableCards : pokemonData;
                const randomCard = pool[Math.floor(Math.random() * pool.length)];
                
                inventory.push(randomCard.id);
                localStorage.setItem('inventory', JSON.stringify(inventory));

                alert(`Échange réussi !\nReçu : ${randomCard.name}`);
                modal.classList.add('hidden');
                location.reload();
            });
        }
    }

    // ==========================================
    // 5. MENU MOBILE
    // ==========================================
    const burgerBtn = document.getElementById('burger-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    if (burgerBtn) burgerBtn.addEventListener('click', () => sidebar.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));
    
    // ==========================================
    // 6. FORMULAIRE DE CONNEXION
    // ==========================================
    const form = document.querySelector('#login-form');
    
    if (form) {
        let pseudo = document.querySelector('#pseudo');
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let passwordRepeat = document.querySelector('#passwordRepeat');
        
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail && email) email.value = savedEmail;

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let errorContainer = document.querySelector('.message-error');
            let errorList = document.querySelector('#errorList');
            let successContainer = document.querySelector('.message-success');

            errorList.innerHTML = '';
            errorContainer.classList.remove('visible');
            successContainer.classList.remove('visible');

            let hasErrors = false;

            if (pseudo.value.length < 6) {
                hasErrors = true;
                errorContainer.classList.add('visible');
                pseudo.classList.remove('success');
                let err = document.createElement('li');
                err.innerText = "Le champ pseudo doit contenir au moins 6 caractères.";
                errorList.appendChild(err);
            } else {
                pseudo.classList.add('success');
            }

            if (email.value.length === 0 || !email.value.includes('@')) {
                hasErrors = true;
                errorContainer.classList.add('visible');
                email.classList.remove('success');
                let err = document.createElement('li');
                err.innerText = "L'email n'est pas valide ou est vide.";
                errorList.appendChild(err);
            } else {
                email.classList.add('success');
            }

            let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&.,?]).+$");

            if (password.value.length < 10 || passCheck.test(password.value) === false) {
                hasErrors = true;
                errorContainer.classList.add('visible');
                password.classList.remove('success');
                let err = document.createElement('li');
                err.innerText = "Le mot de passe doit faire 10 caractères min., contenir majuscule, minuscule, chiffre et caractère spécial.";
                errorList.appendChild(err);
            } else {
                password.classList.add('success');
            }

            if (passwordRepeat.value !== password.value || passwordRepeat.value === "") {
                hasErrors = true;
                errorContainer.classList.add('visible');
                passwordRepeat.classList.remove('success');
                let err = document.createElement('li');
                err.innerText = "Les mots de passe ne correspondent pas.";
                errorList.appendChild(err);
            } else {
                passwordRepeat.classList.add('success');
            }

            if(
                pseudo.classList.contains('success') &&
                email.classList.contains('success') &&
                password.classList.contains('success') &&
                passwordRepeat.classList.contains('success')
            ) {
                errorContainer.classList.remove('visible');
                successContainer.classList.add('visible');
                localStorage.setItem('userEmail', email.value);
                setTimeout(() => {
                    window.location.href = "index.html"; 
                }, 1500);
            }
        });
    }

    // ==========================================
    // 7. API POKEMON TCG (Recherche + Booster)
    // ==========================================
    const tcgGrid = document.getElementById('tcg-grid');
    
    if (tcgGrid) {
        
        const tcgSearchBtn = document.getElementById('tcg-search-btn');
        const tcgSearchInput = document.getElementById('tcg-search-input');
        const tcgTypeSelect = document.getElementById('tcg-type-select');
        const tcgSupertypeSelect = document.getElementById('tcg-supertype-select');
        const tcgLoading = document.getElementById('tcg-loading');
        
        const prevBtn = document.getElementById('tcg-prev-btn');
        const nextBtn = document.getElementById('tcg-next-btn');
        const pageInfo = document.getElementById('tcg-page-info');
        let currentPage = 1;
        let currentTotalCount = 0;

        const tcgModal = document.getElementById('tcg-detail-modal');
        const closeTcgModal = document.getElementById('close-tcg-modal');
        const tcgModalImg = document.getElementById('tcg-modal-img');
        const tcgModalInfo = document.getElementById('tcg-modal-info');
        let currentCardsData = []; 

        const openBoosterBtn = document.getElementById('open-booster-btn');
        const boosterModal = document.getElementById('booster-modal');
        const closeBoosterModal = document.getElementById('close-booster-modal');
        const boosterCardsContainer = document.getElementById('booster-cards-container');
        const boosterTitle = document.getElementById('booster-title');
        const revealAllBtn = document.getElementById('reveal-all-btn');

        const fetchTCGCards = async () => {
            tcgGrid.innerHTML = "";
            tcgLoading.style.display = "block";
            
            const name = tcgSearchInput ? tcgSearchInput.value : '';
            const type = tcgTypeSelect ? tcgTypeSelect.value : '';
            const supertype = tcgSupertypeSelect ? tcgSupertypeSelect.value : '';
            
            let url = `tcg_api.php?page=${currentPage}&name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}&supertype=${encodeURIComponent(supertype)}`;

            try {
                const res = await fetch(url);
                const result = await res.json();
                
                if (result.error) throw new Error(result.error);
                
                tcgLoading.style.display = "none";
                currentCardsData = result.data; 
                currentTotalCount = result.totalCount || 0; 
                
                updatePagination(currentTotalCount);
                renderTCGCards(result.data);
            } catch (err) {
                console.error("Erreur lors de la recherche TCG :", err);
                tcgLoading.style.display = "none";
                tcgGrid.innerHTML = "<p style='text-align:center; width:100%; color:var(--secondary);'>Erreur de connexion. Vérifiez que PHP tourne bien.</p>";
            }
        };

        const renderTCGCards = (cards) => {
            if(!cards || cards.length === 0) {
                tcgGrid.innerHTML = "<p style='text-align:center; width:100%; font-size:1.2rem;'>Aucune carte ne correspond à ces critères.</p>";
                return;
            }
            
            tcgGrid.innerHTML = cards.map((card, index) => `
                <article class="glass-panel tcg-card" data-index="${index}" style="padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: space-between; transition: 0.3s; cursor: pointer;">
                    <img src="${card.images.small}" alt="${card.name}" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.5);" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    <div style="margin-top: 15px; text-align: center; width: 100%;">
                        <h3 style="font-size: 1rem; color: var(--text); margin-bottom: 5px;">${card.name}</h3>
                        <span style="font-size: 0.7rem; background: var(--primary); padding: 3px 8px; border-radius: 10px; color: white;">${card.set.name}</span>
                    </div>
                </article>
            `).join('');

            document.querySelectorAll('.tcg-card').forEach(cardEl => {
                cardEl.addEventListener('click', () => {
                    if (currentCardsData[cardEl.dataset.index]) {
                        showCardDetails(currentCardsData[cardEl.dataset.index]);
                    }
                });
            });
        };

        const updatePagination = (totalCards) => {
            if (!pageInfo) return;
            pageInfo.innerText = `Page ${currentPage}`;
            prevBtn.disabled = (currentPage <= 1);
            prevBtn.style.background = prevBtn.disabled ? "var(--text-muted)" : "var(--secondary)";
            
            const maxPages = Math.ceil(totalCards / 20);
            nextBtn.disabled = (currentPage >= maxPages);
            nextBtn.style.background = nextBtn.disabled ? "var(--text-muted)" : "var(--secondary)";
        };

        const showCardDetails = (card) => {
            if (!tcgModal) return;
            tcgModal.classList.remove('hidden');
            tcgModalImg.innerHTML = `<img src="${card.images.large}" style="width: 100%; max-width: 350px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.8);">`;

            let infoHtml = `<h2 style="font-family: 'Orbitron'; font-size: 2rem; color: var(--accent); margin-bottom: 5px;">${card.name}</h2>`;
            infoHtml += `<p style="margin-bottom: 15px; font-size: 1.1rem;">Supertype: <strong>${card.supertype}</strong> | Rareté: <strong>${card.rarity || 'Normale'}</strong></p>`;
            
            if (card.supertype === "Pokémon") {
                infoHtml += `<p>❤️ PV: <strong>${card.hp || '?'}</strong> | Type: <strong>${card.types ? card.types.join(', ') : '?'}</strong></p>`;
                if (card.attacks) {
                    infoHtml += `<h4 style="margin-top: 15px; border-bottom: 1px solid #555; padding-bottom: 5px; color: var(--primary);">Attaques</h4><ul style="margin-top: 10px;">`;
                    card.attacks.forEach(atk => {
                        infoHtml += `<li style="margin-bottom: 10px;"><strong>${atk.name}</strong> <span style="color: var(--secondary); font-weight: bold;">${atk.damage ? atk.damage : ''}</span><br><span style="font-size: 0.85rem; color: #bbb;">${atk.text || 'Aucun effet.'}</span></li>`;
                    });
                    infoHtml += `</ul>`;
                }
            }

            if (card.tcgplayer && card.tcgplayer.prices) {
                const prices = card.tcgplayer.prices;
                const bestPriceType = prices.holofoil || prices.normal || prices.reverseHolofoil || Object.values(prices)[0];
                infoHtml += `<div style="margin-top: 20px; background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; border: 1px solid #444;">`;
                infoHtml += `<h4 style="color: #2ecc71; margin-bottom: 10px;">💰 Prix du Marché</h4>`;
                infoHtml += `<p>Moyen: <strong>$${bestPriceType.mid || '?'}</strong></p>`;
                infoHtml += `<p>Marché actuel: <strong style="color: var(--accent); font-size: 1.2rem;">$${bestPriceType.market || '?'}</strong></p></div>`;
            } else {
                infoHtml += `<p style="margin-top: 20px; color: #888;"><em>Aucune donnée de prix disponible.</em></p>`;
            }

            tcgModalInfo.innerHTML = infoHtml;
        };

        if (closeTcgModal) closeTcgModal.addEventListener('click', () => tcgModal.classList.add('hidden'));
        window.addEventListener('click', (e) => { if (e.target === tcgModal) tcgModal.classList.add('hidden'); });

        const triggerSearch = () => { currentPage = 1; fetchTCGCards(); };
        if (tcgSearchBtn) tcgSearchBtn.addEventListener('click', triggerSearch);
        if (tcgSearchInput) tcgSearchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') triggerSearch(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; fetchTCGCards(); } });
        if (nextBtn) nextBtn.addEventListener('click', () => { currentPage++; fetchTCGCards(); });

        fetchTCGCards();

        const fetchBooster = async () => {
            boosterModal.classList.remove('hidden');
            boosterTitle.innerText = "Déchirure du paquet... 🎁";
            boosterCardsContainer.innerHTML = "<p style='color: white; font-size: 1.5rem;'>Connexion à l'API en cours...</p>";
            revealAllBtn.classList.add('hidden');

            try {
                const res = await fetch('tcg_api.php?action=booster');
                const result = await res.json();
                
                if (result.error) throw new Error(result.error);
                
                boosterTitle.innerText = "✨ Clique sur les cartes pour les retourner ! ✨";
                revealAllBtn.classList.remove('hidden');
                
                boosterCardsContainer.innerHTML = result.data.map((card, index) => `
                    <div class="booster-card" id="booster-card-${index}">
                        <div class="booster-card-inner">
                            <div class="booster-card-front"></div>
                            <div class="booster-card-back">
                                <img src="${card.images.small}" alt="${card.name}">
                            </div>
                        </div>
                    </div>
                `).join('');

                document.querySelectorAll('.booster-card').forEach((cardEl, index) => {
                    cardEl.addEventListener('click', function() {
                        if (!this.classList.contains('flipped')) {
                            this.classList.add('flipped');
                        } else {
                            showCardDetails(result.data[index]);
                        }
                    });
                });

            } catch (err) {
                console.error("Erreur Booster :", err);
                boosterCardsContainer.innerHTML = "<p style='color: var(--secondary); font-size: 1.5rem;'>Impossible de générer le booster.</p>";
            }
        };

        if (openBoosterBtn) openBoosterBtn.addEventListener('click', fetchBooster);
        if (closeBoosterModal) closeBoosterModal.addEventListener('click', () => boosterModal.classList.add('hidden'));
        if (revealAllBtn) revealAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.booster-card').forEach(card => card.classList.add('flipped'));
        });
    }

});