const million = require("million/compiler");
/** @type {import('next').NextConfig} */

let nextConfig = {};

if (process.env.NODE_ENV === "production") {
    nextConfig = {
        async redirects() {
            return [
                { source: "/", destination: "/links", permanent: false },
                { source: "/about", destination: "/links", permanent: false },
                { source: "/blog", destination: "/links", permanent: false },
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
    };
} else if (process.env.NODE_ENV === "development") {
    nextConfig = {};
}

module.exports = million.next(nextConfig, { auto: { rsc: true } });
