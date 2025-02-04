"use client";

import styles from './header.module.scss';
import * as Icons from 'react-feather';

import Link from "next/link";
import Image from 'next/image'
import Container from "@/components/container";
import NavMenu from "@/components/nav-menu/navMenu";

export default function Header() {
    const navigation = [
        {text: 'Home', href: '/'},
        {text: 'Hallen', href: '/hallen'},
        {text: 'Über uns', href: '/about'},
        {text: 'Blog', href: '/blog'},
        {text: 'Community', href: '/community'}
    ]

    return (
        <>
            <header className={styles.header}>
                <Container>
                    <div className={styles.inner}>
                        <div className={styles.logo}>
                            <Link href={'/'}>
                                <Image
                                    src='/logo.svg'
                                    alt={'Finde deine Boulderhalle In deiner Nähe'}
                                    width={64}
                                    height={64}
                                    priority
                                />
                            </Link>
                        </div>

                        <NavMenu
                            items={navigation}
                            className={styles.menu}
                            currentClassName={styles.current}
                        />

                        <div className={styles.actions}>
                            <Icons.Search/>
                            <Icons.Menu/>
                            <Icons.User/>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}