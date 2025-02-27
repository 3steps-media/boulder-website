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
import MarkerIO from "@/components/marker-io";

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

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
        <head>
            <ColorSchemeScript/>
        </head>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <MantineProvider theme={theme}>
            {children}
            {process.env.MARKER_IO_PROJECT_KEY && <MarkerIO projectKey={process.env.MARKER_IO_PROJECT_KEY}/>}
        </MantineProvider>
        </body>
        </html>
    );
}
