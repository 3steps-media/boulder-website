// TODO TypographyStylesProvider
// https://mantine.dev/core/typography-styles-provider/

import {Text, Title} from "@mantine/core";
import React from "react";

export default function HalleContent() {
    return (
        <>
            <Title order={2} size={'40px'}>Beschreibung</Title>
            <Text fw={300} lh={1.5} mb={24}>
                Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz begehrt:
            </Text>
            <Text fw={300} lh={1.5} mb={24}>
                Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe. Von positiv
                geneigter Platte über gerade Wände, sanfte Überhänge, steiles Gelände bis hin zum
                8,00 m ausladenden Dach des Diamants ist alles da.
            </Text>
            <Text fw={300} lh={1.5} mb={24}>
                Über 280 Routen in verschiedenen Schwierigkeiten und wöchentlich neuen „Problemen“
                bieten dir ein abwechslungsreiches und spannendes Erlebnis.
            </Text>
        </>
    )
}