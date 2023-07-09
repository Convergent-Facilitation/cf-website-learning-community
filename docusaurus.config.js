// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Convergent Facilitation',
  tagline: 'Solutions That Work For Everyone',
  favicon: 'img/convergentfacilitation_logo.png',

  // Set the production url of your site here
  url: 'https://cozy-centaur-2df273.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    // Put your custom environment here
    googleCalendarApiKey: process.env.GOOGLECALENDARAPIKEY,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
//       image: 'img/docusaurus-social-card.jpg',
      colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: true,
        },
      announcementBar: {
          id: 'announcementBar-2', // Increment on change
          content: `⭐️ Upcoming free Convergent Facilitation Introductory Course: <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Local to Global Governance</a> — with Paul Kahawatte and Verene Nicolas ⭐️`,
        },
      navbar: {
        hideOnScroll: false,
        title: 'Convergent Facilitation',
        logo: {
          alt: 'Convergent Facilitation Logo',
          src: 'img/convergentfacilitation_logo.png',
        },
        items: [
        {
              type: 'doc',
              position: 'left',
              docId: 'intro',
              label: 'Learn',
            },
            {to: 'blog', label: 'Blog', position: 'left'},

            {to: 'showcase', label: 'Resources', position: 'left'},
            {
              to: '/community/support',
              label: 'Contribute',
              position: 'left',
              activeBaseRegex: `/community/`,
            },
            {to: 'events', label: 'Events', position: 'left'},
            {to: 'contact', label: 'Contact', position: 'right'},
//         {
//               type: 'localeDropdown',
//               position: 'right',
//               dropdownItemsAfter: [
//                 {
//                   type: 'html',
//                   value: '<hr style="margin: 0.3rem 0;">',
//                 },
//                 {
//                   href: 'https://github.com/facebook/docusaurus/issues/3526',
//                   label: 'Help Us Translate',
//                 },
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Tutorial',
//           },
//           {to: '/blog', label: 'Blog', position: 'left'},
//           {
//             href: 'https://github.com/facebook/docusaurus',
//             label: 'GitHub',
//             position: 'right',
//           },
        ],
      },
      footer: {
          style: 'dark',
          links: [
            {
              title: 'Learn',
              items: [
                {
                  label: 'Get started',
                  to: 'docs',
                },
                {
                  label: 'Events',
                  to: 'docs/installation',
                },
                {
                  label: 'Learning Community on Hylo',
                  to: 'docs/migration',
                },
                {
                  label: 'Peer groups',
                  to: '/'
                }
              ],
            },
            {
              title: 'Resources',
              items: [
                {
                  label: 'Book: The Highest Common Denominator',
                  href: '/',
                },
                {
                  label: 'Recordings',
                  to: '/feature-requests',
                },
                {
                  label: 'Case Studies',
                  href: '/',
                },
                {
                  label: 'CF Facilitators',
                  to: '/',
                }
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: 'blog',
                },
                {
                  label: 'Newsletter',
                  to: '/changelog',
                },
                {
                  label: 'Telegram Channel',
                  href: 'https://github.com/facebook/docusaurus',
                },
                {
                  label: 'NGL Community',
                  href: 'https://nglcommunity.org',
                },
                {
                  label: 'Contact',
                  href: 'https://nglcommunity.org',
                },
                {
                  label: 'Give',
                  to: '/'
                }

              //   {
              //     html: `
              //   <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
              //     <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
              //   </a>
              // `,
              //   },
              ],
            },
            {
              title: 'Legal',
              // Please don't remove the privacy and terms, it's a legal
              // requirement.
              items: [
                {
                  label: 'Privacy',
                  href: '/',
                },
                {
                  label: 'Terms',
                  href: '/',
                },
                {
                  label: 'Commons and License',
                  href: '/',
                }
              ],
            },
          ],
          "logo": {
            "alt": "Convergent Facilitation Logo",
            "src": "/img/convergentfacilitation_logo.png",
            "href": "https://nglcommunity.org"
          },
          copyright: `Copyright © ${new Date().getFullYear()} Nonviolent Global Liberation Community. Built with Docusaurus.`,


      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config
