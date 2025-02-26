import {
    ActionIcon,
    Container,
    Group,
    Text,
    Stack
} from "@mantine/core";
import NextLink from "next/link";
import NextImage from 'next/image'
import Logo from "@/components/logo";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
    IconBrandX
} from "@tabler/icons-react"
import FooterMenu from "./footer-menu";

import styles from './footer.module.scss';

export default function Footer() {

    const socials = [
        {
            link: "https://www.facebook.com",
            icon: <IconBrandFacebook size={16}/>
        },
        {
            link: "https://www.x.com",
            icon: <IconBrandX size={16}/>
        },
        {
            link: "https://www.instagram.com",
            icon: <IconBrandInstagram size={16}/>
        },
        {
            link: "https://www.youtube.com",
            icon: <IconBrandYoutube size={16}/>
        }
    ];
    const links = [
        {label: "Impressum", link: "#"},
        {label: "Datenschutz", link: "#"},
        {label: "Disclaimer", link: "#"},
    ]

    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <Stack
                        gap={0}
                        justify="center"
                        align="center"
                        pb={94}
                        className={styles.footerTop}>

                        <Logo
                            isLink
                            linkClassName={styles.logo}
                        />

                        <Text
                            mt={60}
                            mx={'auto'}
                            className={styles.text}
                        >
                            Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz
                            begehrt:Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe. Von positiv
                            geneigter Platte über gerade Wände, sanfte Überhänge, steiles Gelände
                        </Text>

                        <Group
                            className={styles.social}
                            align="center"
                            justify="center"
                            gap={8}
                            my={32}
                        >
                            {
                                socials.map((item, index) => (
                                    <ActionIcon
                                        key={index}
                                        component={NextLink}
                                        href={item.link}
                                        radius={'xl'}
                                        size={32}
                                        color={'gray.2'}
                                    >
                                        {item.icon}
                                    </ActionIcon>
                                ))
                            }
                        </Group>

                        <Group grow
                               className={styles.stores}
                               justify="center"
                               align="center"
                               gap={16}
                        >
                            <NextLink href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <NextImage
                                    src={'/images/apple-store@2x.png'}
                                    alt="Download from AppStore"
                                    width={142}
                                    height={41}
                                />
                            </NextLink>
                            <NextLink href={'#'} target={'_blank'} rel="noopener noreferrer">
                                <NextImage
                                    src={'/images/googleplay@2x.png'}
                                    alt="Download from Google Play"
                                    width={142}
                                    height={41}
                                />
                            </NextLink>
                        </Group>

                    </Stack>

                    <Group
                        className={styles.footerBottom}
                        justify="center"
                        gap={48}
                        grow
                    >
                        <FooterMenu title={'Rechtliches'} menu={links}/>
                        <FooterMenu title={'Rechtliches'} menu={links}/>
                        <FooterMenu title={'Rechtliches'} menu={links}/>
                        <FooterMenu title={'Rechtliches'} menu={links}/>
                        <FooterMenu title={'Rechtliches'} menu={links}/>
                        <FooterMenu title={'Rechtliches'} menu={links}/>
                        <FooterMenu title={'Rechtliches'} menu={links}/>
                        <FooterMenu title={'Rechtliches'} menu={links}/>
                    </Group>
                </Container>
            </footer>
        </>
    )
}