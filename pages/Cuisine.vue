<template>
    <NuxtLayout>
      <div class="pt-32 bg-gray-200 w-full">
        <Carousel
          id="gallery"
          :items-to-show="1"
          :wrap-around="false"
          v-model="currentSlide"
          class="w-1/2 m-auto carousel text-xl text-bold"
        >
          <Slide :key="0">
            <div class="carousel__item" @click="slideTo('0')">
              <img
                src="@/assets/images/kebab.jpeg"
                class="mainImage"
                alt="Slide 1"
              />
              <p>ASSORTED KEBAB</p>
            </div>
          </Slide>
          <Slide :key="1">
            <div class="carousel__item" @click="slideTo('1')">
              <img
                src="@/assets/images/badimjan.jpeg"
                class="mainImage"
                alt="Slide 2"
              />
              <p>BADIMJAN DOLMASI</p>
            </div>
          </Slide>
          <Slide :key="2">
            <div class="carousel__item" @click="slideTo('2')">
              <img
                src="@/assets/images/cav.jpeg"
                class="mainImage"
                alt="Slide 3"
              />
              <p>CASPIAN BLACK CAVIAR</p>
            </div>
          </Slide>
          <Slide :key="3">
            <div class="carousel__item" @click="slideTo('3')">
              <img
                src="@/assets/images/dovga.avif"
                class="mainImage"
                alt="Slide 4"
              />
              <p>DOVGA</p>
            </div>
          </Slide>
          <Slide :key="4">
            <div class="carousel__item" @click="slideTo('4')">
              <img
                src="@/assets/images/dushbara.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>DUSHBARA</p>
            </div>
          </Slide>
          <Slide :key="5">
            <div class="carousel__item" @click="slideTo('5')">
              <img
                src="@/assets/images/plov.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>PLOV</p>
            </div>
          </Slide>
          <Slide :key="6">
            <div class="carousel__item" @click="slideTo('6')">
              <img
                src="@/assets/images/qutab.webp"
                class="mainImage"
                alt="Slide 4"
              />
              <p>QUTAB</p>
            </div>
          </Slide>
          <Slide :key="7">
            <div class="carousel__item" @click="slideTo('7')">
              <img
                src="@/assets/images/saj.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>SADJ ICHI</p>
            </div>
          </Slide>
          <Slide :key="8">
            <div class="carousel__item" @click="slideTo('8')">
              <img
                src="@/assets/images/sturgeon.webp"
                class="mainImage"
                alt="Slide 4"
              />
              <p>CASPIAN STURGEON KEBAB</p>
            </div>
          </Slide>
          <Slide :key="9">
            <div class="carousel__item" @click="slideTo('9')">
              <img
                src="@/assets/images/dolma.avif"
                class="mainImage"
                alt="Slide 4"
              />
              <p>YARPAQ DOLMASI</p>
            </div>
          </Slide>
          <Slide :key="10">
            <div class="carousel__item" @click="slideTo('10')">
              <img
                src="@/assets/images/murabba.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>MURABBA</p>
            </div>
          </Slide>
          <Slide :key="11">
            <div class="carousel__item" @click="slideTo('11')">
              <img
                src="@/assets/images/pakhlava.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>PAKHLAVA</p>
            </div>
          </Slide>
        </Carousel>
        <Carousel
          id="thumbnails"
          :items-to-show="5"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
          class="thumb"
        >
          <Slide :key="0">
            <div class="carousel__item" @click="slideTo('0')">
              <img
                src="@/assets/images/kebab.jpeg"
                class="max-image"
                alt="Thumbnail 1"
              />
            </div>
          </Slide>
          <Slide :key="1">
            <div class="carousel__item" @click="slideTo('1')">
              <img
                src="@/assets/images/badimjan.jpeg"
                class="max-image"
                alt="Thumbnail 2"
              />
            </div>
          </Slide>
          <Slide :key="2">
            <div class="carousel__item" @click="slideTo('2')">
              <img
                src="@/assets/images/cav.jpeg"
                class="max-image"
                alt="Thumbnail 3"
              />
            </div>
          </Slide>
          <Slide :key="3">
            <div class="carousel__item" @click="slideTo('3')">
              <img
                src="@/assets/images/dovga.avif"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="4">
            <div class="carousel__item" @click="slideTo('4')">
              <img
                src="@/assets/images/dushbara.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="5">
            <div class="carousel__item" @click="slideTo('5')">
              <img
                src="@/assets/images/plov.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="6">
            <div class="carousel__item" @click="slideTo('6')">
              <img
                src="@/assets/images/qutab.webp"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="7">
            <div class="carousel__item" @click="slideTo('7')">
              <img
                src="@/assets/images/saj.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="8">
            <div class="carousel__item" @click="slideTo('8')">
              <img
                src="@/assets/images/sturgeon.webp"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="9">
            <div class="carousel__item" @click="slideTo('9')">
              <img
                src="@/assets/images/dolma.avif"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="10">
            <div class="carousel__item" @click="slideTo('10')">
              <img
                src="@/assets/images/murabba.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="11">
            <div class="carousel__item" @click="slideTo('11')">
              <img
                src="@/assets/images/pakhlava.jpeg"
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
  max-height: 500px;
  border: 4px solid rgb(222, 153, 26);
  border-radius: 1%;
}

.carousel {
  height: 560px;
}
</style>
