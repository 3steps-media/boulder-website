import {Box, Container, Title} from "@mantine/core";
import PlaceCarousel from "@/components/features/place/PlaceCarousel";

import styles from './styles.module.scss';
import {CarouselSectionProps} from "./types";
import {PlacePreviewModel} from "@/domains/place/types"


export default function CarouselSection({heading, slides}: CarouselSectionProps<PlacePreviewModel>) {
    return (
        <section className={styles.CarouselSection}>
            {heading &&
                <Container>
                    <Title order={2}>{heading}</Title>
                </Container>
            }

            {slides &&
                <Box className={styles.CarouselWrap}>
                    <PlaceCarousel slides={slides}/>
                </Box>
            }
        </section>
    )
}