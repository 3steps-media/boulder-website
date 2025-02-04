import type {Metadata} from "next";
import HeroInner from "@/components/hero-inner/heroInner";

export default function Hallen() {
    return (
        <>
            <HeroInner title={'Hallen Root Page'}/>
        </>
    )
}

export const metadata: Metadata = {
    title: "Hallen Page Example",
    description: "Some page SEO description",
};