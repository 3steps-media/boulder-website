import {Container, Group, Stack} from "@mantine/core";
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

                        <Information place={place}/>

                    </Stack>

                    {images &&
                        <GalleryGrid
                            images={images}
                            className={styles.GalleryGrid}
                        />
                    }

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