import {IconMapPin} from "@tabler/icons-react";
import {
    Flex,
    Text
} from "@mantine/core";

export default function HalleLocation({location, classes}: { location: string; classes?: string }) {
    return (
        <>
            <Flex
                align={'center'}
                gap={8}
                c={'dimmed'}
                className={classes}
            >
                <IconMapPin width={20} height={20}/>
                <Text fz={15}>{location}</Text>
            </Flex>
        </>
    )
}