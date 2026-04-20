import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    //output: 'export',
    images: {
        unoptimized: process.env.NODE_ENV === 'development',
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '10022',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '10022',
            },
            {
                protocol: 'https',
                hostname: '*.krapan.net',
                port: '',
            },
            {
                protocol: 'https',
                hostname: '*.boulderingplaces.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: '*.unsplash.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: '*.icons8.com',
                port: '',
            },
        ],
    },
    experimental: {
        optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
};

export default nextConfig;
