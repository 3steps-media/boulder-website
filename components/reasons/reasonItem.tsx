import {Paper, Text, Title} from "@mantine/core";

type Props = {
    index: number;
    title: string;
    text: string;
    className?: string;
}

export default function ReasonItem(props: Props) {
    return (
        <>
            <Paper
                key={props.index}
                className={props.className}
            >
                <span>{props.index < 9 ? '0' + (props.index + 1) : props.index + 1}</span>
                <Title order={3}>{props.title}</Title>
                <Text>{props.text}</Text>
            </Paper>
        </>
    )
}