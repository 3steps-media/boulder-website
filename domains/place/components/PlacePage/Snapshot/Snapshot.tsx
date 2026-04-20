import React from "react";
import {Divider, Flex} from "@mantine/core";
import {Address, Button, Icon, Price, Rating, WorkingHours} from './index'

import {PlaceDetailsModel} from "@/domains/place/types";
import {placeUtils} from "@/domains/place/utils";
import clsx from "clsx";
import styles from "@/domains/place/components/PlacePage/PlacePage.module.css";

type SnapshotProps = {
    place: PlaceDetailsModel,
    Address?: typeof Address,
    Button?: typeof Button,
    Icon?: typeof Icon,
    Price?: typeof Price,
    Rating?: typeof Rating,
    WorkingHours?: typeof WorkingHours,
    classNames?: string[],
}

export function Snapshot({place, classNames}: SnapshotProps) {
    const mappedClasses = classNames?.map((cls) => styles[cls]).filter(Boolean);
    const rating = 4.5;
    const commentCount = 2;
    const workingHours = placeUtils.getACFField(place, 'workingHours');
    const pricing = placeUtils.getACFField(place, 'pricing');
    const phone = placeUtils.getACFField(place, 'phone');
    const location = placeUtils.getACFField(place, 'location');
    const city = placeUtils.getPrimaryCity(place.cities.nodes);

    return (
        <Flex justify={'space-between'} className={clsx(styles.Snapshot, mappedClasses)}>
            <Flex gap={64} justify={'flex-start'} align={'center'}>

                {rating > 0 && commentCount > 0 &&
                    <>
                        <Snapshot.Rating
                            value={rating}
                            commentCount={commentCount}
                        />
                        <Divider/>
                    </>
                }

                {(workingHours?.from || workingHours?.to) &&
                    <>
                        <Snapshot.WorkingHours workingHours={workingHours}/>
                        <Divider/>
                    </>
                }

                <Snapshot.Address
                    address={location?.shortAddress ?? ''}
                    city={city?.name ?? ''}/>
            </Flex>

            <Flex gap={48} justify={'flex-end'} align={'center'}>
                {pricing && <Snapshot.Price pricing={pricing}/>}
                {phone && <Snapshot.Button phone={phone}/>}
            </Flex>
        </Flex>
    )
}

Snapshot.Address = Address
Snapshot.Button = Button
Snapshot.Icon = Icon
Snapshot.Price = Price
Snapshot.Rating = Rating
Snapshot.WorkingHours = WorkingHours