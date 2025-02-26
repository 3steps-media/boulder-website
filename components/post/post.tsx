import NextLink from "next/link";
import {
    Box,
    Card, Flex,
    Group,
    Stack,
    Text,
    Title
} from "@mantine/core";
import {PostType} from "@/interfaces/post";

import styles from './post.module.scss'

type PostProps = {
    data: PostType
}

export default function Post(props: PostProps) {
    return (
        <>
            <Card
                id={`post-${props.data.id}`}
                component="article"
                bg={'yellow.0'}
                className={styles.post}
            >

                <Box
                    component={NextLink}
                    href={`/blog/${props.data.id}`}
                    mih={'100%'}
                    className={styles.link}
                >
                    <Stack
                        gap={24}
                        justify={'space-between'}
                        align={'flex-start'}
                        mih={'100%'}
                    >
                        <Flex justify={'flex-end'} w={'100%'}>
                            <time dateTime={props.data.date} className={styles.date}>
                                {props.data.date}
                            </time>
                        </Flex>

                        <Group>
                            <Title order={3} lineClamp={3} className={styles.title}>
                                {props.data.title}
                            </Title>
                            <Text lineClamp={4} className={styles.text}>
                                {props.data.content}
                            </Text>
                        </Group>
                    </Stack>
                </Box>

            </Card>
        </>
    )
}