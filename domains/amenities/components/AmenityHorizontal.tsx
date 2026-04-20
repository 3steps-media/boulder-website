import {Flex, FlexProps, Text} from "@mantine/core";
import AmenityIcon from "@/domains/amenities/components/AmenityIcon";
import clsx from "clsx";
import styles from "./AmenityIcon.module.css";
import {AmenityModel} from "@/domains/options/types";

type AmenityHorizontalProps = FlexProps & Pick<AmenityModel, 'icon' | 'name'> & {
    className?: string
}

export default function AmenityHorizontal(props: AmenityHorizontalProps) {
    const {icon, name, className, ...rest} = props;

    return (
        <Flex className={clsx(styles.AmenityWrap, styles.AmenityHorizontal, className)} {...rest}>
            <AmenityIcon icon={icon} size={24}/>
            <Text lh={1}>{name}</Text>
        </Flex>
    )
}