'use client';

import React from "react";
import NextImage from "next/image";
import {
    Box,
    Grid
} from "@mantine/core";

import Fancybox from "@/components/fancybox/Fancybox";
import {IHalleGallery} from "@/interfaces/halle";

// TODO Interface

export default function HalleGallery({items, classes}: { items: IHalleGallery[]; classes?: string }) {
    return (
        <>
            <Fancybox
                className={classes}
                options={{
                    Carousel: {
                        infinite: true,
                    },
                }}
            >
                <Grid gutter="md">
                    {
                        items.map((item: IHalleGallery, index: number) => (
                            index < 3 &&
                            <Grid.Col key={index} span={(index > 0 && index < 3) ? 6 : 12}>
                                <Box component={'a'}
                                     href={item.image}
                                     data-fancybox="gallery"
                                     data-caption={item.caption}
                                >
                                    <NextImage
                                        src={item.image}
                                        alt={''}
                                        width={800}
                                        height={(index > 0 && index < 3) ? 240 : 600}
                                    />
                                </Box>
                            </Grid.Col>
                        ))
                    }
                    {/*TODO VisuallyHidden for another items*/}
                </Grid>
            </Fancybox>
        </>
    )
}