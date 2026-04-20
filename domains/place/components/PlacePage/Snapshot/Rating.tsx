import {Group, NumberFormatter, Stack, Text} from "@mantine/core";
import {Rating as MantineRating, RatingProps as MantineRatingProps} from "@mantine/core";
import Icon from "@/domains/place/components/PlacePage/Snapshot/Icon";
import styles from "@/domains/place/components/PlacePage/PlacePage.module.css";

type RatingProps = MantineRatingProps & {
    commentCount: number;
}

export default function Rating({value = 0, commentCount}: RatingProps) {
    return (
        <Group gap={'md'}>

            {value > 0 &&
                <Icon className={styles.SnapshotIcon}>
                    <Stack align={'center'} gap={2}>
                        <Text size={'xl'} fw={700} lh={1}>
                            <NumberFormatter value={value} decimalScale={1} fixedDecimalScale={true}/>
                        </Text>
                        <MantineRating value={value} fractions={4} size={10} readOnly/>
                    </Stack>
                </Icon>
            }

            {commentCount > 0 &&
                <Stack gap={0}>
                    <Text fw={700} size={'sm'}>{commentCount}</Text>
                    <Text size={'sm'} mt={2}>Bewertungen</Text>
                </Stack>
            }

        </Group>
    )
}