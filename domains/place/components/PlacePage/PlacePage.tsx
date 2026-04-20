import {Button, Container, Group, SimpleGrid, Stack, Title} from "@mantine/core";
import Overview from "./Overview/Overview";
import GalleryPreview from "./Gallery/GalleryPreview";
import GalleryGrid from "./Gallery/GalleryGrid";
import {Snapshot} from "./Snapshot/Snapshot";
import Content from "./Content/Content";
import Amenities from "./Amenities/Amenities";
import Information from "./Information/Information";
import StickyBar from "./StickyBar/StickyBar";

import {PlaceDetailsModel} from "@/domains/place/types";
import {AmenityGroupModel, AmenityModel, PaymentMethodModel} from "@/domains/options/types";

import styles from "./PlacePage.module.css";
import {placeUtils} from "@/domains/place/utils";
import {IconChevronRight, IconHash, IconMessageCircle} from "@tabler/icons-react";
import {HalleComment} from "@/components/halle";
import Heading from "@/components/heading/heading";
import React from "react";

type PlacePageProps = {
    place: PlaceDetailsModel;
    amenities: {
        featured: AmenityModel[];
        grouped: AmenityGroupModel[]
    }
    paymentMethods: PaymentMethodModel[]
}

export default function PlacePage({place, amenities}: PlacePageProps) {
    // Amenities
    const amenityIds = placeUtils.getAmenityIds(place)
    const featuredAmenities = placeUtils.getFeaturedAmenities(amenityIds, amenities.featured, 5)
    const importantAmenities = placeUtils.getFeaturedAmenities(amenityIds, amenities.featured, 10)
    const groupedAmenities = placeUtils.getGroupedAmenities(amenityIds, amenities.grouped)

    // Gallery
    const images = placeUtils.getImages(place)

    // Content
    const placeContent = placeUtils.getACFField(place, 'fullDescription')

    return (
        <>
            <section className={styles.PlaceHero}>
                <Container>
                    <Group gap={64} align={"stretch"} grow>
                        <Overview
                            place={place}
                            featuredAmenities={featuredAmenities}
                        />
                        {images &&
                            <GalleryPreview images={images}/>
                        }
                    </Group>

                    <Snapshot place={place}/>
                </Container>
            </section>

            <section className={styles.ContentWrap}>
                <Container>
                    <Stack className={styles.ContentStack}>

                        {placeContent && <Content content={placeContent}/>}

                        <Amenities
                            important={importantAmenities}
                            grouped={groupedAmenities}
                        />

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

                        <Information place={place}/>

                        {images &&
                            <GalleryGrid
                                images={images}
                                className={styles.GalleryGrid}
                            />
                        }

                    </Stack>


                </Container>
            </section>

            <StickyBar
                offset={1200}
                position={{top: 0, left: 0, right: 0}}
            >
                <Snapshot
                    place={place}
                    classNames={['SnapshotSticky']}
                />
            </StickyBar>
        </>
    );
}