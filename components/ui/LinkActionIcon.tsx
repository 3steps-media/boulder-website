'use client';

import React from "react";
import NextLink from "next/link";
import {ActionIcon, ActionIconProps} from "@mantine/core";

type LinkActionIconProps = ActionIconProps & {
    href: string;
    children: React.ReactNode;
}

export function LinkActionIcon({href, children, ...actionIconProps}: LinkActionIconProps) {

    return (
        <ActionIcon
            component={NextLink}
            href={href}
            {...actionIconProps}
        >
            {children}
        </ActionIcon>
    )
}