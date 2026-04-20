import React from "react";
import {Flex, Stack, Text} from "@mantine/core";
import {IconClock} from "@tabler/icons-react";
import Icon from "@/domains/place/components/PlacePage/Snapshot/Icon";
import {ACFModel} from "@/domains/place/types";
import styles from "@/domains/place/components/PlacePage/PlacePage.module.css";

interface WorkingHoursProps extends Pick<ACFModel, 'workingHours'> {
}

export default function WorkingHours({workingHours}: WorkingHoursProps) {
    if (!workingHours) return null;

    return (
        <Flex justify={'flex-start'} align={'center'} gap={16}>
            <Icon className={styles.SnapshotIcon}>
                <IconClock size={24}/>
            </Icon>
            <Stack gap={0}>
                <Text fw={700} size={'sm'}>Heute geöffnet</Text>
                <Text size={'sm'} mt={2}>
                    {workingHours.from}
                    {workingHours.to !== null && <>&nbsp;&ndash;&nbsp;{workingHours.to}</>}
                    &nbsp;Uhr
                </Text>
            </Stack>
        </Flex>
    )
}