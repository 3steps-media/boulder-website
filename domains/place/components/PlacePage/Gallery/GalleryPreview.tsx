'use client'

import {Grid} from "@mantine/core";
import GalleryImage from "./GalleryImage"
import {handleOpenGallery} from "@/domains/place/components/PlacePage/Gallery/GalleryFancybox";
import {FancyboxGalleryModel} from "@/domains/place/types";

type GalleryPreviewProps = {
    images: FancyboxGalleryModel[];
}


export default function GalleryPreview({images}: GalleryPreviewProps) {
    const slicedImages = images?.slice(0, 3);

    return (
        <Grid gutter="md">
            {
                slicedImages.map((item: FancyboxGalleryModel, index: number) => (
                    <GalleryImage
                        key={index}
                        item={item}
                        ratio={index === 0 ? (800 / 600) : (420 / 240)}
                        span={index === 0 ? 12 : 6}
                        mediaSize={index === 0 ? 'large' : 'medium'}
                        showButton={index === 0 && images.length > 2}
                        onClick={() => handleOpenGallery(images, index)}
                    />
                ))
            }
        </Grid>
    );
}
