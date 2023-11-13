// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grow CF Capacity',
  tagline: 'Grow Convergent Facilitation Capacity within a Collaborative Learning Web',
  favicon: 'img/convergentfacilitation_logo.webp',

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
        docsRouteBasePath: ['/how-to-engage', '/resources'],
        blogRouteBasePath: ['/blog', '/events'],
        docsDir: ['how-to-engage', 'resources'],
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
      (
	   {
		gtag: {
          trackingID: 'G-8CS8889TVP',
          anonymizeIP: true,
        },
        debug: false,

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'how-to-engage',
          routeBasePath: 'how-to-engage',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
			'https://github.com/Convergent-Facilitation/cf-website-learning-community/tree/main'
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Posts',
          authorsMapPath: '../humans.yml',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
			'https://github.com/Convergent-Facilitation/cf-website-learning-community/tree/main'
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
      },
      announcementBar: {
        id: 'announcementBar-4', // Increment on change
        content: '⭐️ Welcome to our new Grow Convergent Facilitation Capacity website! Deepen your skills by joining Roni and Verene live for their <a target="_blank" rel="noopener noreferrer" href="/2023-nov-roni-verene-transforming-inner-obstacles"><i>Transforming inner Obstacles Workshop</i></a> on Nov 30 ⭐️'

      },
      navbar: {
        hideOnScroll: false,
        title: 'Grow CF Capacity',
        logo: {
          alt: 'Convergent Facilitation Logo',
          src: 'img/convergentfacilitation_logo.webp'
        },
        items: [
          {
            label: 'How to Engage',
            type: 'doc',
            position: 'left',
            docId: 'index'
          },
          { label: 'Coaching Calls', to: 'coaching-calls', position: 'left' },
          { label: 'Courses', to: 'courses', position: 'left' },
          { label: 'Materials', to: 'Materials', position: 'left' },
          { label: 'App', href: 'https://www.convergence.tools', position: 'left' },
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
	  { label: 'Give', to: 'give', position: 'right' },
	  { label: 'Contact', to: 'contact', position: 'right' },

        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'How to Engage',
            items: [
              {
                label: 'Find your Way to Engage',
                to: '/how-to-engage'
              },
              {
                label: 'Co-Create Learning Web on Hylo',
                to: '/how-to-engage/platforms-and-co-creation/co-create-on-hylo',
              },
              {
                label: 'Ask for Coaching',
                to: '/how-to-engage/apply-and-apprentice/ask-for-coaching'
              },
              {
                label: 'Participate in Practice groups',
                to: '/how-to-engage/experience-and-embody/practice-groups'
              },
              {
				label: 'Offer a Practice group',
                to: '/how-to-engage/apply-and-apprentice/offer-practice-groups'
              },
            ]
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Coaching Calls Library',
                to: '/coaching-calls'
              },
              {
                label: 'Courses and Workshops Library',
                to: '/courses'
              },
              {
                label: 'Other Materials and Resources Library',
                to: '/materials'
              },
              {
                label: 'Book: The Highest Common Denominator',
                href: 'https://thefearlessheart.org/store/the-highest-common-denominator/'
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Give',
                to: '/give'
              },
              {
                label: 'Contact',
				  to: '/contact#reach-out'
              },
              {
                label: 'Newsletter',
                to: '/contact#newsletters'
              },
              {
				label: 'Learning Web on Hylo',
		        href: 'https://www.hylo.com/groups/convergent-facilitation'
              },
              {
                label: 'NGL Community',
                href: 'https://nglcommunity.org'
              },
              {
                label: 'Website Code on Github',
                href: 'https://github.com/Convergent-Facilitation/cf-website-learning-community/tree/main'
              },

            ]
          },
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
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/2023-nov-roni-verene-transforming-inner-obstacles',
            from: '/tio1',
          },
          // Redirect from multiple old paths to the new path
        ],
      },
    ],
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
        routeBasePath: '/',
        id: 'events',
        blogSidebarTitle: 'All Events',
		blogSidebarCount: 0,
        blogTitle: 'Grow Convergent Facilitation',
        blogDescription: 'Grow Convergent Facilitation Capacity within a Collaborative Learning Web',
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
			'https://github.com/Convergent-Facilitation/cf-website-learning-community/tree/main',
        id: 'resources',
		breadcrumbs: false,
        sidebarPath: false,
        //sidebarPath: require.resolve('./sidebars.js')
      }
    ]
  ]
}

module.exports = config
