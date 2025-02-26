import {Group, rem} from "@mantine/core";
import ActionSearch from "./actions/action-search";
import ActionMenu from "./actions/action-menu";
import ActionLogin from "./actions/action-login";

type Props = {
    styles: string;
}

export default function HeaderActions(props: Props) {
    return (
        <Group
            justify="flex-end"
            align="center"
            className={props.styles}>

            <ActionSearch/>

            <Group
                justify="flex-end"
                align="center"
                gap={rem(4)}
            >
                <ActionMenu/>
                <ActionLogin/>
            </Group>
        </Group>
    )
}


