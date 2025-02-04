import styles from './reasons.module.scss';
import {cn} from "@/utils/Utils";
import Container from "@/components/container";
import HeadingGroup from "@/components/heading-group/headingGroup";
import ReasonItem from "@/components/reasons/reasonItem";

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
    return (
        <>
            <section
                className={cn(
                    styles.reasons,
                    props.layout !== undefined ? styles[props.layout] : '',
                    props.style !== undefined ? styles[props.style] : ''
                )}>
                <Container>
                    <div className={styles.inner}>

                        <HeadingGroup
                            heading={props.heading}
                            size={'lg'}
                            text={props.text}
                        />

                        <div className={styles.items}>
                            {props.count ?
                                [...Array(props.count).keys()].map((index) => (
                                    <ReasonItem
                                        key={index}
                                        index={index}
                                        title={props.items[index].title}
                                        text={props.items[index].text}
                                        className={styles.item}
                                    />
                                ))
                                :
                                props.items.map((item, index: number) => (
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