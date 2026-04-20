import styles from "./page.module.scss";
import type {Metadata} from "next";
import SampleData from "@/_data/sample-data";

import Hero from "@/components/sections/HeroSection/Hero";
import Cities from "@/components/sections/CitiesSection/Cities";
import CarouselSection from "@/components/sections/CarouselSection/CarouselSection";
import Reasons from "@/components/reasons";
import FAQ from "@/components/faq/faq";
import RecentPosts from "@/components/sections/RecentPostsSection/RecentPosts";
import Subscribe from "@/components/subscribe/subscribe";
import {placeApi} from "@/domains/place/api";


export default async function Home() {
    const slides = await placeApi.loadPlacePreviewCollection();

    return (
        <main className={styles.main}>
            <Hero
                title={"Finde <span>deine Boulderhalle</span> In deiner Nähe"}
                text={"Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick."}
            />

            <Cities
                heading={"Top Städte"}
                text={"Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick."}
                lead={"Die besten Boulderhallen Deutschlands."}
                cities={SampleData.cities}
            />

            <CarouselSection
                heading={"Die bestbewerteten Boulderhallen"}
                slides={slides}
            />

            <Reasons
                layout={'gradient'}
                count={4}
                heading={"3 Gründe wieso du diese Plattform lieben wirst"}
                items={SampleData.reasons}
            />
            <Reasons
                layout={'gradient'}
                style={'column'}
                heading={"3 Gründe wieso du diese Plattform lieben wirst"}
                items={SampleData.reasons}
            />
            <Reasons
                style={'column'}
                count={3}
                heading={"3 Gründe wieso du diese Plattform lieben wirst"}
                text={"Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick."}
                items={SampleData.reasons}
            />

            <FAQ
                heading={"Häufig gestellte Fragen"}
                text={"Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen."}
                panels={SampleData.faqPanels}
            />

            <RecentPosts
                heading={"Neuste Blog-Beiträge"}
                text={"Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick."}
                posts={SampleData.posts}
                limit={4}
            />

            <Subscribe
                title={SampleData.subscribe.title}
                content={SampleData.subscribe.content}
            />

        </main>
    );
}

export const metadata: Metadata = {
    title: "Home",
}
