import {Stack} from "@mantine/core";
import PlaceTitle from "./PlaceTitle";
import PlaceLocation from "@/components/features/place/PlaceLocation";
import PlaceMeta from "./PlaceMeta";
import PlaceServices from "./PlaceServices";
import PlaceSummary from "./PlaceSummary";

import PlaceAchievements from "./PlaceAchievements";
import {Place} from "@/types/models";
import React from "react";

export default function Overview(props: Place) {
    return (
        <>
            <Stack gap={0} justify={'space-between'} mih={'100%'}>
                <Stack justify={'space-between'} h={'100%'}>
                    <Stack gap={0}>
                        <PlaceTitle title={props.title}/>
                        <PlaceLocation location={props.location}/>
                        <PlaceMeta meta={props.meta}/>
                        {/*TODO dummy*/}
                        <PlaceServices/>
                        {/*TODO dummy*/}
                        <PlaceSummary/>
                    </Stack>
                    {/*TODO dummy*/}
                    <PlaceAchievements/>
                </Stack>
            </Stack>
        </>
    );
}