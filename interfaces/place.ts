export interface PlaceType {
    id: number;
    title: string;
    image: string;
    slug: string;
    location: {
        id: number;
        city: string;
        url?: string;
        address?: string;
        lat?: number;
        lng?: number;
    };
    services?: (number)[]
}