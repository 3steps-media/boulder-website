import type {Metadata} from "next";
import {Container, SimpleGrid} from "@mantine/core";
import HeroInner from "@/components/sections/HeroSection/HeroInner";

import SampleData from "@/_data/sample-data";
import RecentPost from "@/components/sections/RecentPostsSection/RecentPost";

export default function BlogPage() {

    const posts = SampleData.posts;

    return (
        <>
            <HeroInner title={'Blog Root Page'}/>
            <section>
                <Container mt={40}>
                    <SimpleGrid
                        cols={{base: 1, md: 4}}
                        spacing="xl"
                        mt={30}
                    >
                        {posts.map(post => <RecentPost key={post.id} post={post}/>)}
                    </SimpleGrid>
                </Container>
            </section>
        </>
    );
}

export const metadata: Metadata = {
    title: "Blog Page Example",
    description: "Some page SEO description",
};