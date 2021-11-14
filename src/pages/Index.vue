<template lang="pug">
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    h1 Hello, world!

    p
      | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores

    p.home-links
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>

    h1 Gridsomeで作るブログ

    h2 投稿一覧

    .kiji(
      v-for="post in $page.posts.edges" :key="post.node.id"
    )
      | タイトル: 
      g-link(:to="post.node.path")
        | {{ post.node.title }}

      p.gaiyo
        | 概要: {{ post.node.description }}

      p.tags
        | タグ: {{ post.node.tags }}

      p.date
        | {{ post.node.date }}

      .post-content(
        v-html="post.node.content"
      )

  </Layout>
</template>

<page-query>
{
  posts: allPost {
    edges {
      node {
        path
        title
        tags {
          id
          title
          path
        }
        description
        content
        date
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

p {
  margin: 0;
}

.kiji {
  margin: 20px 0 0;
  background-color: lightgray;
  ul {
    margin: 0;
    li {

    }
  }
  &:nth-of-type(1) {
    margin: 0;
  }
}

// widget
.post-content {
  background: rgb(39, 39, 39);
  color: rgb(231, 231, 231);
  .language-javascript {
    // background: black;
    // color: white;
  }
}
</style>
