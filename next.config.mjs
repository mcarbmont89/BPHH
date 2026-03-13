/** @type {import('next').NextConfig} */
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL
const cms = cmsUrl ? new URL(cmsUrl) : null

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      ...(cms
        ? [
            {
              protocol: cms.protocol.replace(":", ""), // "http" | "https"
              hostname: cms.hostname,
              port: cms.port || "",
              pathname: "/**",
            },
          ]
        : []),

      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
