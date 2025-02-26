import {
    Box,
    Container,
    SimpleGrid,
    Stack
} from "@mantine/core";
import HeadingGroup from "@/components/heading-group/headingGroup";
import Post from "@/components/post/post";

import {PostType} from "@/interfaces/post";

type Props = {
    heading: string;
    text: string;
    posts: PostType[];
}

export default function Blog(props: Props) {
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
                        <SimpleGrid
                            cols={{base: 1, md: 4}}
                            spacing="xl"
                            mt={30}
                        >
                            {
                                props.posts.map(post => (
                                    <Post key={post.id} data={post}/>
                                ))
                            }
                        </SimpleGrid>
                    </Stack>

                </Container>
            </Box>
        </>
    )
}