import styles from './heroInner.module.scss';
import clsx from "clsx";

import {Container, Title} from "@mantine/core"
import heroImage from "@/public/images/Boulder_Island_0035.jpg";


type Props = {
    title: string;
};

export default function HeroInner({title}: Props) {
    return (
        <>
            <section
                className={clsx(styles.hero, styles.heroInner)}
                style={{backgroundImage: heroImage ? `url(${heroImage.src})` : ''}}
            >
                <Container size={'xl'}>
                    <div className={styles.content}>
                        <Title
                            order={1}
                            data-style={'accent'}
                        >
                            {title}
                        </Title>
                    </div>
                </Container>
            </section>
        </>
    )
}