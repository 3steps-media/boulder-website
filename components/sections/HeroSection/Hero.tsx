import styles from './hero.module.scss';
import {IconSearch, IconAdjustmentsHorizontal} from '@tabler/icons-react'

import Image from "next/image";
import {Container} from "@mantine/core";
import DemoElement from "@/components/demo/demo";
import HeroTitle from "./HeroTitle";
import HeroText from "./HeroText";

import {HeroProps} from "./types";

export default function Hero({title, text, backgroundImage}: HeroProps) {
    return (
        <section
            className={styles.hero}
            style={{backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : ''}}
        >
            <Container>
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

                    <DemoElement>
                        <form className={styles.form} action="">
                            <div className={styles.inputGroup}>
                                <input id="search" className={styles.inputSearch} type="text"
                                       placeholder="Stadt suchen…"/>
                                <button type="button" className={styles.settingsButton}>
                                    <IconAdjustmentsHorizontal/>
                                </button>
                                <button type="button" className={styles.submitButton}>
                                    <IconSearch/>
                                </button>
                            </div>
                        </form>
                    </DemoElement>

                    <DemoElement>
                        <div className={styles.logos}>
                            <Image
                                src='/images/dummy/dummy-capterra.png'
                                alt={'Capterra Logo'}
                                width={200}
                                height={100}
                                priority
                            />
                            <Image
                                src='/images/dummy/dummy-trustpilot.avif'
                                alt={'Trustoilot Logo'}
                                width={200}
                                height={100}
                                priority
                            />
                            <Image
                                src='/images/dummy/dummy-g2.png'
                                alt={'G2 Logo'}
                                width={200}
                                height={100}
                                priority
                            />
                        </div>
                    </DemoElement>
                </div>
                <div className={styles.image}>

                </div>
            </Container>
        </section>
    )
}