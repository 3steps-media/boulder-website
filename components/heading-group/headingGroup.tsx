import styles from "./headingGroup.module.scss";
import clsx from "clsx";

import {Text, Title} from "@mantine/core";

// TODO size and as may be similar (size=h1, as=h1) but shouldn't
type Props = {
    heading: string;
    text?: string;
    as?: string;
    size?: string;
}

export default function HeadingGroup(props: Props) {
    return (
        <>
            <hgroup className={styles.headingGroup}>
                <Title
                    className={clsx('heading', styles.title)}
                    order={2}
                    textWrap="balance"
                    data-size={props.size}
                    c={'dark.9'}
                >
                    {props.heading}
                </Title>
                {
                    props.text
                        ? <Text>{props.text}</Text>
                        : null
                }
            </hgroup>
        </>
    );
}