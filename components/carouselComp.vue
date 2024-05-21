<template>
  <div class="ml-6 mr-4 mainCarousel">
    <carousel
      :items-to-show="dynamicItemsToShow"
      :autoplay="5000"
      class="w-12/12 pt-7"
      :wrap-around="true"
    >
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img
            src="@/assets/images/Insp1.png"
            class="imageStyle pr-2"
            alt="photo"
          />
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img src="@/assets/images/Insp2.png" class="imageStyle" alt="photo" />
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img src="@/assets/images/Insp3.png" class="imageStyle" alt="photo" />
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img src="@/assets/images/Insp1.png" class="imageStyle" alt="photo" />
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img
            src="@/assets/images/Insp2.png"
            alt="photo"
            class="imageStyle w-auto"
          />
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const dynamicItemsToShow = ref(3);

const updateItemsToShow = () => {
  const screenWidth = window.innerWidth;
  dynamicItemsToShow.value = screenWidth >= 320 && screenWidth <= 820 ? 1 : 3;
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateItemsToShow);
});
</script>

<style scoped>
.imageStyle {
  height: 310px;
  width: 100%;
  padding-right: 6px;
  @media (min-width: 320px) and (max-width: 425px) {
    height: 200px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 240px;
  }
}

.mainCarousel {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 90%;
  }
}
</style>
