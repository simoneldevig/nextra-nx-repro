//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins } = require('@nx/next');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNextra,
];

module.exports = composePlugins(...plugins)(nextConfig);
