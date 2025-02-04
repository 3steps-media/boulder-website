import styles from "./headingGroup.module.scss";
import Heading from "@/components/heading/heading";

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
                <Heading
                    data-size={props.size}
                >
                    {props.heading}
                </Heading>
                {props.text
                    ? <p>{props.text}</p>
                    : null
                }
            </hgroup>
        </>
    );
}