const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'react-router-url',
    tagline: 'Lighter React Router',
    url: 'https://react-router-url.simonboisset.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'simonboisset',
    projectName: 'react-router-url',

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/simonboisset/react-router-url/doc',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl: 'https://github.com/simonboisset/react-router-url/doc/blog/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Home',
          logo: {
            alt: 'Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'guide/intro',
              position: 'left',
              label: 'Docs',
            },
            // {
            //   type: 'doc',
            //   docId: 'api/intro',
            //   position: 'left',
            //   label: 'Api',
            // },
            // { to: '/blog', label: 'Blog', position: 'left' },
            // {
            //   type: 'dropdown',
            //   label: 'Community',
            //   position: 'right',
            //   items: [
            //     {
            //       label: 'Facebook',
            //       href: 'https://www.facebook.com',
            //     },
            //     {
            //       label: 'Facebook',
            //       href: 'https://www.facebook.com',
            //     },
            //     {
            //       label: 'Facebook',
            //       href: 'https://www.facebook.com',
            //     },
            //   ],
            // },
            {
              href: 'https://github.com/simonboisset/react-router-url',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Guide',
                  to: '/docs/guide/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Simon Boisset',
                  href: 'https://github.com/simonboisset',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/simonboisset/react-router-url',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} simonboisset, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
