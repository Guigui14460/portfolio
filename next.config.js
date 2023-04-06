/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src 'self';
  style-src 'self';
  font-src 'self' fonts.gstatic.com;
`

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  { // https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Feature-Policy, https://www.justegeek.fr/mettre-en-place-permissions-policy-len-tete-http-qui-remplace-le-feature-policy/
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  // },
]

const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },

  // https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },

  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    // removeConsole: {
    //   exclude: ["error"],
    // },
    reactRemoveProperties: { properties: ['^data-testid$'] },
  },
  env: {
    SITE_URL: "https://guillaume-letellier.com",
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    disableStaticImages: false
  },
  productionBrowserSourceMaps: true,
  swcMinify: true,

  experimental: {
    legacyBrowsers: false,
  },
}
  
module.exports = nextConfig
