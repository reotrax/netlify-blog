<template lang="pug">
  .layout
    VueRemarkContent/
    aside
      span(
        v-for="tag in $page.post.tags"
        :key="tag.id"
      )
        | {{ tag }}
</template>

<page-query>
  query Post ($id: ID!) {
    post (id: $id) {
      title
      description
      content
      path
      date (format: "YYYY/MM/DD")
      tags {
        id
        title
        path
      }
    }
  }
</page-query>

<style></style>
