/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits .next/standalone with a self-contained server.js, which the
  // production Dockerfile copies instead of shipping node_modules.
  output: 'standalone',
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'backend.alchemyserv.com',
  //       port: '',
  //     },
  //   ],
  // },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
