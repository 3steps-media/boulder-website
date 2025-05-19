// City
// WP CPT: city
export interface City {
    id: number
    title: string;
    slug: string;
    image: string; // later array
}

// Place aka Halle
export interface PlaceLocation {
    id: number;
    city: string;
    url?: string;
    address?: string;
    lat?: number;
    lng?: number;
}

export interface PlaceMeta {
    rating: number;
    reviews?: number;
    url?: string;
    facebook?: string;
    instagram?: string;
    x?: string;
}

export interface Place {
    id: number;
    title: string;
    image: string;
    slug: string;
    location: PlaceLocation;
    services?: number[];
    meta: PlaceMeta
}

// Posts aka Blog
export interface PostCategory {
    id: number;
    name: string;
    slug: string;
}

// WP default post
// TODO how many places are in this post?
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