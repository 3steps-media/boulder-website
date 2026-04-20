import {Carousel, CarouselSlide} from '@mantine/carousel';
import PlacePreview from "@/domains/place/components/PlacePreview";

import styles from './PlaceCarousel.module.scss';
import {PlacePreviewModel} from "@/domains/place/types";
import {CarouselSlideProps, CarouselSlidesProps} from "@/components/sections/CarouselSection/types";

export default function PlaceCarousel({slides}: CarouselSlidesProps<PlacePreviewModel>) {
    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <Carousel
            withControls={true}
            withIndicators
            slideSize={{base: '100%', sm: '50%', lg: '27rem'}}
            slideGap={{base: 0, sm: 'md', lg: 'xl'}}
            emblaOptions={{loop: true, align: 'center'}}
            height="100%"
            flex={1}
            classNames={{
                viewport: styles.viewport,
                controls: styles.controls,
                control: styles.control,
                indicators: styles.indicators,
                indicator: styles.indicator
            }}
        >
            {slides.map((slide: CarouselSlideProps<PlacePreviewModel>) => (
                <CarouselSlide key={slide.cursor}>
                    <PlacePreview place={slide.node}/>
                </CarouselSlide>
            ))}
        </Carousel>
    )
}
