import styles from './hero.module.scss';
import {IconSearch, IconAdjustmentsHorizontal} from '@tabler/icons-react'

import Image, {StaticImageData} from "next/image";
import {
    Container,
    Title,
    Text
} from "@mantine/core";
import DemoElement from "@/components/demo/demo";
import clsx from "clsx";

type Props = {
    backgroundImage: StaticImageData;
};

export default function Hero({backgroundImage}: Props) {
    return (
        <section
            className={styles.hero}
            style={{backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : ''}}
        >
            <Container>
                <div className={styles.content}>
                    <Title
                        className={clsx('heading', styles.title)}
                        order={1}
                        textWrap="balance"
                        data-style={'accent'}
                        c={'dark.9'}
                    >
                        Finde <span>deine Boulderhalle</span> In deiner Nähe
                    </Title>

                    <Text
                        size={'xl'}
                        lh={'xl'}
                        fw={300}
                        c={'dark.8'}
                        mt={'lg'}

                    >
                        Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen
                        Blick.
                    </Text>

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