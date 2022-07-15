<template>
  <div class="logo-container">
    <DismissLogo />
  </div>
  <Menu />
  <router-view />
</template>
<script>
import Menu from "./components/menu.vue";
import DismissLogo from "./components/DismissLogo.vue";

export default {
  name: "App",
  components: {
    Menu,
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
  z-index: +5;
  position: fixed;
}
</style>
