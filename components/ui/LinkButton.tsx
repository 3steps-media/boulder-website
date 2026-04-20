'use client';

import React from "react";
import NextLink from "next/link";
import {Button, ButtonProps} from "@mantine/core";

type LinkButtonProps = ButtonProps & {
    href: string;
    children: React.ReactNode;
}

export function LinkButton({href, children, ...buttonProps}: LinkButtonProps) {

    return (
        <Button
            component={NextLink}
            href={href}
            {...buttonProps}
        >
            {children}
        </Button>
    )
}