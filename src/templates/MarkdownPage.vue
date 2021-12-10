// <template lang="pug">
//   .layout
//     aside
//       span(
//         v-for="tag in $page.documentation.tags"
//         :key="tag.id"
//       )
//         | {{ tag }}
//       div(
//         v-html="$page.documentation.content"
//       )
//     VueRemarkContent(:source="$page.documentation.content")
// </template>

// <page-query>
// query Documentation ($id: ID!) {
//   documentation (id: $id) {
//     title
//     description
//     content
//     path
//     date (format: "YYYY/MM/DD")
//   }
// }
// </page-query>

// <style></style>
