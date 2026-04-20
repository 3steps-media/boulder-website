import { City } from '@/types/models';

export interface CityModel {
    city: City;
}

export interface CitiesProps {
    heading: string;
    text?: string;
    lead?: string;
    cities: City[];
}