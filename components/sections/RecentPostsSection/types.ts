import {PostCategory} from "@/components/sections/HeroSection/types";

export interface RecentPostsProps {
    heading?: string;
    text?: string;
    posts: Post[];
    limit?: number;
}

export interface RecentPostProps {
    post: Post;
}

export type Post = {
    id: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    image: string;
    date: string;
    categories: PostCategory[];
}