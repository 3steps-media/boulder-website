export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type CityItem = {
    id: number;
    title: string;
    slug: string;
    image: string;
}

export function getCityBySlug(items: CityItem[], slug: string) {
    const realSlug = slug.replace(/\.md$/, "");

    return items.filter((obj: { slug: string; }) => {
        return obj.slug === realSlug
    })
}