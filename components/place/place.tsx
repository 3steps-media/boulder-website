// Next
import NextLink from "next/link";
import NextImage from "next/image";

// Mantine
import {
    ActionIcon,
    AspectRatio,
    Button,
    Card,
    Group,
    Image,
    Title
} from "@mantine/core";

// Icons
import {IconHeart} from "@tabler/icons-react";

// Utils
// import clsx from "clsx";

// Interfaces
import {PlaceData} from "@/interfaces/settings/place";
import {PlaceType} from "@/interfaces/place";

// CSS
import styles from "./place.module.scss";
import * as PlaceComponent from "@/components/place/card";

type PlacePops = {
    item: PlaceType;
    data: PlaceData
}

type DummyRatios = {
    [key: string]: number
}

export default function Place(props: PlacePops) {
    const place: PlaceType = props.item;
    const dummyRatios: DummyRatios = {
        square: 1,
        design: 1.16 / 1,
        third: 4 / 3,
        golden: 1.61803399 / 1,
        half: 2 / 1
    }

    const placeMetaProps = {
        ...props.data,
        location: place.location,
    }

    return (
        <Card
            className={styles.place}
            shadow="lg"
            padding="md"
            radius="xxl"
        >
            <div className={styles.imageWrap}>
                <NextLink href={`hallen/${place.slug}`}>
                    <AspectRatio ratio={dummyRatios[props.data.Ratio]}>
                        <Image
                            src={place.image}
                            alt={place.title}
                            width={268}
                            height={320}
                            radius="lg"
                            component={NextImage}
                        />
                    </AspectRatio>
                </NextLink>
                {props.data.MetaPosition && <PlaceComponent.PlaceMeta className={styles.meta} {...placeMetaProps}/>}
            </div>

            <Title order={3} mt={30} mb={10} lineClamp={props.data.TitleHeight}>
                <NextLink href={`hallen/${place.slug}`}>
                    {place.title}
                </NextLink>
            </Title>

            {!props.data.MetaPosition && <PlaceComponent.PlaceMeta className={styles.meta} {...placeMetaProps}/>}
            {props.data.Services && <PlaceComponent.PlaceServices services={place.services}/>}
            {props.data.Info && <PlaceComponent.PlaceInfo/>}

            <Group mt={20}>
                <Button radius="md" style={{flex: 1}}>
                    Show details
                </Button>
                <ActionIcon variant="default" radius="xl" size={42}>
                    <IconHeart size={20}/>
                </ActionIcon>
            </Group>
        </Card>
    )
}