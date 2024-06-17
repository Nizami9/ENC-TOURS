<!-- <template>
  <div class="w-full">
    <div
      class="w-full flex justify-between m-auto mt-8 h-20 items-center forDesktop"
    >
      <div class="flex w-10/12 m-auto justify-between items-center">
        <div class="w-52">
          <img
            src="@/assets/images/enctours_logo.png"
            alt="logo"
            style="width: 106px; height: 80px"
          />
        </div>
        <div v-for="item in navigation" :key="item.name">
          <NuxtLink
            :to="localePath(item.href)"
            class="text-sm font-semibold leading-6 text-white"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="relative flex">
          <img
            src="@/assets/images/Group.png"
            class="mr-1"
            @click="toggleSelectVisibility"
            style="cursor: pointer"
          />
          <select
            v-show="isSelectVisible"
            v-model="locale"
            class="bg-opacity-0 bg-white"
            @change="hideSelect"
          >
            <option value="en">🇬🇧</option>
            <option value="de">🇩🇪</option>
            <option value="jp">🇯🇵</option>
            <option value="es">🇪🇸</option>
            <option value="it">🇮🇹</option>
            <option value="fr">🇫🇷</option>
            <option value="pt">🇵🇹</option>
            <option value="kr">🇰🇷</option>
          </select>
        </div>
      </div>
    </div>
    <div class="forMobile w-full p-2">
      <div class="w-full flex justify-between">
        <img src="@/assets/images/enctours_logo.png" class="w-24" alt="" />
        <Bars3Icon class="h-8 w-8 m-3 text-white" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const { locale, t: $t } = useI18n();
const navigation = ref([]);
const isSelectVisible = ref(false);

const navigationItems = [
  { name: "home", key: "home", href: "/" },
  { name: "az", key: "az", href: "/azerbaijan" },
  { name: "ourServ", key: "ourServ", href: "/ourservices" },
  { name: "tours", key: "tours", href: "/tours" },
  { name: "encLux", key: "encLux", href: "/luxury" },
  { name: "mice", key: "mice", href: "/mice" },
  { name: "aboutUs", key: "aboutUs", href: "/aboutUs" },
];

const updateNavigation = () => {
  navigation.value = navigationItems.map((item) => ({
    name: $t(item.key),
    href: item.href,
  }));
};

watch(locale, () => {
  updateNavigation();
});

updateNavigation();

const toggleSelectVisibility = () => {
  isSelectVisible.value = !isSelectVisible.value;
};

const hideSelect = () => {
  isSelectVisible.value = false;
};
</script>

<style scoped>
* {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}

.forDesktop {
  @media (min-width: 200px) and (max-width: 768px) {
    display: none;
  }
}

.forMobile {
  @media (min-width: 768px) and (max-width: 5000px) {
    display: none;
  }
}
</style> -->


<template>
  <div class="w-full">
    <div class="w-full flex justify-between m-auto mt-8 h-20 items-center forDesktop">
      <div class="flex w-10/12 m-auto justify-between items-center">
        <div class="w-52">
          <img src="@/assets/images/enctours_logo.png" alt="logo" style="width: 106px; height: 80px" />
        </div>
        <div v-for="item in navigation" :key="item.name">
          <NuxtLink :to="localePath(item.href)" class="text-sm font-semibold leading-6 text-white">
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="relative flex">
          <img src="@/assets/images/Group.png" class="mr-1" @click="toggleSelectVisibility" style="cursor: pointer" />
          <select v-show="isSelectVisible" v-model="locale" class="bg-opacity-0 bg-white" @change="hideSelect">
            <option value="en">🇬🇧</option>
            <option value="de">🇩🇪</option>
            <option value="jp">🇯🇵</option>
            <option value="es">🇪🇸</option>
            <option value="it">🇮🇹</option>
            <option value="fr">🇫🇷</option>
            <option value="pt">🇵🇹</option>
            <option value="kr">🇰🇷</option>
          </select>
        </div>
      </div>
    </div>
    <div class="forMobile w-full p-2">
      <div class="w-full flex justify-between">
        <img src="@/assets/images/enctours_logo.png" class="w-24" alt="" />
        <button @click="mobileMenuOpen = true">
          <Bars3Icon class="h-8 w-8 m-3 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dialog -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">ENC TOURS</span>
            <img class="h-14 w-auto" src="@/assets/images/enclogo.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="qXMarkIcon h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                {{ item.name }}
              </NuxtLink>
            </div>
            <div class="py-6 uppercase">
              <div>
                <select v-model="locale" class="bg-opacity-10 bg-white">
                  <option value="en">🇬🇧</option>
                  <option value="de">🇩🇪</option>
                  <option value="jp">🇯🇵</option>
                  <option value="es">🇪🇸</option>
                  <option value="it">🇮🇹</option>
                  <option value="fr">🇫🇷</option>
                  <option value="pt">🇵🇹</option>
                  <option value="kr">🇰🇷</option>
                </select>
              </div>
              <NuxtLink :to="localePath('/aboutUs')" class="-mx-3 uppercase block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">
                {{ $t("aboutUs") }}
              </NuxtLink>
              <NuxtLink :to="localePath('/contactUs')" class="-mx-3 uppercase block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">
                {{ $t("contacts") }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const { locale, t: $t } = useI18n();
const navigation = ref([]);
const isSelectVisible = ref(false);
const mobileMenuOpen = ref(false);

const navigationItems = [
  { name: "home", key: "home", href: "/" },
  { name: "az", key: "az", href: "/azerbaijan" },
  { name: "ourServ", key: "ourServ", href: "/ourservices" },
  { name: "tours", key: "tours", href: "/tours" },
  { name: "encLux", key: "encLux", href: "/luxury" },
  { name: "mice", key: "mice", href: "/mice" },
  { name: "aboutUs", key: "aboutUs", href: "/aboutUs" },
];

const updateNavigation = () => {
  navigation.value = navigationItems.map((item) => ({
    name: $t(item.key),
    href: item.href,
  }));
};

watch(locale, () => {
  updateNavigation();
});

updateNavigation();

const toggleSelectVisibility = () => {
  isSelectVisible.value = !isSelectVisible.value;
};

const hideSelect = () => {
  isSelectVisible.value = false;
};
</script>

<style scoped>
* {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}

.forDesktop {
  @media (min-width: 200px) and (max-width: 768px) {
    display: none;
  }
}

.forMobile {
  @media (min-width: 768px) and (max-width: 5000px) {
    display: none;
  }
}
</style>
