<template>
  <div class="all-info-container">
    <div class="release-transition-three"></div>
    <div class="loading" v-if="loading"></div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <SanityBlocks :blocks="blocks" />
      <div class="img-container" v-if="post.releaseImage">
        <img :src="imageUrlFor(post.releaseImage)" alt="" class="album-image" />
      </div>
      <h2 class="release-name">
        {{ post.artistName }} - {{ post.releaseName }}
      </h2>
      <div class="play-link-container">
        <a :href="'' + post.spotifyLink">
          <img
            v-if="post.spotifyLink"
            src="../assets/spotify-logo.svg"
            alt=""
            class="play-link spotify"
          />
        </a>
        <a :href="'' + post.appleLink">
          <img
            v-if="post.appleLink"
            src="../assets/apple-logo.svg"
            alt=""
            class="play-link apple"
          />
        </a>
        <a :href="'' + post.soundLink">
          <img
            v-if="post.soundLink"
            src="../assets/bandcamp-logo.svg"
            alt=""
            class="play-link bandcamp"
          />
        </a>
      </div>
      <div class="infos">
        <div class="more-info-container-one">
          <div class="release-info-container info-one" v-if="post.releaseDate">
            <h3 class="release-info date">Release Date</h3>
            <h3 class="release-info date info-cms">{{ post.releaseDate }}</h3>
          </div>
          <div class="release-info-container info-two" v-if="post.releaseType">
            <h3 class="release-info type">Release Type</h3>
            <h3 class="release-info date info-cms">
              {{ post.releaseType }}
            </h3>
          </div>
          <div class="release-info-container info-three" v-if="post.anr">
            <h3 class="release-info anr">A&R</h3>
            <h3 class="release-info date info-cms">
              {{ post.anr }}
            </h3>
          </div>

          <div class="release-info-container info-one" v-if="post.genre">
            <h3 class="release-info date">Genre</h3>
            <h3 class="release-info date info-cms">{{ post.genre }}</h3>
          </div>
          <div class="release-info-container info-two" v-if="post.releaseNum">
            <h3 class="release-info type">Release Number</h3>
            <h3 class="release-info date info-cms">{{ post.releaseNum }}</h3>
          </div>
        </div>
        <h3
          class="producers"
          v-if="post.mixing || post.mastering || post.engineering"
        >
          Producers
        </h3>
        <div
          class="more-info-container-one container-three"
          v-if="post.mixing || post.mastering || post.engineering"
        >
          <div class="release-info-container info-one" v-if="post.mastering">
            <h3 class="release-info date">mastering</h3>
            <h3 class="release-info date info-cms">{{ post.mastering }}</h3>
          </div>
          <div class="release-info-container info-two" v-if="post.mixing">
            <h3 class="release-info type">mixing</h3>
            <h3 class="release-info date info-cms">{{ post.mixing }}</h3>
          </div>
          <div
            class="release-info-container info-three"
            v-if="post.engineering"
          >
            <h3 class="release-info anr">engineering</h3>
            <h3 class="release-info date info-cms">{{ post.engineering }}</h3>
          </div>
        </div>
      </div>
      <div class="info-bottom">
        <router-link to="../releases">
          <h3 class="go-back">Back To Releases</h3>
        </router-link>
        <h3 class="bottom-info info-one-bottom">
          SHOP :
          <span class="underline"
            ><a href="https://dismiss.store/">DISMISS.STORE</a></span
          >
        </h3>
        <h3 class="bottom-info info-two-bottom">C DISMISS YOURSELF 2022</h3>
      </div>
    </div>
    <ParticleBackground />
  </div>
</template>

