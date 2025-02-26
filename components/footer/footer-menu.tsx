import {Box, Stack, Title} from "@mantine/core";
import NextLink from "next/link";

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
                            <Box
                                key={index}
                                component={NextLink}
                                href={menu.link}
                                fz={'sm'}
                            >
                                {menu.label}
                            </Box>
                        ))
                    }
                </Stack>
            </Stack>
        </>
    )
}