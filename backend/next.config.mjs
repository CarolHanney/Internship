import { withPayload } from '@payloadcms/next/withPayload';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add an alias for Payload's config
    config.resolve.alias['@payload-config'] = path.resolve('./src/payload.config.js');
    return config;
  },
  env: {
    PAYLOAD_PUBLIC_URL: process.env.PAYLOAD_PUBLIC_URL || 'http://localhost:3000',
  },
};

export default withPayload(nextConfig);
