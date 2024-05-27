<template>
  <NuxtLayout>
    <div>
      <div>
        <div
          class="parallax h-full w-full flex flex-col items-center justify-between relative"
        >
          <div class="overlay w-full flex-col justify-center flex items-center">
            <p
              style="font-size: 80px"
              class="text2 w-full text-center text-white uppercase"
            >
              {{ $t("mainPageH1") }}
            </p>
            <div>
              <p class="text-sm w-1/2 m-auto text-center text-white">
                Lauded for its extensive knowledge, its east-meets-west model
                and venturing responsibly into every corner of its destinations,
                it is our mission to show guests the beating heart of our Asia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <component-2 ref="component2Ref"></component-2>
      <component-3></component-3>
      <component-4></component-4>
    </div>
  </NuxtLayout>
</template>

<script setup>
import Component2 from "@/components/MainPage/Component2.vue";
import Component3 from "@/components/MainPage/Component3.vue";
import Component4 from "@/components/MainPage/Component4.vue";
import { useI18n } from "#imports";
const { locale } = useI18n();
</script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/mainImage.png");
  min-height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.text2 {
  font-weight: 700;
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: x-large;
  }
}
</style>
