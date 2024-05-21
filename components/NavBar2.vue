<template>
  <div class="w-full flex justify-between m-auto mt-4 h-20 items-center">
    <div class="flex w-10/12 m-auto justify-between items-center">
      <img
        src="@/assets/images/enctours_logo.png"
        alt="logo"
        style="width: 106px; height: 80px"
      />
      <div v-for="item in navigation" :key="item.name">
        <NuxtLink
          :to="localePath(item.href)"
          class="text-sm font-semibold leading-6 text-white"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <img src="@/assets/images/group.png" alt="" />
      <!-- <select v-model="locale" class="bg-opacity-0 bg-white">
        <option value="en">🇬🇧</option>
        <option value="de">🇩🇪</option>
        <option value="jp">🇯🇵</option>
        <option value="es">🇪🇦</option>
        <option value="it">🇮🇹</option>
        <option value="fr">🇫🇷</option>
        <option value="pt">🇵🇹</option>
        <option value="kr">🇰🇷</option>
      </select> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { locale, t: $t } = useI18n();
const navigation = ref([]);

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
</script>

<style scoped>
* {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
