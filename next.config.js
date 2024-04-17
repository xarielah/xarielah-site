const withMDX = require('@next/mdx')({ extension: /\.(md|mdx)$/ });
/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
    // Configure `pageExtensions`` to include MDX files
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
});

module.exports = nextConfig;
