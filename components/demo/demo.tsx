type Props = {
    children: React.ReactNode
}

export default function DemoElement(props: Props) {
    return (
        <>
            {/*<!-- DEMO ELEMENT -->*/}
            {props.children}
            {/*<!-- END DEMO ELEMENT -->*/}
        </>
    )
}