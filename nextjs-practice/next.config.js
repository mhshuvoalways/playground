/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false, // that means the path should work in the near future
      },
    ];
  },
};

module.exports = nextConfig;
