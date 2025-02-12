import styles from "./faq.module.scss";

import {Container} from "@mantine/core";
import HeadingGroup from "@/components/heading-group/headingGroup";
import Accordion from "@/components/accordion/accordion";

type Props = {
    heading: string;
    text: string
    panels: {
        title: string;
        content: string;
        name?: string;
        isOpen?: boolean;
    }[]
}

export default function FAQ(props: Props) {
    return (
        <>
            <section className={styles.faq}>
                <Container size={'xl'}>
                    <div className={styles.inner}>
                        <HeadingGroup
                            heading={props.heading}
                            size={'lg'}
                            text={props.text}
                        />
                        <Accordion
                            panels={props.panels}
                            classes={styles.accordion}
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}
