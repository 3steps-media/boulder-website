"use client";

import {
    Accordion,
    ActionIcon,
    Button,
    Container,
    createTheme,
    Divider,
    Rating,
    rem,
    CSSVariablesResolver
} from "@mantine/core";

// TODO SOME STRANGE SHIT HERE
import styles from "@/components/faq/faq.module.scss";

const CONTAINER_SIZES: Record<string, number> = {
    xxs: 360,
    xs: 600,
    sm: 768,
    md: 1024,
    lg: 1200,
    xl: 1440,
    xxl: 1600,
} as const;

/**
 * Color names by HEX
 * @link https://coolors.co
 */

const PALETTE: Record<string, string> = {
    brightSnow: '#F8F8F8',
    carbonBlack: '#1D1D1D',
    charcoal: '#57575C',
    deepSpaceBlue: '#12334D',
    gunmetal: '#434343',
    oceanBlue: '#0088CC',
    platinum: '#EBEBEB',
    sunflowerGold: '#ffc655',
    turquoise: '#1FD1C1',
} as const;

/**
 * Theme color variables
 * @code var(--theme-color-COLOR)
 */
const COLORS: Record<string, string> = {
    link: PALETTE.deepSpaceBlue,
    hover: PALETTE.oceanBlue,
    heading: PALETTE.deepSpaceBlue,
    typography: PALETTE.carbonBlack,
    dimmed: PALETTE.charcoal,
    accent: PALETTE.sunflowerGold,
    amenity: PALETTE.gunmetal,
    border: PALETTE.platinum,
    bglight: PALETTE.brightSnow
} as const;

export const theme = createTheme({
    colors: {},
    fontFamily: 'Inter',
    autoContrast: true,
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
        xl: rem(25),
        xxl: rem(30)
    },
    lineHeights: {
        xs: '1',
        sm: '1.1',
        md: '1.3',
        lg: '1.5',
        xl: '1.6',
    },
    components: {
        Accordion: Accordion.extend({
            classNames: {
                root: styles.root,
                item: styles.item,
                control: styles.control,
                chevron: styles.chevron,
                label: styles.label,
                icon: styles.icon,
                itemTitle: styles.itemTitle,
                panel: styles.panel,
                content: styles.content,
            }
        }),
        ActionIcon: ActionIcon.extend({
            defaultProps: {
                autoContrast: true,
                color: 'blue',
                radius: 'xs',
                variant: 'filled',
            },
        }),
        Button: Button.extend({
            defaultProps: {
                autoContrast: true,
                color: COLORS.link,
                fw: '500',
                radius: 'sm',
                variant: 'filled'
            },
            vars: (theme, props) => {
                const BUTTON_DEFAULTS: Record<string, string> = {}
                const BUTTON_PARAMS: Record<string, { [s: string]: string }> = {
                    xl: {'--button-padding-x': '60px'},
                    lg: {'--button-padding-x': '50px'},
                    md: {
                        '--button-height': '42px',
                        '--button-padding-x': '40px',
                        '--button-fz': '16px',
                    },
                    sm: {'--button-padding-x': '30px'},
                    xs: {'--button-padding-x': '20px'}
                }
                return {
                    root: {...BUTTON_DEFAULTS, ...BUTTON_PARAMS[props.size || 'md']},
                };
            }
        }),
        Container: Container.extend({
            defaultProps: {
                size: 'xxl'
            },
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
        Divider: Divider.extend({
            defaultProps: {
                color: COLORS.border,
                orientation: "vertical"
            }
        }),
        Rating: Rating.extend({
            defaultProps: {
                color: COLORS.accent,
            },
        }),
    },
    other: {COLORS},
});

export const resolver: CSSVariablesResolver = (theme) => ({
    variables: Object.fromEntries(
        Object.entries(COLORS).map(([key, val]) => [`--theme-color-${key}`, val])
    ),
    light: {},
    dark: {},
});