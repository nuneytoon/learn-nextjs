/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        allowedOrigins: [
          'csb.app',
          '*.csb.app', // wildcard does not seem to work?
          'f5zn5z-3000.csb.app', // specifically for current code-sandbox. could change
          'localhost:3000'
        ],
      },
    },
};

module.exports = nextConfig;
