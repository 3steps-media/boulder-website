import {AmenityGroupModel, AmenityModel} from "@/domains/options/types";
import {Flex, Stack, Title} from "@mantine/core";
import AmenityGroup from "@/domains/amenities/components/AmenityGroup";
import AmenityHorizontal from "@/domains/amenities/components/AmenityHorizontal";
import styles from "./Amenities.module.css";

type AmenitiesProps = {
    important: AmenityModel[],
    grouped: AmenityGroupModel[]
}

export default function Amenities({important, grouped}: AmenitiesProps) {
    return (
        <Stack className={styles.Amenities}>

            <Title order={2} size={'h2'}>Beliebteste Ausstattungen</Title>

            {important && important.length > 0 &&
                <Stack className={styles.ImportantAmenities}>
                    <Title order={3} size={20}>Ausstattung</Title>
                    <Flex
                        columnGap={48}
                        rowGap={20}
                        wrap="wrap"
                    >
                        {important.map(amenity => (
                            <AmenityHorizontal
                                key={amenity.id}
                                icon={amenity.icon}
                                name={amenity.name}
                            />
                        ))}
                    </Flex>
                </Stack>
            }

            {grouped && grouped.length > 0 &&
                <Flex className={styles.GroupedAmenities}>
                    {grouped.map((group, index) => (
                        <AmenityGroup
                            key={group.id}
                            icon={group.icon}
                            name={group.name}
                            amenities={group.amenities}
                        />
                    ))}
                </Flex>
            }

        </Stack>
    )
}