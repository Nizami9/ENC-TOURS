<template>
  <NuxtLayout>
    <div>
      <div>
        <div
          class="parallax h-full w-full flex flex-col items-center justify-between relative"
        >
          <div class="overlay flex-col justify-evenly flex items-center">
            <!-- <p
              class="text2 w-full pt-60 text-center text-7xl text-white uppercase"
            >
              {{ $t("mainPageH1") }}
            </p>
            <p
              class="uppercase textP text-center w-2/3 text leading-5 rounded-md text-center text-white"
            >
            {{ $t("mainPageH1") }}
              Being internationally connected, creative and advanced, ENC travel
              is intended to provide a legacy of solid reputation with high
              degree excellence and responsibility. The company was established
              in 2008 with the vision to be chosen as the most trusted source of
              travel for people who wish to have life lasting memories.
            </p> -->
            <!-- <img
              src="@/assets/images/arrowDown.png"
              class="buttonImage w-20 pt-40"
              alt=""
              @click="scrollToComponent2"
            /> -->
          </div>
        </div>
      </div>
      <component-2 ref="component2Ref"></component-2>
      <component-3></component-3>
      <component-4></component-4>
      <component-6></component-6>
    </div>
  </NuxtLayout>
</template>

<script setup>
import Component2 from "@/components/MainPage/Component2.vue";
import Component3 from "@/components/MainPage/Component3.vue";
import Component4 from "@/components/MainPage/Component4.vue";
import Component6 from "@/components/MainPage/Component5.vue";
import { useI18n } from "#imports";
const { locale } = useI18n();

const component2Ref = ref(null);

onMounted(() => {
  component2Ref.value = ref.component2Ref;
});

const scrollToComponent2 = () => {
  if (component2Ref.value) {
    const targetElement = component2Ref.value.$el;
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;

    let startTimestamp;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
};
</script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/test11.jpg");
  min-height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -90px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.text2 {
  font-weight: 600;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: x-large;
  }
}

.textP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: x-small;
    margin-top: 40px;
  }
}

.buttonImage {
  @media (min-width: 320px) and (max-width: 820px) {
    padding-top: 32px;
    width: 50px;
  }
}
</style>
