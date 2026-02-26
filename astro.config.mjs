// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'localhost',
            port: '1339',
            pathname: '/uploads/**',
        }],
    },
});
