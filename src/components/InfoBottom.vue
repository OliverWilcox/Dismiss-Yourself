<template>
  <div class="info-bottom">
    <h3 class="bottom-info info-one-bottom">
      SHOP :
      <span class="underline"
        ><a href="https://dismiss.store/">DISMISS.STORE</a></span
      >
    </h3>
    <h3 class="bottom-info info-two-bottom">C DISMISS YOURSELF 2022</h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
.info-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
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
