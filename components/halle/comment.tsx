import {Avatar, Group, Rating, Stack, Text} from "@mantine/core";
import React from "react";

export default function HalleComment() {
    return (
        <Stack>
            <Rating value={4}/>
            <Text fw={300} lh={1.5}>
                Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt:
                Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe.
            </Text>
            <Group>
                <Avatar
                    src="/images/logo.svg"
                    alt="Florian Daugalies"
                    radius="xl"
                />
                <div>
                    <Text fz="sm">Florian Daugalies</Text>
                    <Text fz="xs" c="dimmed">
                        Besucht am 02.05.2024
                    </Text>
                </div>
            </Group>
        </Stack>
    )
}