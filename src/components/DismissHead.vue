<template>
  <div class="glass-head">
    <div class="white-fill"></div>
    <img src="../assets/glass-head.png" alt="" class="glass-image" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.glass-head {
  position: fixed;
  width: 85vw;
  height: 85vw;
  left: 50%;
  top: 50%;
  position: absolute;
  overflow: hidden;
  transform: translate(-50%, -50%);
}
.glass-image {
  position: fixed;
  display: block;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 100%;
}

.grey-fill {
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: +2;
  background: rgb(243, 243, 243);
  animation: grey-fill 0.7s forwards;
}

@keyframes grey-fill {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
.white-fill {
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: +1;
  background: rgb(255, 255, 255);
  animation: white-fill 0.7s forwards;
  animation-delay: 0.6s;
}

@keyframes white-fill {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
@media (min-aspect-ratio: 200/200) {
  .glass-head {
    width: 40vw;
    height: 40vw;
  }
}
</style>
