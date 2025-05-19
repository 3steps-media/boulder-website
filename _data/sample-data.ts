const placeMeta = {
    rating: 4.5,
    reviews: 2,
    url: '#',
    facebook: '#',
    x: '#'
}

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
            location: {
                id: 1,
                city: 'Waldshut-Tiengen'
            },
            services: [0, 1, 2, 3, 4, 5, 6, 7],
            meta: placeMeta
        },
        {
            id: 2,
            title: 'Boulderwelt München-West is a place with loooooong name fot my testing porposes only',
            image: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-2',
            location: {
                id: 2,
                city: 'München'
            },
            services: [0, 1, 5, 6, 7],
            meta: placeMeta
        },
        {
            id: 3,
            title: 'Studio Bloc Pfungstadt',
            image: 'https://images.unsplash.com/photo-1495954380655-01609180eda3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-3',
            location: {
                id: 3,
                city: 'Pfungstadt'
            },
            services: [0, 2, 4, 6],
            meta: placeMeta
        },
        {
            id: 4,
            title: 'Boulderwelt Frankfurt',
            image: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-4',
            location: {
                id: 4,
                city: 'Frankfurt am Main'
            },
            services: [1, 3, 5, 7],
            meta: placeMeta
        },
        {
            id: 5,
            title: 'Blockwerk Mainz',
            image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-5',
            location: {
                id: 5,
                city: 'Mainz'
            },
            services: [0, 1, 2],
            meta: placeMeta
        },
        {
            id: 6,
            title: 'Eifelblock Trier',
            image: 'https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-6',
            location: {
                id: 6,
                city: 'Waldshut-Tiengen'
            },
            services: [7],
            meta: placeMeta
        },
        {
            id: 7,
            title: 'Plan B Jena',
            image: 'https://images.unsplash.com/photo-1516259670444-ad07068e14e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8fDA%3D',
            slug: 'place-7',
            location: {
                id: 7,
                city: 'Jena'
            },
            services: [0, 1, 2, 3, 4],
            meta: placeMeta
        },
    ],
    posts: [
        {
            id: 1,
            slug: 'post-1',
            title: 'Bloc-Hütte Augsburg: Ein Geheimtipp in Bayern',
            content: `
                <p>Wir haben einen Urlaubstrip wieder mal mit dem Besuch von für uns etwas weiter weg gelegenen Boulderhallen verbunden. Und zwar war es diesmal die Bloc-Hütte Augsburg. Die Anfahrt war unproblematisch und die Halle ist leicht zu finden: Ihr fahrt in eine Sackgasse und bevor ihr verzweifelt die Halle sucht, seht ihr am Ende eines Geländes die große Tafel der Bloc-Hütte Augsburg.</p>
                <p>Parkplätze gibt es reichlich direkt vor der Türe und sogar mit Parkanleitung, damit platzsparend geparkt wird und jeder einen Platz findet. Fahrräder haben hier auch einen überdachten Stellplatz, mit den öffentlichen Verkehrsmitteln müsst ihr ein paar Minuten Fußweg in Kauf nehmen.</p>
                <h2>Bloc-Hütte Augsburg: Gemütlicher Eingangsbereich mit viel Liebe zum Detail</h2>
                <p>Der Eingangsbereich der Bloc-Hütte Augsburg ist mit viel Holz und vielen durchdachten Kleinigkeiten, die sich als Konzept durch die ganze Halle ziehen, freundlich gestaltet. Ein direkter Blick in die Boulderhalle macht außerdem schon direkt Lust loszulegen.</p>
                <p>Der Empfang durch das Personal war überaus freundlich, wir kamen direkt ins Gespräch mit einem Schrauber, auch dieser war sehr freundlich. Der Check-in ist unkompliziert, wer kurz warten muss, kann im angrenzenden Shop eine Runde stöbern gehen.</p>
                <h2>Die Ausstattung der Bloc-Hütte Augsburg</h2>
                <p>Die Sanitäranlagen der Boulderhalle sind absolut top, gepflegt und sehr hochwertig gestaltet und befinden sich im Eingangsbereich. Das Bistro ist gemütlich, es gibt ein paar Snacks und Kletternahrung, auch hier findet sich die liebevolle Gestaltung mit viel Holz wieder.</p>
                <p>Und auch hier entdeckt man direkt ein kleines Highlight, welches wir so bisher nur ganz selten gesehen haben. Für jeden, der nach der Arbeit direkt zum Sport geht und auf sein Handy angewiesen ist, gibt es hier drei Handy-Ladeboxen.</p>
                <p>Diese wurden selbstverständlich selbst designed und aus Holz gebaut. Eine klasse Idee, wie wir finden, so kann man während dem Genuss eines Kaffees noch sein Handy laden. Top für jeden, der nicht aufs Smartphone verzichten kann.</p>
            `,
            excerpt: `Wir haben einen Urlaubstrip wieder mal mit dem Besuch von für uns etwas weiter weg gelegenen Boulderhallen verbunden.`,
            image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: '03.01.2020',
            categories: [{
                id: 1,
                name: 'Marketing',
                slug: 'marketing',
            }],
        },
        {
            id: 2,
            slug: 'post-2',
            title: 'LÖ bloc Boulderhalle in Grenzach-Whylen: Ein Geheimtipp nahe der schweizer Grenze!',
            content: `
                <p>Heute haben wir mal wieder eine neue Boulderhalle, die wir euch gerne vorstellen wollen. Durch einen Tipp hat es uns vor Kurzem nämlich in die Nähe der Schweiz verschlagen. Genau genommen nach Grenzach-Whylen in die Boulderhalle LÖ bloc. Warum wir finden, dass das LÖ bloc ein echter Geheimtipp ist, was uns besonders gut gefallen hat und was wir vielleicht noch ändern würden, das erfahrt ihr jetzt.</p>
                <h2>Boulderhalle LÖ bloc in Grenzach-Whylen: Die Anfahrt und unser erster Eindruck</h2>
                <p>Der Eingangsbereich der Bloc-Hütte Augsburg ist mit viel Holz und vielen durchdachten Kleinigkeiten, die sich als Konzept durch die ganze Halle ziehen, freundlich gestaltet. Ein direkter Blick in die Boulderhalle macht außerdem schon direkt Lust loszulegen.</p>
                <p>Der Empfang durch das Personal war überaus freundlich, wir kamen direkt ins Gespräch mit einem Schrauber, auch dieser war sehr freundlich. Der Check-in ist unkompliziert, wer kurz warten muss, kann im angrenzenden Shop eine Runde stöbern gehen.</p>
                <p>Die Sanitäranlagen der Boulderhalle sind absolut top, gepflegt und sehr hochwertig gestaltet und befinden sich im Eingangsbereich. Das Bistro ist gemütlich, es gibt ein paar Snacks und Kletternahrung, auch hier findet sich die liebevolle Gestaltung mit viel Holz wieder.</p>
                <h2>Das Herzstück des LÖ bloc: Die Boulderhalle und ihre Routen</h2>
                <p>Und auch hier entdeckt man direkt ein kleines Highlight, welches wir so bisher nur ganz selten gesehen haben. Für jeden, der nach der Arbeit direkt zum Sport geht und auf sein Handy angewiesen ist, gibt es hier drei Handy-Ladeboxen.</p>
                <p>Diese wurden selbstverständlich selbst designed und aus Holz gebaut. Eine klasse Idee, wie wir finden, so kann man während dem Genuss eines Kaffees noch sein Handy laden. Top für jeden, der nicht aufs Smartphone verzichten kann.</p>
            `,
            excerpt: `Heute haben wir mal wieder eine neue Boulderhalle, die wir euch gerne vorstellen wollen...`,
            image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: '10.07.2019',
            categories: [{
                id: 1,
                name: 'Marketing',
                slug: 'marketing',
            }, {
                id: 2,
                name: 'Bloc',
                slug: 'bloc',
            }],
        },
        {
            id: 3,
            slug: 'post-3',
            title: 'Blockhaus Freiburg',
            content: `
                <p>Uns hat es ins Blockhaus Freiburg verschlagen, was uns gefallen hat, was uns nicht gefallen hat und was wir euch über das Blockhaus in Freiburg zu erzählen haben erfahrt ihr hier.</p>
                <h2>Das Blockhaus Freiburg: Die Anfahrt und unser erster Eindruck</h2>
                <p>Der Eingangsbereich der Bloc-Hütte Augsburg ist mit viel Holz und vielen durchdachten Kleinigkeiten, die sich als Konzept durch die ganze Halle ziehen, freundlich gestaltet. Ein direkter Blick in die Boulderhalle macht außerdem schon direkt Lust loszulegen.</p>
                <p>Der Empfang durch das Personal war überaus freundlich, wir kamen direkt ins Gespräch mit einem Schrauber, auch dieser war sehr freundlich. Der Check-in ist unkompliziert, wer kurz warten muss, kann im angrenzenden Shop eine Runde stöbern gehen.</p>
                <h2>Der erste Eindruck drinnen gibt eine Vorstellung der Größe</h2>
                <p>Die Sanitäranlagen der Boulderhalle sind absolut top, gepflegt und sehr hochwertig gestaltet und befinden sich im Eingangsbereich. Das Bistro ist gemütlich, es gibt ein paar Snacks und Kletternahrung, auch hier findet sich die liebevolle Gestaltung mit viel Holz wieder.</p>
                <p>Und auch hier entdeckt man direkt ein kleines Highlight, welches wir so bisher nur ganz selten gesehen haben. Für jeden, der nach der Arbeit direkt zum Sport geht und auf sein Handy angewiesen ist, gibt es hier drei Handy-Ladeboxen.</p>
                <p>Diese wurden selbstverständlich selbst designed und aus Holz gebaut. Eine klasse Idee, wie wir finden, so kann man während dem Genuss eines Kaffees noch sein Handy laden. Top für jeden, der nicht aufs Smartphone verzichten kann.</p>
            `,
            excerpt: `Uns hat es ins Blockhaus Freiburg verschlagen, was uns gefallen hat, was uns nicht gefallen hat und was wir euch über das Blockhaus in Freiburg zu erzählen haben erfahrt ihr hier.`,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: '08.04.2019',
            categories: [{
                id: 3,
                name: "Places Review",
                slug: "places-review",
            }]
        },
        {
            id: 4,
            slug: 'boulderhaus-mannheim',
            title: 'Boulderhaus Mannheim - ein Spaß für jeden Sportbegeisterten',
            content: `
                <p>Vor einigen Wochen hatten wir euch ja bereits vom Boulderhaus Darmstadt berichtet. Diese Boulderhalle gehört zu einer Boulderhaus Kette aus Heidelberg. Ein weiterer Ableger der Kette ist das Boulderhaus in Mannheim, bei dem wir nun zu Besuch waren. Wie uns das Mannheimer Boulderhaus gefallen hat und was ihr bei einem Besuch dort erwarten könnt, das erfahrt ihr in diesem Artikel.</p>
                <h2>Das Boulderhaus in Mannheim - Unsere Anfahrt und der erste Eindruck</h2>
                <p>Die Anfahrt über die Autobahn und dann ein Stück durch das ehemalige Militärgelände in Mannheim war recht einfach und die Halle gut zu finden. Zusätzlich dazu gibt es hier ein gut ausgebautes ÖPNV Netz.</p>
                <p>Die Parkmöglichkeiten vor Ort sind mehr als ausreichend, hier findet wirklich jeder selbst zu Stoßzeiten einen Parkplatz.</p>
                <h2>Ein Boulderhaus mit Industriecharme</h2>
                <p>Die Sanitäranlagen der Boulderhalle sind absolut top, gepflegt und sehr hochwertig gestaltet und befinden sich im Eingangsbereich. Das Bistro ist gemütlich, es gibt ein paar Snacks und Kletternahrung, auch hier findet sich die liebevolle Gestaltung mit viel Holz wieder.</p>
                <p>Und auch hier entdeckt man direkt ein kleines Highlight, welches wir so bisher nur ganz selten gesehen haben. Für jeden, der nach der Arbeit direkt zum Sport geht und auf sein Handy angewiesen ist, gibt es hier drei Handy-Ladeboxen.</p>
                <p>Diese wurden selbstverständlich selbst designed und aus Holz gebaut. Eine klasse Idee, wie wir finden, so kann man während dem Genuss eines Kaffees noch sein Handy laden. Top für jeden, der nicht aufs Smartphone verzichten kann.</p>
            `,
            excerpt: `Vor einigen Wochen hatten wir euch ja bereits vom Boulderhaus Darmstadt berichtet.`,
            image: "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
            date: '02.04.2018',
            categories: [{
                id: 3,
                name: "Places Review",
                slug: "places-review",
            }, {
                id: 4,
                name: "Rechter",
                slug: "rechter",
            }]
        },
        {
            id: 5,
            slug: 'petz-boulderhalle-neustadt',
            title: 'Petz Boulderhalle Neustadt: Ein Geheimtipp in der Pfalz',
            content: `
                <p>Heute waren wir mal wieder persönlich eine Halle besuchen. Und zwar war es die Petz Boulderhalle Neustadt an der Weinstraße. Die Anfahrt war unproblematisch und die Halle ist leicht zu finden. Eine große Aufschrift über dem Eingang zeigt euch, dass ihr hier genau richtig seid. Parkplätze gibt es reichlich direkt vor der Türe. Die Halle wurde erst Anfang 2019 eröffnet und ist vielen somit wohl noch nicht bekannt.</p>
                <h2>Petz Boulderhalle: Gemütlicher Eingangsbereich mit Sitzgelegenheit</h2>
                <p>Der Eingangsbereich der neuen Neustädter Boulderhalle ist einladend gestaltet. Hier fällt einem auch bereits die Liebe zum Detail auf, welche sich durch die ganze Halle zieht. Kleine Tischpflanzen sind in Chalkbags gehüllt, der Thekenbereich ist sauber und schön geordnet, die Kaffeemaschine macht direkt Lust auf den ersten Kaffee.</p>
                <p>Der Empfang ist super freundlich, das Personal erklärt in aller Ruhe und mit viel Liebe alles, was man braucht um loszulegen.</p>
                <h2>Kreativität auch bei den Routen der Neustädter Boulderhalle</h2>
                <p>Die Sanitäranlagen der Boulderhalle sind absolut top, gepflegt und sehr hochwertig gestaltet und befinden sich im Eingangsbereich. Das Bistro ist gemütlich, es gibt ein paar Snacks und Kletternahrung, auch hier findet sich die liebevolle Gestaltung mit viel Holz wieder.</p>
                <p>Und auch hier entdeckt man direkt ein kleines Highlight, welches wir so bisher nur ganz selten gesehen haben. Für jeden, der nach der Arbeit direkt zum Sport geht und auf sein Handy angewiesen ist, gibt es hier drei Handy-Ladeboxen.</p>
                <p>Diese wurden selbstverständlich selbst designed und aus Holz gebaut. Eine klasse Idee, wie wir finden, so kann man während dem Genuss eines Kaffees noch sein Handy laden. Top für jeden, der nicht aufs Smartphone verzichten kann.</p>
            `,
            excerpt: `Heute waren wir mal wieder persönlich eine Halle besuchen.`,
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: '17.03.2018',
            categories: [{
                id: 1,
                name: 'Marketing',
                slug: 'marketing',
            }, {
                id: 3,
                name: "Places Review",
                slug: "places-review",
            }]
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