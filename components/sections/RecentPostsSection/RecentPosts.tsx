import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text
} from "@mantine/core";
import HeadingGroup from "@/components/heading-group/headingGroup";
import RecentPost from "@/components/sections/RecentPostsSection/RecentPost";
import {RecentPostsProps} from "./types";

export default function RecentPosts(props: RecentPostsProps) {
    const limitedPosts = props.limit ? props.posts.slice(0, props.limit) : props.posts;

    return (
        <>
            <Box
                component={'section'}
                py={{base: '6rem', xl: '8.5rem'}}
            >
                <Container>

                    <Stack
                        align={'flex-start'}
                        justify={'flex-start'}
                        gap={64}
                    >
                        <HeadingGroup
                            heading={props.heading}
                            size={'lg'}
                            text={props.text}
                        />
                        {limitedPosts.length > 0 ?
                            (<SimpleGrid
                                cols={{base: 1, md: 4}}
                                spacing="xl"
                                mt={30}
                            >

                                {limitedPosts.map(post => (
                                    <RecentPost key={post.id} post={post}/>
                                ))
                                }
                            </SimpleGrid>)
                            : (
                                <Text>No posts found</Text>
                            )
                        }
                    </Stack>

                </Container>
            </Box>
        </>
    )
}