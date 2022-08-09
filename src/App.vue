<template>
  <Menu />
  <ReleaseBar />
  <div class="logo-container">
    <DismissLogo />
  </div>

  <router-view />
</template>
<script>
import Menu from "./components/menu.vue";
import ReleaseBar from "./components/ReleaseBar.vue";
import DismissLogo from "./components/DismissLogo.vue";

export default {
  name: "App",
  components: {
    Menu,
    ReleaseBar,
    DismissLogo,
  },
};
</script>

<style></style>
<style>
@font-face {
  font-family: sk-modernist;
  src: url(./assets/sk-modernist-webfont.woff);
}
body {
  background: rgb(255, 255, 255);
}
#app {
  font-family: sk-modernist;
  text-transform: uppercase;
}
.logo-container {
  z-index: +40;
  position: fixed;
}
</style>
