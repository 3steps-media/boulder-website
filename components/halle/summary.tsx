import {IconClock, IconStar} from "@tabler/icons-react";
import {Button, Divider, Flex, Stack, Text, ThemeIcon} from "@mantine/core";
import React from "react";

export default function HalleSummary({classes}: { classes?: string }) {
    return (
        <>
            <Flex
                justify={'space-between'}
                className={classes}>

                <Flex gap={64} justify={'flex-start'} align={'center'}>

                    <Flex justify={'flex-start'} align={'center'} gap={16}>
                        <ThemeIcon variant={'white'} color={"blue.9"} size={54}>
                            <IconStar size={24}/>
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>2</Text>
                            <Text>Bewertungen</Text>
                        </Stack>
                    </Flex>

                    <Divider orientation={'vertical'}/>

                    <Flex justify={'flex-start'} align={'center'} gap={16}>
                        <ThemeIcon variant={'white'} color={"blue.9"} size={54}>
                            <IconClock size={24}/>
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>Heute geöffnet</Text>
                            <Text>08:00 - 19:00 Uhr</Text>
                        </Stack>
                    </Flex>

                    <Divider orientation={'vertical'}/>

                    <Flex justify={'flex-start'} align={'center'} gap={16}>
                        <ThemeIcon variant={'white'} color={"blue.9"} size={54}>
                            <IconClock size={24}/>
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>Musterstraße 4</Text>
                            <Text>Eislingen/Fils</Text>
                        </Stack>
                    </Flex>
                </Flex>

                <Flex gap={48} justify={'flex-end'} align={'center'}>
                    <Flex justify={'flex-end'} align={'flex-start'} gap={4}>
                        <Text
                            size={'sm'}
                            lh={1} mt={3}
                            c={'dimmed'}
                        >
                            ab
                        </Text>
                        <Text size={'40px'} lh={1}>
                            8,50€
                        </Text>
                    </Flex>
                    <Button size={'lg'} autoContrast>
                        Ruf uns jetzt an
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}