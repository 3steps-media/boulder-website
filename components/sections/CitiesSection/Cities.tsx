import styles from './cities.module.scss';

import {
    Container,
    Flex,
    SimpleGrid,
    Text,
    Title
} from "@mantine/core";
import clsx from "clsx";
import City from "./City";
import {CityModel} from "@/domains/city/types";

type CitiesProps = {
    heading: string;
    text?: string;
    lead?: string;
    cities: CityModel[];
}

export default function Cities({heading, text, lead, cities}: CitiesProps) {
    return (
        <section className={styles.cities}>
            <Container>
                <Flex
                    justify={'space-between'}
                    align={'flex-start'}
                    gap={'xl'}
                >
                    <Text
                        size={'xl'}
                        fw={300}
                        maw={'36.25rem'}
                    >{text || ''}</Text>
                    <Text className={clsx(styles.lead, 'font-space-grotesk')}>{lead || ''}</Text>
                </Flex>

                <Title order={2}>{heading}</Title>

                <SimpleGrid
                    cols={5}
                    className={styles.grid}
                    spacing="xl"
                >
                    {
                        cities.map(city => (
                            <City key={city.id} city={city}/>
                        ))
                    }
                </SimpleGrid>
s
            </Container>
        </section>
    );
}