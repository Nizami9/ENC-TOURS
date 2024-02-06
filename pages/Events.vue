<template>
  <NuxtLayout>
    <div class="pt-32 bg-gray-200 w-full">
      <Carousel
        id="gallery"
        :items-to-show="parseInt(1)"
        :wrap-around="false"
        v-model="currentSlide"
        class="w-1/2 carousel m-auto text-xl text-bold"
      >
        <Slide :key="0">
          <div class="carousel__item" @click="slideTo(0)">
            <img
              src="@/assets/images/novruz3.jpeg"
              class="mainImage"
              alt="Slide 1"
            />
            <p>NOVRUZ FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="1">
          <div class="carousel__item" @click="slideTo(1)">
            <img
              src="@/assets/images/event2.jpeg"
              class="mainImage"
              alt="Slide 2"
            />
            <p>POMEGRENADE FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="2">
          <div class="carousel__item" @click="slideTo(2)">
            <img
              src="@/assets/images/wine.jpeg"
              class="mainImage"
              alt="Slide 3"
            />
            <p>WINE FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="3">
          <div class="carousel__item" @click="slideTo(3)">
            <img
              src="@/assets/images/murabba.jpeg"
              class="mainImage"
              alt="Slide 4"
            />
            <p>MURABBA FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="4">
          <div class="carousel__item" @click="slideTo(3)">
            <img
              src="@/assets/images/jazz.jpeg"
              class="mainImage"
              alt="Slide 4"
            />
            <p>BAKU JAZZ FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="5">
          <div class="carousel__item" @click="slideTo(3)">
            <img
              src="@/assets/images/f1.jpeg"
              class="mainImage"
              alt="Slide 4"
            />
            <p>FORMULA 1 BAKU GRAND PRIX</p>
          </div>
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        :items-to-show="parseInt(5)"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
        class="thumb"
      >
        <Slide :key="0">
          <div class="carousel__item" @click="slideTo(0)">
            <img
              src="@/assets/images/novruz3.jpeg"
              class="max-image"
              alt="Thumbnail 1"
            />
          </div>
        </Slide>
        <Slide :key="1">
          <div class="carousel__item" @click="slideTo(1)">
            <img
              src="@/assets/images/event2.jpeg"
              class="max-image"
              alt="Thumbnail 2"
            />
          </div>
        </Slide>
        <Slide :key="2">
          <div class="carousel__item" @click="slideTo(2)">
            <img
              src="@/assets/images/wine.jpeg"
              class="max-image"
              alt="Thumbnail 3"
            />
          </div>
        </Slide>
        <Slide :key="3">
          <div class="carousel__item" @click="slideTo(3)">
            <img
              src="@/assets/images/murabba.jpeg"
              class="max-image"
              alt="Thumbnail 4"
            />
          </div>
        </Slide>
        <Slide :key="4">
          <div class="carousel__item" @click="slideTo(4)">
            <img
              src="@/assets/images/jazz.jpeg"
              class="max-image"
              alt="Thumbnail 4"
            />
          </div>
        </Slide>
        <Slide :key="5">
          <div class="carousel__item" @click="slideTo(5)">
            <img
              src="@/assets/images/f1.jpeg"
              class="max-image"
              alt="Thumbnail 4"
            />
          </div>
        </Slide>
      </Carousel>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const currentSlide = ref(0);

const slideTo = (val) => {
  currentSlide.value = Number(val);
};
</script>

<style scoped>
.thumb {
  border: 2px solid rgb(222, 153, 26);
  padding-top: 5px;
  padding-bottom: 5px;
  max-height: 220px;
}

.max-image {
  height: 200px;
  width: 340px;
}

.mainImage {
  height: 500px;
  border: 4px solid rgb(222, 153, 26);
  border-radius: 1%;
}

.carousel {
  height: 560px;
}
</style>
