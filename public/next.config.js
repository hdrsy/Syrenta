/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "ddaporsox",
    GOOGLE_MAPS_API_KEY: "AIzaSyAQqGaYBImwBfEwNfZEDkHDbOaJW7Pofrs",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
