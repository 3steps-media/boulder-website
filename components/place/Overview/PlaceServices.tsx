import {Group, Stack, Text} from "@mantine/core";
import React from "react";
import {IconBike, IconStack2, IconToolsKitchen3} from "@tabler/icons-react";

type PlaceService  ={
    icon: React.ReactNode;
    feature: string
}

const dummyServices: PlaceService[] = [{
    icon: <IconBike/>,
    feature: 'Gruppengröße',
},
    {
        icon: <IconStack2/>,
        feature: "Kletterfläche"
    },
    {
        icon: <IconToolsKitchen3/>,
        feature: "Restaurant"
    },
    {
        icon: <IconStack2/>,
        feature: "Stack"
    }];


export default function PlaceServices() {
  return (
      <Group gap={60} my={48}>
          {
              dummyServices.map((item: PlaceService, index: number) => (
                  <Stack
                      key={index}
                      align={'flex-start'}
                      gap={8}
                  >
                      {item.icon}
                      <Text size={'xs'}>{item.feature}</Text>
                  </Stack>
              ))
          }
      </Group>
  );
}
