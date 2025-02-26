import React from "react";
import {Group, Stack, Text} from "@mantine/core";

// TODO Interface
type Achievement = {
    icon: React.ReactNode;
    text: string
}
export default function HalleAchievements({items}: { items: Achievement[] }) {
    return (
        <>
            <Group gap={48} pb={40}>
                {
                    items.map((item: Achievement, index: number) => (
                        <Stack key={index} align="center" gap={8}>
                            {item.icon}
                            <Text size={'xs'} lh={1}>{item.text}</Text>
                        </Stack>
                    ))
                }
            </Group>
        </>
    )
}