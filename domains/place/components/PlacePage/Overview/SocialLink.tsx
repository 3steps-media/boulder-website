'use client';

import React, {SVGAttributes} from "react";
import NextLink from "next/link";
import {ActionIcon} from "@mantine/core";

interface SocialLinkProps {
    href: string;
    icon: React.FC<SVGAttributes<SVGElement>>;
}

export default function SocialLink({href, icon: Icon}: SocialLinkProps) {
    return (
        <ActionIcon
            component={NextLink}
            href={href}
            variant={'white'}
            target={'_blank'}
        >
            <Icon width={16} height={16}/>
        </ActionIcon>
    );
}
