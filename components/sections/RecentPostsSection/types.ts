import {Post} from '@/types/models';

export interface RecentPostsProps {
    heading?: string;
    text?: string;
    posts: Post[];
    limit?: number;
}

export interface RecentPostProps {
    post: Post;
}