<template>
  <div class="ml-6 mr-4">
    <carousel
      items-to-show="3"
      :autoplay="5000"
      class="w-full pt-10"
      :wrap-around="true"
    >
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full">
          <img
            src="@/assets/images/az14.webp"
            class="imageStyle pr-2"
            alt="photo"
          />
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
</script>

<style scoped>
.imageStyle {
  height: 310px;
  width: 100%;
  padding-right: 6px;
}
</style>
