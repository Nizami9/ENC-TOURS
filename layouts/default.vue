<template>
  <div class="relative">
    <div v-if="loading" class="loading-overlay flex">
      <img
        src="@/assets/images/enc_gif.gif"
        alt="Logo"
        class="loading-logo p-4 m-auto items-center pr-5"
      />
    </div>
    <div v-if="!loading" class="relative">
      <Navbar
        @scroll="updateNavbarBackground"
        class="absolute z-10 m-auto text-center"
      ></Navbar>
      <slot></slot>
      <comp-footer></comp-footer>
    </div>
  </div>
</template>

<script setup>
import Navbar from "~~/components/NavBar2.vue";

const loading = ref(true);
const navbarBackgroundColor = ref("rgba(199, 191, 191, 0.5)");

const updateNavbarBackground = (isScrolled) => {
  navbarBackgroundColor.value = isScrolled
    ? "rgba(0, 0, 0, 1)"
    : "rgba(199, 191, 191, 0.4)";
};

setTimeout(() => {
  loading.value = false;
}, 3000);
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-logo {
  width: 180px;
  height: 180px;
  animation: fadeInOut 2s infinite alternate;
}

* {
  font-family: "Droid Serif", serif;
  font-weight: 400;
  font-style: normal;
}

@keyframes fadeInOut {
  from {
    opacity: 0.2;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
