import {Stack, Title} from "@mantine/core";
import ContentTypography from "@/domains/place/components/PlacePage/Content/ContentTypography";

type ContentProps = {
    content: string,
    className?: string
}

export default function Content({content, className}: ContentProps) {
    return (
        <Stack gap={'xl'} className={className}>
            <Title size={'h2'}>Beschreibung</Title>
            <ContentTypography content={content}/>
        </Stack>
    )
}