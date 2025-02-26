import styles from "./header.module.scss"
import {
    Container,
    Flex,
} from "@mantine/core";

import Nav from "@/components/nav";
import Logo from "@/components/logo";
import HeaderActions from "./header-actions";
import {DummyNavigation} from "@/_data/navigation";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Container>
                    <div className={styles.inner}>

                        <Flex className={styles.logo}>
                            <Logo isLink/>
                        </Flex>

                        <Nav
                            className={styles.menu}
                            items={DummyNavigation}
                        />

                        <HeaderActions styles={styles.actions}/>

                    </div>
                </Container>
            </header>
        </>
    )
}
