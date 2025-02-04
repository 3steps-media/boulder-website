import type {Metadata} from "next";
import HeroInner from "@/components/hero-inner/heroInner";

export default async function BlogPost() {
    return (
        <>
            <HeroInner title={'Post Sample'}/>
        </>
    )
}

export const metadata: Metadata = {
    title: "Post Page Example",
    description: "Some page SEO description",
};