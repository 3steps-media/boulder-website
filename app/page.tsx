import styles from "./page.module.css";
import Hero from "@/components/hero/hero";

import heroImage from "@/public/Boulder_Island_0035.jpg";
import Cities from "@/components/cities/cities";
import BestPlaces from "@/components/best-places/bestPlaces";
import Reasons from "@/components/reasons";
import FAQ from "@/components/faq/faq";
import Blog from "@/components/blog/blog";

export default function Home() {

    const data = {
        blocks: {
            hero: {},
            cities: {
                heading: {
                    text: "Top Städte",
                },
                text: "Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick.",
                lead: "Die besten Boulderhallen Deutschlands.",
                items: [
                    {
                        id: 1,
                        name: "Freiburg",
                        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
                        url: 'city/freiburg'
                    },
                    {
                        id: 2,
                        name: "Stuttgart",
                        image: "https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
                        url: 'city/stuttgart'
                    },
                    {
                        id: 3,
                        name: "Mannheim",
                        image: "https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdHl8ZW58MHx8MHx8fDA%3D",
                        url: 'city/mannheim'
                    },
                    {
                        id: 4,
                        name: "Frankfurt a.M.",
                        image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNpdHl8ZW58MHx8MHx8fDA%3D",
                        url: 'city/frankfurt'
                    },
                    {
                        id: 5,
                        name: "München",
                        image: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNpdHl8ZW58MHx8MHx8fDA%3D",
                        url: 'city/munchen'
                    },
                ]
            },
            places: {
                heading: 'Die bestbewerteten Boulderhallen',
                items: [
                    {
                        id: 1,
                        name: 'Boulderhalle Hotzenblock Waldshut-Tiengen',
                        image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
                        url: '#',
                        location: 'Waldshut-Tiengen'
                    },
                    {
                        id: 2,
                        name: 'Boulderwelt München-West',
                        image: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdHl8ZW58MHx8MHx8fDA%3D',
                        url: '#',
                        location: 'München'
                    },
                    {
                        id: 3,
                        name: 'Studio Bloc Pfungstadt',
                        image: 'https://images.unsplash.com/photo-1495954380655-01609180eda3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHl8ZW58MHx8MHx8fDA%3D',
                        url: '#',
                        location: 'Pfungstadt'
                    },
                    {
                        id: 4,
                        name: 'Boulderwelt Frankfurt',
                        image: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHx8MHx8fDA%3D',
                        url: '#',
                        location: 'Frankfurt am Main'
                    },
                    {
                        id: 5,
                        name: 'Blockwerk Mainz',
                        image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNpdHl8ZW58MHx8MHx8fDA%3D',
                        url: '#',
                        location: 'Mainz'
                    },
                    {
                        id: 6,
                        name: 'Eifelblock Trier',
                        image: 'https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNpdHl8ZW58MHx8MHx8fDA%3D',
                        url: '#',
                        location: 'Trier'
                    },
                    {
                        id: 7,
                        name: 'Plan B Jena',
                        image: 'https://images.unsplash.com/photo-1516259670444-ad07068e14e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8fDA%3D',
                        url: '#',
                        location: 'Jena'
                    },
                ]
            },
            reasons: {
                heading: '3 Gründe wieso du diese Plattform lieben wirst',
                text: 'Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick.',
                items: [
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
                ]
            },
            faq: {
                heading: 'Häufig gestellte Fragen',
                text: 'Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen',
                panels: [
                    {
                        title: "Wie kann ich Boulderhallen finden und eintragen?",
                        content: "Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.",
                        isOpen: true
                    },
                    {
                        title: "Wie kann ich Boulderhallen finden und eintragen?",
                        content: "Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.",
                        isOpen: false,
                    },
                    {
                        title: "Wie kann ich Boulderhallen finden und eintragen?",
                        content: "Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe."
                    },
                    {
                        title: "Wie kann ich Boulderhallen finden und eintragen?",
                        content: "Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe."
                    },
                ]
            },
            blog: {
                heading: 'Neuste Blog-Beiträge',
                text: 'Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick.',
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
                ]
            },
        }
    }

  return (
      <div className={styles.page}>
        <main className={styles.main}>

          <Hero backgroundImage={heroImage}/>

            <Cities
                heading={data.blocks.cities.heading}
                text={data.blocks.cities.text}
                lead={data.blocks.cities.lead}
                items={data.blocks.cities.items}
            />

            <BestPlaces
                heading={data.blocks.places.heading}
                items={data.blocks.places.items}
            />

            <Reasons
                layout={'gradient'}
                count={4}
                heading={data.blocks.reasons.heading}
                items={data.blocks.reasons.items}
            />
            <Reasons
                layout={'gradient'}
                style={'column'}
                heading={data.blocks.reasons.heading}
                items={data.blocks.reasons.items}
            />
            <Reasons
                style={'column'}
                count={3}
                heading={data.blocks.reasons.heading}
                text={data.blocks.reasons.text}
                items={data.blocks.reasons.items}
            />

            <FAQ
                heading={data.blocks.faq.heading}
                text={data.blocks.faq.text}
                panels={data.blocks.faq.panels}
            />

            <Blog {...data.blocks.blog}/>

        </main>
      </div>
  );
}
