const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

export default {
  title: 'Tributech Platform Documentation',
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
      title: 'Tributech Documentation',
      logo: {
        alt: 'Tributech Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          href: '/tributech_node/overview',
          position: 'left',
          label: 'Tributech Node',
        },
        {
          href: '/tributech_agent/overview',
          position: 'left',
          label: 'Tributech Agent',
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
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: ['csharp', 'bash', 'json'],
    },
    image: 'img/favicon.png',
    algolia: {
      appId: 'XQE3RIAUIB',
      apiKey: 'f8560b4e17dc77240726a958cea68039',
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
          lastVersion: '5.0.0',
          routeBasePath: '/',
          disableVersioning: false,
          includeCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-plugin-image-zoom')],
};
