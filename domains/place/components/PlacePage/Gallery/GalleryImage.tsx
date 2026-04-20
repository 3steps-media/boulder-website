"use client";

import {AspectRatio, AspectRatioProps, Box, Button, Grid, GridColProps, Image} from "@mantine/core";
import {IconLayoutGridFilled} from "@tabler/icons-react";
import {FancyboxGalleryModel} from "@/domains/place/types";

import styles from "./Gallery.module.css";

type GalleryImageProps = AspectRatioProps & GridColProps & {
    item: FancyboxGalleryModel;
    mediaSize?: 'thumbnail' | 'medium' | 'large';
    ratio?: number;
    width?: number
    height?: number;
    showButton?: boolean;
    onClick?: () => void
}

export default function GalleryImage(props: GalleryImageProps) {
    const {
        item,
        mediaSize,
        ratio,
        span,
        order,
        offset,
        width,
        height,
        showButton = false,
        onClick
    } = props;

    return (
        <Grid.Col
            span={span}
            className={styles.GalleryImageColumn}
        >
            <Box className={styles.GalleryImageWrap}>
                <AspectRatio ratio={ratio}>
                    <Image
                        src={mediaSize === 'thumbnail' ? item.thumbSrc : item.src}
                        alt={item.altText ?? ''}
                        className={styles.GalleryImage}
                        onClick={onClick}
                    />
                </AspectRatio>
            </Box>

            {showButton &&
                <Button
                    variant="white"
                    leftSection={<IconLayoutGridFilled size={16}/>}
                    onClick={onClick}
                    className={styles.GalleryImageButton}
                >
                    Alle Fotos anzeigen
                </Button>
            }
        </Grid.Col>
    );
}
