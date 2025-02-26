import {
    ActionIcon,
    Divider,
    Flex,
    Group,
    Rating,
    Stack,
    Text
} from "@mantine/core";

import {
    IconBrandFacebook,
    IconBrandX,
    IconExternalLink,
    IconHeart
} from "@tabler/icons-react";

import NextLink from "next/link";

export default function HalleMeta({classes}: { classes?: string }) {
    return (
        <>
            <Flex align={'center'} justify={'flex-start'} mt={32} gap={16}>
                <Flex align={'center'} className={classes}>
                    <Stack align={'center'} gap={2}>
                        <Text size={'xl'} fw={700} lh={1}>4.5</Text>
                        <Rating value={5.5} fractions={4} readOnly/>
                    </Stack>

                    <Divider orientation="vertical" mx={32}/>

                    <Text fw={700}>2 Bewertungen</Text>

                    <Group gap={4} ms={32}>
                        <ActionIcon
                            component={NextLink}
                            href={"#"}
                            variant={'white'}>
                            <IconBrandFacebook size={16}/>
                        </ActionIcon>
                        <ActionIcon
                            component={NextLink}
                            href={"#"}
                            variant={'white'}>
                            <IconBrandX size={16}/>
                        </ActionIcon>
                        <ActionIcon
                            component={NextLink}
                            href={"#"}
                            variant={'white'}>
                            <IconExternalLink size={16}/>
                        </ActionIcon>
                    </Group>
                </Flex>

                <ActionIcon
                    variant={'default'}
                    radius={64}
                    size={58}
                >
                    <IconHeart/>
                </ActionIcon>
            </Flex>
        </>
    )
}