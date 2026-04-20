import React from "react";
import {ThemeIcon} from "@mantine/core";

type IconProps = {
    children: React.ReactNode,
    className?: string
}

export default function Icon({children, className}: IconProps) {
    return (
        <ThemeIcon
            variant={'white'}
            size={54}
            className={className}
        >
            {children}
        </ThemeIcon>
    )
}