<template>
  <div class="w-10/12 m-auto mb-10">
    <carousel
    :items-to-show="dynamicItemsToShow"
      :autoplay="5000"
      class="w-full pt-7"
      :wrap-around="true"
    >
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full h-auto">
          <img src="@/assets/images/az14.webp" class="imageStyle" alt="photo" />
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img src="@/assets/images/az3.jpeg" class="imageStyle" alt="photo" />
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img
            src="@/assets/images/baku5.jpeg"
            class="imageStyle"
            alt="photo"
          />
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img
            src="@/assets/images/carpet3.jpeg"
            class="imageStyle"
            alt="photo"
          />
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img
            src="@/assets/images/sheki4.jpeg"
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
const dynamicItemsToShow = ref(5);

const updateItemsToShow = () => {
  const screenWidth = window.innerWidth;
  console.log("Screen Width:", screenWidth);
  dynamicItemsToShow.value = screenWidth >= 320 && screenWidth <= 820 ? 1 : 5;
  console.log("Dynamic Items to Show:", dynamicItemsToShow.value);
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
  height: 200px;
  width: 100%;
  padding-right: 6px;
  @media (min-width: 320px) and (max-width: 425px) {
    height: 180px;
    padding-right: 0px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 340px;
    padding-right: 0px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 120px;
  }
}

.mainCarousel {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 90%;
  }
}
</style>