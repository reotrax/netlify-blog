// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome - Netlify',
  // siteUrl: 'https://www.gridsome.org',

  // https://pensuke.work/posts/create-a-blog-with-grdisome-default-starter
  // markdownで書かれた記事内の外部リンクを別タブで開いたりするための設定
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
    plugins: [
      // ...global plugins
    ]
  },

  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
          pug: { /* Options for `pug-plain-loader` */ },
          pugLoader: { /* Options for `pug-loader` */ }
      }
    },
    // NOTE: マークダウン用のライブラリ①
    // https://pensuke.work/posts/create-a-blog-with-grdisome-default-starter
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post', // GraphQLスキーマのタイプ名
        path: 'content/posts/*.md', // Markdownファイル配置場所
        // pathPrefix: '/', // URLPathのプレフィックス
        template: './src/templates/Post.vue', // src/tempate配下のファイル名
        // route: '/blog/:id',
        // route: '/blog/:id/:slug',
        route: '/blog/:slug',
        // route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        },
        refs: {
          tags: {
            typeName: 'Blog',
            route: '/blog/:id',
            create: true
          }
        }
      },
    },
    // NOTE: マークダウン用のライブラリ② Vue化したい場合はsource-filesystemではなくこちらを使用する
    // https://webcache.googleusercontent.com/search?q=cache:i7YGykGL7sUJ:https://knote.dev/post/2020-03-20/gridsome-markdown-file/+&cd=4&hl=ja&ct=clnk&gl=jp
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     typeName: 'Documentation', // GraphQLスキーマのタイプ名
    //     baseDir: 'content/posts/', // Markdownファイル配置場所
    //     pathPrefix: '/', // URLPathのプレフィックス
    //     template: './src/templates/MarkdownPage.vue', // テンプレートファイル名
    //     // refs: {
    //     //   tags: { // タグを使用する
    //     //     typeName: 'Blog',
    //     //     create: true // tagsからタグのコレクションを生成
    //     //   }
    //     // }
    //   }
    // },
    // https://pensuke.work/posts/gridsome-netlify-cms
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/`,
        modulePath: `src/index.js`
      }
    },
  ]
}
