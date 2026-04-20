import {Group, Stack, Text} from "@mantine/core";
import React from "react";
import {IconHash} from "@tabler/icons-react";

const dummyAchievements: { icon: React.ReactNode; text: string }[] = [
    {
        icon: <IconHash/>,
        text: "Local Hero"
    },
    {
        icon: <IconHash/>,
        text: "Top Anbieter"
    },
]

type Achievement = {
    icon: React.ReactNode;
    text: string
}

export default function Achievements() {
    return (
        <Group gap={48} pb={40}>
            {
                dummyAchievements.map((item: Achievement, index: number) => (
                    <Stack key={index} align="center" gap={8}>
                        {item.icon}
                        <Text size={'xs'} lh={1}>{item.text}</Text>
                    </Stack>
                ))
            }
        </Group>
    );
}
