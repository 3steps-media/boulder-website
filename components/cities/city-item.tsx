import styles from "@/components/cities/cities.module.scss";

import {AspectRatio, BackgroundImage, Badge, Box, Flex} from "@mantine/core";
import Link from "next/link";

import {CityType} from "@/interfaces/city";

type CityItemProps = {
    key?: number;
    item: CityType;
}

export default function CityItem({item}: CityItemProps) {
    return (
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
    )
}