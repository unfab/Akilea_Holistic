import type { NextConfig } from "next";

// No CSP on purpose: inline JSON-LD, Web3Forms and MailerLite would break.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // The Turbopack build cache stores env values (incl. STRIPE_SECRET_KEY) on
    // disk, which Netlify's secrets scan rejects. Builds take ~10 s without it.
    turbopackFileSystemCacheForBuild: false,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
