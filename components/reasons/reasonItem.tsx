import Heading from "@/components/heading/heading";

type Props = {
    index: number;
    title: string;
    text: string;
    className?: string;
}

export default function ReasonItem(props: Props) {
    return (
        <>
            <div key={props.index} className={props.className}>
                <span>{props.index < 9 ? '0' + (props.index + 1) : props.index + 1}</span>
                <Heading as={'h3'}>{props.title}</Heading>
                <p>{props.text}</p>
            </div>
        </>
    )
}