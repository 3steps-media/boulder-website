'use client';

// import
import {Accordion, Container} from "@mantine/core";
import HeadingGroup from "@/components/heading-group/headingGroup";

// styles
import styles from "./faq.module.scss";
import {IconPlus} from "@tabler/icons-react";

// types
type AccordionItemProps = {
    title: string;
    content: string;
    name?: string;
    isOpen?: boolean;
}
type FAQProps = {
    heading: string;
    text: string
    panels: AccordionItemProps[]
}

export default function FAQ(props: FAQProps) {
    return (
        <>
            <section className={styles.faq}>
                <Container>
                    <div className={styles.inner}>
                        <HeadingGroup
                            heading={props.heading}
                            size={'lg'}
                            text={props.text}
                        />

                        <Accordion
                            chevronSize={24}
                            chevron={
                                <IconPlus size={24}/>
                            }
                            className={styles.root}
                        >
                            {
                                props.panels.map((item: AccordionItemProps, index: number) => (
                                    <Accordion.Item
                                        key={index}
                                        value={item.title}
                                        className={styles.item}
                                    >
                                        <Accordion.Control className={styles.control}>{item.title}</Accordion.Control>
                                        <Accordion.Panel className={styles.panel}>{item.content}</Accordion.Panel>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>
                    </div>
                </Container>
            </section>
        </>
    )
}
