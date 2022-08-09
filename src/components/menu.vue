<template>
  <div class="bg-blur" v-bind:class="{ blurActive: isBlurActive }"></div>
  <div class="nav" v-bind:class="{ navActive: isMenuOn }">
    <div
      class="menu-bar"
      v-on:click="(isMenuOn = !isMenuOn), (isBlurActive = !isBlurActive)"
    >
      <div class="menu-fill"></div>
      <h1 class="open" v-bind:class="{ menuBarActive: isMenuOn }">menu</h1>
      <h1 class="close" v-bind:class="{ closeActive: isMenuOn }">close</h1>
    </div>

    <div class="menu" v-bind:class="{ menuActive: isMenuOn }">
      <div class="menu-nav">
        <router-link to="/">
          <div class="nav-item-container" v-on:click="isMenuOn = false">
            <ul class="home-nav" v-bind:class="{ homeActive: isMenuOn }">
              home
            </ul>
          </div>
        </router-link>
        <router-link to="releases">
          <div class="nav-item-container" v-on:click="isMenuOn = false">
            <ul
              class="releases-nav"
              v-bind:class="{ releasesActive: isMenuOn }"
            >
              releases
            </ul>
          </div>
        </router-link>
        <router-link to="/contact">
          <div class="nav-item-container" v-on:click="isMenuOn = false">
            <ul
              class="releases-nav"
              v-bind:class="{ releasesActive: isMenuOn }"
            >
              contact
            </ul>
          </div>
        </router-link>
        <a href="https://dismiss.store/">
          <div class="nav-item-container" v-on:click="isMenuOn = false">
            <ul class="shop-nav" v-bind:class="{ shopActive: isMenuOn }">
              shop
            </ul>
          </div>
        </a>
      </div>
      <div class="socials-container">
        <a href="https://dismissyourself.bandcamp.com/">
          <div class="social-item-container" v-on:click="isMenuOn = false">
            <ul class="social" v-bind:class="{ oneActive: isMenuOn }">
              bandcamp
            </ul>
          </div>
        </a>
        <a
          href="https://twitter.com/dismissyxurself?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        >
          <div class="social-item-container" v-on:click="isMenuOn = false">
            <ul class="social" v-bind:class="{ twoActive: isMenuOn }">
              twitter
            </ul>
          </div>
        </a>
        <a href="https://www.instagram.com/dismissyourselfx/?hl=en">
          <div class="social-item-container" v-on:click="isMenuOn = false">
            <ul class="social" v-bind:class="{ threeActive: isMenuOn }">
              instagram
            </ul>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    isMenuOn: false,
    isBlurActive: false,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  position: fixed;
  z-index: +40;
  transition: 1s;
}
.navActive {
  top: 0;

  width: 100%;
  height: 100%;
}

.menu-bar {
  right: 3vw;
  overflow: hidden;
  height: 17.5vw;
  width: 6vw;
  top: 0vw;
  background: rgb(255, 255, 255);
  z-index: +5;
  position: fixed;
  cursor: pointer;
}
.menu-bar h1 {
  position: absolute;
  top: 5.5vw;
  left: 0.9vw;
  font-size: 3.5vw;
  font-weight: normal;
  transform: rotate(-90deg);
  transition: 0.5s;
  color: rgb(0, 0, 0);
}

.open {
  margin-left: -3vw;
}

.close {
  margin-left: 5vw;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.5s;
  margin-top: 2.5vw;
}

.menuBarActive {
  margin-left: -10vw;
}

.closeActive {
  margin-left: -4vw;
  margin-top: 2.5vw;
}
.menu {
  position: fixed;
  top: 0;
  left: 100%;
  background: white;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  opacity: 0;
  z-index: -1;
}
.menu-nav {
  padding-top: 1vw;
  padding-bottom: 1vw;
  background: none;
  margin-top: 36.5vh;
  margin-left: 0vw;
  transform: translateY(-50%);
}
.nav-item-container {
  width: 80vw;
  height: 13vw;
  background: none;
  margin-top: -11vw;
  margin-left: -20px;
}

.home-nav,
.releases-nav,
.shop-nav,
.forum-nav {
  font-size: 12vw;
  margin-left: -70vw;
  transition: 0.5s;
}

.homeActive {
  margin-left: 0vw;
  visibility: visible;
  transition-delay: 0.3s;
  opacity: 1;
}

.releasesActive {
  margin-left: 0vw;
  opacity: 1;
  transition-delay: 0.335s;
}

