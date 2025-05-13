import DOMPurify from "isomorphic-dompurify";
import {Box, Container} from "@mantine/core";
import {HeroBlogPost} from "@/components/sections/HeroSection";
import RecentPosts from "@/components/sections/RecentPostsSection/RecentPosts";

import type {Metadata} from "next";
import styles from "./page.module.scss"
import SampleData from "@/_data/sample-data";
import {Post} from "@/types/models";


const posts: Post[] = SampleData.posts;

export default async function BlogPost({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const blogpost: Post[] = posts.filter((post: Post) => post.slug === slug);

    return (
        <>
            <HeroBlogPost
                title={blogpost[0].title}
                date={blogpost[0].date}
                categories={blogpost[0].categories}
            />

            <section>
                <Container size="md" mt={40}>
                    <Box
                        component={'article'}
                        className={styles.BlogPost}
                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blogpost[0].content)}}
                    />
                </Container>
            </section>

            <RecentPosts
                heading={"Neuste Blog-Beiträge"}
                text={"Finde die besten und neuesten Boulderhallen in ganz Deutschland und in deiner Nähe auf einen Blick."}
                posts={SampleData.posts}
                limit={4}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: "Blog Page Example",
    description: "Some page SEO description",
};