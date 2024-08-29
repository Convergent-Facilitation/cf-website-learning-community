// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn Convergent Facilitation',
  tagline: 'Learn to faciliate and apply Convergent Facilitation',
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
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} **/
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
      navbar: {
        hideOnScroll: false,
        title: 'Learn Convergent Facilitation',
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
          {
            type: 'dropdown',
            label: 'Offerings',
            position: 'left',
            items: [
              {
				  label: 'All Community Events',
                href: '/#community-events'
              },
              {
				  label: 'Offerings by CF Providers',
                href: '/#upcoming-offerings'
              },
			/**
			 // Add here list of active offerings
              { label: 'Workshop: Choosing Supportive Thresholds',
                to: '/thresholds-roni-verene-june-2024'
              },
			**/
		     {
				 label: 'Recordings of Previous Offerings',
				 href: '/courses'
			} 
            ]
          },
          {
            type: 'dropdown',
            label: 'Library',
            position: 'left',
            items: [
              {
				  label: 'Coaching Call Recordings',
                to: '/coaching-calls'
              },
              {
				  label: 'Course & Workshop Recordings',
                to: '/courses'
              },  
              {
				  label: 'Other Materials',
                to: '/materials'
              },  
            ]
          },
          { label: 'CF App', href: 'https://www.convergence.tools', position: 'left' },
          {
            type: 'search',
            position: 'right'
          },
		  { label: 'Give', to: 'give', position: 'right' },
		  { label: 'Contact', to: 'contact', position: 'right' },
		  {
			 // custom link to community with logo
             position: 'right',
			 type: 'html',
             value: `
               <a href="/" class="navbar__link" style="display: flex; align-items: center; font-weight: bold;">
                 <img src="/img/community-logo-favicon_32x32.png" alt="Community Logo" style="width: 20px; height: 20px; margin-right: 8px;" />
                 <span>Community</span>
               </a>
			   `
           },



        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'How to Engage',
            items: [
              {
                label: 'Commons and Community',
                to: '/how-to-engage'
              },
              {
                label: 'Ask for Coaching',
                to: '/how-to-engage/ask-for-coaching'
              },
              {
                label: 'Practice sessions',
                to: '/how-to-engage/practice-sessions'
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
                to: '/contact#grow-cf-capacity-newsletter'
              },
              {
				label: 'CF Community',
		        href: 'https://community.convergentfacilitation.org'
              },
              {
                label: 'NGL Community',
                href: 'https://nglcommunity.org'
              },
              {
                label: 'Github',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
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
          {
            to: '/thresholds-roni-verene-june-2024',
            from: '/cst1',
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
        blogDescription: 'Grow Convergent Facilitation Capacity in Community',
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
