import { calculateShades } from 'react-kariu';

// Palette "Obsidian Archive" — alignée sur DESIGN.md
export const customThemeDark = {
    primary: calculateShades('#FFB800'),    // Vibrant Amber — CTAs haute-impact, branding
    secondary: calculateShades('#FFDCA1'),  // Luminous Gold — états interactifs raffinés
    success: calculateShades('#00C853'),
    warning: calculateShades('#FF9500'),
    info: calculateShades('#0070f3'),
    error: calculateShades('#E53935'),
};
