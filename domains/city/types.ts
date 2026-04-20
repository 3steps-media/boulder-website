export interface CityModel {
    databaseId: number;
    id?: string | number;
    name: string;
    slug: string;
    image: string;
}

export interface CityCollectionProps {
    cities: {
        nodes: CityModel[];
    }
}