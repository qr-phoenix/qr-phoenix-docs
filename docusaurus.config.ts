import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'QR Phoenix',
  tagline: 'Privacy-focussed, modern QR Code generation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://qr-phoenix.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/qr-phoenix-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qr-phoenix', // Usually your GitHub org/user name.
  projectName: 'qr-phoenix-docs', // Usually your repo name.
  deploymentBranch: "pages",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/qr-phoenix/qr-phoenix-docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/qr-phoenix/qr-phoenix-docs/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },

        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/opengraph.jpg',
    navbar: {
      title: 'QR Phoenix',
      logo: {
        alt: 'QR Phoenix Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'API Docs',
        },
        // {
        //   label: "Playground",
        //   href: "https://rapidapi.com/jaygrey.jg/api/qr-phoenix/playground",
        //   position: "right",
        // },
        {
          html: "<span style='background: var(--ifm-code-background); text-transform:uppercase; color:var(--ifm-font-color-base); font-size:11px; display: flex; gap: 8px; padding:8px; border:0.1rem solid rgba(0, 0, 0, 0.1); border-radius:6px;'>Available on Rapid API<svg width='13.5' height='13.5' aria-hidden='true' viewBox='0 0 24 24' class='iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module'><path fill='currentColor' d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z'></path></svg></span>",
          href: "https://rapidapi.com/jaygrey.jg/api/qr-phoenix/playground",
          position: "right",
        }
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'left',
        // },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },


  } satisfies Preset.ThemeConfig,
};

export default config;
