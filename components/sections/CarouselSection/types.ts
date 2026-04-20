/**
 * Base carousel slide
 * Generic carousel slide interface that can be used for any type of content
 */
export interface CarouselSlideProps<T> {
    cursor: string;
    node: T;
}

/**
 * Base carousel slides
 */
export interface CarouselSlidesProps<T> {
    slides?: CarouselSlideProps<T>[];
}

/**
 * Base props for any carousel section
 */
export interface CarouselSectionProps<T> extends CarouselSlidesProps<T> {
    heading?: string;
}