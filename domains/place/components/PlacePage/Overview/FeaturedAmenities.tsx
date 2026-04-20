import {Group, GroupProps} from "@mantine/core";
import {AmenityModel} from "@/domains/options/types";
import AmenityVertical from "@/domains/amenities/components/AmenityVertical";

import styles from "./Overview.module.css";

type FeaturedAmenitiesProps = GroupProps & {
    amenities: AmenityModel[]
}

export default function FeaturedAmenities(props: FeaturedAmenitiesProps) {
    const {amenities, ...rest} = props;

    return (
        <Group className={styles.FeaturedAmenities} {...rest}>
            {amenities.map(amenity => (
                <AmenityVertical
                    key={amenity.id}
                    icon={amenity.icon}
                    name={amenity.name}
                    className={styles.FeaturedAmenitiesItem}
                />
            ))}
        </Group>
    )
}