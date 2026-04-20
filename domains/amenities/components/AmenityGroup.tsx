import {AmenityGroupModel} from "@/domains/options/types";
import {Flex, Stack, Title} from "@mantine/core";
import AmenityHorizontal from "@/domains/amenities/components/AmenityHorizontal";
import AmenityIcon from "@/domains/amenities/components/AmenityIcon";

type AmenityGroupProps = Omit<AmenityGroupModel, "id">;
export default function AmenityGroup({name, icon, amenities}: AmenityGroupProps) {
    return (
        <Stack gap={24}>

            <Flex align="center" gap={16}>
                <AmenityIcon icon={icon} size={24}/>
                <Title order={3} size={20}>{name}</Title>
            </Flex>

            <Stack gap={12}>
                {amenities.map((amenity) => (
                    <AmenityHorizontal
                        key={amenity.id}
                        icon={'check'}
                        name={amenity.name}
                        gap={16}
                    />
                ))}
            </Stack>

        </Stack>
    )
}