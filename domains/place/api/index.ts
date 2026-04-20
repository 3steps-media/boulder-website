import {fetchFromWP} from "@/lib/wordpress/fetch";
import {PlaceDetailsModel, PlaceCollectionProps, PlacePreviewModel, PlacePreviewCollectionEdgeModel} from '../types';
import {
    PLACE_DETAILS_QUERY,
    PLACE_PREVIEW_COLLECTION_QUERY,
    PLACE_SLUGS_COLLECTION_QUERY
} from "@/domains/place/api/queries/queries";

type SlugsCollectionProps = {
    places: {
        nodes: {
            slug: string | null;
        }[]
    }
}

type CollectionProps = {
    first?: number;
    last?: number;
    after?: string;
    before?: string;
    where?: {
        slug: string;
    };
    orderby?: {
        field: string;
        order: string;
    }
}

type PlaceDetailsProps = {
    place: PlaceDetailsModel;
}

export const placeApi = {
    // Collection
    //loadPlaceCollection: async (params?: PaginationParams): Promise<Place[]> => {},
    //loadPlaceCollectionPage: async (pageParams: PageParams): Promise<Place[]> => {},
    loadPlaceSlugsCollection: async (): Promise<{ slug: string | null }[]> => {
        try {
            const data = await fetchFromWP<SlugsCollectionProps>(PLACE_SLUGS_COLLECTION_QUERY, {})
            return data?.places?.nodes ?? [];
        } catch (e) {
            console.warn('loadPlaceSlugsCollection failed:', e);
            return [];
        }
    },

    // Full details
    //loadPlaceDetails: async (id: number): Promise<Place> => {},
    loadPlaceDetailsBySlug: async (slug: string): Promise<PlaceDetailsModel> => {
        const data = await fetchFromWP<PlaceDetailsProps>(PLACE_DETAILS_QUERY, {id: slug})
        return data.place
    },

    // Preview
    //loadPlacePreview: async (id: number): Promise<Place> => {},
    //loadPlacePreviewBySlug: async (slug: string): Promise<Place> => {},
    loadPlacePreviewCollection: async (
        limit: number = 10,
        direction: 'prev' | 'next' = 'next',
        cursor?: string
    ): Promise<PlacePreviewCollectionEdgeModel[]> => {
        const {first, after, last, before}: CollectionProps = direction === 'next'
            ? {first: limit, after: cursor}
            : {last: limit, after: cursor}
        const data = await fetchFromWP<PlaceCollectionProps>(PLACE_PREVIEW_COLLECTION_QUERY, {
            first, after, last, before
        })
        return data.places.edges;
    },
    //loadPlacePreviewCollectionPage: async (pageParams: PageParams): Promise<Place> => {},

}
