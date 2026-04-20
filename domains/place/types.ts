import {CarouselSlideProps} from "@/components/sections/CarouselSection/types";
import {PaymentMethodModel} from "@/domains/options/types";

export type ThumbnailSizeModel = "thumbnail" | "medium" | "large";

export interface PaginationParams {
    limit?: number;
    before?: string;
    after?: string;
    first?: number;
    last?: number;
}

export interface PlacePreviewCollectionModel {
    places: {
        edges: PlacePreviewCollectionEdgeModel[];
    }
}

export interface PlacePreviewCollectionEdgeModel {
    cursor: string;
    node: PlacePreviewModel;
}

export interface PlacePreviewModel {
    databaseId: number;
    date?: string;
    id: string;
    slug: string;
    status: string;
    title: string;
    featuredImage: FeaturedImageModel | null;
    cities: {
        nodes: CityModel[]
    }
}

export interface PlaceDetailsModel extends PlacePreviewModel {
    seo?: SEOModel;
    cptPlace?: ACFModel;
    commentCount: number;
}

export interface MediaSizeModel {
    height: number;
    name: ThumbnailSizeModel;
    sourceUrl: string;
    width: number;
}

export interface MediaModel {
    id: string;
    altText?: string;
    sourceUrl: string;
    mediaDetails: {
        sizes: MediaSizeModel[] | null
    };
}

export interface FeaturedImageModel {
    node: MediaModel;
}

type SEOModel = {
    title: string;
    metaDesc: string;
}

export interface ACFModel {
    amenities: string[] | null;
    beginnersCourses: boolean;
    email: string | null;
    groupSize: string | null;
    importantInformation: string | null;
    location: {
        fullAddress: string | null;
        shortAddress: string | null;
    };
    paymentMethods: PaymentMethodModel[] | null;
    phone: string | null;
    photos: {
        nodes: MediaModel[]
    } | null;
    pricing: {
        price: number | null;
        linkToPriceList: string | null;
    };
    shortDescription: string | null;
    fullDescription: string | null;
    socialLinks: {
        facebook: string | null;
        instagram: string | null;
        twitter: string | null;
        youtube: string | null;
        tiktok: string | null;
    };
    websiteUrl: string | null;
    workingHours: {
        from: string | null;
        to: string | null;
    };
}

export interface CityModel {
    databaseId: number;
    id?: string;
    name: string;
    slug: string;
}

export interface CityCollectionProps {
    cities: {
        nodes: CityModel[];
    }
}

export interface PlaceCollectionProps {
    places: {
        edges: CarouselSlideProps<PlaceDetailsModel>[];
    }
}

export interface FancyboxGalleryModel {
    src: string;
    thumbSrc: string;
    altText?: string;
    caption?: string;
}
