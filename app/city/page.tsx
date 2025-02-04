//import styles from "./page.module.css";

import type {Metadata} from "next";
import HeroInner from "@/components/hero-inner/heroInner";

export default function CityHome() {
    return (
        <>
            <HeroInner title={'Cities'}/>
        </>
    )
}

export const metadata: Metadata = {
    title: "City Page Example",
    description: "Some page SEO description",
};