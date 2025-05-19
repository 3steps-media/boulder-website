import {Carousel, CarouselSlide} from '@mantine/carousel';
import PlaceCard from "@/components/features/place/PlaceCard";

import styles from './PlaceCarousel.module.scss';
import {Place} from "@/types/models";

type PlaceCarouselProps = {
    slides: Place[];
}

export default function PlaceCarousel({slides}: PlaceCarouselProps) {
    return (
        <Carousel
            withControls={false}
            withIndicators
            slideSize={{base: '100%', sm: '50%', lg: '27rem'}}
            slideGap={{base: 0, sm: 'md', lg: 'xl'}}
            emblaOptions={{loop: true, align: 'center'}}
            height="100%"
            flex={1}
            classNames={{
                viewport: styles.viewport,
                indicators: styles.indicators,
                indicator: styles.indicator
            }}
        >
            {slides.map((slide: Place) => (
                <CarouselSlide key={slide.title}>
                    <PlaceCard place={slide}/>
                </CarouselSlide>
            ))}
        </Carousel>
    )
}