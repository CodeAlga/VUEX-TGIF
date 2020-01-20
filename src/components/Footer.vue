<template>
  <div>
    <footer class="footer bg-light">
      <div class="container-fluid">
        <p class="bg-light text-muted text-center no-gutters mb-0 py-3" v-html="copyright"></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyright: '&#169; 2016 TGIF | All Rights Reserved',
    };
  },
};
</script>

<style></style>
