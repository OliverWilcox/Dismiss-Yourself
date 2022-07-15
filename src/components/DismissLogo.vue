<template>
  <div class="logo-container">
    <router-link to="/">
      <div class="dismiss-logo">
        <img src="../assets/metal-dismiss.png" alt="" class="logo-img" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.dismiss-logo {
  position: fixed;
  width: 10vw;
  height: 16vw;
  cursor: pointer;
}
.logo-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
}
@media (min-aspect-ratio: 200/200) {
  .dismiss-logo {
    width: 6vw;
    height: 7vw;
  }
  .logo-img {
    width: 60%;
  }
}
</style>
