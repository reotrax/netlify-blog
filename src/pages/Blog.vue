<template lang="pug">
  layout
    main
      h2 {{ $static.metadata.siteName }}
      .kiji(
        v-for="post in $page.posts.edges" :key="post.node.id"
      )
        | タイトル:&nbsp;

        g-link(:to="post.node.path")
          | {{ post.node.path }} - {{ post.node.title }}

        p.gaiyo
          | description
          | 概要: {{ post.node.description }}

        p.tags
          | tags
          | タグ: {{ post.node.tags }}

        p.date
          | date
          | {{ post.node.date }}

        .post-content(
          v-html="post.node.content"
        )
        g-link(:to="post.node.path")
          | 続きを読む >
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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

<style lang="scss" scoped>
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
