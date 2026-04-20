import {Stack, StackProps, Text} from "@mantine/core";
import AmenityIcon from "@/domains/amenities/components/AmenityIcon";
import clsx from "clsx";
import styles from "./AmenityIcon.module.css";
import {AmenityModel} from "@/domains/options/types";

type AmenityVerticalProps = StackProps & Pick<AmenityModel, 'icon' | 'name'> & {
    className?: string
}

export default function AmenityVertical(props: AmenityVerticalProps) {
    const {icon, name, className, ...rest} = props;

    return (
        <Stack className={clsx(styles.AmenityWrap, styles.AmenityVertical, className)} {...rest}>
            <AmenityIcon icon={icon} size={24}/>
            <Text>{name}</Text>
        </Stack>
    )
}