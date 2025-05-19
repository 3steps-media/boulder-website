import {TypographyStylesProvider} from '@mantine/core';
import styles from './Overview.module.scss';

const dummySummary = `
    <p>Auf einer Grundfläche von derzeit 1300 m² erwartet dich alles was dein Herz</p>
    <p>Boulderfläche auf verschiedenen Ebenen von 3,00 m bis 4,50 m Wandhöhe. Von positiv geneigter Platte über gerade Wände, sanfte Überhänge, steiles Gelände bis hin zum 8,00 m ausladenden Dach des Diamants ist alles da.</p>
    <p>Über 280 Routen in verschiedenen Schwierigkeiten und wöchentlich neuen „Problemen“ bieten dir ein abwechslungsreiches und spannendes Erlebnis.</p>
`;

export default function PlaceSummary() {
    return (
        <TypographyStylesProvider>
            <div
                className={styles.summary}
                dangerouslySetInnerHTML={{__html: dummySummary}}
            />
        </TypographyStylesProvider>
    );
}
