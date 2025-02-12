import styles from "./page.module.css";
import type {Metadata} from "next";

import Hero from "@/components/hero/hero";
import heroImage from "@/public/images/Boulder_Island_0035.jpg";
import Cities from "@/components/cities/cities";
import BestPlaces from "@/components/best-places/bestPlaces";
import Reasons from "@/components/reasons";
import FAQ from "@/components/faq/faq";
import Blog from "@/components/blog/blog";

import SampleData from "@/_data/sample-data";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>

                <Hero backgroundImage={heroImage}/>

                <Cities
                    heading={"Top Städte"}
                    text={"Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick."}
                    lead={"Die besten Boulderhallen Deutschlands."}
                    items={SampleData.cities}
                />

                <BestPlaces
                    heading={"Die bestbewerteten Boulderhallen"}
                    items={SampleData.places}
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

                <Blog
                    heading={"Neuste Blog-Beiträge"}
                    text={"Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick."}
                    posts={SampleData.posts}
                />

            </main>
        </div>
    );
}

export const metadata: Metadata = {
    title: "Home",
}
