import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.unsplash.com',
                port: '',
            },
        ],
    },
    experimental: {
        optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
};

export default nextConfig;
