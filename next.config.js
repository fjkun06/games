/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stage.whgstage.com",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/new",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
