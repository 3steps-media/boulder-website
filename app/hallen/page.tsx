import type {Metadata} from "next";

import {Container, SimpleGrid} from "@mantine/core";
import HeroInner from "@/components/sections/HeroSection/HeroInner";
import {placeApi} from "@/domains/place/api";
import PlacePreview from "@/domains/place/components/PlacePreview";
import {PlacePreviewCollectionEdgeModel} from "@/domains/place/types";

export default async function Hallen() {

    const places: PlacePreviewCollectionEdgeModel[] = await placeApi.loadPlacePreviewCollection(50);

    return (
        <>
            <HeroInner title={'Hallen Root Page'}/>

            <section>
                <Container>
                    {places &&
                        <SimpleGrid
                            cols={{base: 1, md: 4}}
                            spacing="lg"
                            mt={30}
                        >
                            {places.map((place: PlacePreviewCollectionEdgeModel) => (
                                <PlacePreview
                                    key={place.cursor}
                                    place={place.node}/>
                            ))}

                        </SimpleGrid>
                    }
                </Container>
            </section>
        </>
    )
}

export const metadata: Metadata = {
    title: "Hallen Page Example",
    description: "Some page SEO description",
};