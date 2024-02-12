<template>
  <NuxtLayout>
    <div>
      <div>
        <div class="parallax h-full w-full flex flex-col items-center relative">
          <div class="overlay"></div>
          <p
            class="absolute w-2/3 p-3 top-32 text-center text-5xl text-white uppercase"
          >
            enc luxury tours
          </p>
          <p
            class="uppercase absolute w-1/3 rounded-md p-2 top-60 text-center text-white"
          >
            Be the one to enjoy the unforgettable experience
          </p>
        </div>
      </div>
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
</script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/baku8.webp");
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
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Adjust the alpha value for darkness */
}
</style>
