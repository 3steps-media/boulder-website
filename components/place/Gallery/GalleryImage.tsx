"use client";

import {Box, Button, Grid} from "@mantine/core";
import NextImage from "next/image";
import {IconLayoutGrid} from "@tabler/icons-react";
import styles from "./Gallery.module.scss";
import Fancybox from "@/components/fancybox/Fancybox";

type GalleryImageProps = {
    item: {
        image: string;
        caption?: string;
    };
    index: number;
}

export default function GalleryImage({item, index}: GalleryImageProps) {
    return (
        <Grid.Col span={(index !== 0) ? 6 : 12}>
            <Box className={styles.GalleryImageWrap}>
                <Box component={'a'}
                     href={item.image}
                     data-fancybox="gallery"
                     data-caption={item.caption}
                >
                    {/* TODO Maybe AspectRatio */}
                    <NextImage
                        src={item.image}
                        alt={''}
                        width={800}
                        height={(index > 0 && index < 3) ? 240 : 600}
                    />
                </Box>
                {index === 0 &&
                    <Button
                        leftSection={<IconLayoutGrid size={16}/>}
                        onClick={() => Fancybox.bind('[data-fancybox="gallery"]')}
                    >
                        Alle Fotos anzeigen
                    </Button>
                }
            </Box>
        </Grid.Col>
    );
}
