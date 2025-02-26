export interface PlaceData {
    Ratio: string;
    TitleHeight: number;
    Services: boolean;
    Info: boolean;
    MetaPosition: boolean;
    MetaAlignment: string;
    MetaOrder: boolean;
    Rating: {
        [key: string]: string;
        Type: string;
    };
}