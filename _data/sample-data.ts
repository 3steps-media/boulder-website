import {IconBabyCarriage} from '@tabler/icons-react';

const SampleData = {
    cities: [
        {
            id: 1,
            title: "Freiburg",
            slug: 'freiburg',
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 2,
            title: "Stuttgart",
            slug: 'stuttgart',
            image: "https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 3,
            title: "Mannheim",
            slug: 'mannheim',
            image: "https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdHl8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 4,
            title: "Frankfurt am Main",
            slug: 'frankfurt',
            image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNpdHl8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 5,
            title: "München",
            slug: 'munchen',
            image: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNpdHl8ZW58MHx8MHx8fDA%3D",
        },
    ],
    faqPanels: [
        {
            title: "Wie kann ich Boulderhallen finden und eintragen? 01",
            content: "Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.",
            isOpen: true
        },
        {
            title: "Wie kann ich Boulderhallen finden und eintragen? 02",
            content: "Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.",
            isOpen: false,
        },
        {
            title: "Wie kann ich Boulderhallen finden und eintragen? 03",
            content: "Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe."
        },
        {
            title: "Wie kann ich Boulderhallen finden und eintragen? 04",
            content: "Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe."
        },
    ],
    places: [
        {
            id: 1,
            title: 'Boulderhalle Hotzenblock Waldshut-Tiengen',
            image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
            slug: 'place-1',
            location: 'Waldshut-Tiengen',
            rating: 4.5,
            services: [0, 1, 2, 3, 4, 5, 6, 7]
        },
        {
            id: 2,
            title: 'Boulderwelt München-West is a place with loooooong name fot my testing porposes only',
            image: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-2',
            location: 'München',
            services: [0, 1, 5, 6, 7]
        },
        {
            id: 3,
            title: 'Studio Bloc Pfungstadt',
            image: 'https://images.unsplash.com/photo-1495954380655-01609180eda3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-3',
            location: 'Pfungstadt',
            services: [0, 2, 4, 6]
        },
        {
            id: 4,
            title: 'Boulderwelt Frankfurt',
            image: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-4',
            location: 'Frankfurt am Main',
            services: [1, 3, 5, 7]
        },
        {
            id: 5,
            title: 'Blockwerk Mainz',
            image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-5',
            location: 'Mainz',
            services: [0, 1, 2]
        },
        {
            id: 6,
            title: 'Eifelblock Trier',
            image: 'https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-6',
            location: 'Trier',
            services: [7]
        },
        {
            id: 7,
            title: 'Plan B Jena',
            image: 'https://images.unsplash.com/photo-1516259670444-ad07068e14e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-7',
            location: 'Jena',
            services: [0, 1, 2, 3, 4]
        },
    ],
    posts: [
        {
            id: 1,
            title: 'Bloc-Hütte Augsburg: Ein Geheimtipp in Bayern',
            content: 'Wir waren wieder mal unterwegs, um euch eine weitere Boulderhalle näher zu bringen: Diesmal waren wir in der Bloc-Hütte in Augsburg.…',
            date: '03.01.2020'
        },
        {
            id: 2,
            title: 'LÖ bloc Boulderhalle in Grenzach-Whylen: Ein Geheimtipp nahe der schweizer Grenze!',
            content: 'Uns hat es durch einen Tipp nach Grenzach-Whylen in die Boulderhalle LÖ bloc verschlagen. Wie unsere Erfahrungen dort waren, was uns gut gefallen hat und was euch dort erwartet, das erfahrt …',
            date: '10.07.2019'
        },
        {
            id: 3,
            title: 'Blockhaus Freiburg',
            content: 'Eine Boulderspielwiese in einem alten Möbelhaus über 2 Etagen. Ein Eldorado für Boulderbergeisterte.…',
            date: '08.04.2019'
        },
        {
            id: 4,
            title: 'Steinzeit Boulderhalle Göppingen',
            content: 'Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.',
            date: '02.04.2018'
        },
    ],
    reasons: [
        {
            title: 'Steinzeit Boulderhalle Göppingen#1',
            text: 'Auf einer Grundfläche von derzeit 1000 m² erwartet dich alles was dein Herz begehrt'
        },
        {
            title: 'Steinzeit Boulderhalle Göppingen#2',
            text: 'Auf einer Grundfläche von derzeit 2000 m² erwartet dich alles was dein Herz begehrt'
        },
        {
            title: 'Steinzeit Boulderhalle Göppingen#3',
            text: 'Auf einer Grundfläche von derzeit 3000 m² erwartet dich alles was dein Herz begehrt'
        },
        {
            title: 'Steinzeit Boulderhalle Göppingen#4',
            text: 'Auf einer Grundfläche von derzeit 40000 m² erwartet dich alles was dein Herz begehrt'
        },
        {
            title: 'Steinzeit Boulderhalle Göppingen#5',
            text: 'Auf einer Grundfläche von derzeit 5000 m² erwartet dich alles was dein Herz begehrt'
        },
        {
            title: 'Steinzeit Boulderhalle Göppingen#6',
            text: 'Auf einer Grundfläche von derzeit 60000 m² erwartet dich alles was dein Herz begehrt'
        },
    ],
    subscribe: {
        title: "Newsletter abonnieren!",
        content: "Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick."
    }
}

export default SampleData