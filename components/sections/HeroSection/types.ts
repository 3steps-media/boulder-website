import {StaticImageData} from "next/image";

export interface BasicHeroProps {
    title: string;
    text?: string;
    backgroundImage?: StaticImageData;
}

export interface HeroProps extends BasicHeroProps {
    image?: StaticImageData;
}

export interface HeroBlogPostProps extends BasicHeroProps {
    date?: string;
    categories: PostCategory[];
}

export type PostCategory = {
    id: number | string,
    name: string,
    slug: string
};