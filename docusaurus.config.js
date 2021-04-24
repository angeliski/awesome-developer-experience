/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Awesome Developer Experience',
  tagline: 'Build fast. Build better. Build happy.',
  url: 'https://awesome-exp.dev ',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['pt-BR', 'en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'angeliski',
  projectName: 'awesome-developer-experience',
  themeConfig: {
    navbar: {
      title: 'ADE',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Links',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/angeliski/awesome-developer-experience',
          label: 'GitHub',
          position: 'right',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Awesome Developer Experience, by Angeliski built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/angeliski/awesome-developer-experience/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
