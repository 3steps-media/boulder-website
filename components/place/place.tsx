import styles from './place.module.scss'
import Link from "next/link";
import Image from "next/image";
import {IconMapPin, IconStar, IconInfoSquareRounded, IconHeart} from "@tabler/icons-react"
import {PlaceType} from "@/interfaces/place";

type Props = {
    item: PlaceType;
};

export default function Place(props: Props) {
    const place = props.item;
    return (
        <div className={styles.place}>
            <Link href={`hallen/${place.slug}`}>
                <Image
                    src={place.image}
                    alt={place.title}
                    width={268}
                    height={320}
                />
            </Link>
            <Link href={`hallen/${place.slug}`}>
                <h3>{place.title}</h3>
            </Link>
            <div className={styles.meta}>
                <div className={styles.location}>
                    <IconMapPin/>
                    {place.location}
                </div>
                <div className={styles.rating}>
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                </div>
            </div>
            <div className={styles.top}>
                <IconInfoSquareRounded/>
                Top Anbieter im Kreis Eislingen
            </div>
            <div className={styles.actions}>
                <button type="button" className={styles.main}>Details ansehen</button>
                <button type="button" className={styles.like}>
                    <IconHeart/>
                </button>
            </div>
        </div>
    )
}