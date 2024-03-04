<template>
  <div class="relative">
    <div v-if="loading" class="loading-overlay">
      <img src="@/assets/images/enc.png" alt="Logo" class="loading-logo" />
    </div>
    <div v-if="!loading" class="relative">
      <navbar @scroll="updateNavbarBackground" class="fixed z-10 w-full"></navbar>
      <slot></slot>
      <comp-footer></comp-footer>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { locale, setLocale } = useI18n();
const loading = ref(true);
const navbarBackgroundColor = ref("rgba(199, 191, 191, 0.5)");

const updateNavbarBackground = (isScrolled) => {
  navbarBackgroundColor.value = isScrolled
    ? "rgba(0, 0, 0, 1)"
    : "rgba(199, 191, 191, 0.4)";
};

setTimeout(() => {
  loading.value = false;
}, 1500);
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
  width: 150px;
  height: 150px;
  border: 2px solid #333;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
    transform: scale(1);
  }
  to {
    opacity: 1;
    transform: scale(1.3);
  }
}
</style>
