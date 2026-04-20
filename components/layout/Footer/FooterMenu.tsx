import {Stack, Title} from "@mantine/core";
import {LinkAnchor} from "@/components/ui/LinkAnchor";

type FooterMenuProps = {
    title?: string;
    menu: {
        label: string;
        link: string;
    }[]
}

export default function FooterMenu(props: FooterMenuProps) {
    return (
        <>
            <Stack gap={16}>
                {
                    props.title && <Title order={4} my={0}>{props.title}</Title>
                }
                <Stack gap={8}>
                    {
                        props.menu.map((menu, index) => (
                            <LinkAnchor
                                key={index}
                                href={menu.link}
                                fz={'sm'}
                            >
                                {menu.label}
                            </LinkAnchor>
                        ))
                    }
                </Stack>
            </Stack>
        </>
    )
}