export interface Exhibition {
    id: number;
    title: string;
    date: Date;
    time: string;
    location: string;
    description?: string;
    moreInfoUrl?: string;
}

export const exhibitions: Exhibition[] = [
    {
        id: 1,
        title: "Salon de la Belle Guitare",
        date: new Date('2026-03-22'),
        time: "10h - 19h",
        location: "Puteaux, France",
        moreInfoUrl: "https://www.beaux-arts-de-paris.fr/"
    },
    {
        id: 2,
        title: "Festival de Musique Ancienne",
        date: new Date('2026-06-12'),
        time: "09h - 18h",
        location: "Strasbourg, France",
        description: "Exposition de luths et de violes de gambe."
    },
    {
        id: 3,
        title: "Rencontres de Lutherie",
        date: new Date('2026-09-05'),
        time: "14h - 20h",
        location: "Lyon, France",
        moreInfoUrl: "https://www.exemple.com"
    },
    {
        id: 4,
        title: "Exposition Artisanale d'Hiver",
        date: new Date('2025-12-15'),
        time: "10h - 18h",
        location: "Bordeaux, France",
    },
    {
        id: 5,
        title: "L'Art du Bois - Printemps",
        date: new Date('2025-04-10'),
        time: "09h - 19h",
        location: "Nantes, France",
        description: "Présentation des dernières guitares acoustiques."
    }
];
