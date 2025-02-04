import styles from './cities.module.scss';
import {CityType} from "@/interfaces/city";
import {HeadingType} from "@/interfaces/heading";

import Container from "@/components/container";
import Heading from "@/components/heading/heading";
import Link from "next/link";
import Image from "next/image";

type Props = {
    heading: HeadingType;
    text?: string;
    lead?: string;
    items: CityType[];
}

export default function Cities({heading, text, lead, items}: Props) {
    return (
        <section className={styles.cities}>
            <Container>

                <div className={styles.top}>
                    <div className={styles.text}>{text || ''}</div>
                    <div className={`${styles.lead} font-space-grotesk`}>{lead || ''}</div>
                </div>

                <Heading
                    data-size={heading.size}
                    data-tyle={heading.style}
                >
                    {heading.text}
                </Heading>

                <div className={styles.grid}>
                    {
                        items.map(item => (
                            <Link key={item.id} href={item.url} className={styles.city}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={280}
                                    height={280}
                                />
                                <span>{item.name}</span>
                            </Link>
                        ))
                    }
                </div>

            </Container>
        </section>
    );
}