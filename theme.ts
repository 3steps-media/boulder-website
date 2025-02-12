"use client";

import {
    Container,
    createTheme,
    px,
    em,
    rem
} from "@mantine/core";

// https://mantine.dev/theming/colors/#add-custom-colors-types

import {
    DefaultMantineColor,
    MantineColorsTuple,
} from '@mantine/core';

type ExtendedCustomColors =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | DefaultMantineColor;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}

// end add-custom-colors-types

const CONTAINER_SIZES: Record<string, number> = {
    xxs: 360,
    xs: 600,
    sm: 768,
    md: 1024,
    lg: 1200,
    xl: 1440,
    xxl: 1600,
};

export const theme = createTheme({
    white: 'var(--mantine-color-gray-0)',
    colors: {
        primary: [
            '#fff9eb',
            '#ffeec6',
            '#ffdb88',
            '#ffc655',
            '#ffaa20',
            '#f98707',
            '#dd6102',
            '#b74106',
            '#94310c',
            '#7a2a0d',
            '#461302',
        ],
        secondary: [
            '#eefaff',
            '#dcf5ff',
            '#b2edff',
            '#6de2ff',
            '#20d3ff',
            '#00beff',
            '#0099df',
            '#0079b4',
            '#006795',
            '#00547a',
            '#00344f',
        ],
        tertiary: [
            '#effefb',
            '#c9fef5',
            '#93fcec',
            '#55f3e1',
            '#1fd1c2',
            '#0ac2b6',
            '#059c95',
            '#097c78',
            '#0c6361',
            '#0f5250',
            '#013132',
        ],
    },
    fontFamily: 'Inter',
    headings: {
        fontFamily: 'Space Grotesk',
        fontWeight: '600',
        sizes: {
            h1: {
                fontSize: rem(60),
                lineHeight: rem(68)
            },
            h2: {
                fontSize: rem(38),
                lineHeight: rem(46)
            },
            h3: {
                fontSize: rem(24),
                lineHeight: rem(32)
            }
        }
    },
    radius: {
        xs: rem(5),
        sm: rem(10),
        md: rem(15),
        lg: rem(20),
        xl: rem(25)
    },
    lineHeights: {
        xs: '1',
        sm: '1.1',
        md: '1.3',
        lg: '1.5',
        xl: '1.6',
    },
    components: {
        Container: Container.extend({
            vars: (_, {size, fluid}) => ({
                root: {
                    '--container-size': fluid
                        ? '100%'
                        : size !== undefined && size in CONTAINER_SIZES
                            ? rem(CONTAINER_SIZES[size])
                            : rem(size),
                },
            }),
        }),
    }
});