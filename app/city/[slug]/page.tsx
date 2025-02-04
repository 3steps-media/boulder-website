import type {Metadata} from "next";
import HeroInner from "@/components/hero-inner/heroInner";
import {DummyCities} from "@/_data/cities";
import {getCityBySlug} from "@/utils/Utils";

type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function City(props: Params) {
    const params = await props.params;
    const slug = params.slug;
    const city = getCityBySlug(DummyCities, slug);

    return (
        <>
            <HeroInner title={city[0].title}/>
        </>
    )
}

export const metadata: Metadata = {
    title: "City Example",
    description: "Some page SEO description",
};