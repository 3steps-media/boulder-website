import styles from './heading.module.scss';

// Define the props interface with a generic HeadingLevel type
interface HeadingProps<T extends React.ElementType> {
    as?: T
    children: React.ReactNode
    className?: string
}

export default function Heading<T extends React.ElementType = 'h2'>(
    {
        as,
        children,
        className,
        ...props
    }: HeadingProps<T> & React.ComponentProps<T>) {
    // Use the provided tag or default to h2
    const Tag = as || 'h2'

    return (
        <Tag
            className={`${styles.heading} ${className || ''}`}
            {...props}
        >
            {children}
        </Tag>
    )
}