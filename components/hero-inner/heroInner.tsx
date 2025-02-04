import styles from './heroInner.module.scss';
import {cn} from "@/utils/Utils";

import Container from "@/components/container";
import Heading from "@/components/heading/heading";
import heroImage from "@/public/Boulder_Island_0035.jpg";

type Props = {
    title: string;
};

export default function HeroInner({title}: Props) {
    return (
        <>
            <section
                className={cn(styles.hero, styles.heroInner)}
                style={{backgroundImage: heroImage ? `url(${heroImage.src})` : ''}}
            >
                <Container>
                    <div className={styles.content}>
                        <Heading
                            as={'h1'}
                            data-style={'accent'}
                        >
                            {title}
                        </Heading>
                    </div>
                </Container>
            </section>
        </>
    )
}