export default function Container(
    {
        children,
        maxWidth = 'xl'
    }: {
        children?: React.ReactNode;
        maxWidth?: string;
    }) {
    return <div className={`container ${maxWidth}`}>{children}</div>;
}