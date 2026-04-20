'use client';

import React from "react";
import NextLink from "next/link";
import {Anchor, AnchorProps} from "@mantine/core";

type LinkAnchorProps = AnchorProps & {
    href: string;
    children: React.ReactNode;
}

export function LinkAnchor({href, children, ...buttonProps}: LinkAnchorProps) {

    return (
        <Anchor
            component={NextLink}
            href={href}
            {...buttonProps}
        >
            {children}
        </Anchor>
    )
}