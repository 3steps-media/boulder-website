export interface PlaceType {
    id: number;
    title: string;
    image: string;
    slug: string;
    location: string;
    services?: (number)[]
}