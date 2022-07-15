<template>
  <div class="all-info-container">
    <div class="loading" v-if="loading">Loading...</div>

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
          <div class="release-info-container info-one">
            <h3 class="release-info date">Release Date</h3>
            <h3 class="release-info date info-cms">{{ post.releaseDate }}</h3>
          </div>
          <div class="release-info-container info-two">
            <h3 class="release-info type">Release Type</h3>
            <h3 class="release-info date info-cms">{{ post.releaseType }}</h3>
          </div>
          <div class="release-info-container info-three">
            <h3 class="release-info anr">A&R</h3>
            <h3 class="release-info date info-cms">
              {{ post.anr }}
            </h3>
          </div>
        </div>
        <div class="more-info-container-one">
          <div class="release-info-container info-one">
            <h3 class="release-info date">Genre</h3>
            <h3 class="release-info date info-cms">{{ post.genre }}</h3>
          </div>
          <div class="release-info-container info-two">
            <h3 class="release-info type">Release Number</h3>
            <h3 class="release-info date info-cms">{{ post.releaseNum }}</h3>
          </div>
        </div>
        <h3 class="producers">Producers</h3>
        <div class="more-info-container-one container-three">
          <div class="release-info-container info-one">
            <h3 class="release-info date">mastering</h3>
            <h3 class="release-info date info-cms">{{ post.mastering }}</h3>
          </div>
          <div class="release-info-container info-two">
            <h3 class="release-info type">mixing</h3>
            <h3 class="release-info date info-cms">{{ post.mixing }}</h3>
          </div>
          <div class="release-info-container info-three">
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

export default {
  name: "SinglePost",
  components: { SanityBlocks },
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
  width: 90.5vw;
  height: 94vw;
  overflow: hidden;
  background-color: lightgrey;
}
.album-image {
  position: relative;
  display: block;
  width: 105%;
  margin: auto;
}
.play-link-container {
  position: absolute;
  width: 24vw;
  height: 10vw;
  float: right;
  top: 99vw;
  right: 0;
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
  text-transform: capitalize;
  margin-top: 0vw;
}
.more-info-container-one {
  position: relative;
  margin-top: 0vw;
  width: 100%;
  height: 15vw;
}
.release-info-container {
  position: absolute;

  width: 32vw;
  height: 15vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-one {
  left: 0;
}
.info-two {
  left: 51%;
  transform: translateX(-50%);
}
.info-three {
  right: 0;
  width: 24vw;
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
  margin-top: 6.5vw;
}

.container-three {
  margin-top: -3vw;
}

.info-bottom {
  position: relative;
  margin-top: 15vw;
  padding-bottom: 10vw;
}

.bottom-info {
  position: relative;
  float: right;
  width: 60vw;
  font-size: 3.2vw;
  text-align: right;
  top: -10.3vw;
}

.go-back {
  text-transform: capitalize;
  font-size: 4.2vw;
  text-decoration: underline;
  cursor: pointer;
}
@media (min-aspect-ratio: 200/200) {
  .content {
    top: 4vw;
    width: 30vw;
  }
  .img-container {
    width: 30vw;
    height: 31vw;
    margin: auto;
  }
  h2 {
    margin-top: 1.9vw;
    font-size: 1.6vw;
    width: 70%;
    height: 5vw;
  }
  .play-link-container {
    width: 8vw;
    height: 7vw;
    right: 0;
    margin-top: -6.1vw;
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
  }
  .release-info-container {
    width: 5vw;
    height: 4vw;
    width: 8vw;
  }
  .info-one {
    left: 0;
  }
  .info-two {
    left: 50%;
    transform: translateX(-50%);
  }
  .info-three {
    right: 0;
  }
  .info-cms {
    margin-top: -0.9vw;
  }
  .producers {
    margin-top: 4vw;
  }

  h3 {
    font-size: 1.1vw;
    color: black;
    font-weight: normal;
  }

  .info-bottom {
    position: relative;
    margin-top: 5vw;
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
