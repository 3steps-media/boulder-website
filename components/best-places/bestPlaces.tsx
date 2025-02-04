'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import Container from "@/components/container";
import Heading from "@/components/heading/heading";
import Place from "@/components/place/place";

import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./bestPlaces.module.scss";
import {PlaceType} from "@/interfaces/place";

type Props = {
    heading: string;
    items: PlaceType[];
};

export default function BestPlaces(props: Props) {
    return (
        <section className={styles.best}>
            <Container>
                <Heading>{props.heading}</Heading>
            </Container>

            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={32}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={styles.slider}
            >
                {props.items.map((item, index: number) => (
                    <SwiperSlide key={index}>
                        <Place item={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}