import {Group, rem} from "@mantine/core";
import ActionSearch from "./actions/ActionSearch";
import ActionMenu from "./actions/ActionMenu";
import ActionLogin from "./actions/ActionLogin";

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


