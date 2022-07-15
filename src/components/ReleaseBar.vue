<template>
  <div class="release-bar">
    <router-link to="/releases"
      ><h1 class="releases-text">view releases</h1>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
.release-bar {
  bottom: 13.5vw;
  right: -6.8vw;
  background: rgb(255, 255, 255);
  transform: rotate(-90deg);
  z-index: +5;

  position: fixed;
}

.releases-text {
  position: relative;

  font-size: 3.5vw;

  font-weight: normal;

  text-align: left;

  transition: 0.5s;
}
@media (min-aspect-ratio: 200/200) {
  .release-bar {
    right: -2.5vw;
    bottom: 6vw;
    background: none;
  }
  .releases-text {
    font-size: 1.3vw;
  }
}
</style>
