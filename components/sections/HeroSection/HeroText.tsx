import {Text} from "@mantine/core";

type HeroTextProps = {
    text: string;
    className?: string;
}

export default function HeroText({text, className}: HeroTextProps) {
    return (
        <Text
            size={'xl'}
            lh={'xl'}
            fw={300}
            c={'dark.8'}
            mt={'lg'}
            className={className}
        >
            {text}
        </Text>
    )
}