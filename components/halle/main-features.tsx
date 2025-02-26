import React from "react";
import {Group, Stack, Text} from "@mantine/core";

// TODO Interface
type Feature = {
    icon: React.ReactNode;
    feature: string
}

export default function HalleMainFeatures({items}: { items: Feature[] }) {
    return (
        <>
            <Group gap={60} my={48}>
                {
                    items.map((item: Feature, index: number) => (
                        <Stack
                            key={index}
                            align={'flex-start'}
                            gap={8}
                        >
                            {item.icon}
                            <Text size={'xs'}>{item.feature}</Text>
                        </Stack>
                    ))
                }
            </Group>
        </>
    )
}