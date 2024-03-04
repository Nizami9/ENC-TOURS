<!-- <template>
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
          <NuxtLink to="/mice" class="nav-link">Mice</NuxtLink>
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
</style> -->

<template>
  <header
    class="bg-gray-50 text-white"
    :style="{
      backgroundColor: navbarBackgroundColor,
      transition: 'background-color 0.5s ease',
    }"
  >
    <nav
      class="mx-auto flex w-8xl items-center justify-between p-2 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center gap-x-14">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-14 w-auto" src="@/assets/images/enclogo.png" alt="" />
        </a>
        <div class="hidden lg:flex lg:gap-x-14">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-white"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex">
          <select v-model="locale" class="mr-10 pl-0.5 bg-gray-800 bg-opacity-50">
            <option value="en">🇬🇧</option>
            <option value="de">🇩🇪</option>
            <option value="uk">🇯🇵</option>
            <option value="es">🇪🇦</option>
            <option value="tr">🇮🇹</option>
            <option value="az">🇫🇷</option>
            <option value="uk">🇵🇹</option>
            <option value="uk">🇰🇷</option>
          </select>
        <a href="../../aboutUs" class="text-sm font-semibold leading-6 mr-10"
          >About Us</a
        >
        <a href="../../contactUs" class="text-sm font-semibold leading-6"
          >Contacts</a
        >
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-14 w-auto" src="@/assets/images/enclogo.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="qXMarkIcon h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6 uppercase">
              <div class="">
                <select v-model="locale" class="bg-opacity-10 bg-white">
                  <option value="en">🇬🇧</option>
                  <option value="de">🇩🇪</option>
                  <option value="uk">🇯🇵</option>
                  <option value="es">🇪🇦</option>
                  <option value="tr">🇮🇹</option>
                  <option value="az">🇫🇷</option>
                  <option value="uk">🇵🇹</option>
                  <option value="uk">🇰🇷</option>
                </select>
              </div>
              <a
                href="../../aboutUs.vue"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >about us</a
              >
              <a
                href="../../contactUs.vue"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >contacts</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { onMounted, onUnmounted, watchEffect, getCurrentInstance } from "vue";
const { locale } = useI18n();
import { useI18n } from "#imports";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "AZERBAIJAN", href: "../../azerbaijan" },
  { name: "TOURS", href: "../../tours" },
  { name: "SERVICES", href: "../../ourservices" },
  { name: "PHOTOGALLERY", href: "../../photos" },
  { name: "ENC LUXURY", href: "../../luxury" },
  { name: "MICE", href: "../../mice" },
];
const { emit } = getCurrentInstance();
const mobileMenuOpen = ref(false);
const navbarBackgroundColor = ref("rgba(199, 191, 191, 0.5)");
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

watchEffect(() => {
  navbarBackgroundColor.value = scrolled.value
    ? "rgba(0, 0, 0, 0.9)"
    : "rgba(0, 0, 0, 0.4)";
});
</script>
