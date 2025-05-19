'use client';

import {Grid, VisuallyHidden} from "@mantine/core";
import Fancybox from "@/components/fancybox/Fancybox";
import styles from "./Gallery.module.scss";
import GalleryImage from "@/components/place/Gallery/GalleryImage";

type GalleryItem = {
    image: string;
    caption?: string;
}
const images: GalleryItem[] = [
    {
        image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Captiuon #1'
    },
    {
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Captiuon #2'
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Captiuon #3'
    },
    {
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Captiuon #4'
    },
    {
        image: 'https://images.unsplash.com/photo-1482350325005-eda5e677279b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Caption 5'
    },
    {
        image: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Caption 6'
    },
    {
        image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Caption 7'
    },
    {
        image: 'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Caption 8'
    }
]

export default function Gallery() {
    return (
        <>
            <Fancybox
                className={styles.Gallery}
                options={{
                    Carousel: {
                        infinite: true,
                    },
                }}
            >
                <Grid gutter="md">
                    {images.map((item: GalleryItem, index: number) => (
                        index < 3 ?
                            <GalleryImage
                                key={index}
                                item={item}
                                index={index}
                            />
                            :
                            <VisuallyHidden key={index}>
                                <GalleryImage item={item} index={index}/>
                            </VisuallyHidden>
                    ))
                    }
                    {/*TODO VisuallyHidden for another items*/}
                </Grid>
            </Fancybox>
        </>
    );
}
