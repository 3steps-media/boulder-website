import styles from './cities.module.scss';
import {CityType} from "@/interfaces/city";

import {
    Container,
    Flex,
    SimpleGrid,
    Text,
    Title
} from "@mantine/core";
import clsx from "clsx";
import CityItem from "./city-item";

type CitiesProps = {
    heading: string;
    text?: string;
    lead?: string;
    items: CityType[];
}

export default function Cities({heading, text, lead, items}: CitiesProps) {
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
                        items.map(item => (
                            <CityItem key={item.id} item={item}/>
                        ))
                    }
                </SimpleGrid>

            </Container>
        </section>
    );
}