<template>
  <div class="release-container" v-for="post in postItems" :key="post._id">
    <router-link :to="`/blog/${post.slug.current}`">
      <h3 class="release-num">{{ post.releaseNum }}</h3>
      <h2 class="release-name">
        {{ post.artistName }} - {{ post.releaseName }}
      </h2>
    </router-link>
  </div>
</template>

<script>
import sanity from "../client.js";
const queryPost = `*[_type == "post"]{
  _id,
 releaseNum,
  artistName,
  releaseName,
  slug,
  releaseDate,
  releaseType,
  anr,
}[0...50]`;

export default {
  data: () => ({
    loading: true,
    postItems: [],
  }),
  created() {
    this.fetchDataPost();
  },
  methods: {
    fetchDataPost() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(queryPost).then(
        (postItems) => {
          this.loading = false;
          this.postItems = postItems;
          this.blocks = postItems.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.release-container {
  position: relative;
  width: 86.5%;

  padding-bottom: 0.5vw;
  margin-left: 4vw;
  top: 15vh;
  text-decoration: none;
}

.release-num {
  position: relative;
  font-family: sk-modernist;
  font-size: 3.5vw;
  margin-top: -0.4vw;
  color: rgb(134, 134, 134);
  text-decoration: none;
}
.release-name {
  position: relative;
  font-family: sk-modernist;
  font-size: 5vw;
  margin-top: -2vw;
  color: black;
}
h2,
h3 {
  font-weight: normal;
}

@media (min-aspect-ratio: 200/200) {
  .release-container {
    width: 25%;
    padding-bottom: 0.5vw;
    margin: auto;
  }
  .release-num {
    font-size: 0.85vw;
  }
  .release-name {
    font-size: 1.5vw;
    margin-top: -0.2vw;
  }
}
</style>
