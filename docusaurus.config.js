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
  url: 'https://convergentfacilitation.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
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
  onBrokenLinks: 'ignore', // later use 'throw'
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
       indexPages: true,
       docsRouteBasePath: ["/engage","/resources"],
       blogRouteBasePath: ["/blog","/events"],
       docsDir: ["engage","resources"],
       blogDir: ["blog", "events"]



        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: false,

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
       path: 'engage',
       routeBasePath: 'engage',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Convergent-Facilitation/cf-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
       blogSidebarTitle: 'All Posts',
       authorsMapPath: '../humans.yml',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Convergent-Facilitation/cf-website/tree/main/',
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
          content: `⭐️ Welcome to our new Convergent Facilitation website! Read more about it in our blogpost: <a target="_blank" rel="noopener noreferrer" href="/blog/welcome"><i>Find your Way to Engage</i></a> ⭐️`,
        },
      navbar: {
        hideOnScroll: false,
        title: 'Convergent Facilitation',
        logo: {
          alt: 'Convergent Facilitation Logo',
          src: 'img/convergentfacilitation_logo.png',
        },
        items: [
          {label: 'About', to: 'about', position: 'left'},
 {label: 'Resources',
           type: 'doc',
docsPluginId: 'resources',
           position: 'left',
           docId: 'overview'},
     {label: 'Blog', to: 'blog',  position: 'left'},
          {label: 'Events',to: 'events',  position: 'left'},
          {label: 'Contact', to: 'contact', position: 'left'},
      {
          type: 'search',
          position: 'right',
        },


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
               {label: 'Give',to: '/give', position: 'right'},


               {label: 'Engage',
           type: 'doc',
           position: 'right',
           docId: 'what-can-you-do'},
     {
              href: 'https://www.hylo.com/groups/convergent-facilitation',
              position: 'right',
              className: 'header-hylo-link',
              'aria-label': 'Hylo Group',
            },



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
      [
      '@docusaurus/plugin-content-blog',
      {
        path: 'events',
        routeBasePath: 'events',
        id: 'events',
        blogSidebarTitle: 'All Events',
        showReadingTime: false,
        authorsMapPath: '../humans.yml'
      }
      ],
       [
      '@docusaurus/plugin-content-docs',
      {
        path: 'resources',
        routeBasePath: 'resources',
        id: 'resources',
        sidebarPath: require.resolve('./sidebars.js'),

      }
      ]



  ],
};

module.exports = config
