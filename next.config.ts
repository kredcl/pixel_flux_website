import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ETags to encourage fresh fetching
  generateEtags: false,

  // Force a unique build ID to invalidate caches
  generateBuildId: async () => {
    return 'v16-build-' + Date.now();
  },

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
        // Aggressive Cache Busting for the main document
        source: '/((?!_next|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
