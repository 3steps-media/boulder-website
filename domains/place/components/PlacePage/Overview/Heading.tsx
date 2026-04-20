import {Title} from "@mantine/core";
import styles from "./Overview.module.css";

type PlaceHeadingProps = {
    title: string,
    city?: string
}

export default function Heading({title, city}: PlaceHeadingProps) {
    return (
        <Title
            size={'h1'}
            className={styles.OverviewHeading}>
            {title} {city}
        </Title>
    );
}
