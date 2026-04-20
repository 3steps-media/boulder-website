import {ActionIcon, AspectRatio, Card, Flex, Group, Image, Paper, Rating, Text, Title} from "@mantine/core";
import styles from "@/components/features/place/PlaceCard/PlaceCard.module.scss";
import NextLink from "next/link";
import NextImage from "next/image";
import PlaceLocation from "@/components/features/place/PlaceLocation";
import {IconHeart, IconInfoSquareRounded} from "@tabler/icons-react";

import {PlacePreviewModel} from "@/domains/place/types";
import {placeUtils} from "@/domains/place/utils";
import {LinkButton} from "@/components/ui/LinkButton";

type PlacePreviewProps = {
    place: PlacePreviewModel
}

export default function PlacePreview({place}: PlacePreviewProps) {

    const featuredImage = placeUtils.getFeaturedImageData(place, 'medium');

    return (
        <Card
            className={styles.PlaceCard}
            shadow="lg"
            padding="md"
            radius="xxl"
        >

            <div className={styles.imageWrap}>
                <NextLink href={`hallen/${place.slug}`}>
                    <AspectRatio ratio={1.16}>
                        <Image
                            src={featuredImage.url}
                            alt={featuredImage.altText}
                            width={268}
                            height={320}
                            radius="lg"
                            component={NextImage}
                        />
                    </AspectRatio>
                </NextLink>
            </div>

            <Title order={3} mt={30} mb={10} lineClamp={2}>
                <NextLink href={`hallen/${place.slug}`}>
                    {placeUtils.getTitleWithCity(place)}
                </NextLink>
            </Title>

            <Flex
                justify={'space-between'}
                align={'center'}
            >
                <PlaceLocation location={place.cities.nodes[0]}/>

                <Paper bg={'yellow.0'} radius={'xl'} shadow={'none'} px={'16'} py={'8'}>
                    <Rating defaultValue={4.5} fractions={4} readOnly/>
                </Paper>
            </Flex>

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

            <Group mt={20}>
                <LinkButton
                    href={`hallen/${place.slug}`}
                    radius="md"
                    style={{flex: 1}}
                >
                    Show details
                </LinkButton>
                <ActionIcon variant="default" radius="xl" size={42}>
                    <IconHeart size={20}/>
                </ActionIcon>
            </Group>

        </Card>
    );
}