import {Container, Flex, Loader} from "@mantine/core";

export default function LoadingPage() {
    return (
        <>
            <Container>
                <Flex
                    mih={'100vh'}
                    miw={'100%'}
                    align={'center'}
                    justify={'center'}
                >
                    <Loader color={'tertiary'} size={64}/>
                </Flex>
            </Container>
        </>
    )
}