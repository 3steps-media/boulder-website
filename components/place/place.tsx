import styles from './place.module.scss'
import Link from "next/link";
import Image from "next/image";
import * as Icons from 'react-feather';
import {PlaceType} from "@/interfaces/place";

type Props = {
    item: PlaceType;
};

export default function Place(props: Props) {
    const place = props.item;
    return (
        <div className={styles.place}>
            <Link href={`hallen/${place.id}`}>
                <Image
                    src={place.image}
                    alt={place.name}
                    width={268}
                    height={320}
                />
            </Link>
            <Link href={`hallen/${place.id}`}>
                <h3>{place.name}</h3>
            </Link>
            <div className={styles.meta}>
                <div className={styles.location}>
                    <Icons.MapPin/>
                    {place.location}
                </div>
                <div className={styles.rating}>
                    <Icons.Star/>
                    <Icons.Star/>
                    <Icons.Star/>
                    <Icons.Star/>
                    <Icons.Star/>
                </div>
            </div>
            <div className={styles.top}>
                <Icons.Info/>
                Top Anbieter im Kreis Eislingen
            </div>
            <div className={styles.actions}>
                <button type="button" className={styles.main}>Details ansehen</button>
                <button type="button" className={styles.like}>
                    <Icons.Heart/>
                </button>
            </div>
        </div>
    )
}