.shopActive {
  margin-left: 0vw;
  transition-delay: 0.35s;
  opacity: 1;
}

.forumActive {
  margin-left: 0vw;
  opacity: 1;
  transition-delay: 0.375s;
}

.socials-container {
  position: absolute;
  bottom: 0.5vh;
  margin-left: -20px;
}

.social-item-container {
  position: relative;
  margin-left: -70vw;
  margin-top: -15px;
}

.social {
  transition: 0.5s;
}

.oneActive {
  margin-left: 70vw;
  opacity: 1;
  transition-delay: 0.3s;
}

.twoActive {
  margin-left: 70vw;
  opacity: 1;
  transition-delay: 0.3455s;
}

.threeActive {
  margin-left: 70vw;
  opacity: 1;
  transition-delay: 0.375s;
}

.menu-fill {
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
    width: 120%;
  }
  100% {
    width: 0%;
  }
}

@keyframes scale-up-ver-bottom {
  0% {
    -webkit-transform: scaleX(0.1);
    transform: scaleX(0.1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
}

@keyframes scale-up-ver-top {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
  100% {
    -webkit-transform: scaleX(0.1);
    transform: scaleX(0.1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
}

.menuActive {
  left: 0;
  animation: scale-up-ver-bottom 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)
    forwards;
  z-index: +1;
  display: block;
  opacity: 1;
}
@media (min-aspect-ratio: 200/200) {
  .menu-bar {
    right: 1.5vw;

    height: 8vw;
    width: 2vw;
  }
  .menu-bar h1 {
    position: absolute;
    top: 2.5vw;
    left: 2vw;
    font-size: 1.3vw;
    font-weight: normal;
    transform: rotate(-90deg);
    transition: 0.5s;
    color: rgb(0, 0, 0);
  }
  .menuBarActive {
    margin-left: -6vw;
  }
  .close {
    margin-top: 1vw;
  }
  .closeActive {
    margin-left: -3.5vw;
  }
}
@media (min-aspect-ratio: 200/240) {
  .bg-blur {
    background: black;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    position: fixed;
    left: 0;
    top: 0;
    transition: 1s;
  }
  .blurActive {
    opacity: 0.05;
  }

  .menu {
    position: fixed;
    top: 0;
    left: 100%;
    background: white;
    height: 100%;
    width: 30vw;
    overflow: hidden;
    opacity: 0;
    z-index: -1;
  }
  .menu-nav {
    padding-top: 1vw;
    padding-bottom: 1vw;
    background: none;
    margin-top: 42.5vh;
    margin-left: -7vw;
    transform: translateY(-50%);
  }
  .nav-item-container {
    width: 20vw;
    height: 4vw;

    margin-top: -3.5vw;
    margin-left: 8vw;
  }

  .home-nav,
  .releases-nav,
  .shop-nav,
  .forum-nav {
    font-size: 4vw;
    margin-left: -70vw;
    transition: 0.5s;
  }

  .homeActive {
    margin-left: -2.5vw;
    visibility: visible;
    transition-delay: 0.3s;
    opacity: 1;
  }

  .releasesActive {
    margin-left: -2.5vw;

    opacity: 1;
    transition-delay: 0.335s;
  }

  .shopActive {
    margin-left: -2.5vw;

    transition-delay: 0.35s;
    opacity: 1;
  }

  .forumActive {
    margin-left: -2.5vw;

    opacity: 1;
    transition-delay: 0.375s;
  }

  .socials-container {
    position: absolute;
    bottom: 5vh;
    margin-left: -9vw;
  }

  .social-item-container {
    position: relative;
    margin-left: -70vw;
    margin-top: -10px;
  }

  .social {
    transition: 0.5s;
  }

  .oneActive {
    margin-left: 77.7vw;
    opacity: 1;
    transition-delay: 0.3s;
  }

  .twoActive {
    margin-left: 77.7vw;
    opacity: 1;
    transition-delay: 0.3455s;
  }

  .threeActive {
    margin-left: 77.7vw;
    opacity: 1;
    transition-delay: 0.375s;
  }

  @keyframes scale-up-ver-bottom {
    0% {
      -webkit-transform: scaleX(0.1);
      transform: scaleX(0.1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }

  @keyframes scale-up-ver-top {
    0% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scaleX(0.1);
      transform: scaleX(0.1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }

  .menuActive {
    left: 0;
    animation: scale-up-ver-bottom 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)
      forwards;
    z-index: +1;
    display: block;
    opacity: 1;
  }
  .menu-bar {
    background: none;
  }
}
</style>
