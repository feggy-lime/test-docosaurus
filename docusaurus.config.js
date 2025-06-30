// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Test Docosaurus Documentation',
  tagline: 'Dokumentasi User Guide untuk Repository Test-Docosaurus',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://feggy-lime.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/test-docosaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'feggy-lime', // Usually your GitHub org/user name.
  projectName: 'test-docosaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          path: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/feggy-lime/test-docosaurus/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Test Docosaurus',
        logo: {
          alt: 'Test Docosaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentasi',
          },
          {
            href: 'https://github.com/feggy-lime/test-docosaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentasi',
            items: [
              {
                label: 'Pengenalan',
                to: '/docs/intro',
              },
              {
                label: 'Instalasi',
                to: '/docs/install',
              },
              {
                label: 'Penggunaan',
                to: '/docs/usage',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/feggy-lime/test-docosaurus/issues',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/feggy-lime/test-docosaurus/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/feggy-lime/test-docosaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Test Docosaurus Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;