import {forwardRef} from "react";
import {Button, createPolymorphicComponent, ButtonProps} from "@mantine/core";
import styles from './ui-buttons.module.scss'

const ButtonRef = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ ...props }, ref) => {
        return <Button {...props} classNames={styles} ref={ref}/>;
    },
);

ButtonRef.displayName = "UIButton";

const UIButton = createPolymorphicComponent<"button", ButtonProps>(ButtonRef);
export default UIButton;
