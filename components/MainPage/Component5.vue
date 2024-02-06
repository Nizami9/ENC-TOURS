<!-- components/Parallax.vue -->
<template>
  <div>
    <div class="parallax"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.parallax {
  /* The image used */
  background-image: url("@/assets/images/az1.jpeg");
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
