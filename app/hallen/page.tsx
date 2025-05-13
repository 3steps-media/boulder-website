import type {Metadata} from "next";
import HeroInner from "@/components/sections/HeroSection/HeroInner";
import {Container, SimpleGrid} from "@mantine/core";
import SampleData from "@/_data/sample-data";
import Place from "@/components/place/place";

export default function Hallen() {

    const places = SampleData.places;
    const data = {
        Ratio: 'square',
        TitleHeight: 1,
        Services: false,
        Info: true,
        MetaPosition: false,
        MetaAlignment: 'top',
        MetaOrder: false,
        Rating: {
            Type: 'stars'
        }
    }

    return (
        <>
            <HeroInner title={'Hallen Root Page'}/>

            <section>
                <Container>
                    <SimpleGrid
                        cols={{base: 1, md: 4}}
                        spacing="lg"
                        mt={30}
                    >

                        {places.map((place, i) => (
                            <Place
                                key={i}
                                item={place}
                                data={data}
                            />
                        ))}

                    </SimpleGrid>
                </Container>
            </section>
        </>
    )
}

export const metadata: Metadata = {
    title: "Hallen Page Example",
    description: "Some page SEO description",
};