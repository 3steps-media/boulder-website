import {forwardRef} from "react";
import {ActionIcon, createPolymorphicComponent, ActionIconProps} from "@mantine/core";
import styles from './ui-action-icon.module.scss'

const ButtonRef = forwardRef<HTMLButtonElement, ActionIconProps>(
    ({...props}, ref) => {
        return <ActionIcon {...props} classNames={styles} ref={ref}/>;
    },
);

ButtonRef.displayName = "UIActionIcon";

const UIActionIcon = createPolymorphicComponent<"button", ActionIconProps>(ButtonRef);
export default UIActionIcon;
