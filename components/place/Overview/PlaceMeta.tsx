import {ActionIcon, Divider, Flex, Group, Rating, Stack, Text} from "@mantine/core";
import NextLink from "next/link";
import {IconBrandFacebook, IconBrandX, IconExternalLink, IconHeart} from "@tabler/icons-react";
import styles from "@/components/place/Overview/Overview.module.scss";

import {PlaceMetaProps} from "@/components/place/Overview/types";

export default function PlaceMeta({meta}: PlaceMetaProps) {
    return (
        <Flex align={'center'} justify={'flex-start'} mt={32} gap={16}>
            <Flex align={'center'} className={styles.meta}>
                <Stack align={'center'} gap={2}>
                    <Text size={'xl'} fw={700} lh={1}>{meta.rating}</Text>
                    <Rating value={meta.rating} fractions={4} readOnly/>
                </Stack>

                <Divider orientation="vertical" mx={32}/>

                <Text fw={700}>{meta.reviews} Bewertungen</Text>

                <Group gap={4} ms={32}>
                    {meta.facebook &&
                        <ActionIcon
                            component={NextLink}
                            href={meta.facebook}
                            variant={'white'}>
                            <IconBrandFacebook size={16}/>
                        </ActionIcon>
                    }
                    {meta.x &&
                        <ActionIcon
                            component={NextLink}
                            href={meta.x}
                            variant={'white'}>
                            <IconBrandX size={16}/>
                        </ActionIcon>
                    }
                    {meta.url &&
                        <ActionIcon
                            component={NextLink}
                            href={meta.url}
                            variant={'white'}>
                            <IconExternalLink size={16}/>
                        </ActionIcon>
                    }
                </Group>
            </Flex>

            <ActionIcon
                variant={'default'}
                radius={64}
                size={58}
                //onClick={() => alert('like')}
            >
                <IconHeart/>
            </ActionIcon>
        </Flex>
    );
}
