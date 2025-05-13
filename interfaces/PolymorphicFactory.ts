import {ComponentPropsWithoutRef, ElementType, PropsWithChildren} from "react";

type ComponentProps<C> = {
    as?: C;
};
type PropsToOmit<C extends ElementType, P> = keyof (ComponentProps<C> & P);

export type PolymorphicFactory<C extends ElementType, Props = object> =
    PropsWithChildren<Props & ComponentProps<C>>
    & Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;