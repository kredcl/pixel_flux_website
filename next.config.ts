import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ETags to encourage fresh fetching
  generateEtags: false,
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        // Aggressive Cache Busting for the main document to fix partial loading issues
        // We exclude _next to allow static assets to be cached (they have hashes)
        source: '/((?!_next|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
          {
            key: 'Surrogate-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
