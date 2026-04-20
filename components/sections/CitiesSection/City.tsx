import {AspectRatio, BackgroundImage, Badge, Box, Flex} from "@mantine/core";
import Link from "next/link";

import styles from "./cities.module.scss";
import {CityModel} from "./types";

export default function City({city}: CityModel) {
    return (
        <Link
            className={styles.city}
            href={city.slug}
        >
            <AspectRatio ratio={1}>
                <BackgroundImage
                    className={styles.image}
                    src={city.image}
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
                            {city.title}
                        </Badge>
                    </Flex>
                </BackgroundImage>
            </AspectRatio>
        </Link>
    )
}