<template>
  <div class="w-10/12 m-auto mb-10">
    <carousel
      items-to-show="5"
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
</script>

<style scoped>
.imageStyle {
  height: 210px;
  width: 100%;
  padding-right: 10px;
}
</style>
