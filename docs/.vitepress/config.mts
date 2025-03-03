import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frappe Documentation",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/frappe_black.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: {
      '/framework/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/framework/introduction' },
            { text: 'Prerequisites', link: '/framework/prerequisites' },
            { text: 'Installation', link: '/framework/installation' }
          ]
        }
      ],

      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'cn'
    }
  }
})
