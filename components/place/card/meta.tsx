import {
    Flex,
    Paper,
    Rating,
    Text
} from "@mantine/core";

import {IconMapPin} from "@tabler/icons-react";

import styles from "../place.module.scss";
import {PlaceData} from "@/interfaces/settings/place";

type PlaceMetaProps = {
    location: string;
    className?: string;
} & PlaceData

export default function PlaceMeta(props: PlaceMetaProps) {

    const alignment = props.MetaAlignment;
    const position = props.MetaPosition
    const order = props.MetaOrder;

    const align = (alignment === 'bottom' || alignment === 'right') ? 'flex-end' : 'flex-start'
    const direction = (alignment === 'left' || alignment === 'right') ? 'column' : 'row'

    return (
        <Flex
            align={position ? align : 'center'}
            className={props.className}
            direction={position ? (!order ? direction : `${direction}-reverse`) : 'row'}
        >
            <Flex
                align={'center'}
                gap={8}
                c={'dimmed'}
                className={styles.location}
            >
                <IconMapPin width={20} height={20}/>
                <Text fz={15}>{props.location}</Text>
            </Flex>

            {
                props.Rating.Type === 'stars'

                    ? <Paper bg={'yellow.0'} radius={'xl'} shadow={'none'} px={'16'} py={'8'}>
                        <Rating defaultValue={4.5} fractions={4} readOnly/>
                    </Paper>

                    : <Paper
                        radius={'sm'}
                        bg={'green.5'}
                        p={12}
                    >
                        <Text fw={700} fz={'xl'} c={'white'}>9.5</Text>
                    </Paper>
            }
        </Flex>
    )
}