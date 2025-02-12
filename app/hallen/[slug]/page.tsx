import styles from "./page.module.scss";
import {
    IconStar,
    IconMapPin,
    IconBrandFacebook,
    IconBrandX,
    IconExternalLink,
    IconStack2,
    IconHash,
    IconClock,
    IconCheck,
    IconMessageCircle,
    IconChevronRight
} from "@tabler/icons-react"


import {Container} from "@mantine/core";
import Heading from "@/components/heading/heading";
import Link from "next/link";
import Image from "next/image";
import Fancybox from "@/components/fancybox/Fancybox";
import {cn} from "@/utils/Utils";

export function generateStaticParams() {
    return [
        {slug: 'place-1'},
        {slug: 'place-2'},
        {slug: 'place-3'},
        {slug: 'place-4'},
        {slug: 'place-5'},
        {slug: 'place-6'},
        {slug: 'place-7'},
    ]
}

export default async function Halle({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    return (
        <>
            <section className={styles.hero}>
                <Container size={'xl'}>
                    <div className={styles.inner}>
                        <div className={styles.content}>
                            <div className={styles.top}>
                                <Heading as={'h1'}>Steinzeit Boulderhalle Göppingen ({slug})</Heading>

                                <div className={styles.location}>
                                    <IconMapPin/>
                                    Eislingen/Fils
                                </div>

                                {/*TODO I don't like meta here*/}
                                <div className={styles.meta}>
                                    <div className={styles.rating}>
                                        5.0
                                        <IconStar/>
                                        <IconStar/>
                                        <IconStar/>
                                        <IconStar/>
                                        <IconStar/>
                                    </div>
                                    <div className={styles.social}>
                                        <Link href={'https://facebook.com'} target={'_blank'} rel="noopener noreferrer">
                                            <IconBrandFacebook/>
                                        </Link>
                                        <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                            <IconBrandX/>
                                        </Link>

                                        <Link href={'#'}>
                                            <IconExternalLink/>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.services}>
                                    <div className={styles.service}>
                                        <IconStack2/>
                                        Gruppengröße
                                    </div>
                                    <div className={styles.service}>
                                        <IconStack2/>
                                        Kletterfläche
                                    </div>
                                    <div className={styles.service}>
                                        <IconStack2/>
                                        Restaurant
                                    </div>
                                </div>

                                <p>
                                    Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt:
                                </p>
                                <p>
                                    Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe. Von positiv
                                    geneigter Platte über gerade Wände, sanfte Überhänge, steiles Gelände bis hin zum
                                    8,00 m ausladenden Dach des Diamants ist alles da.
                                </p>
                                <p>
                                    Über 280 Routen in verschiedenen Schwierigkeiten und wöchentlich neuen „Problemen“
                                    bieten dir ein abwechslungsreiches und spannendes Erlebnis.
                                </p>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.achievements}>
                                    <div className={styles.item}>
                                        <IconHash/>
                                        <p>Local Hero</p>
                                    </div>
                                    <div className={styles.item}>
                                        <IconHash/>
                                        <p>Top Arbeiter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Fancybox
                            className={styles.gallery}
                            options={{
                                Carousel: {
                                    infinite: true,
                                },
                            }}
                        >
                            <a href={'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                               data-fancybox="gallery"
                               data-caption="Caption #1"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt={''}
                                    width={800}
                                    height={600}
                                />
                            </a>
                            <a href={'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                               data-fancybox="gallery"
                               data-caption="Caption #2"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt={''}
                                    width={420}
                                    height={247}
                                />
                            </a>
                            <a href={'https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                               data-fancybox="gallery"
                               data-caption="Caption #3"
                            >
                                <Image
                                    src="https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt={''}
                                    width={420}
                                    height={247}
                                />
                            </a>
                            <div className={styles.hidden}>
                                <a href={'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="gallery"
                                   data-caption="Caption #3"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={420}
                                        height={247}
                                    />
                                </a>
                            </div>
                        </Fancybox>
                    </div>
                    {/*TODO rename?*/}
                    {/*TODO maybe 2 divs: items + action*/}
                    <div className={styles.summary}>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <IconStar/>
                                </div>
                                <div className={styles.legend}>
                                    <span>2</span>
                                    Bewertungen
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <IconClock/>
                                </div>
                                <div className={styles.legend}>
                                    <span>Heute geöffnet</span>
                                    08:00 - 19:00 Uhr
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                    <IconMapPin/>
                                </div>
                                <div className={styles.legend}>
                                    <span>Musterstraße 4</span>
                                    Eislingen/Fils
                                </div>
                            </div>
                        </div>
                        <div className={cn(styles.action)}>
                            <div className={styles.price}>
                                <span>ab</span>
                                8,50€
                            </div>
                            <button type={'button'}>Ruf uns jetzt an</button>
                        </div>
                    </div>
                </Container>
            </section>

            <main className={styles.main}>
                <Container size={'xl'}>
                    <div className={styles.inner}>
                        <Heading>Beschreibung</Heading>
                        <p>
                            Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt:
                        </p>
                        <p>
                            Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe. Von positiv
                            geneigter Platte über gerade Wände, sanfte Überhänge, steiles Gelände bis hin zum
                            8,00 m ausladenden Dach des Diamants ist alles da.
                        </p>
                        <p>
                            Über 280 Routen in verschiedenen Schwierigkeiten und wöchentlich neuen „Problemen“
                            bieten dir ein abwechslungsreiches und spannendes Erlebnis.
                        </p>

                        <Heading>Ausstattung Steinzeithalle Göppingen</Heading>

                        <Heading as={'h3'}>Beliebteste Ausstattungen</Heading>

                        <ul className={styles.services2}>
                            <li><IconHash/> Tanzlokal & Sauna</li>
                            <li><IconHash/> Duschen</li>
                            <li><IconHash/> Cocktailbar</li>
                            <li><IconHash/> Restaurant</li>
                            <li><IconHash/> Parkplatz</li>
                            <li><IconHash/> Barrierefreier Zugang</li>
                            <li><IconHash/> Wiener Würstchen</li>
                            <li><IconHash/> Thüringer Rostbratwurst</li>
                        </ul>

                        <div className={styles.services3}>
                            <div>
                                <Heading as={'h3'}>
                                    <IconHash/>
                                    Komfortabler Aufenthalt
                                </Heading>

                                <ul>
                                    <li><IconCheck/> Tanzlokal & Sauna</li>
                                    <li><IconCheck/> Duschen</li>
                                    <li><IconCheck/> Cocktailbar</li>
                                    <li><IconCheck/> Restaurant</li>
                                    <li><IconCheck/> Parkplatz</li>
                                    <li><IconCheck/> Barrierefreier Zugang</li>
                                    <li><IconCheck/> Wiener Würstchen</li>
                                    <li><IconCheck/> Thüringer Rostbratwurst</li>
                                </ul>
                            </div>
                            <div>
                                <Heading as={'h3'}>
                                    <IconHash/>
                                    Kletterhalle
                                </Heading>

                                <ul>
                                    <li><IconCheck/> Tanzlokal & Sauna</li>
                                    <li><IconCheck/> Duschen</li>
                                    <li><IconCheck/> Cocktailbar</li>
                                    <li><IconCheck/> Restaurant</li>
                                </ul>
                            </div>
                            <div>
                                <Heading as={'h3'}>
                                    <IconHash/>
                                    Haustiere
                                </Heading>

                                <ul>
                                    <li><IconCheck/> Cocktailbar</li>
                                    <li><IconCheck/> Restaurant</li>
                                    <li><IconCheck/> Parkplatz</li>
                                    <li><IconCheck/> Barrierefreier Zugang</li>
                                    <li><IconCheck/> Wiener Würstchen</li>
                                    <li><IconCheck/> Thüringer Rostbratwurst</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.rating}>
                            <Heading>Rating</Heading>

                            <div className={styles.ratingInner}>
                                <div className={styles.ratingBars}>
                                    <Heading as={'h3'}>Gesamtbewertung</Heading>
                                    <ul>
                                        <li><strong>5</strong> <span></span></li>
                                        <li><strong>4</strong> <span></span></li>
                                        <li><strong>3</strong> <span></span></li>
                                        <li><strong>2</strong> <span></span></li>
                                        <li><strong>1</strong> <span></span></li>
                                    </ul>
                                </div>
                                <div className={styles.ratingItem}>
                                    <div>
                                        <span>Klettern</span>
                                        5.0
                                    </div>
                                    <IconHash/>
                                </div>
                                <div className={styles.ratingItem}>
                                    <div>
                                        <span>Service</span>
                                        4.9
                                    </div>
                                    <IconHash/>
                                </div>
                                <div className={styles.ratingItem}>
                                    <div>
                                        <span>Errichbarkeit</span>
                                        4.9
                                    </div>
                                    <IconHash/>
                                </div>
                            </div>

                        </div>

                        <div className={styles.comments}>
                            <div className={styles.comment}>
                                <div className={styles.stars}>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                </div>
                                <p>
                                    Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt:
                                    Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.
                                </p>
                                <div className={styles.author}>
                                    Florian Daugalies
                                    <span>Besucht am <time dateTime={'02.05.2024'}>02.05.2024</time></span>
                                </div>
                            </div>
                            <div className={styles.comment}>
                                <div className={styles.stars}>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                </div>
                                <p>
                                    Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt:
                                    Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.
                                </p>
                                <div className={styles.author}>
                                    Florian Daugalies
                                    <span>Besucht am <time dateTime={'02.05.2024'}>02.05.2024</time></span>
                                </div>
                            </div>
                            <div className={styles.comment}>
                                <div className={styles.stars}>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                </div>
                                <p>
                                    Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt:
                                    Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.
                                </p>
                                <div className={styles.author}>
                                    Florian Daugalies
                                    <span>Besucht am <time dateTime={'02.05.2024'}>02.05.2024</time></span>
                                </div>
                            </div>
                            <div className={styles.comment}>
                                <div className={styles.stars}>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                    <IconStar/>
                                </div>
                                <p>
                                    Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt:
                                    Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.
                                </p>
                                <div className={styles.author}>
                                    Florian Daugalies
                                    <span>Besucht am <time dateTime={'02.05.2024'}>02.05.2024</time></span>
                                </div>
                            </div>

                            <div className={styles.add}>
                                <Heading as={'h3'}>Du hast diese Halle besucht? Dann bewerte diese Halle!</Heading>
                                <button type={'button'}>Bewertung abgeben</button>
                            </div>
                        </div>

                        <div className={styles.faq}>
                            <Heading>Häufig gestellte Fragen</Heading>

                            <div className={styles.faqGroups}>
                                <ul>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                    <li>
                                        <span>
                                            <IconMessageCircle/>
                                            Sind große Gruppen möglich?
                                        </span>
                                        <IconChevronRight/>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.add}>
                                <hgroup>
                                    <Heading as={'h3'}>Sie haben weitere Fragen?</Heading>
                                    <p>Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz
                                        begehrt: Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m
                                        Wandhöhe.</p>
                                </hgroup>
                                <button type={'button'}>Bewertung abgeben</button>
                            </div>
                        </div>

                        <div className={styles.properties}>
                            <Heading>Wichtiges auf einen Blick</Heading>
                            <dl>
                                <dt>
                                    <IconHash/>
                                    Öffnungszeiten
                                </dt>
                                <dd>von 09:00 bis 19:00 Uhr</dd>
                                <dt>
                                    <IconHash/>
                                    Wichtige Informationen
                                </dt>
                                <dd>Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herzbegehrt:
                                    Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe. Von positiv
                                    geneigter Platte über gerade Wände, sanfte Überhänge.
                                </dd>
                                <dt>
                                    <IconHash/>
                                    Haustiere
                                </dt>
                                <dd>Keine Haustiere gestattet</dd>
                                <dt>
                                    <IconHash/>
                                    Verpflegung
                                </dt>
                                <dd>Bar und Restaurant vorhanden</dd>
                                <dt>
                                    <IconHash/>
                                    Hygiene
                                </dt>
                                <dd>Duschen und WC vorhanden</dd>
                                <dt>
                                    <IconHash/>
                                    Parkmöglichkeiten
                                </dt>
                                <dd>Direkt vor Ort</dd>
                                <dt>
                                    <IconHash/>
                                    Gruppengröße
                                </dt>
                                <dd>Maximal 50 Personen</dd>
                                <dt>
                                    <IconHash/>
                                    Einsteigerkurse
                                </dt>
                                <dd>Vorhanden</dd>
                            </dl>
                        </div>

                        <div className={styles.photos}>
                            <Heading>Fotos</Heading>

                            <Fancybox
                                className={styles.photos}
                                options={{
                                    Carousel: {
                                        infinite: true,
                                    },
                                }}
                            >
                                <a href={'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="photos"
                                   data-caption="Caption #1"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={300}
                                        height={300}
                                    />
                                </a>
                                <a href={'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="photos"
                                   data-caption="Caption #2"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={300}
                                        height={300}
                                    />
                                </a>
                                <a href={'https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="photos"
                                   data-caption="Caption #3"
                                >
                                    <Image
                                        src="https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={300}
                                        height={300}
                                    />
                                </a>
                                <a href={'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="photos"
                                   data-caption="Caption #3"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={300}
                                        height={300}
                                    />
                                </a>
                                <a href={'https://images.unsplash.com/photo-1482350325005-eda5e677279b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="photos"
                                   data-caption="Caption #3"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1482350325005-eda5e677279b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={300}
                                        height={300}
                                    />
                                </a>
                                <a href={'https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="photos"
                                   data-caption="Caption #3"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={300}
                                        height={300}
                                    />
                                </a>
                                <a href={'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="photos"
                                   data-caption="Caption #3"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={300}
                                        height={300}
                                    />
                                </a>
                                <a href={'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                   data-fancybox="photos"
                                   data-caption="Caption #3"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt={''}
                                        width={300}
                                        height={300}
                                    />
                                </a>
                            </Fancybox>
                        </div>
                    </div>
                </Container>
            </main>


        </>
    )
}