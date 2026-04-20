import {Stack, Title} from "@mantine/core";
import InformationItem from "@/domains/place/components/PlacePage/Information/InformationItem";

import {PlaceDetailsModel} from "@/domains/place/types";
import {
    IconBath, IconCertificate,
    IconClock,
    IconCup,
    IconInfoCircle,
    IconParking,
    IconPaw,
    IconReceiptEuro,
    IconUsers
} from "@tabler/icons-react";
import {placeUtils} from "@/domains/place/utils";
import styles from "./Information.module.css";

type InformationProps = {
    place: PlaceDetailsModel
    className?: string
}

export default function Information({place, className}: InformationProps) {
    const workingHours = placeUtils.getACFField(place, 'workingHours');
    const workingHoursString = workingHours
        ? 'von ' + workingHours.from + (workingHours.to && ' bis ' + workingHours?.to) + ' Uhr'
        : '';

    const groupSize = placeUtils.getACFField(place, 'groupSize');
    const beginnersCourses = placeUtils.getACFField(place, 'beginnersCourses');
    const importantInformation = placeUtils.getACFField(place, 'importantInformation');

    const items = [
        {title: 'Öffnungszeiten', content: workingHoursString, icon: <IconClock size={24}/>},
        {title: 'Wichtige Informationen', content: importantInformation, icon: <IconInfoCircle size={24}/>},
        {title: 'Haustiere', content: 'Keine Haustiere gestattet', icon: <IconPaw size={24}/>},
        {title: 'Catering', content: 'Bar und Restaurant vorhanden', icon: <IconCup size={24}/>},
        {title: 'Hygiene', content: 'Duschen und WC vorhanden', icon: <IconBath size={24}/>},
        {title: 'Parking', content: 'Direkt vor Ort', icon: <IconParking size={24}/>},
        {title: 'Group size', content: groupSize + ' Personen', icon: <IconUsers size={24}/>},
        {
            title: 'Einsteigerkurse',
            content: (beginnersCourses ? 'Vorhanden' : 'Keine kursen'),
            icon: <IconCertificate size={24}/>
        },
        {title: 'Payment methods', content: '', icon: <IconReceiptEuro size={24}/>},
    ]


    return (
        <Stack className={styles.InformationContainer}>
            <Title order={2}>Wichtiges auf einen Blick</Title>

            <Stack className={styles.InformationList} gap={0}>
                {items.map((item, index) => (
                    item.content && <InformationItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </Stack>

        </Stack>
    );
}