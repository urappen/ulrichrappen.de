import {
  type DefaultTheme,
  type HeadConfig,
  type LocaleSpecificConfig,
  defineConfig
} from 'vitepress'

import ldJson from './ldjson.json'

const head: HeadConfig[] = [
  [ 'meta', { charset: 'utf-8' } ],
  [ 'meta', { name: 'Content-Type', content: 'text/html; charset=utf-8' } ],
  [ 'meta', { name: 'robots', content: 'index, follow' } ],

  ['meta', { 'http-equiv': 'Expires', content: '0' }],
  ['meta', { 'http-equiv': 'Pragma', content: 'no-cache' }],
  ['meta', { 'http-equiv': 'Cache', content: 'no-cache' }],
  ['meta', { 'http-equiv': 'Cache-control', content: 'no-store,no-cache,must-revalidate' }],

  ['meta', { name: 'author', content: 'Dr. Ulrich Rappen, Baden-Baden' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],

  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg', sizes: 'any' }],
  ['link', { rel: 'mask-icon', type: 'image/svg+xml', href: '/images/logo.svg', color: '#a8b1ff' }],
  ['link', { rel: 'apple-touch-icon', type: 'image/png', href: '/images/logo.png', sizes: '128x128' }],
  ['meta', { name: 'msapplication-TileColor', content: '#a8b1ff' }],
  ['meta', { name: 'theme-color', content: '#a8b1ff' }],

  ['meta', { name: 'application-name', content: 'Dr. Ulrich Rappen' }],
  ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Dr. Ulrich Rappen' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

  ['meta', { name: 'geo.position', content: '48.7912438;8.2287341' }],
  ['meta', { name: 'geo.region', content: 'DE' }],
  ['meta', { name: 'geo.placename', content: 'Baden-Baden' }],

  ['meta', { name: 'twitter:title', content: 'Dr. Ulrich Rappen, Baden-Baden' }],
  ['meta', { property: 'twitter:description', content: 'Kinder- und Jugendpsychiatrie, Psychotherapie' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:image:src', content: 'https://ulrichrappen.de/images/social/dr_ulrich_rappen.16x9.webp' }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: 'Dr. Ulrich Rappen, Baden-Baden' }],
  ['meta', { property: 'og:description', content: 'Kinder- und Jugendpsychiatrie, Psychotherapie' }],
  ['meta', { property: 'og:locale', content: 'de_DE' }],
  // 'og:locale:alternate' differs by locale
  ['meta', { property: 'og:site_name', content: 'Dr. Ulrich Rappen' }],

  ['meta', { property: 'og:image', content: 'https://ulrichrappen.de/images/social/dr_ulrich_rappen.1x1.webp' }],
  ['meta', { property: 'og:image:secure_url', content: 'https://ulrichrappen.de/images/social/dr_ulrich_rappen.1x1.webp' }],
  ['meta', { property: 'og:image:width', content: '416' }],
  ['meta', { property: 'og:image:height', content: '416' }],
  ['meta', { property: 'og:image:alt', content: 'Dr. Ulrich Rappen, Baden-Baden' }],

  ['meta', { property: 'og:image', content: 'https://ulrichrappen.de/images/social/dr_ulrich_rappen.4x3.webp' }],
  ['meta', { property: 'og:image:secure_url', content: 'https://ulrichrappen.de/images/social/dr_ulrich_rappen.4x3.webp' }],
  ['meta', { property: 'og:image:width', content: '555' }],
  ['meta', { property: 'og:image:height', content: '416' }],
  ['meta', { property: 'og:image:alt', content: 'Dr. Ulrich Rappen, Baden-Baden' }],

  ['meta', { property: 'og:image', content: 'https://ulrichrappen.de/images/social/dr_ulrich_rappen.16x9.webp' }],
  ['meta', { property: 'og:image:secure_url', content: 'https://ulrichrappen.de/images/social/dr_ulrich_rappen.16x9.webp' }],
  ['meta', { property: 'og:image:width', content: '740' }],
  ['meta', { property: 'og:image:height', content: '416' }],
  ['meta', { property: 'og:image:alt', content: 'Dr. Ulrich Rappen, Baden-Baden' }],

  [ 'script', { type: 'application/ld+json' }, JSON.stringify(ldJson, undefined, 4)]
]

export default defineConfig({
  cleanUrls: true,
  description: 'Kinder- und Jugendpsychiatrie, Psychotherapie',
  head: head,
  lang: 'de-DE',
  lastUpdated: true,
  markdown: {                                                                   // https://vitepress.dev/reference/site-config#markdown
    image: {
      lazyLoading: true
    },
    lineNumbers: true,
    theme: {                                                                    // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      light: 'github-light',
      dark: 'github-dark'
    },
    toc: {
      level: [2]
    }
  },
  sitemap: {
    hostname: 'https://ulrichrappen.de/',
    lastmodDateOnly: true,
    transformItems: (items) => {
      return items.map((item) => ({
        ...item,
        changefreq: 'daily',
        priority: item.url.includes('impressum/') ? 0.5 : 0.7
      }))
    }
  },
  srcDir: 'src',
  themeConfig: {
    darkModeSwitchLabel: 'Aussehen verändern',
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    editLink: { text: 'Editiere diese Seite auf GitHub', pattern: 'https:/github.com/urappen/ulrichrappen.de/blob/main/docs/:path' },
    langMenuLabel: 'Ändere die Sprache',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      },
      text: 'Zuletzt aktualisiert'
    },
    logo: {
      alt: 'Dr. Ulrich Rappen, Baden-Baden',
      dark: '/images/logo.dark.svg',
      light: '/images/logo.light.svg'
    },
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Impressum', link: '/impressum/' }
    ],
    outline: {
      label: 'Auf dieser Seite',
      level: [2, 3]
    },
    returnToTopLabel: 'Zurück zum Seitenanfang',
    search: {
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonAriaLabel: 'Suche',
                buttonText: 'Suche'
              },
              modal: {
                backButtonTitle: 'backButtonTitle',
                displayDetails: 'detailiertere Ergebnisse anzeigen',
                footer: {
                  closeKeyAriaLabel: 'esc',
                  closeText: 'um Suche zu beenden',
                  navigateDownKeyAriaLabel: 'nach_unten',
                  navigateText: 'um Auswahl zu ändern',
                  navigateUpKeyAriaLabel: 'nach_oben',
                  selectKeyAriaLabel: 'enter',
                  selectText: 'um Auswahl zu bestätigen'
                },
                noResultsText: 'Keine Ergebnisse für',
                resetButtonTitle: 'Sucheingabe zurücksetzen'
              }
            }
          }
        }
      },
      provider: 'local'
    },
    sidebar: [
      { text: 'Startseite', link: '/' },
      { text: 'Impressum', link: '/impressum/' }
    ],
    sidebarMenuLabel: 'Menü',
    siteTitle: 'Dr. Ulrich Rappen',
    //  for social icons compare
    //  https://icon-sets.iconify.design/simple-icons/
    socialLinks: [
      // { icon: 'github', link: 'https:/github.com/urappen/ulrichrappen.de', ariaLabel: 'Github' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.078 23.55c-.473-.316-.893-.703-1.244-1.15-.383-.463-.738-.95-1.064-1.454-.766-1.12-1.365-2.345-1.78-3.636-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09.49-.9 1.22-1.653 2.1-2.182.85-.53 1.84-.82 2.84-.84.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.17.8.17.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.08 1.148-.05.71.05 1.36.2 1.94.42 1.02.41 1.843 1.05 2.457 1.96-.26.16-.5.346-.725.55-.487.43-.9.94-1.23 1.505-.43.77-.65 1.64-.644 2.52.015 1.083.29 2.035.84 2.86.387.6.904 1.114 1.534 1.536.31.21.582.355.84.45-.12.375-.252.74-.405 1.1-.347.807-.76 1.58-1.25 2.31-.432.63-.772 1.1-1.03 1.41-.402.48-.79.84-1.18 1.097-.43.285-.935.436-1.452.436-.35.015-.7-.03-1.034-.127-.29-.095-.576-.202-.856-.323-.293-.134-.596-.248-.905-.34-.38-.1-.77-.148-1.164-.147-.4 0-.79.05-1.16.145-.31.088-.61.196-.907.325-.42.175-.695.29-.855.34-.324.096-.656.154-.99.175-.52 0-1.004-.15-1.486-.45zm6.854-18.46c-.68.34-1.326.484-1.973.436-.1-.646 0-1.31.27-2.037.24-.62.56-1.18 1-1.68.46-.52 1.01-.95 1.63-1.26.66-.34 1.29-.52 1.89-.55.08.68 0 1.35-.25 2.07-.228.64-.568 1.23-1 1.76-.435.52-.975.95-1.586 1.26z"/></svg>'
        },
        link: 'https://maps.apple.com/place?coordinate=48.7912438,8.2287341&address=Ulrich+Rappen,Mittel%C3%A4ckerring+39,Baden-Baden,Germany&z=19&dirflg=d',
        ariaLabel: 'Apple Maps'
      },
      {
        icon: 'googlemaps',
        link: 'https://www.google.com/maps/dir/?api=1&origin=&destination=Ulrich+Rappen%2C+Mittel%C3%A4ckerring+Ring+39%2C+76532+Baden-Baden%2C+Germany&travelmode=driving&dir_action=navigate&center=48.7912438,8.2287341&zoom=19&basemap=roadmap&layer=traffic',
        ariaLabel: 'Google Maps'
      },
      { icon: 'here', link: 'https://share.here.com/r/mylocation/48.7912438,8.2287341?m=d', ariaLabel: 'HERE Maps' },
      {
        icon: 'waze',
        link: 'https://www.waze.com/ul?q=Ulrich%20Rappen&ll=48.7912438,8.2287341&navigate=yes',
        ariaLabel: 'Google Waze'
      }
    ]
  },
  title: 'Dr. Ulrich Rappen, Baden-Baden',
  titleTemplate: 'Dr. Ulrich Rappen'
})
