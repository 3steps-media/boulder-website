import styles from './post.module.scss'
import Link from "next/link";
import Heading from "@/components/heading/heading";
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
                    <Heading as={'h3'}>{props.data.title}</Heading>
                    <p>{props.data.content}</p>
                </Link>
            </article>
        </>
    )
}