import {PolymorphicFactory} from "@/interfaces/PolymorphicFactory";

const defaultElement = 'h2';

type AllowedElementTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Title<C extends AllowedElementTags = typeof defaultElement>(
    {
        as,
        children,
        ...rest
    }: PolymorphicFactory<C>) {
    const Component = as || defaultElement;

    return (
        <Component {...rest}>{children}</Component>
    )
}