<template>
  <carousel
    items-to-show="3"
    :autoplay="4000"
    class="w-11/12 pt-10 m-auto"
    :wrap-around="true"
  >
    <slide v-for="slide in 1" :key="slide">
      <div>
        <img
          src="@/assets/images/az14.webp"
          class="h-90 pr-4 w-auto"
          alt="photo"
        />
      </div>
    </slide>
    <slide v-for="slide in 1" :key="slide">
      <div>
        <img
          src="@/assets/images/az3.jpeg"
          class="h-90 pr-4 w-auto"
          alt="photo"
        />
      </div>
    </slide>
    <slide v-for="slide in 1" :key="slide">
      <div>
        <img
          src="@/assets/images/az15.webp"
          class="h-90 pr-4 w-auto"
          alt="photo"
        />
      </div>
    </slide>
    <slide v-for="slide in 1" :key="slide">
      <div>
        <img
          src="@/assets/images/aze12.jpg"
          class="h-90 pr-4 w-auto"
          alt="photo"
        />
      </div>
    </slide>
    <slide v-for="slide in 1" :key="slide">
      <div>
        <img
          src="@/assets/images/az16.jpeg"
          alt="photo"
          class="h-90 pr-4 w-auto"
        />
      </div>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>
