import {ActionIcon, Box, Divider, Flex, Group, NumberFormatter, Rating, Stack, Text} from "@mantine/core";
import {IconHeart} from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";
import {ACFModel} from "@/domains/place/types";
import styles from "./Overview.module.css";

type PlaceMetaProps = {
    rating?: number;
    commentCount?: number;
    socialLinks?: ACFModel['socialLinks'] | null;
    websiteUrl?: ACFModel['websiteUrl'];
}

export default function Meta({rating, commentCount, socialLinks, websiteUrl}: PlaceMetaProps) {
    rating = 4.5;
    commentCount = 2;

    return (
        <Flex className={styles.OverviewMetaContainer}>
            <Flex className={styles.OverviewMetaUrls}>

                {rating > 0 && commentCount > 0 &&
                    <Group gap={0}>
                        {rating > 0 &&
                            <>
                                <Stack align={'center'} gap={2}>
                                    <Text size={'xl'} fw={700} lh={1}>
                                        <NumberFormatter value={rating} decimalScale={1} fixedDecimalScale={true}/>
                                    </Text>
                                    <Rating value={rating} fractions={4} size={'xs'} readOnly/>
                                </Stack>

                                <Divider mx={24}/>
                            </>
                        }
                        {commentCount > 0 &&
                            <Text fz={'sm'}>
                                <Box component={'span'} fw={700}>{2}</Box> Bewertungen
                            </Text>
                        }
                    </Group>
                }

                <SocialLinks socialLinks={socialLinks} websiteUrl={websiteUrl}/>
            </Flex>

            <ActionIcon
                variant={'default'}
                className={styles.OverviewMetaLikeButton}
                radius={64}
                size={58}
            >
                <IconHeart/>
            </ActionIcon>
        </Flex>
    );
}
