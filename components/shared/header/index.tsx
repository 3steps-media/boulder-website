import {APP_NAME} from "@/lib/constants";
import styles from "./header.module.scss"

import {
    Container,
    Group,
    Flex,
    Image
} from "@mantine/core";

import Link from "next/link";
import NextImage from "next/image";
import Nav from "@/components/nav/nav";
import {IconUserCircle, IconSearch, IconMenu2} from "@tabler/icons-react";

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
                <Container size={'xl'}>
                    <div className={styles.inner}>
                        <Flex className={styles.logo}>
                            <Link
                                href={'/'}
                                title={'Home'}
                                passHref
                            >
                                <Image
                                    component={NextImage}
                                    src='/images/logo.svg'
                                    alt={APP_NAME}
                                    width={64}
                                    height={64}
                                    priority
                                />
                            </Link>
                        </Flex>


                        <Group
                            align={'center'}
                            justify={'center'}
                            gap={'xxl'}
                        >
                            <Nav
                                className={styles.menu}
                                items={navigation}
                            />
                        </Group>

                        <Group
                            justify="flex-end"
                            align="center"
                            className={styles.actions}>
                            <IconSearch/>
                            <Group
                                justify="flex-end"
                                align="center"
                            >
                                <IconMenu2/>
                                <IconUserCircle/>
                            </Group>
                        </Group>

                    </div>
                </Container>
            </header>
        </>
    )
}