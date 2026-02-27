import gtr1 from '../assets/gtr1.jpg';
import mandoloctav from '../assets/mandoloctav.jpg';
import dzc from '../assets/dzc.jpg';

export enum EnVenteStatus {
    EN_VENTE = 'En vente',
    SUR_COMMANDE = 'Sur commande',
    FALSE = 'false'
}

export const instruments = [
    { 
        slug: 'guitare-acoustique', 
        nom: "Guitare en bois", 
        img: gtr1.src, 
        images: [gtr1.src, 'https://picsum.photos/seed/gtr1-2/800/1000', 'https://picsum.photos/seed/gtr1-3/800/1000'],
        type: 'Guitare Acoustique', 
        enVente: EnVenteStatus.EN_VENTE 
    },
    { 
        slug: 'mandoline-octave', 
        nom: 'Mandoline Octave', 
        img: mandoloctav.src, 
        images: [mandoloctav.src, 'https://picsum.photos/seed/mando2/800/1000'],
        type: 'Mandoline', 
        enVente: EnVenteStatus.SUR_COMMANDE 
    },
    { 
        slug: 'gtr-12', 
        nom: 'Schooner', 
        img: dzc.src, 
        images: [dzc.src, 'https://picsum.photos/seed/dzc2/800/1000'],
        type: 'Guitare Acoustique', 
        enVente: EnVenteStatus.EN_VENTE 
    },
    { 
        slug: 'guitare-ebene', 
        nom: 'Ébène Sombre', 
        img: 'https://picsum.photos/seed/guitare2/800/1000', 
        images: ['https://picsum.photos/seed/guitare2/800/1000', 'https://picsum.photos/seed/guitare2-2/800/1000'],
        type: 'Guitare Acoustique', 
        enVente: EnVenteStatus.FALSE 
    },
    { 
        slug: 'alto-virtuose', 
        nom: 'Alto Virtuose', 
        img: 'https://picsum.photos/seed/alto1/800/1000', 
        images: ['https://picsum.photos/seed/alto1/800/1000', 'https://picsum.photos/seed/alto1-2/800/1000'],
        type: 'Alto', 
        enVente: EnVenteStatus.EN_VENTE 
    },
    { 
        slug: 'contrebasse-pro', 
        nom: 'Contrebasse Pro', 
        img: 'https://picsum.photos/seed/bass1/800/1000', 
        images: ['https://picsum.photos/seed/bass1/800/1000', 'https://picsum.photos/seed/bass1-2/800/1000'],
        type: 'Contrebasse', 
        enVente: EnVenteStatus.FALSE 
    },
];
