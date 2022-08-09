<template>
  <div class="release-transition-two"></div>
  <div class="release-container" v-for="post in postItems" :key="post._id">
    <router-link :to="`/blog/${post.slug.current}`">
      <h3 class="release-num">{{ post.releaseNum }}</h3>
      <h2 class="release-name">
        {{ post.artistName }} - {{ post.releaseName }}
      </h2>
    </router-link>
  </div>
  <div class="release-bar">
    <div class="release-fill"></div>
    <router-link to="/">
      <h1
        class="home-text"
        v-bind:class="{ homeTextActive: isReleaseActive }"
        v-on:click="isReleaseActive = false"
      >
        back to home
      </h1>
    </router-link>
  </div>
  <ParticleBackground />
</template>

<script>
import ParticleBackground from "../components/ParticleBackground.vue";
import sanity from "../client.js";
let URL = `https://xu51naeq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%20%7C%20order(releaseNum%20desc)`;

// fetch the content
fetch(URL).then((res) => res.json());
const queryPost = `*[_type == "post"] | order(releaseDate desc) {
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
  components: {
    ParticleBackground,
  },
  created() {
    this.fetchDataPost();
  },
  computed: {},
  mounted() {},
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
  animation: container-anim 1s forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

@keyframes container-anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.release-transition-two {
  position: fixed;
  top: 0;
  left: 0%;
  background: white;
  height: 100%;
  width: 100vw;
  overflow: hidden;

  z-index: +4;
  animation: scale-up-ver-bottom 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)
    forwards;
}

@keyframes scale-up-ver-bottom {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
  100% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
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

  .home-text {
    font-size: 1.3vw;
  }
}
</style>
