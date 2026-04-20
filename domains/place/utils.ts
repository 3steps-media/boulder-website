import {
    ACFModel,
    CityModel,
    MediaModel,
    PlaceDetailsModel,
    PlacePreviewModel,
    ThumbnailSizeModel
} from "@/domains/place/types";
import {FEATURED_IMAGE_PLACEHOLDER} from "@/lib/constants";
import {AmenityGroupModel, AmenityModel} from "@/domains/options/types";


export const placeUtils = {
    getACFField: <K extends keyof ACFModel>(place: PlaceDetailsModel, param: K): ACFModel[K] | null => {
        if (!place.cptPlace) return null;
        const value = place.cptPlace[param];
        return value !== undefined ? value as ACFModel[K] : null;
    },
    getAmenityIds(place: PlaceDetailsModel): Set<string> {
        return new Set(place.cptPlace?.amenities)
    },
    getFeaturedAmenities(placeAmenityIds: Set<string>, amenities: AmenityModel[], limit = 5) {
        return amenities.filter(a => placeAmenityIds.has(a.id)).slice(0, limit)
    },

    getGroupedAmenities(placeAmenityIds: Set<string>, groups: AmenityGroupModel[]) {
        return groups
            .map(group => ({
                ...group,
                amenities: group.amenities.filter(a => placeAmenityIds.has(a.id))
            }))
            .filter(group => group.amenities.length > 0)
    },

    getPrimaryCity: (cities: CityModel[]) => {
        if (!cities || cities.length === 0) {
            return null;
        }
        return cities[0];
    },

    getMediaAltText: (node: MediaModel) => {
        return node.altText
    },

    getMediaUrl: (node: MediaModel, size: ThumbnailSizeModel) => {
        if (node.mediaDetails && node.mediaDetails.sizes) {
            const filteredSize = node.mediaDetails.sizes.filter((media: { name: string; }) => {
                return media.name === size;
            });
            if (filteredSize.length > 0) {
                return filteredSize[0].sourceUrl;
            }
        }
        return node.sourceUrl;
    },

    /**
     * Get featured image data by size.
     * Original image url returns as fallback if the requested size doesn't exist
     */
    getFeaturedImageData: (place: PlacePreviewModel, size: ThumbnailSizeModel): { altText: string, url: string } => {
        const defaults = {
            altText: place.title,
            url: FEATURED_IMAGE_PLACEHOLDER
        }

        let nodeAltText, nodeSourceUrl;

        if (place.featuredImage && typeof place.featuredImage === "object" && "node" in place.featuredImage && place.featuredImage.node) {
            const node = place.featuredImage.node;
            nodeAltText = placeUtils.getMediaAltText(node)
            nodeSourceUrl = placeUtils.getMediaUrl(node, size)
        }

        return {
            altText: nodeAltText !== undefined ? nodeAltText : defaults.altText,
            url: nodeSourceUrl !== undefined ? nodeSourceUrl : defaults.url
        }
    },

    /**
     * Get full place title with city name.
     * @param place
     */
    getTitleWithCity: (place: PlacePreviewModel) => {
        const city = placeUtils.getPrimaryCity(place.cities.nodes);
        return city ? `${place.title} ${city.name}` : place.title;
    },

    getImages(place: PlaceDetailsModel) {
        const featured = place.featuredImage?.node
        const gallery = place.cptPlace?.photos?.nodes ?? []
        return [
            ...(featured ? [placeUtils.addToFancybox(featured)] : []),
            ...gallery.map(placeUtils.addToFancybox),
        ]
    },

    addToFancybox: (node: MediaModel) => ({
        src: placeUtils.getMediaUrl(node, 'large'),
        thumbSrc: placeUtils.getMediaUrl(node, 'thumbnail'),
        altText: placeUtils.getMediaAltText(node),
    }),
}
