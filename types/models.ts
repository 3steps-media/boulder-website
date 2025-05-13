export interface City {
    id: number
    title: string;
    slug: string;
    image: string;
}

export interface Place {
    id: number;
    title: string;
    image: string;
    slug: string;
    location: string;
    services?: (number)[]
}

export interface PostCategory {
    id: number;
    name: string;
    slug: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    image?: string;
    content: string;
    excerpt?: string;
    date: string;
    categories: PostCategory[];
}