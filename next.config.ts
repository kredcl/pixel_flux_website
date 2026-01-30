import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Align with standard web server routing (often fixes asset 404s on hosting providers)
  trailingSlash: true,

  // Disable ETags to encourage fresh fetching
  generateEtags: false,
};

export default nextConfig;
