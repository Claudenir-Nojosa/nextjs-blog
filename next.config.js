/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Claudenir-Nojosa/**",
      },
    ],
  },
};

module.exports = nextConfig;
