import React from "react";

import {
    IconStack2,
    IconHash,
    IconCheck,
    IconMessageCircle,
    IconChevronRight, IconToolsKitchen3, IconBike
} from "@tabler/icons-react"

import {
    Button,
    Container,
    Group, List, ListItem, SimpleGrid,
    Stack,
    Text,
    Title
} from "@mantine/core";

import Heading from "@/components/heading/heading";
import Image from "next/image";
import Fancybox from "@/components/fancybox/Fancybox";

import {
    HalleAchievements,
    HalleComment,
    HalleContent,
    HalleGallery,
    HalleLocation,
    HalleMainFeatures,
    HalleMeta,
    HalleSummary
} from "@/components/halle";

import styles from "./page.module.scss";

import SampleData from "@/_data/sample-data";
import {IHalleGallery} from "@/interfaces/halle";
import {PlaceType} from "@/interfaces/place";

const hallen: PlaceType[] = SampleData.places;

export function generateStaticParams() {
    return hallen.map((halle: PlaceType) => ({
        slug: halle.slug
    }))
}

export default async function Halle({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const halle: PlaceType[] = hallen.filter((place: PlaceType) => place.slug === slug);

    const achievements: { icon: React.ReactNode; text: string }[] = [
        {
            icon: <IconHash/>,
            text: "Local Hero"
        },
        {
            icon: <IconHash/>,
            text: "Top Anbieter"
        },
    ]
    const gallery: IHalleGallery[] = [
        {
            image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'Captiuon #1'
        },
        {
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'Captiuon #2'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: 'Captiuon #3'
        }
    ]
    const mainFeatures: { icon: React.ReactNode; feature: string }[] = [
        {
            icon: <IconBike/>,
            feature: 'Gruppengröße',
        },
        {
            icon: <IconStack2/>,
            feature: "Kletterfläche"
        },
        {
            icon: <IconToolsKitchen3/>,
            feature: "Restaurant"
        },
        {
            icon: <IconStack2/>,
            feature: "Stack"
        },

    ]

    return (
        <>
            <section className={styles.hero}>
                <Container>
                    <Group gap={64} align={"stretch"} grow>
                        <Stack gap={0} justify={'space-between'} mih={'100%'}>
                            <Stack justify={'space-between'} h={'100%'}>
                                <Stack gap={0}>
                                    <Title size={'h1'} className={styles.title}>
                                        {halle[0].title}
                                    </Title>

                                    <HalleLocation location={`Eislingen/Fils (${slug})`}/>

                                    {/*TODO I don't like meta here but...*/}
                                    <HalleMeta classes={styles.meta}/>

                                    <HalleMainFeatures items={mainFeatures}/>

                                    {/*TODO replace with TypographyStylesProvider*/}
                                    <Text size={'md'} lh={1.5} fw={300} mb={24}>
                                        Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz
                                    </Text>
                                    <Text size={'md'} lh={1.5} fw={300} mb={24}>
                                        Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe. Von
                                        positiv geneigter Platte über gerade Wände, sanfte Überhänge, steiles Gelände
                                        bis hin zum 8,00 m ausladenden Dach des Diamants ist alles da.
                                    </Text>
                                    <Text size={'md'} lh={1.5} fw={300}>
                                        Über 280 Routen in verschiedenen Schwierigkeiten und wöchentlich neuen
                                        „Problemen“ bieten dir ein abwechslungsreiches und spannendes Erlebnis.
                                    </Text>
                                    {/**/}

                                </Stack>
                                <HalleAchievements items={achievements}/>
                            </Stack>
                        </Stack>

                        <HalleGallery items={gallery} classes={styles.gallery}/>
                    </Group>
                    <HalleSummary classes={styles.summary}/>
                </Container>
            </section>

            <main className={styles.main}>
                <Container size={'xl'}>
                    <div className={styles.inner}>
                        <HalleContent/>

                        <Title order={2} size={'40px'}>Ausstattung Steinzeithalle Göppingen</Title>

                        <Title order={3} size={'md'}>Beliebteste Ausstattungen</Title>

                        <List
                            className={styles.services2}
                            size="sm"
                            center
                            icon={<IconHash size={24}/>}
                        >
                            <ListItem>Tanzlokal & Sauna</ListItem>
                            <ListItem>Duschen</ListItem>
                            <ListItem>Cocktailbar</ListItem>
                            <ListItem>Restaurant</ListItem>
                            <ListItem>Parkplatz</ListItem>
                            <ListItem>Barrierefreier Zugang</ListItem>
                            <ListItem>Wiener Würstchen</ListItem>
                            <ListItem>Thüringer Rostbratwurst</ListItem>
                        </List>

                        <div className={styles.services3}>
                            <div>
                                <Title order={3} size={'md'}>
                                    <IconHash/>
                                    Komfortabler Aufenthalt
                                </Title>

                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    icon={<IconCheck size={24}/>}
                                >
                                    <ListItem>Tanzlokal & Sauna</ListItem>
                                    <ListItem>Duschen</ListItem>
                                    <ListItem>Cocktailbar</ListItem>
                                    <ListItem>Restaurant</ListItem>
                                    <ListItem>Parkplatz</ListItem>
                                    <ListItem>Barrierefreier Zugang</ListItem>
                                    <ListItem>Wiener Würstchen</ListItem>
                                    <ListItem>Thüringer Rostbratwurst</ListItem>
                                </List>
                            </div>
                            <div>
                                <Title order={3} size={'md'}>
                                    <IconHash/>
                                    Kletterhalle
                                </Title>

                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    icon={<IconCheck size={24}/>}
                                >
                                    <ListItem>Tanzlokal & Sauna</ListItem>
                                    <ListItem>Duschen</ListItem>
                                    <ListItem>Cocktailbar</ListItem>
                                    <ListItem>Restaurant</ListItem>
                                    <ListItem>Parkplatz</ListItem>
                                    <ListItem>Barrierefreier Zugang</ListItem>
                                    <ListItem>Wiener Würstchen</ListItem>
                                    <ListItem>Thüringer Rostbratwurst</ListItem>
                                </List>
                            </div>
                            <div>
                                <Title order={3} size={'md'}>
                                    <IconHash/>
                                    Haustiere
                                </Title>

                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    icon={<IconCheck size={24}/>}
                                >
                                    <ListItem>Tanzlokal & Sauna</ListItem>
                                    <ListItem>Duschen</ListItem>
                                    <ListItem>Cocktailbar</ListItem>
                                    <ListItem>Restaurant</ListItem>
                                    <ListItem>Parkplatz</ListItem>
                                    <ListItem>Barrierefreier Zugang</ListItem>
                                    <ListItem>Wiener Würstchen</ListItem>
                                    <ListItem>Thüringer Rostbratwurst</ListItem>
                                </List>
                            </div>
                        </div>

                        <div className={styles.rating}>
                            <Title order={2} size={'40px'}>Rating</Title>

                            <div className={styles.ratingInner}>
                                <div className={styles.ratingBars}>
                                    <Title order={3}>Gesamtbewertung</Title>
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

                        <SimpleGrid cols={2} spacing={60} mt={60}>
                            <HalleComment/>
                            <HalleComment/>
                            <HalleComment/>
                            <HalleComment/>
                        </SimpleGrid>

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
                                <Button color={'green'}>Bewertung abgeben</Button>
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