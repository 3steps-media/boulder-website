import type {Metadata} from "next";
import {Inter, Space_Grotesk} from "next/font/google";
import "./globals.css";
import {MantineProvider, ColorSchemeScript, mantineHtmlProps} from '@mantine/core';
import {theme} from "@/theme";
import {
    APP_NAME,
    APP_DESCRIPTION,
    SERVER_URL
} from "@/lib/constants";
//import markerSDK from '@marker.io/browser';

const inter = Inter({
    variable: "--font-inter",
    subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        template: `%s | ${APP_NAME}`,
        default: APP_NAME
    },
    description: `${APP_DESCRIPTION}`,
    metadataBase: new URL(SERVER_URL)
};

// if (process.env.NEXT_ENVIRONMENT_TYPE && process.env.NEXT_ENVIRONMENT_TYPE !== 'local') {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const widget = await markerSDK.loadWidget({
//         project: '67b5e2b86ad49e9bf0d38677',
//     });
// }

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
        <head>
            <ColorSchemeScript/>
        </head>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}
