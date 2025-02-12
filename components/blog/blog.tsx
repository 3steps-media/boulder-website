import styles from './blog.module.scss'

import {Container} from "@mantine/core";
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
            <section className={styles.blog}>
                <Container size={'xl'}>
                    <div className={styles.inner}>
                        <HeadingGroup
                            heading={props.heading}
                            size={'lg'}
                            text={props.text}
                        />

                        <div className={styles.posts}>
                            {props.posts.map(post => (
                                <Post key={post.id} data={post}/>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}