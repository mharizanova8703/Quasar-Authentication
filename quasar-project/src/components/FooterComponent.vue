<template>
  <q-footer class="bg-primary text-white text-center">
    <div class="footer-links flex justify-center">
    </div>
    <div class="social-icons flex justify-center">
      <q-btn
        flat
        dense
        round
        icon="fab fa-facebook"
        href="https://www.facebook.com"
        target="_blank"
        class="q-mx-sm text-black"
        aria-label="Facebook"
      />
      <q-btn
        flat
        dense
        round
        icon="fab fa-twitter"
        href="https://www.twitter.com"
        target="_blank"
        class="q-mx-sm text-black"
        aria-label="Twitter"
      />
      <q-btn
        flat
        dense
        round
        icon="fab fa-instagram"
        href="https://www.instagram.com"
        target="_blank"
        class="q-mx-sm text-black"
        aria-label="Instagram"
      />
      <q-btn
        flat
        dense
        round
        icon="fab fa-linkedin"
        href="https://www.linkedin.com"
        target="_blank"
        class="q-mx-sm text-black"
        aria-label="LinkedIn"
      />
    </div>
  </q-footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer-links {
  padding: 0.4rem;
}
.social-icons {
  margin: 0.4rem;
}
</style>
