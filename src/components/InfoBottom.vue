<template>
  <div class="info-bottom">
    <router-link to="contact">
      <h3 class="bottom-info info-three-bottom">
        <div class="info-fill"></div>
        <span class="underline">CONTACT US</span>
      </h3>
    </router-link>
    <h3 class="bottom-info info-one-bottom">
      <div class="info-fill"></div>
      SHOP :
      <a href="https://dismiss.store/"
        ><span class="underline">DISMISS.STORE</span></a
      >
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  cursor: pointer;
}
.info-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: +10;
}

.bottom-info {
  position: relative;
  font-size: 3.2vw;
  font-weight: normal;
  margin-top: -2vw;
  top: -1vw;
  margin-left: 3vw;
  text-align: left;
}

.info-fill {
  position: absolute;
  height: 4vw;
  width: 45vw;
  top: 0%;

  left: 0vw;
  z-index: +1;
  background: rgb(255, 255, 255);
  animation: info-fill 1s forwards;
  animation-delay: 0.6s;
}

@keyframes info-fill {
  0% {
    height: 5vw;
  }
  100% {
    height: 0vw;
  }
}

.info-two-bottom {
  color: rgb(115, 115, 115);
}

.underline {
  text-decoration: underline;
  cursor: pointer;
}
@media (min-aspect-ratio: 200/200) {
  .bottom-info {
    position: relative;
    font-size: 1.2vw;
    font-weight: normal;
    margin-top: -0.8vw;
    top: -1.2vw;

    margin-left: 3vw;
    text-align: left;
  }
}
</style>
