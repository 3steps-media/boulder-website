import {Fragment} from 'react';

import styles from './hero.module.scss';
import clsx from "clsx";

import {Container, Divider, Group} from "@mantine/core"
import HeroTitle from "./HeroTitle";

import {HeroBlogPostProps} from "./types";
import NextLink from "next/link";

export default function HeroBlogPost({title, date, categories}: HeroBlogPostProps) {
    return (
        <>
            <section
                className={clsx(styles.hero, styles.heroBlogPost)}
            >
                <Container size={'xl'}>
                    <div className={styles.content}>

                        <HeroTitle
                            title={title}
                            className={styles.title}
                        />

                        <Group
                            className={styles.meta}
                        >
                            <time dateTime={date}>{date}</time>
                            {categories && (
                                categories.map((category, index) => (
                                    <Fragment key={category.id}>
                                        <NextLink
                                            href={`category/${category.slug}`}>
                                            {category.name}
                                        </NextLink>
                                        {index < categories.length - 1 && (
                                            <Divider orientation="vertical"/>
                                        )}
                                    </Fragment>
                                ))
                            )}
                        </Group>

                    </div>
                </Container>
            </section>
        </>
    )
}