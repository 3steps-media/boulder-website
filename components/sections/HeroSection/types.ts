import {StaticImageData} from "next/image";
import {PostCategory} from "@/types/models";

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