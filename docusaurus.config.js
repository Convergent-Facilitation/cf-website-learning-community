// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Convergent Facilitation',
  tagline: 'Join us in Growing our collective Convergent Facilitation Capacity',
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
    locales: ['en']
  },
  customFields: {
    // Put your custom environment here
    googleCalendarApiKey: process.env.GOOGLECALENDARAPIKEY
  },
  onBrokenLinks: 'ignore', // later use 'throw'
  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        docsRouteBasePath: ['/engage', '/resources'],
        blogRouteBasePath: ['/blog', '/events'],
        docsDir: ['engage', 'resources'],
        blogDir: ['blog', 'events']

        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      })
    ]
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
            'https://github.com/Convergent-Facilitation/cf-website/tree/main/'
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Posts',
          authorsMapPath: '../humans.yml',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Convergent-Facilitation/cf-website/tree/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //       image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: '⭐️ Welcome to our new Convergent Facilitation website! Read more about it in our blogpost: <a target="_blank" rel="noopener noreferrer" href="/blog/welcome"><i>Find your Way to Engage</i></a> ⭐️'
      },
      navbar: {
        hideOnScroll: false,
        title: 'CF Co-Creation Community',
        logo: {
          alt: 'Convergent Facilitation Logo',
          src: 'img/convergentfacilitation_logo.png'
        },
        items: [
          {
            label: 'Engage',
            type: 'doc',
            position: 'left',
            docId: 'what-can-you-do'
          },
          {
            label: 'Resources',
            type: 'doc',
            docsPluginId: 'resources',
            position: 'left',
            docId: 'overview'
          },
          { label: 'Blog', to: 'blog', position: 'left' },
          { label: 'Events', to: 'events', position: 'left' },
          {
            type: 'search',
            position: 'right'
          },

          {
            href: 'https://www.hylo.com/groups/convergent-facilitation',
            position: 'right',
            className: 'header-hylo-link',
            'aria-label': 'Hylo Group'
          },
	  { label: 'Connect', to: 'contact', position: 'right' },

        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Spheres of Engagement',
                to: '/engage/what-can-you-do'
              },
              {
                label: 'Events',
                to: 'events'
              },
              {
                label: 'Co-Create on Hylo',
                to: '/engage/apply-and-apprentice/join-hylo'
              },
              {
                label: 'Practice groups',
                to: '/engage/experience-and-embody/practice-groups'
              }
            ]
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Book: The Highest Common Denominator',
                href: '/resources/the-book'
              },
              {
                label: 'Recordings Coaching Calls',
                to: '/resources/recordings-coaching-calls/overview-coaching-call-recordings'
              },
              {
                label: 'Case Studies',
                href: '/resources/case-studies'
              },
              {
                label: 'CF Facilitators',
                to: '/about#who-we-are'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog'
              },
              {
                label: 'Newsletter',
                to: '/contact#stay-in-the-loop'
              },
              {
                label: 'NGL Community',
                href: 'https://nglcommunity.org'
              },
              {
                label: 'Contact',
				  to: '/contact'
              },
              {
                label: 'Give',
                to: '/give'
              }

              //   {
              //     html: `
              //   <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
              //     <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
              //   </a>
              // `,
              //   },
            ]
          },
          {
            title: 'Legal (needed?)',
            // Please don't remove the privacy and terms, it's a legal
            // requirement.
            items: [
              {
                label: 'Privacy (needed?)',
                href: '/'
              },
              {
                label: 'Terms (needed?)',
                href: '/'
              },
              {
                label: 'Commons and License',
                href: '/'
              }
            ]
          }
        ],
        logo: {
          alt: 'Nonviolent Global Liberation Community Logo',
          src: '/img/ngl-logo-white.webp',
          href: 'https://nglcommunity.org'
        },
        copyright: `Nonviolent Global Liberation Community ${new Date().getFullYear()}. Built with Docusaurus.`

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false
      }
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
        editUrl:
            'https://github.com/Convergent-Facilitation/cf-website/tree/main/',
        id: 'resources',
        sidebarPath: require.resolve('./sidebars.js')

      }
    ],
	[
	'@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/offerings/nov-2021-cf-intensive-with-roni-and-magda', 
            to: '/resources/recordings-courses-workshops/cf-intensive-magda-roni/',
          },
          {
            from: '/2021-nov-intensive', 
            to: '/resources/recordings-courses-workshops/cf-intensive-magda-roni/',
          },
        ],
      },
    ]
  ]
}

module.exports = config
