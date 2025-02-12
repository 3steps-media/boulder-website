import styles from './reasons.module.scss';
import clsx from "clsx";

import {Container} from "@mantine/core";
import ReasonItem from "@/components/reasons/reasonItem";
import HeadingGroup from "@/components/heading-group/headingGroup";

type Props = {
    heading: string;
    items: {
        title: string;
        text: string;
    }[];
    layout?: string;
    style?: string
    text?: string;
    count?: number;
};

export default function Reasons(props: Props) {

    const LimitedData = props.count
        ? props.items.slice(0, props.count)
        : props.items;

    return (
        <>
            <section
                className={clsx(
                    styles.reasons,
                    props.layout !== undefined ? styles[props.layout] : '',
                    props.style !== undefined ? styles[props.style] : ''
                )}>
                <Container size={'xl'}>
                    <div className={styles.inner}>

                        <HeadingGroup
                            heading={props.heading}
                            size={'lg'}
                            text={props.text}
                        />

                        <div className={styles.items}>
                            {LimitedData.map((item, index: number) => (
                                <ReasonItem
                                    key={index}
                                    index={index}
                                    title={item.title}
                                    text={item.text}
                                    className={styles.item}
                                />
                            ))
                            }
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}