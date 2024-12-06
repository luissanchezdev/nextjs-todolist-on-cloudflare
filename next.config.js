/** @type {import('next').NextConfig} */
const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');


const nextConfig = {}

const cloudFlareSetupDevPlatform = async () => {
  await setupDevPlatform();
}

if (process.env.NODE_ENV === 'development') {
  cloudFlareSetupDevPlatform();
}

module.exports = nextConfig
