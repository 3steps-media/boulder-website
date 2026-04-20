import {Flex, Stack, Text, ThemeIcon} from "@mantine/core";
import {IconClock} from "@tabler/icons-react";
import React from "react";
import Icon from "@/domains/place/components/PlacePage/Snapshot/Icon";
import styles from "@/domains/place/components/PlacePage/PlacePage.module.css";

type AddressProp = {
    address: string
    city: string
}

export default function Address({address, city}: AddressProp) {
    return (
        <Flex justify={'flex-start'} align={'center'} gap={16}>
            <Icon className={styles.SnapshotIcon}>
                <IconClock size={24}/>
            </Icon>
            <Stack gap={0}>
                {address && <Text size={'sm'}>{address}</Text>}
                {city && <Text fw={700} size={'sm'}>{city}</Text>}
            </Stack>
        </Flex>
    )
}