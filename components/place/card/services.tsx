import {
    Group,
    ThemeIcon,
    Tooltip
} from "@mantine/core";
import {
    IconBabyCarriage, IconBike,
    IconDirections,
    IconDisabled2,
    IconMug,
    IconSmokingNo,
    IconToolsKitchen3, IconTrophy
} from "@tabler/icons-react";

type PlaceServicesProps = {
    services?: (number)[]
}


export default function PlaceServices(props: PlaceServicesProps) {

    const servicesList = [
        {
            icon: <IconBabyCarriage/>,
            text: "Room for children"
        },
        {
            icon: <IconDisabled2/>,
            text: "Service for disabled"
        },
        {
            icon: <IconSmokingNo/>,
            text: "No smoking area"
        },
        {
            icon: <IconToolsKitchen3/>,
            text: "Food area"
        },
        {
            icon: <IconMug/>,
            text: "Coffee to go"
        },
        {
            icon: <IconDirections/>,
            text: "Directions"
        },
        {
            icon: <IconBike/>,
            text: "Harish detected"
        },
        {
            icon: <IconTrophy/>,
            text: "Top Anbieter im Kreis Eislingen"
        },
    ]

    return (
        <Group mt={16} gap={11} justify={'flex-start'}>

            {props.services && props.services.map(service => (
                <Tooltip
                    key={service}
                    label={servicesList[service].text}
                >
                    <ThemeIcon
                        size={36}
                        variant="light"
                    >
                        {servicesList[service].icon}
                    </ThemeIcon>
                </Tooltip>
            ))}
        </Group>
    )
}