const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tributech DataSpace Kit Documentation',
  tagline: 'Technology for trusted DataSpaces',
  url: 'https://docs.tributech.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'tributech-solutions',
  projectName: 'tributech-dsk-docs',
  themeConfig: {
    navbar: {
      title: 'Tributech DSK Documentation',
      logo: {
        alt: 'Tributech Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          href: '/docs/introduction/overview',
          position: 'left',
          label: 'Introduction',
        },
        {
          href: '/docs/setup/overview',
          position: 'left',
          label: 'Setup',
        },
        {
          href: '/docs/provide_data/overview',
          position: 'left',
          label: 'Provide Data',
        },
        {
          href: '/docs/consume_data/overview',
          position: 'left',
          label: 'Consume Data',
        },
        {
          href: '/docs/verify_data/overview',
          position: 'left',
          label: 'Verify Data',
        },
        {
          href: '/docs/oem_module/overview',
          position: 'left',
          label: 'OEM Module',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/tributech-solutions',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/tributech.io/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/tributechsolutions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://www.tributech.io/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tributech-solutions',
            },
          ],
        },
      ],
      copyright: `Copyright © 2018 - ${new Date().getFullYear()} Tributech Solutions GmbH`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['csharp'],
    },
    image: 'img/favicon.png',
    algolia: {
      apiKey: '1a42b1ebe30454fa429a47c5ed59de94',
      appId: 'XQE3RIAUIB',
      indexName: 'tributech',
      contextualSearch: true,
    },
    zoom: {
      selector: '.markdown :not(em, a) > img',
      config: {
        margin: 56,
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          includeCurrentVersion: false,
          lastVersion: '2.0.0',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-plugin-image-zoom')],
};
