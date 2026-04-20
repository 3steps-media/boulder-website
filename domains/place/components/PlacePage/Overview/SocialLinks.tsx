'use client';

import {Group} from "@mantine/core";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandX,
    IconBrandYoutube,
    IconExternalLink
} from "@tabler/icons-react";
import SocialLink from "./SocialLink";
import {ACFModel} from "@/domains/place/types";

type SocialLinksProps = {
    socialLinks?: ACFModel['socialLinks'] | null;
    websiteUrl?: ACFModel['websiteUrl'];
}

export default function SocialLinks({socialLinks, websiteUrl}: SocialLinksProps) {
    return (
        <Group gap={4}>
            {socialLinks?.facebook && (
                <SocialLink href={socialLinks.facebook} icon={IconBrandFacebook}/>
            )}
            {socialLinks?.instagram && (
                <SocialLink href={socialLinks.instagram} icon={IconBrandInstagram}/>
            )}
            {socialLinks?.twitter && (
                <SocialLink href={socialLinks.twitter} icon={IconBrandX}/>
            )}
            {socialLinks?.youtube && (
                <SocialLink href={socialLinks.youtube} icon={IconBrandYoutube}/>
            )}
            {socialLinks?.tiktok && (
                <SocialLink href={socialLinks.tiktok} icon={IconBrandTiktok}/>
            )}
            {websiteUrl && (
                <SocialLink href={websiteUrl} icon={IconExternalLink}/>
            )}
        </Group>
    );
}