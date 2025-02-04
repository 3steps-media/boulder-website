import styles from './footer.module.scss';
import * as Icons from 'react-feather';

import Container from "@/components/container";
import Link from "next/link";
import Image from 'next/image'
import Heading from "@/components/heading/heading";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.footerTop}>

                        <Link href={'/'} className={styles.logo}>
                            <Image
                                src='/logo.svg'
                                alt={'Finde deine Boulderhalle In deiner Nähe'}
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
                                <Icons.Facebook/>
                            </Link>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <Icons.Twitter/>
                            </Link>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <Icons.Instagram/>
                            </Link>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <Icons.Youtube/>
                            </Link>
                        </div>
                        <div className={styles.stores}>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <Image
                                    src={'/apple-store@2x.png'}
                                    alt="Download from AppStore"
                                    width={142}
                                    height={41}
                                />
                            </Link>
                            <Link href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <Image
                                    src={'/googleplay@2x.png'}
                                    alt="Download from Google Play"
                                    width={142}
                                    height={41}
                                />
                            </Link>
                        </div>

                    </div>
                    <div className={styles.footerBottom}>
                        <div>
                            <Heading>Rechtliches</Heading>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Heading>Rechtliches</Heading>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Heading>Rechtliches</Heading>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Heading>Rechtliches</Heading>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Heading>Rechtliches</Heading>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Heading>Rechtliches</Heading>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Heading>Rechtliches</Heading>
                            <ul>
                                <li><Link href={'#'}>Impressum</Link></li>
                                <li><Link href={'#'}>Datenschutz</Link></li>
                                <li><Link href={'#'}>Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Heading>Rechtliches</Heading>
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