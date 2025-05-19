import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import {PlaceData} from "@/interfaces/settings/place";
import {PlaceType} from "@/interfaces/place";
import PlaceCard from "@/components/placeCard/place";

type PlacesCarouselProps = {
    items: PlaceType[];
    classes: string,
    placeData: PlaceData
}

export default function PlacesCarousel(props: PlacesCarouselProps) {
    return (
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
            className={props.classes}
        >
            {props.items.map((item, index: number) => (
                <SwiperSlide key={index}>
                    <PlaceCard item={item} data={props.placeData}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}