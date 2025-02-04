type Props = {
    title: string;
    content: string;
    name?: string;
    isOpen: boolean;
}

export default function Details(props: Props) {
    return (
        <details name={props.name} open={props.isOpen}>
            <summary>{props.title}</summary>
            <p>{props.content}</p>
        </details>
    )
}