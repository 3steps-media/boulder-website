import {Title} from "@mantine/core";
import styles from './Overview.module.scss'
import {Place} from "@/types/models";

type PlaceTitleProps = Pick<Place, 'title'>

export default function PlaceTitle({title}: PlaceTitleProps) {
    return (
        <Title
            size={'h1'}
            className={styles.title}>
            {title}
        </Title>
    );
}
