import NextLink from "next/link";
import {
    Box,
    Card, Flex,
    Group,
    Stack,
    Text,
    Title
} from "@mantine/core";

import styles from './RecentPost.module.scss'
import {RecentPostProps} from './types';

export default function RecentPost(props: RecentPostProps) {
    return (
        <>
            <Card
                id={`post-${props.post.id}`}
                component="article"
                bg={'yellow.0'}
                className={styles.post}
            >

                <NextLink
                    href={`/blog/${props.post.slug}`}
                    className={styles.link}
                    style={{minHeight: '100%'}}
                >
                    <Stack
                        gap={24}
                        justify={'space-between'}
                        align={'flex-start'}
                        mih={'100%'}
                    >
                        <Flex justify={'flex-end'} w={'100%'}>
                            <time dateTime={props.post.date} className={styles.date}>
                                {props.post.date}
                            </time>
                        </Flex>

                        <Group>
                            <Title order={3} lineClamp={3} className={styles.title}>
                                {props.post.title}
                            </Title>
                            {props.post.excerpt &&
                                <Text lineClamp={4} className={styles.text}>
                                    {props.post.excerpt}
                                </Text>
                            }
                        </Group>
                    </Stack>
                </NextLink>

            </Card>
        </>
    )
}