<template>
  <div
    class="main-section text-white bg-gray-50 md:text-xs w-full lg:text-sm xl:text-sm transition"
    :style="{
      backgroundColor: navbarBackgroundColor,
      transition: 'background-color 0.5s ease',
    }"
  >
    <div class="flex">
      <div class="mainlogo mr-4 m-auto">
        <img
          src="@/assets/images/enclogo2.png"
          alt="ENC logo"
          class="w-24 m-auto align-middle items-center"
        />
      </div>
      <div class="flex justify-between w-full md:ml-0 md:mr-0 p-5">
        <div class="flex main-nav-custom uppercase justify-between w-1/2">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/azerbaijan" class="nav-link">Azerbaijan</NuxtLink>
          <NuxtLink to="/tours" class="nav-link">Tours</NuxtLink>
          <NuxtLink to="/ourservices" class="nav-link">Our Services</NuxtLink>
          <NuxtLink to="/" class="nav-link">Photogallery</NuxtLink>
          <NuxtLink to="/luxury" class="nav-link">enc luxury</NuxtLink>
          <NuxtLink to="/" class="nav-link">Mice</NuxtLink>
        </div>
        <div class="w-1/5 notmain-nav-custom flex uppercase justify-between">
          <NuxtLink to="/aboutUs" class="nav-link">About Us</NuxtLink>
          <NuxtLink to="/contactUs" class="nav-link">Contact Us</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  watchEffect,
  getCurrentInstance,
} from "vue";

const { emit } = getCurrentInstance();

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = document.documentElement.scrollTop > 0;
  emit("scroll", scrolled.value);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navbarBackgroundColor = ref("rgba(199, 191, 191, 0.5)");

watchEffect(() => {
  navbarBackgroundColor.value = scrolled.value
    ? "rgba(0, 0, 0, 0.9)"
    : "rgba(0, 0, 0, 0)";
});
</script>

<style scoped>
.nav-link {
  cursor: pointer;
  margin: auto;
  padding-right: 25px;
  border-right: 1px solid white;
}

.nav-link:hover {
  scale: 95%;
  transition: all 100ms;
}
.main-nav-custom {
  @media (min-width: 600px) and (max-width: 800px) {
    width: 70%;
    font-size: xx-small;
    margin-left: 0%;
  }

  @media (min-width: 800px) and (max-width: 1060px) {
    width: 75%;
    font-size: smaller;
  }

  @media (min-width: 1061px) and (max-width: 1274px) {
    width: 65%;
  }

  @media (min-width: 1275px) and (max-width: 1439px) {
    width: 55%;
  }

  @media (min-width: 1439px) and (max-width: 2149px) {
    width: 60%;
  }

  @media (min-width: 2150px) {
    width: 30%;
  }
}

.notmain-nav-custom {
  @media (min-width: 600px) and (max-width: 800px) {
    width: 25%;
    font-size: xx-small;
  }
  @media (min-width: 800px) and (max-width: 1060px) {
    width: 25%;
    font-size: smaller;
  }

  @media (min-width: 1061px) and (max-width: 1274px) {
    width: 20%;
    font-size: smaller;
  }

  @media (min-width: 1275px) and (max-width: 1439) {
    width: 20%;
  }

  @media (min-width: 1439px) and (max-width: 2149px) {
    width: 20%;
  }

  @media (min-width: 2150px) {
    width: 10%;
  }
}

.mainlogo {
  @media (min-width: 600px) and (max-width: 800px) {
    width: 60px;
    margin-right: 0px;
    font-size: x-small;
  }
  @media (min-width: 800px) and (max-width: 1060px) {
    width: 10%;
    margin-right: 0px;
  }

  @media (min-width: 1061px) and (max-width: 1274px) {
    width: 20%;
  }

  @media (min-width: 1275px) and (max-width: 1439px) {
    width: 30%;
  }

  @media (min-width: 1439px) and (max-width: 2149px) {
    width: 10%;
  }

  @media (min-width: 2150px) {
    width: 5%;
    margin-right: 0px;
  }
}

.main-section {
  @media (min-width: 800px) and (max-width: 1060px) {
    padding: 0px;
  }
}
</style>
