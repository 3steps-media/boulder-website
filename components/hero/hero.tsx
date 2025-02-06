import styles from './hero.module.scss';
import * as Icons from 'react-feather';

import Container from "@/components/container";
import Heading from "@/components/heading/heading";
import Image, {StaticImageData} from "next/image";

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
                    <Heading
                        as={'h1'}
                        data-style={'accent'}
                    >
                        [DEV] Finde <span>deine Boulderhalle</span> In deiner Nähe
                    </Heading>

                    <p>Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen
                        Blick.</p>

                    <form className={styles.form} action="">
                        <div className={styles.inputGroup}>
                            <input id="search" className={styles.inputSearch} type="text" placeholder="Stadt suchen…"/>
                            <button type="button" className={styles.settingsButton}>
                                <Icons.Sliders/>
                            </button>
                            <button type="button" className={styles.submitButton}>
                                <Icons.Search/>
                            </button>
                        </div>
                    </form>

                    <div className={styles.logos}>
                        <Image
                            src='/dummy/dummy-capterra.png'
                            alt={'Capterra Logo'}
                            width={200}
                            height={100}
                            priority
                        />
                        <Image
                            src='/dummy/dummy-trustpilot.avif'
                            alt={'Trustoilot Logo'}
                            width={200}
                            height={100}
                            priority
                        />
                        <Image
                            src='/dummy/dummy-g2.png'
                            alt={'G2 Logo'}
                            width={200}
                            height={100}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.image}>

                </div>
            </Container>
        </section>
    )
}