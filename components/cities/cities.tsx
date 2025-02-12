import styles from './cities.module.scss';
import {CityType} from "@/interfaces/city";

import {
    AspectRatio,
    BackgroundImage,
    Badge,
    Box,
    Container,
    Flex,
    SimpleGrid,
    Text,
    Title
} from "@mantine/core";
import Link from "next/link";
import clsx from "clsx";

type Props = {
    heading: string;
    text?: string;
    lead?: string;
    items: CityType[];
}

export default function Cities({heading, text, lead, items}: Props) {
    return (
        <section className={styles.cities}>
            <Container size={'xl'}>
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
                            <Box
                                key={item.id}
                                className={styles.city}
                                component={Link}
                                href={item.slug}
                            >
                                <AspectRatio ratio={1}>
                                    <BackgroundImage
                                        className={styles.image}
                                        src={item.image}
                                        radius={'xl'}
                                    >
                                        <Flex
                                            justify={'center'}
                                            align={'flex-end'}
                                            p={16}
                                            mih={'100%'}
                                        >
                                            <Badge
                                                className={styles.name}
                                                size="xl"
                                                autoContrast
                                                tt={'none'}
                                            >
                                                {item.title}
                                            </Badge>
                                        </Flex>
                                    </BackgroundImage>
                                </AspectRatio>
                            </Box>

                        ))
                    }
                </SimpleGrid>

            </Container>
        </section>
    );
}