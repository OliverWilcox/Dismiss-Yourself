<template>
  <div id="home">
    <DismissHead />
    <SpinningLogo />
    <ReleaseBar />
    <InfoBottom />
  </div>
</template>

<script>
import DismissHead from "../components/DismissHead.vue";
import SpinningLogo from "../components/SpinningLogo.vue";
import ReleaseBar from "../components/ReleaseBar.vue";
import InfoBottom from "../components/InfoBottom.vue";
export default {
  name: "App",
  components: {
    DismissHead,
    SpinningLogo,
    ReleaseBar,
    InfoBottom,
  },
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
</style>
