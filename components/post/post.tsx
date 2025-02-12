import styles from './post.module.scss'
import Link from "next/link";
import {Title, Text} from "@mantine/core";
import {PostType} from "@/interfaces/post";

type PostProps = {
    data: PostType
}

export default function Post(props: PostProps) {
    return (
        <>
            <article
                id={`post-${props.data.id}`}
                className={styles.post}
            >
                <Link href={`/blog/${props.data.id}`}>
                    <time dateTime={props.data.date}>{props.data.date}</time>
                    <Title order={3}>{props.data.title}</Title>
                    <Text>{props.data.content}</Text>
                </Link>
            </article>
        </>
    )
}