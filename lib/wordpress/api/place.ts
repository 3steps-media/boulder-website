// import {fetchFromWP} from "@/lib/wordpress/fetch";
// import {GET_ALL_PLACES} from "@/lib/wordpress/queries/place/getAllPlaces";
// import {GET_PLACE_CARD, GET_PLACE_CARDS} from "@/lib/wordpress/queries/place/getPlaceCard";

// 1. Move to @/types/models.ts
// 2. Decide is it necessary to make such Media... structure
// 3. Webp format. New images stored in wp-content/compressx-nextgen/uploads/Y/M/FILENAME.ext.webp

type MediaItemSize = {
    height: number;
    name: string;
    width: number;
    sourceUrl: string;
}

type MediaItemDetails = {
    height: number;
    width: number;
    sizes: MediaItemSize[]
}

type MediaItem = {
    id: string;
    altText?: string;
    caption?: string;
    mediaDetails?: MediaItemDetails;
}

type FeaturedImage = {
    node: {
        altText: string;
        sourceUrl: string;
    }
}

type SEO = {
    title: string;
    metaDesc: string;
}

type ACF = {
    location: {
        fullAddress?: string;
        shortAddress?: string;
    }
    photos?: {
        nodes: MediaItem[]
    }
    shortDescription?: string;
    socialLinks: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
    }
    websiteUrl?: string;
}

type Place = {
    databaseId: number
    date?: string;
    id: string;
    slug: string;
    status: string;
    title: string;
    featuredImage?: FeaturedImage;
    seo?: SEO;
    cPTPlace?: ACF;
}

type GetAllPlacesResponse = {
    places: {
        nodes: Place[]
    }
}

type GetPlaceResponse = {
    place: Place
}

// export async function getAllPlaces() {
//     const data = await fetchFromWP<GetAllPlacesResponse>(GET_ALL_PLACES, {})
//     return data.places.nodes;
// }
//
// export async function getPlaceCardById($id: number) {
//     const data = await fetchFromWP<GetPlaceResponse>(GET_PLACE_CARD, {id: $id})
//     return data.place;
// }
//
// export async function getPlacesAsCards(
//     $first: number = 10,
//     $last?: number,
//     $before?: number,
//     $after?: number,
// ) {
//     const data = await fetchFromWP<GetAllPlacesResponse>(GET_PLACE_CARDS, {
//         first: $first,
//         last: $last,
//         before: $before,
//         after: $after,
//     })
//     return data.places;
// }