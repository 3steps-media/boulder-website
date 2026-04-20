import React from "react";
import {
    IconArmchair,
    IconAvocado,
    IconBabyCarriage,
    IconBarbell,
    IconBath,
    IconBus,
    IconCertificate,
    IconCheck, IconCup, IconGridDots,
    IconHanger,
    IconLock,
    IconParking, IconTreadmill,
    IconWheelchair
} from "@tabler/icons-react";

type IconProps = {
    className?: string;
    width?: number;
    height?: number;
}
type AmenityIconProps = {
    icon?: string;
    className?: string;
    size?: number;
}

export default function AmenityIcon({icon, className, size}: AmenityIconProps) {
    const icons: Record<string, React.ComponentType<IconProps>> = {
        gym: IconBarbell,
        children: IconBabyCarriage,
        courses: IconCertificate,
        showers: IconBath,
        changing_rooms: IconHanger,
        lockers: IconLock,
        barrier_free: IconWheelchair,
        food: IconAvocado,
        free_parking: IconParking,
        public_transportation: IconBus,
        training: IconTreadmill,
        comfort: IconArmchair,
        beverages: IconCup,
        other: IconGridDots,
        default: IconCheck
    };

    const Icon = (icon && icons[icon]) ? icons[icon] : icons.default

    return <Icon className={className} width={size} height={size}/>
}