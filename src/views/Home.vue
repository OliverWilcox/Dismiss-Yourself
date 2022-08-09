<template>
  <div id="home">
    <DismissHead />
    <InfoBottom />
    <router-link to="releases">
      <div class="release-transition" ref="releaseTransition"></div>
      <div class="release-bar">
        <div class="release-fill"></div>
        <h1 class="releases-text">view releases</h1>
      </div>
    </router-link>
  </div>
</template>

<script>
import DismissHead from "../components/DismissHead.vue";
import InfoBottom from "../components/InfoBottom.vue";

export default {
  name: "Home",
  components: {
    DismissHead,
    InfoBottom,
  },
  data: () => ({}),
};
</script>

<style>
#home {
  font-family: sk-modernist;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  text-transform: uppercase;
}

a {
  text-decoration: none;
  color: black;
}
.release-bar {
  bottom: 15.5vw;
  right: -6.8vw;
  background: rgb(255, 255, 255);
  transform: rotate(-90deg);
  z-index: +5;
  overflow: hidden;
  height: 4.5vw;
  position: fixed;
}

.release-fill {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  animation: fill 1s forwards;
  animation-delay: 0.6s;
  z-index: +2;
}

@keyframes fill {
  0% {
    height: 120%;
  }
  100% {
    height: 0%;
  }
}

.releases-text {
  position: relative;

  font-size: 3.5vw;
  top: 0vw;
  font-weight: normal;

  margin-top: 0vw;
  text-align: left;
  transition: 0.6s;
}

.releaseTextActive {
}

.home-text {
  position: relative;

  font-size: 3.5vw;
  top: 0vw;
  font-weight: normal;

  margin: 0;
  text-align: left;
  transition: 0.6s;
  transition-delay: 0.2s;
  top: 0vw;
}

.homeTextActive {
  top: -4vw;
  transition-delay: 1s;
}

@keyframes scale-up-ver-bottom {
  0% {
    -webkit-transform: scaleX(0.1);
    transform: scaleX(0.1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
  }
}
@media (min-aspect-ratio: 200/200) {
  .release-bar {
    right: -3.6vw;
    bottom: 5vw;
    background: none;
  }
  .releases-text {
    font-size: 1.3vw;
  }
}
</style>
