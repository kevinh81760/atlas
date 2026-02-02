import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/__webpack_hmr',
        destination: '/api/webpack-hmr-handler',
      },
    ];
  },
};

export default nextConfig;
