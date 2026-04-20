import {Typography, TypographyProps} from "@mantine/core";
import styles from "./ContentTypography.module.css"

type ContentTypographyProps = TypographyProps & {
    content: string
    className?: string
}

export default function ContentTypography(props: ContentTypographyProps) {
    const {content, className, ...rest} = props;
    return (
        <Typography
            className={styles.Typography}
            dangerouslySetInnerHTML={{__html: content}}
            {...rest}
        />
    )
}