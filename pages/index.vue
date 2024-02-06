<template>
  <NuxtLayout>
    <div>
      <transition name="fade" mode="out-in">
        <carousel
          :autoplay="4000"
          items-to-show="1"
          class="w-full custom-carousel"
          :wrap-around="true"
          :transition="2000"
          :mouseDrag="true"
          :touchDrag="true"
        >
          <slide v-for="slide in 1" :key="slide" class="w-full h-screen">
            <div
              class="h-full w-full flex flex-col justify-center items-center relative"
            >
              <img src="@/assets/images/aze12.jpg" class="w-auto" alt="photo" />
              <p
                class="absolute border border-gray-400 bg-gray-500 bg-opacity-40 w-1/3 p-3 rounded-md top-32 text-center text-5xl text-white uppercase"
              >
                enc luxury tours
              </p>
              <p
                class="uppercase absolute bg-gray-500 border border-gray-400 bg-opacity-40 w-1/3 rounded-md p-2 top-60 text-center text-white"
              >
                Be the one to enjoy the unforgettable experience
              </p>
            </div>
          </slide>
          <slide v-for="slide in 1" :key="slide" class="w-full h-screen">
            <div
              class="h-full w-full flex flex-col justify-center items-center relative"
            >
              <img src="@/assets/images/az13.webp" class="w-auto" alt="photo" />
              <p
                class="absolute border border-gray-400 bg-gray-500 bg-opacity-40 w-1/3 p-3 rounded-md top-32 text-center text-5xl text-white uppercase"
              >
                enc cultural tours
              </p>
              <p
                class="uppercase absolute bg-gray-500 border border-gray-400 bg-opacity-40 w-1/3 rounded-md p-2 top-60 text-center text-white"
              >
                Be the one to enjoy the unforgettable experience
              </p>
            </div>
          </slide>
          <slide v-for="slide in 1" :key="slide" class="w-full h-screen">
            <div
              class="h-full w-full flex flex-col justify-center items-center relative"
            >
              <img src="@/assets/images/az16.webp" class="w-auto" alt="photo" />
              <p
                class="absolute border border-gray-400 bg-gray-500 bg-opacity-40 w-1/3 p-3 rounded-md top-32 text-center text-5xl text-white uppercase"
              >
                enc private tours
              </p>
              <p
                class="uppercase absolute bg-gray-500 border border-gray-400 bg-opacity-40 w-1/3 rounded-md p-2 top-60 text-center text-white"
              >
                Be the one to enjoy the unforgettable experience
              </p>
            </div>
          </slide>
          <slide v-for="slide in 1" :key="slide" class="w-full h-screen">
            <div
              class="h-full w-full flex flex-col justify-center items-center relative"
            >
              <img src="@/assets/images/az15.webp" class="w-auto" alt="photo" />
              <p
                class="absolute border border-gray-400 bg-gray-500 bg-opacity-40 w-1/3 p-3 rounded-md top-32 text-center text-5xl text-white uppercase"
              >
                enc heritage tours
              </p>
              <p
                class="uppercase absolute bg-gray-500 border border-gray-400 bg-opacity-40 w-1/3 rounded-md p-2 top-60 text-center text-white"
              >
                Be the one to enjoy the unforgettable experience
              </p>
            </div>
          </slide>
          <slide v-for="slide in 1" :key="slide" class="w-full h-screen">
            <div
              class="h-full w-full flex flex-col justify-center items-center relative"
            >
              <img src="@/assets/images/az17.jpg" class="w-auto" alt="photo" />
              <p
                class="absolute border border-gray-400 bg-gray-500 bg-opacity-40 w-1/3 p-3 rounded-md top-32 text-center text-5xl text-white uppercase"
              >
                enc eco tours
              </p>
              <p
                class="uppercase absolute bg-gray-500 border border-gray-400 bg-opacity-40 w-1/3 rounded-md p-2 top-60 text-center text-white"
              >
                Be the one to enjoy the unforgettable experience
              </p>
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </transition>
      <component-2></component-2>
      <component-3></component-3>
      <component-4></component-4>
      <component-6></component-6>
      <component-5></component-5>
    </div>
  </NuxtLayout>
</template>

<script setup>
import Component2 from "@/components/MainPage/Component2.vue";
import Component3 from "@/components/MainPage/Component3.vue";
import Component4 from "@/components/MainPage/Component4.vue";
import Component5 from "@/components/MainPage/Component6.vue";
import Component6 from "@/components/MainPage/Component5.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<style scoped></style>