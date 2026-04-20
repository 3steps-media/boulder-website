import NextLink from "next/link";
import {Box, Flex, Text} from "@mantine/core";
import {IconMapPin} from "@tabler/icons-react";
import {CityModel} from "@/domains/city/types";
import styles from "./PlaceLocation.module.css";

type LocationInnerProps = {
    name: string;
}
type LocationProps = {
    location: CityModel;
    isLink?: boolean
}

function LocationInner({name}: LocationInnerProps) {
    return (
        <Flex
            align={'center'}
            gap={8}
            className={styles.PlaceLocation}
        >
            <IconMapPin width={20} height={20}/>
            <Text
                fz={15}
                truncate={'end'}
                component={'span'}>
                {name}
            </Text>
        </Flex>
    )
}

export default function Location({location, isLink = false}: LocationProps) {
    return (
        isLink
            ? (
                <Box
                    component={NextLink}
                    href={location.slug}
                    className={styles.PlaceLocationWrap}
                >
                    <LocationInner name={location.name}/>
                </Box>
            ) : (
                <LocationInner name={location.name}/>
            )
    )
}
