'use client';

import {useDisclosure} from '@mantine/hooks';
import {Drawer, NavLink} from '@mantine/core';
import {IconHome, IconMenu2, IconLayoutGrid, IconMapPin} from "@tabler/icons-react";
import UIActionIcon from "@/components/ui/ui-action-icon";

export default function ActionMenu() {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Drawer
                position={'right'}
                offset={8}
                radius="md"
                opened={opened}
                onClose={close}
                title="Menu Drawer Title"
            >


                <NavLink
                    href="/"
                    label="Home"
                    leftSection={<IconHome />}
                />
                <NavLink
                    href="/"
                    label="Places"
                    description="Additional information"
                    leftSection={<IconLayoutGrid />}
                    childrenOffset={28}
                    defaultOpened
                >
                    <NavLink
                        href="/hallen/place-1"
                        label="Place 1"
                        leftSection={<IconMapPin />}
                    />
                    <NavLink
                        href="/hallen/place-2"
                        label="Place 2"
                        leftSection={<IconMapPin />}
                    />
                    <NavLink
                        href="/hallen/place-3"
                        label="Place 3"
                        leftSection={<IconMapPin />}
                    />
                </NavLink>


            </Drawer>

            <UIActionIcon
                variant="transparent"
                radius={'xl'}
                aria-label="log in"
                onClick={open}
            >
                <IconMenu2 width={'70%'} height={'70%'}/>
            </UIActionIcon>
        </>
    )
}