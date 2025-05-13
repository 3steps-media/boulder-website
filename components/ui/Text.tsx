import {ElementType} from "react";
import {PolymorphicFactory} from "@/interfaces/PolymorphicFactory";

const defaultElement = 'p';

export default function Text<C extends ElementType = typeof defaultElement>(
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