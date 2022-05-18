/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    INFURA_URL: process.env.INFURA_URL,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS
  }
}

module.exports = nextConfig
