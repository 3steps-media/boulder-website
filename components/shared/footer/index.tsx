import {APP_NAME} from "@/lib/constants";
import styles from './footer.module.scss';

import {Container, Title} from "@mantine/core";
import Link from "next/link";
import Image from 'next/image'
import {IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconBrandX} from "@tabler/icons-react"

export default function Index() {
    return (
        <>
            <footer className={styles.footer}>
                <Container size={'xl'}>
                    <div className={styles.footerTop}>

                        <Link href={'/'} className={styles.logo}>
                            <Image
                                src='/images/logo.svg'
                                alt={APP_NAME}
                                width={64}
                                height={64}
                            />
                        </Link>
                        <p className={styles.text}>
                            Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz
                            begehrt:Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe. Von positiv
                            geneigter Platte über gerade Wände, sanfte Überhänge, steiles Gelände
                        </p>
                        <div className={styles.social}>
                            <Link href={'https://facebook.com'} target={'_blank'} rel="noopener noreferrer">
                                <IconBrandFacebook/>
                            </Link>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <IconBrandX/>
                            </Link>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <IconBrandInstagram/>
                            </Link>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <IconBrandYoutube/>
                            </Link>
                        </div>
                        <div className={styles.stores}>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <Image
                                    src={'/images/apple-store@2x.png'}
                                    alt="Download from AppStore"
                                    width={142}
                                    height={41}
                                />
                            </Link>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <Image
                                    src={'/images/googleplay@2x.png'}
                                    alt="Download from Google Play"
                                    width={142}
                                    height={41}
                                />
                            </Link>
                        </div>

                    </div>
                    <div className={styles.footerBottom}>
                        <div>
                            <Title order={2}>Rechtliches</Title>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Title order={2}>Rechtliches</Title>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Title order={2}>Rechtliches</Title>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Title order={2}>Rechtliches</Title>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Title order={2}>Rechtliches</Title>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Title order={2}>Rechtliches</Title>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Title order={2}>Rechtliches</Title>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Title order={2}>Rechtliches</Title>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}