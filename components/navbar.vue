<template>
  <header
    class="bg-gray-50 text-white"
    :style="{
      backgroundColor: navbarBackgroundColor,
      transition: 'background-color 0.5s ease',
    }"
  >
    <nav
      class="mx-auto flex w-8xl items-center justify-between p-0.5 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center gap-x-14">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">ENC TOURS</span>
          <img
            class="h-14 w-auto"
            src="@/assets/images/enctours_logo.png"
            alt=""
          />
        </a>
        <div class="hidden lg:flex lg:gap-x-8">
          <template v-for="(item, index) in navigation" :key="item.name">
            <NuxtLink
              :to="localePath(item.href)"
              class="text-sm font-semibold leading-6 text-white"
            >
              {{ item.name }}
            </NuxtLink>
            {{ index < navigation.length - 1 ? "|" : "" }}
          </template>
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
        <select v-model="locale" class="mr-10 pl-0.5 bg-gray-800 bg-opacity-10">
          <option value="en">🇬🇧</option>
          <option value="de">🇩🇪</option>
          <option value="jp">🇯🇵</option>
          <option value="es">🇪🇦</option>
          <option value="it">🇮🇹</option>
          <option value="fr">🇫🇷</option>
          <option value="pt">🇵🇹</option>
          <option value="kr">🇰🇷</option>
        </select>
        <NuxtLink
          :to="localePath('/aboutUs')"
          class="text-sm font-semibold leading-6 mr-10"
          >{{ $t("aboutUs") }}</NuxtLink
        >
        <NuxtLink
          :to="localePath('/contactUs')"
          class="text-sm font-semibold leading-6"
        >
          <p>{{ $t("contacts") }}</p>
        </NuxtLink>
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
            <span class="sr-only">ENC TOURS</span>
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
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</NuxtLink
              >
            </div>
            <div class="py-6 uppercase">
              <div class="">
                <select v-model="locale" class="bg-opacity-10 bg-white">
                  <option value="en">🇬🇧</option>
                  <option value="de">🇩🇪</option>
                  <option value="jp">🇯🇵</option>
                  <option value="es">🇪🇦</option>
                  <option value="it">🇮🇹</option>
                  <option value="fr">🇫🇷</option>
                  <option value="pt">🇵🇹</option>
                  <option value="kr">🇰🇷</option>
                </select>
              </div>
              <NuxtLink
                :to="localePath('/aboutUs')"
                class="-mx-3 uppercase block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >{{ $t("aboutUs") }}</NuxtLink
              >
              <NuxtLink
                :to="localePath('/contactUs')"
                class="-mx-3 uppercase block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >{{ $t("contacts") }}</NuxtLink
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
import { useI18n } from "vue-i18n";
const { locale, t: $t } = useI18n();
const localePath = useLocalePath();
const { emit } = getCurrentInstance();
const mobileMenuOpen = ref(false);
const navbarBackgroundColor = ref("rgba(199, 191, 191, 0.5)");
const scrolled = ref(false);
const navigation = ref([]);

const navigationItems = [
  { name: "home", key: "home", href: "/" },
  { name: "az", key: "az", href: "/azerbaijan" },
  { name: "tours", key: "tours", href: "/tours" },
  { name: "ourServ", key: "ourServ", href: "/ourservices" },
  { name: "encLux", key: "encLux", href: "/luxury" },
  { name: "mice", key: "mice", href: "/mice" },
];

const handleScroll = () => {
  scrolled.value = document.documentElement.scrollTop > 0;
  emit("scroll", scrolled.value);
};

const updateNavigation = () => {
  navigation.value = navigationItems.map((item) => ({
    name: $t(item.key),
    href: item.href,
  }));
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(locale, () => {
  updateNavigation();
});

watchEffect(() => {
  navbarBackgroundColor.value = scrolled.value
    ? "rgba(0, 0, 0, 0.9)"
    : "rgba(0, 0, 0, 0.4)";
});

updateNavigation();
</script>
