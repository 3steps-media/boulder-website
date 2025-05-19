'use client';

import React from "react";
import {useWindowScroll} from '@mantine/hooks';
import {Affix, Box, Transition} from '@mantine/core';

export default function HalleStickyBar({children, classes}: { children: React.ReactNode, classes: string }) {

    const [scroll] = useWindowScroll();

    return (
        <>
            <Affix position={{bottom: 20, left: 20, right: 20}}>
                <Transition transition="fade-up" mounted={scroll.y > 1200}>
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