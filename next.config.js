/** @type {import('next').NextConfig} */
const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');


const nextConfig = {
  // Habilitar el output standalone para Cloudflare
  output: 'standalone',
  
  // Configurar el runtime de Edge
  experimental: {
  }
}


const cloudFlareSetupDevPlatform = async () => {
  await setupDevPlatform();
}

if (process.env.NODE_ENV === 'development') {
  cloudFlareSetupDevPlatform();
}

module.exports = nextConfig
