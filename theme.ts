"use client";

import {
    Container,
    Button,
    createTheme,
    rem, ActionIcon, Rating, Accordion
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
};

export const theme = createTheme({
    colors: {
        yellow: [
            '#ffeed0',
            '#ffdb88',
            '#ffc655', // yellow.2
            '#ffaa20',
            '#f98707',
            '#dd6102',
            '#b74106',
            '#94310c',
            '#7a2a0d',
            '#461302',
            '#442e00',
        ],
        blue: [
            '#dcf5ff',
            '#b2edff',
            '#6de2ff',
            '#20d3ff',
            '#00beff',
            '#0099df',
            '#0079b4',
            '#006795',
            '#00547a',
            '#00344f', // blue.9
        ],
        green: [
            '#c9fef5',
            '#93fcec',
            '#55f3e0',
            '#1fd1c1', // green.3
            '#0ac2b5',
            '#059c94',
            '#097c77',
            '#0c6360',
            '#0f524f',
            '#013132',
        ],
    },
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
        ActionIcon: ActionIcon.extend({
            defaultProps: {
                autoContrast: true,
                color: 'blue',
                radius: 'xs',
                variant: 'filled',
            },
        }),
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
        Button: Button.extend({
            defaultProps: {
                autoContrast: true,
                color: 'blue',
                fw: '500',
                radius: 'sm',
                variant: 'filled',
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
        Rating: Rating.extend({
            defaultProps: {
                color: 'yellow.2'
            },
        }),
    }
});