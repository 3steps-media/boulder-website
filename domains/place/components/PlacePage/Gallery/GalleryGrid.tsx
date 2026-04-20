'use client'

import {Grid, Stack, Title} from "@mantine/core";
import GalleryImage from "./GalleryImage"
import {handleOpenGallery} from "@/domains/place/components/PlacePage/Gallery/GalleryFancybox";
import {FancyboxGalleryModel} from "@/domains/place/types";

type GalleryGridProps = {
    images: FancyboxGalleryModel[];
    className?: string
};

export default function GalleryGrid({images, className}: GalleryGridProps) {

    return (
        <Stack className={className}>
            <Title order={2} size={'h2'}>Fotos</Title>
            <Grid gutter="md">
                {images?.map((image, index) => (
                    <GalleryImage
                        key={index}
                        item={image}
                        ratio={1}
                        span={3}
                        mediaSize='medium'
                        onClick={() => handleOpenGallery(images, index)}
                    />
                ))}
            </Grid>
        </Stack>
    );
}