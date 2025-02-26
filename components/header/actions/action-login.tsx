'use client';

import {useDisclosure} from '@mantine/hooks';
import {Checkbox, Drawer, Input, Stack} from '@mantine/core';
import {IconAt, IconPassword, IconUserCircle} from "@tabler/icons-react";
import UIActionIcon from "@/components/ui/ui-action-icon";
import UIButton from "@/components/ui/ui-button";

export default function ActionLogin() {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Drawer
                position={'right'}
                offset={8}
                radius="md"
                opened={opened}
                onClose={close}
                title="Login Drawer Title"
            >
                <Stack gap={'16'}>
                    <Input type={'email'} placeholder="Your email" leftSection={<IconAt size={16}/>}/>
                    <Input type={'password'} placeholder="Your password" leftSection={<IconPassword size={16}/>}/>
                    <Checkbox
                        radius="xs"
                        defaultChecked
                        label="I agree to sell my privacy"
                    />
                    <UIButton type={'submit'} fullWidth>Login</UIButton>
                </Stack>
            </Drawer>

            <UIActionIcon
                variant="transparent"
                radius={'xl'}
                aria-label="log in"
                onClick={open}
            >
                <IconUserCircle width={'75%'} height={'75%'}/>
            </UIActionIcon>
        </>
    )
}