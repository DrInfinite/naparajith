// eslint-disable-next-line @typescript-eslint/no-var-requires
const million = require('million/compiler');

let nextConfig;

/** @type {import('next').NextConfig} */
if (process.env.NODE_ENV === 'production') {
    nextConfig = {
        async redirects() {
            return [
                { source: '/', destination: '/links', permanent: false },
                { source: '/about', destination: '/links', permanent: false },
                // { source: "/blog", destination: "/links", permanent: false },
                {
                    source: '/collaborate',
                    destination: '/links',
                    permanent: false,
                },
                { source: '/design', destination: '/links', permanent: false },
                {
                    source: '/projects',
                    destination: '/links',
                    permanent: false,
                },
            ];
        },
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'media.licdn.com',
                },
                {
                    protocol: 'https',
                    hostname: 'avatars.githubusercontent.com',
                },
            ],
        },
        logging: { fetches: { fullUrl: false } },
    };
} else {
    nextConfig = {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'media.licdn.com',
                },
                {
                    protocol: 'https',
                    hostname: 'avatars.githubusercontent.com',
                },
            ],
        },
    };
}

module.exports = million.next(nextConfig, { auto: true });
