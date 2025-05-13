import DOMPurify from "isomorphic-dompurify";
import clsx from "clsx";
import {Title} from "@mantine/core";

type HeroTitleProps = {
    title: string;
    className?: string;
}
export default function HeroTitle({title, className}: HeroTitleProps) {
    return (
        <Title
            className={clsx('heading', `${className}`)}
            order={1}
            textWrap="balance"
            data-style={'accent'}
            c={'dark.9'}
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}
        />
    )
}