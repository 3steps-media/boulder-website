'use client'

import {useState} from 'react';

import {
    Container,
    Flex,
    Title
} from "@mantine/core";
import 'swiper/css/pagination';

import 'swiper/css';
import styles from "./bestPlaces.module.scss";

import PlacesCarousel from "@/components/places/places-carousel";
import PlaceCardSettings from "@/components/settings/place-card";

// Interfaces
import {PlaceType} from "@/interfaces/place";

type BestPlacesProps = {
    heading: string;
    items: PlaceType[];
};

export default function BestPlaces(props: BestPlacesProps) {
    const [place, setPlaceData] = useState({
        Ratio: 'square',
        TitleHeight: 1,
        Services: false,
        Info: true,
        MetaPosition: false,
        MetaAlignment: 'top',
        MetaOrder: false,
        Rating: {
            Type: 'stars'
        }
    });

    const changePlaceData = (param: string, value: string | number | boolean | object) => {
        setPlaceData({...place, [param]: value})
    }

    return (
        <section className={styles.best}>
            <Container>
                <Flex align={'center'} gap={32}>
                    <Title order={2}>{props.heading}</Title>
                    <PlaceCardSettings data={place} onChangePlaceData={changePlaceData}/>
                </Flex>
            </Container>

            <PlacesCarousel
                items={props.items}
                classes={styles.slider}
                placeData={place}
            />

        </section>
    )
}