import styles from './hero.module.scss';
import clsx from "clsx";

import {Container} from "@mantine/core"
import HeroTitle from "./HeroTitle";
import HeroText from "./HeroText";

import {BasicHeroProps as HeroInnerProps} from "./types";

export default function HeroInner({title, text, backgroundImage}: HeroInnerProps) {
    return (
        <>
            <section
                className={clsx(styles.hero, styles.heroInner)}
                style={{backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : ''}}
            >
                <Container size={'xl'}>
                    <div className={styles.content}>

                        <HeroTitle
                            title={title}
                            className={styles.title}
                        />

                        {text &&
                            <HeroText
                                text={text}
                                className={styles.text}
                            />
                        }

                    </div>
                </Container>
            </section>
        </>
    )
}