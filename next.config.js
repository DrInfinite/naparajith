const million = require('million/compiler');
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/links", permanent: false },
      { source: "/about", destination: "/links", permanent: false },
      { source: "/blog", destination: "/links", permanent: false },
      { source: "/collaborate", destination: "/links", permanent: false },
      { source: "/design", destination: "/links", permanent: false },
      { source: "/projects", destination: "/links", permanent: false },
    ];
  },
};

module.exports = million.next(
  nextConfig, { auto: { rsc: true } }
);
