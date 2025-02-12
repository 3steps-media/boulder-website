import {Button, Container, Flex, Stack, Title, Text} from "@mantine/core";
import Link from "next/link";
import {IconArrowRight} from '@tabler/icons-react'

export default function NotFoundPage() {
    return (
        <Container>
            <Flex
                mih={'100vh'}
                miw={'100%'}
                align={'center'}
                justify={'flex-start'}
            >
                <Stack
                    align={'flex-start'}
                    justify={'center'}
                    maw={'40rem'}
                >
                    <Title>Error 404 <br/> Page Not Found!</Title>
                    <Text>
                        Page you are trying to open does not exist.<br/>
                        You may have mistyped the address, or the page has been moved to another URL.<br/>
                        If you think this is an error contact support.
                    </Text>
                    <Button
                        size="md"
                        component={Link}
                        href={'/'}
                        mt={'lg'}
                        rightSection={<IconArrowRight size={16}/>}
                    >
                        Take me back to home page
                    </Button>
                </Stack>
            </Flex>
        </Container>
    )
}