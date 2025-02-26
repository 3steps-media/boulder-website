import {Box, Container, Stack, Text, Title} from "@mantine/core";
import styles from "./subscribe.module.scss";

type SubscribeProps = {
    title: string;
    content?: string;
}

export default function Subscribe(props: SubscribeProps) {
    return (
        <>
            <Box
                component="section"
                className={styles.subscribe}
            >
                <Container>
                    <div className={styles.inner}>
                        <Stack gap={0}>
                            <Title order={2}>{props.title}</Title>
                            {props.content && <Text mt={16}>{props.content}</Text>}
                            <div style={{marginTop: '2rem'}}>[form here coming soon...]</div>
                        </Stack>
                    </div>
                </Container>
            </Box>
        </>
    )
}