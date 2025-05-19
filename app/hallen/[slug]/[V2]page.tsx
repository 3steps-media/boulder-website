import SampleData from "@/_data/sample-data";
import {Container, Group} from "@mantine/core";
import Overview from "@/components/place/Overview/Overview";
import Gallery from "@/components/place/Gallery";

import styles from "@/components/place/Overview/Overview.module.scss";
import {Place} from "@/types/models";

const places: Place[] = SampleData.places;

export function generateStaticParams() {
    return places.map((place: Place) => ({
        slug: place.slug
    }))
}

export default async function Halle({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const place: Place[] = places.filter((place: Place) => place.slug === slug);

    return (
        <>
            <section className={styles.PlaceHero}>
                <Container>
                    <Group gap={64} align={"stretch"} grow>
                        <Overview {...place[0]}/>
                        <Gallery/>
                    </Group>
                </Container>
            </section>
        </>
    );
}