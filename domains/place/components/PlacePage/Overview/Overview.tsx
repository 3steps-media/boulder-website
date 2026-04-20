import {Stack} from "@mantine/core";
import Heading from "./Heading";
import PlaceLocation from "@/domains/place/components/PlaceLocation";
import ContentTypography from "@/domains/place/components/PlacePage/Content/ContentTypography";
import Meta from "./Meta";
import Achievements from "./Achievements";

import FeaturedAmenities from "./FeaturedAmenities";
import {placeUtils} from "@/domains/place/utils";
import {PlaceDetailsModel} from "@/domains/place/types"

import {AmenityModel} from "@/domains/options/types";
import styles from "./Overview.module.css";

type PlaceOverviewProps = {
    place: PlaceDetailsModel,
    featuredAmenities?: AmenityModel[]
}

export default function Overview({place, featuredAmenities}: PlaceOverviewProps) {
    const {title} = place;
    const location = placeUtils.getPrimaryCity(place.cities.nodes);
    const socialLinks = placeUtils.getACFField(place, 'socialLinks');
    const websiteUrl = placeUtils.getACFField(place, 'websiteUrl');
    const shortDescription = placeUtils.getACFField(place, 'shortDescription');

    const classes = {
        heading: styles.OverviewHeading,
        meta: {
            root: styles.OverviewMetaRoot,
            wrap: styles.OverviewMetaWrap,
            like: styles.OverviewMetaLikeButton
        },
        featuredAmenities: {
            root: styles.FeaturedAmenities,
            item: styles.FeaturedAmenitiesItem
        },
        contentTypography: styles.Typography
    }

    return (
        <Stack gap={0} justify={'space-between'} mih={'100%'}>
            <Stack justify={'space-between'} h={'100%'}>
                <Stack gap={0}>
                    <Heading
                        title={title}
                        city={location?.name}
                    />

                    {location && <PlaceLocation location={location}/>}

                    <Meta
                        socialLinks={socialLinks}
                        websiteUrl={websiteUrl}
                    />

                    {featuredAmenities &&
                        <FeaturedAmenities amenities={featuredAmenities}/>
                    }
                    {shortDescription &&
                        <ContentTypography
                            content={shortDescription}
                            mt={56}
                        />
                    }
                </Stack>

                {/*TODO dummy*/}
                <Achievements/>
            </Stack>
        </Stack>
    );
}
