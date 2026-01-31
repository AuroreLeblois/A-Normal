"use strict";
/**
 * A/Normal - Générateur de sections dynamiques
 * Ce script charge resources.json et génère automatiquement les sections de téléchargement
 */
/**
 * Extrait un nom lisible à partir du chemin du fichier
 * Ex: "pdf/Fiche-joueur-vierge.pdf" → "Fiche joueur vierge"
 */
function extractNameFromPath(filePath) {
    const fileName = filePath.split('/').pop() || filePath;
    const nameWithoutExt = fileName.replace(/\.[^.]+$/, '');
    // Remplace les tirets et underscores par des espaces
    return nameWithoutExt.replace(/[-_]/g, ' ');
}
/**
 * Crée un élément de lien de téléchargement
 */
function createDownloadLink(file) {
    const link = document.createElement('a');
    link.className = 'download';
    link.href = file.path;
    link.download = '';
    const label = file.label || extractNameFromPath(file.path);
    link.textContent = `${file.icon} ${label}`;
    return link;
}
/**
 * Crée une section HTML complète
 */
function createSection(section) {
    const sectionEl = document.createElement('section');
    sectionEl.id = section.id;
    // Titre
    const title = document.createElement('h2');
    title.textContent = `${section.icon} ${section.title}`;
    sectionEl.appendChild(title);
    // Fichiers ou placeholder
    if (section.files.length > 0) {
        section.files.forEach(file => {
            sectionEl.appendChild(createDownloadLink(file));
        });
    }
    else if (section.placeholder) {
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder';
        placeholder.textContent = section.placeholder;
        sectionEl.appendChild(placeholder);
    }
    return sectionEl;
}
/**
 * Génère toutes les sections dans le conteneur
 */
function renderSections(config, container) {
    // Crée des wraps de 2 sections
    let currentWrap = null;
    config.sections.forEach((section, index) => {
        // Nouvelle ligne tous les 2 sections
        if (index % 2 === 0) {
            currentWrap = document.createElement('div');
            currentWrap.className = 'wrap';
            container.appendChild(currentWrap);
        }
        if (currentWrap) {
            currentWrap.appendChild(createSection(section));
        }
    });
}
/**
 * Initialise l'application
 */
async function init() {
    try {
        const response = await fetch('resources.json');
        if (!response.ok) {
            throw new Error(`Erreur de chargement: ${response.status}`);
        }
        const config = await response.json();
        const container = document.getElementById('resources-container');
        if (!container) {
            throw new Error('Conteneur #resources-container introuvable');
        }
        renderSections(config, container);
    }
    catch (error) {
        console.error('Erreur lors du chargement des ressources:', error);
        const container = document.getElementById('resources-container');
        if (container) {
            container.innerHTML = `
        <div class="error">
          ⚠️ Impossible de charger les ressources. 
          Veuillez rafraîchir la page.
        </div>
      `;
        }
    }
}
// Démarre l'application au chargement du DOM
document.addEventListener('DOMContentLoaded', init);
