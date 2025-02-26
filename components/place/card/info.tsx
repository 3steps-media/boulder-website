import {Group, Paper, Text} from "@mantine/core";
import {IconInfoSquareRounded} from "@tabler/icons-react";

export default function PlaceInfo() {
    return (
        <Paper
            radius={'sm'}
            shadow={'none'}
            mt={32}
            withBorder>
            <Group
                align={'center'}
                gap={8}
                px={16}
                py={12}
            >
                <IconInfoSquareRounded width={20} height={20}/>
                <Text fz={13}>Top Anbieter im Kreis Eislingen</Text>
            </Group>
        </Paper>
    )
}