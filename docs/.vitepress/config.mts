import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yun Blog",
  description: "云歌的博客小站~",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'about-me', link: '/about-me' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '关于我', link: '/about-me' },
          { text: '我的空间', link: '/my-space' }
        ]
      },
      {
        text: 'daily test',
        items: [
          { text: '4.19', link: '/posts/4.19.md' },
          { text: '4.18', link: '/posts/4.18.md' },
          { text: '4.17', link: '/posts/4.17.md' },
          { text: '4.16', link: '/posts/4.16.md' },
          { text: '4.15', link: '/posts/4.15.md' },
          { text: '4.14', link: '/posts/4.14.md' },
          { text: '4.13', link: '/posts/4.13.md' },
          { text: '4.12', link: '/posts/4.12.md' },
          { text: '4.11', link: '/posts/4.11.md' },
          { text: '4.10', link: '/posts/4.10.md' },
          { text: '4.9', link: '/posts/4.9.md' },
          { text: '4.8', link: '/posts/4.8.md' },
          { text: '4.7', link: '/posts/4.7.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