<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[slug.current == $slug] {
  _id,
  releaseImage,
  releaseNum,
  releaseName,
  artistName,
  releaseDate,
  releaseType,
  anr,
  genre,
  mastering,
  mixing,
  engineering,
  spotifyLink,
  appleLink,
  soundLink,
  slug,



}[0]
`;

import ParticleBackground from "../components/ParticleBackground.vue";
export default {
  name: "SinglePost",
  components: { SanityBlocks, ParticleBackground },
  data() {
    return {
      loading: true,
      post: [],
      blocks: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          this.blocks = post.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>
.content {
  width: 90vw;
  position: relative;
  margin: auto;
  top: 18vw;
  text-overflow: ellipsis;
  z-index: +10;
  opacity: 0;
  animation: contAnim 1s forwards;
  animation-delay: 0.4s;
}

@keyframes contAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
h2 {
  font-weight: normal;
  margin-top: 5vw;
  font-size: 4.5vw;
  width: 66%;

  padding-bottom: 2vw;
}

.img-container {
  position: relative;
  width: 90vw;
  height: 90vw;
  overflow: hidden;
  margin: auto;
  background-color: none;
}
.album-image {
  position: relative;
  display: block;
  width: 100%;
  margin: auto;
}
.play-link-container {
  position: absolute;
  width: 24vw;
  height: 10vw;
  float: right;
  top: 95.5vw;
  right: 0;
}

.release-transition-three {
  position: fixed;
  top: 0;
  left: 0%;
  background: white;
  height: 100%;
  width: 100vw;
  overflow: hidden;

  z-index: +20;
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

.play-link {
  position: absolute;
  width: 28%;
}
.spotify {
  left: 0;
  cursor: pointer;
}
.apple {
  left: 50%;
  transform: translateX(-50%);
}
.bandcamp {
  right: 0;
}
.infos {
}

.infos > div {
  width: 100%;
  height: 2vw;
  position: relative;
  margin-top: 10vw;
}

.more-info-container-one {
  text-transform: capitalize;
  top: -4vw;
  width: 100vw;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  padding-bottom: 15vw;

  position: relative;
}

.more-info-container-one > div {
  width: 30vw;
  background: none;
  padding-bottom: 2vw;
  margin-top: -5vw;
  position: relative;
  background: none;
  margin-left: none;
}

.release-info-container {
}
.info-one {
}
.info-two {
}
.info-three {
}

h3 {
  font-size: 3.4vw;
  color: black;
  font-weight: normal;
}

.info-cms {
  margin-top: -2.4vw;
  color: rgb(134, 134, 134);
}

.producers {
  margin-top: 7vw;
}

.container-three {
  margin-top: -3vw;
  clear: both;
}

.info-bottom {
  position: relative;
  margin-top: 30vw;
  padding-bottom: 10vw;
}

.bottom-info {
  position: relative;
  float: right;
  width: 60vw;
  font-size: 3.2vw;
  text-align: right;
}

.go-back {
  text-transform: capitalize;
  font-size: 4.2vw;
  text-decoration: underline;
  cursor: pointer;
}
.container-three {
  padding-bottom: 0vw;
}
@media (min-aspect-ratio: 200/200) {
  .content {
    top: 4vw;
    width: 30vw;
  }
  .img-container {
    width: 30vw;
    height: 30vw;
    margin: auto;
  }
  h2 {
    margin-top: 1.9vw;
    font-size: 1.6vw;
    width: 70%;
    padding-bottom: 0.2vw;
  }
  .play-link-container {
    width: 8vw;
    height: 7vw;
    right: 0;
    position: absolute;
    top: 32vw;
  }

  .play-link {
    position: absolute;
    width: 28%;
  }
  .spotify {
    left: 0;
  }
  .apple {
    left: 50%;
    transform: translateX(-50%);
  }
  .bandcamp {
    right: 0;
  }
  .infos {
    margin-top: 0vw;
  }
  .more-info-container-one {
    position: relative;
    margin-top: 0vw;
    width: 100%;
    height: 4vw;
    top: -5.5vw;
  }

  .more-info-container-one > div {
    width: 10vw;
    background: none;
    padding-bottom: 2vw;
    margin-top: -3.5vw;
    position: relative;
    background: none;
    margin-left: none;
  }

  .info-cms {
    margin-top: -0.9vw;
  }
  .producers {
    margin-top: -16.5vw;
  }

  h3 {
    font-size: 1.1vw;
    color: black;
    font-weight: normal;
  }

  .info-bottom {
    position: relative;
    margin-top: 0vw;
    padding-bottom: 10vw;
  }

  .bottom-info {
    position: relative;
    float: right;
    width: 60vw;
    font-size: 0.9vw;
    text-align: right;
    top: -3.6vw;
    margin-top: -0.4vw;
  }

  .go-back {
    text-transform: capitalize;
    font-size: 1.5vw;
    text-decoration: underline;
  }
}
</style>
