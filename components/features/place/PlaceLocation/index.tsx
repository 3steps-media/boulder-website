import {Flex, Text} from "@mantine/core";
import {IconMapPin} from "@tabler/icons-react";

import styles from "./PlaceLocation.module.scss";
//import {PlaceLocationProps} from "./PlaceLocation.types";
import {City} from "@/domains/place/types";

type PlaceLocationProps = {
    location: City;
}

export default function PlaceLocation({location}: PlaceLocationProps) {
    return (
        <Flex
            align={'center'}
            gap={8}
            c={'dimmed'}
            className={styles.PlaceLocation}
        >
            <IconMapPin width={20} height={20}/>
            <Text
                fz={15}
                truncate={'end'}
                component={'span'}>
                {location.name}
            </Text>
        </Flex>
    )
}