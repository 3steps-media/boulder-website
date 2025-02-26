// Mantine
import {
    ActionIcon, Center,
    Divider,
    Drawer,
    SegmentedControl,
    Slider,
    Stack,
    Switch,
    Text,
    VisuallyHidden
} from "@mantine/core";

// Hooks
import {useDisclosure} from '@mantine/hooks';

// Icons
import {
    IconBoxAlignBottomFilled, IconBoxAlignLeftFilled, IconBoxAlignRightFilled,
    IconBoxAlignTopFilled,
    IconSettings, IconSquareRoundedNumber5Filled, IconStar
} from "@tabler/icons-react";

// Interfaces & Types
import {PlaceData} from "@/interfaces/settings/place";

type PlaceCardSettingsProps = {
    data: PlaceData;
    onChangePlaceData: (param: string, value: string | number | boolean | object) => void;
}

export default function PlaceCardSettings(props: PlaceCardSettingsProps) {

    const [opened, {open, close}] = useDisclosure(false);

    function handleRatio(value: string | number) {
        props.onChangePlaceData('Ratio', value)
    }

    function handleTitleHeight(value: number) {
        props.onChangePlaceData('TitleHeight', value)
    }

    function handleAlignment(value: string) {
        props.onChangePlaceData('MetaAlignment', value)
    }

    function handleToggle(param: string, value: boolean) {
        props.onChangePlaceData(param, value);
    }

    function handleRating(param: string, value: string) {
        const data = props.data.Rating;
        data[param] = value;
        props.onChangePlaceData('Rating', data)
    }

    return (
        <>

            <ActionIcon
                variant={"default"}
                size={'lg'}
                onClick={open}
                aria-label="Place Card Settings"
            >
                <IconSettings size="24"/>
            </ActionIcon>

            <Drawer
                position="right"
                offset={8}
                radius="md"
                size="md"
                opened={opened}
                onClose={close}
                title="Place Card Settings"
                overlayProps={{backgroundOpacity: 0.1}}
            >

                <Stack gap={16}>
                    <Stack gap={8}>
                        <Text fw={500}>
                            Image aspect-ratio
                        </Text>
                        <SegmentedControl
                            fullWidth
                            value={props.data.Ratio}
                            onChange={handleRatio}
                            data={[
                                {label: 'Square', value: 'square'},
                                {label: 'Design', value: 'design'},
                                {label: 'Third', value: 'third'},
                                {label: 'Golden', value: 'golden'},
                                {label: 'Half', value: 'half'},
                            ]}
                        />
                    </Stack>

                    <Stack gap={8}>
                        <Text>
                            Title lines
                        </Text>
                        <Slider
                            defaultValue={1}
                            min={1}
                            max={3}
                            step={1}
                            label={(value) => value + ' ' + (value > 1 ? 'lines' : 'line')}
                            marks={
                                [
                                    {value: 1, label: '1 line'},
                                    {value: 2, label: '2 lines'},
                                    {value: 3, label: '3 lines'}
                                ]
                            }
                            styles={{markLabel: {display: 'none'}}}
                            onChange={handleTitleHeight}
                        />
                    </Stack>

                    <Switch
                        mt={8}
                        label={'Info'}
                        onLabel="ON"
                        offLabel="OFF"
                        size={'md'}
                        checked={props.data.Info}
                        onChange={() => handleToggle('Info', !props.data.Info)}
                    />

                    <Switch
                        label={'Services'}
                        onLabel="ON"
                        offLabel="OFF"
                        size={'md'}
                        checked={props.data.Services}
                        onChange={() => handleToggle('Services', !props.data.Services)}
                    />

                    <Divider
                        mt={16}
                        label="Meta (Location & Rating)"
                        labelPosition="left"
                    />

                    <Switch
                        label={'Show above Image'}
                        onLabel="ON"
                        offLabel="OFF"
                        size={'md'}
                        checked={props.data.MetaPosition}
                        onChange={() => handleToggle('MetaPosition', !props.data.MetaPosition)}
                    />

                    {props.data.MetaPosition && (
                        <>
                            <Stack gap={8} mt={32}>
                                <Text fw={500}>
                                    Alignment
                                </Text>
                                <SegmentedControl
                                    fullWidth
                                    value={props.data.MetaAlignment}
                                    onChange={handleAlignment}
                                    data={[
                                        {
                                            value: 'top',
                                            label: (
                                                <>
                                                    <IconBoxAlignTopFilled/>
                                                    <VisuallyHidden>Top</VisuallyHidden>
                                                </>
                                            )
                                        },
                                        {
                                            value: 'bottom',
                                            label: (
                                                <>
                                                    <IconBoxAlignBottomFilled/>
                                                    <VisuallyHidden>Bottom</VisuallyHidden>
                                                </>
                                            )
                                        },
                                        {
                                            value: 'left',
                                            label: (
                                                <>
                                                    <IconBoxAlignLeftFilled/>
                                                    <VisuallyHidden>Left</VisuallyHidden>
                                                </>
                                            )
                                        },
                                        {
                                            value: 'right',
                                            label: (
                                                <>
                                                    <IconBoxAlignRightFilled/>
                                                    <VisuallyHidden>Right</VisuallyHidden>
                                                </>
                                            )
                                        }
                                    ]}
                                />
                            </Stack>

                            <Switch
                                mt={16}
                                label={'Items reverse order'}
                                onLabel="ON"
                                offLabel="OFF"
                                size={'md'}
                                checked={props.data.MetaOrder}
                                onChange={(event) => handleToggle('MetaOrder', event.currentTarget.checked)}
                            />

                            <Stack gap={8} mt={16}>
                                <Text fw={500}>
                                    Rating Type
                                </Text>
                                <SegmentedControl
                                    fullWidth
                                    value={props.data.Rating.Type}
                                    onChange={(value) => handleRating('Type', value)}
                                    data={[
                                        {
                                            value: 'stars',
                                            label: (
                                                <Center style={{gap: 10}}>
                                                    <IconStar/>
                                                    <span>Stars</span>
                                                </Center>
                                            )
                                        },
                                        {
                                            value: 'numbers',
                                            label: (
                                                <Center style={{gap: 10}}>
                                                    <IconSquareRoundedNumber5Filled/>
                                                    <span>Number</span>
                                                </Center>
                                            )
                                        },
                                    ]}
                                />
                            </Stack>
                        </>
                    )}
                </Stack>
            </Drawer>

        </>
    )
}