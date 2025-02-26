import type {Metadata} from "next";
import HeroInner from "@/components/hero-inner/heroInner";
import {Container, Group, Stack, rem} from "@mantine/core";
import Header from "@/components/header";
import UIButton from "@/components/ui/ui-button";
import {IconUserCircle} from "@tabler/icons-react";
import Link from "next/link";

export default function UI() {
    const icon = <IconUserCircle size={16}/>;
    return (
        <>
            <Header/>
            <HeroInner title={'UI'}/>

            <Container
                size={'xl'}
                py={rem(32)}
            >
                <Stack gap={rem(32)} mt={rem(32)}>

                    <Group justify={'center'}>
                        <UIButton size={'xs'} component={Link} href={'#'} rightSection={icon}>UIButton</UIButton>
                        <UIButton size={'sm'} leftSection={icon}>UIButton</UIButton>
                        <UIButton size={'md'} leftSection={icon}>UIButton</UIButton>
                        <UIButton size={'lg'} leftSection={icon}>UIButton</UIButton>
                        <UIButton size={'xl'} leftSection={icon}>UIButton</UIButton>
                    </Group>

                    <Group justify={'center'}>
                        <UIButton fullWidth>UIButton</UIButton>
                    </Group>

                    <Group justify={'center'}>
                        <UIButton size={'sm'}>UIButton</UIButton>
                        <UIButton size={'sm'} variant={'outline'}>UIButton outline</UIButton>
                        <UIButton size={'sm'} variant={'default'}>UIButton default</UIButton>
                        <UIButton size={'sm'} variant={'subtle'}>UIButton subtle</UIButton>
                        <UIButton size={'sm'} variant={'transparent'}>UIButton transparent</UIButton>
                        <UIButton size={'sm'} variant={'filled'}>UIButton filled</UIButton>
                        <UIButton size={'sm'} variant={'white'}>UIButton white</UIButton>
                    </Group>

                    <Group justify={'center'}>
                        <UIButton size={'sm'} data-style={'secondary'}>UIButton Secondary</UIButton>
                        <UIButton size={'sm'} variant={'outline'} data-style={'secondary'}>UIButton outline</UIButton>
                        <UIButton size={'sm'} variant={'default'} data-style={'secondary'}>UIButton default</UIButton>
                        <UIButton size={'sm'} variant={'subtle'} data-style={'secondary'}>UIButton subtle</UIButton>
                        <UIButton size={'sm'} variant={'transparent'} data-style={'secondary'}>UIButton
                            transparent</UIButton>
                        <UIButton size={'sm'} variant={'filled'} data-style={'secondary'}>UIButton filled</UIButton>
                        <UIButton size={'sm'} variant={'white'} data-style={'secondary'}>UIButton white</UIButton>
                    </Group>

                </Stack>

            </Container>
        </>
    )
}

export const metadata: Metadata = {
    title: "Hallen Page Example",
    description: "Some page SEO description",
};