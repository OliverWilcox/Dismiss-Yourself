<template>
  <div class="contact">
    <h2 class="contact-title">Contact</h2>

    <p class="contact-info-page contact-one">
      For issues with orders placed on dismiss.store, please email
      <a href="mailto:support@dismissyourself.com">
        <span class="underline"> support@dismissyourself.com </span></a
      >
    </p>

    <p class="contact-info-page contact-two">
      For issues with orders placed on Bandcamp as well as any other inquiries,
      please email
      <a href="mailto:contact@dismissyourself.com"
        ><span class="underline"> contact@dismissyourself.com </span>
      </a>
    </p>
  </div>
  <ParticleBackground />
</template>

<script>
import ParticleBackground from "../components/ParticleBackground.vue";
export default {
  components: {
    ParticleBackground,
  },
};
</script>

<style scoped>
.contact {
  text-transform: none;
  margin-left: 2vw;
}
.underline {
  text-decoration: underline;
  text-transform: lowercase;
}

.contact-title {
  margin-top: 30vw;
  font-size: 25px;
}
.contact-info-page {
  margin-top: 25px;

  width: 90vw;
}

@media (min-aspect-ratio: 200/200) {
  .contact {
    transform: translateY(-50%);
    margin-top: 50vh;
    margin-left: 10vw;
  }
  .contact-title {
    font-size: 2.1vw;
    margin-top: 0;
  }
  .contact-info-page {
    margin-top: 1.5vw;
    font-size: 1.2vw;
    width: 40vw;
  }
}
</style>
