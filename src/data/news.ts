export interface NewsItem {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
    content: any[];
    date: string;
}

export const news: NewsItem[] = [
    {
        slug: 'nouvelle-guitare-archtop',
        title: 'Nouvelle guitare archtop',
        image: 'https://picsum.photos/seed/archtop/800/600',
        excerpt: 'Présentation de notre dernier modèle inspiré des standards jazz des années 50.',
        date: '2024-02-15',
        content :
            [
                {
                    "type": "heading",
                    "children": [{"type": "text", "text": "Test de titre"}],
                    "level": 1
                },
                {"type": "paragraph", "children": [{"type": "text", "text": ""}]},
                {
                    "type": "paragraph",
                    "children": [{"type": "text", "text": "Puis test de texte"}]
                }, {"type": "paragraph", "children": [{"type": "text", "text": ""}]}, {
                "type": "list",
                "format": "unordered",
                "children": [{"type": "list-item", "children": [{"type": "text", "text": "test"}]}, {
                    "type": "list-item",
                    "children": [{"type": "text", "text": "de"}]
                }, {"type": "list-item", "children": [{"type": "text", "text": "liste"}]}]
            }, {"type": "paragraph", "children": [{"type": "text", "text": ""}]}, {
                "type": "list",
                "format": "ordered",
                "children": [{"type": "list-item", "children": [{"type": "text", "text": "test"}]}, {
                    "type": "list-item",
                    "children": [{"type": "text", "text": "de"}]
                }, {"type": "list-item", "children": [{"type": "text", "text": "liste"}]}, {
                    "type": "list-item",
                    "children": [{"type": "text", "text": "numero"}]
                }]
            }, {"type": "paragraph", "children": [{"type": "text", "text": "gras", "bold": true}]}, {
                "type": "paragraph",
                "children": [{"type": "text", "text": ""}]
            }, {"type": "paragraph", "children": [{"type": "text", "text": "italique", "italic": true}]}, {
                "type": "paragraph",
                "children": [{"type": "text", "text": ""}]
            }, {"type": "paragraph", "children": [{"type": "text", "text": "souligné", "underline": true}]}, {
                "type": "paragraph",
                "children": [{"type": "text", "text": ""}]
            }, {"type": "paragraph", "children": [{"type": "text", "text": "barré", "strikethrough": true}]}, {
                "type": "paragraph",
                "children": [{"type": "text", "text": ""}]
            }, {"type": "paragraph", "children": [{"type": "text", "text": ""}]}, {
                "type": "paragraph",
                "children": [{"type": "text", "text": "https://google.fr", "code": true}]
            }, {"type": "paragraph", "children": [{"type": "text", "text": ""}]}, {
                "type": "paragraph",
                "children": [{"type": "text", "text": ""}, {
                    "type": "link",
                    "url": "https://www.google.fr",
                    "children": [{"type": "text", "text": "lien"}],
                    "rel": "",
                    "target": ""
                }, {"text": "", "type": "text"}]
            }]
    },
    {
        slug: 'atelier-portes-ouvertes',
        title: 'Atelier Portes Ouvertes',
        image: 'https://picsum.photos/seed/atelier/800/600',
        excerpt: 'Venez découvrir les coulisses de la fabrication de nos instruments lors de notre week-end portes ouvertes.',
        date: '2024-03-10',
        content: [
            {
                "type": "heading",
                "children": [{"type": "text", "text": "Portes Ouvertes à l'Atelier"}],
                "level": 1
            },
            {
                "type": "paragraph",
                "children": [{"type": "text", "text": "Le week-end prochain, nous vous accueillons pour vous faire découvrir notre savoir-faire."}]
            }
        ]
    },
    {
        slug: 'restauration-violoncelle-ancien',
        title: 'Restauration d\'un violoncelle du XVIIIème',
        image: 'https://picsum.photos/seed/cello/800/600',
        excerpt: 'Un projet passionnant de restauration sur un instrument historique.',
        date: '2024-01-20',
        content: [
            {
                "type": "heading",
                "children": [{"type": "text", "text": "Redonner vie à l'histoire"}],
                "level": 1
            },
            {
                "type": "paragraph",
                "children": [{"type": "text", "text": "Ce violoncelle nous est arrivé dans un état critique, mais après plusieurs mois de travail, il a retrouvé toute sa splendeur."}]
            }
        ]
    },
    {
        slug: 'salon-de-la-lutherie-2024',
        title: 'Salon de la Lutherie 2024',
        image: 'https://picsum.photos/seed/salon/800/600',
        excerpt: 'Nous serons présents au prochain salon de la lutherie pour exposer nos dernières créations.',
        date: '2024-04-05',
        content: [
            {
                "type": "heading",
                "children": [{"type": "text", "text": "Rendez-vous au salon"}],
                "level": 1
            },
            {
                "type": "paragraph",
                "children": [{"type": "text", "text": "Venez nous rencontrer et essayer nos instruments lors de cet événement incontournable."}]
            }
        ]
    }
];
