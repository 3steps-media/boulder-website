'use client';

import React from "react";
import {useWindowScroll} from '@mantine/hooks';
import {Affix, AffixProps, Box, Transition} from '@mantine/core';

type StickyBarProps = AffixProps & {
    children: React.ReactNode,
    classes?: string,
    offset?: number
}

export default function StickyBar(props: StickyBarProps) {
    const {children, classes, offset = 0, ...rest} = props;
    const [scroll] = useWindowScroll();

    return (
        <>
            <Affix {...rest}>
                <Transition transition="fade-up" mounted={scroll.y > offset}>
                    {(transitionStyles) => (
                        <Box className={classes} style={transitionStyles}>
                            {children}
                        </Box>
                    )}
                </Transition>
            </Affix>
        </>
    )
}