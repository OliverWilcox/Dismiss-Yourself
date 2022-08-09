<template>
  <div class="logo-container">
    <router-link to="/">
      <div class="dismiss-logo">
        <div class="logo-fill"></div>
        <img src="../assets/metal-dismiss.png" alt="" class="logo-img" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo-container {
  position: fixed;
  top: 1vw;
}
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
.logo-fill {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: +1;
  background: white;
  animation: logo-animation 1s forwards;
  animation-delay: 0.6s;
}
@keyframes logo-animation {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
@media (min-aspect-ratio: 200/200) {
  .logo-container {
    position: fixed;
    top: 0.5vw;
  }
  .dismiss-logo {
    width: 6vw;
    height: 7vw;
  }
  .logo-img {
    width: 60%;
  }
}
</style>
