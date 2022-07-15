<template>
  <div class="glass-head">
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
@media (min-aspect-ratio: 200/200) {
  .glass-head {
    width: 40vw;
    height: 40vw;
  }
}
</style>
