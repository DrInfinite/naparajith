/** @type {import('next').NextConfig} */

let nextConfig;

if (process.env.NODE_ENV === "production") {
    nextConfig = {
        async redirects() {
            return [
                { source: "/", destination: "/links", permanent: false },
                { source: "/about", destination: "/links", permanent: false },
                // { source: "/blog", destination: "/links", permanent: false },
                {
                    source: "/collaborate",
                    destination: "/links",
                    permanent: false,
                },
                { source: "/design", destination: "/links", permanent: false },
                {
                    source: "/projects",
                    destination: "/links",
                    permanent: false,
                },
            ];
        },
        images: {
            remotePatterns: [
                {
                    protocol: "https",
                    hostname: "media.licdn.com",
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
                    protocol: "https",
                    hostname: "media.licdn.com",
                },
            ],
        },
    };
}

module.exports = nextConfig;
