"use client";

import {AspectRatio, AspectRatioProps, Box, Button, Grid, GridColProps, Image} from "@mantine/core";
import {IconLayoutGrid} from "@tabler/icons-react";

import {placeUtils} from "@/domains/place/utils";

import styles from "./Gallery.module.scss";

import {MediaModel} from "@/domains/place/types";

type GalleryImageProps = AspectRatioProps & GridColProps & {
    item: MediaModel;
    mediaSize?: 'thumbnail' | 'medium' | 'large';
    ratio?: number;
    width?: number
    height?: number;
    showButton?: boolean;
    dataFancybox?: string,
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
        dataFancybox,
        showButton = false,
        onClick
    } = props;
    const imageUrl = placeUtils.getMediaUrl(item, (mediaSize ?? 'large'));
    const largeImageUrl = placeUtils.getMediaUrl(item, ('large'));
    const imageAltText = placeUtils.getMediaAltText(item);

    return (
        <Grid.Col span={span} pos={'relative'}>
            <Box
                className={styles.GalleryImageWrap}
                component={dataFancybox ? 'a' : undefined}
                href={dataFancybox ? largeImageUrl : undefined}
                data-fancybox={dataFancybox}
            >
                <AspectRatio ratio={ratio}>
                    <Image
                        src={imageUrl}
                        alt={imageAltText ?? ''}
                    />
                </AspectRatio>
            </Box>

            {showButton &&
                <Button
                    variant="white"
                    leftSection={<IconLayoutGrid size={16}/>}
                    onClick={onClick}
                >
                    Alle Fotos anzeigen
                </Button>
            }
        </Grid.Col>
    );
}
