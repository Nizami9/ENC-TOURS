<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-8xl uppercase font-semibold">
            {{ $t("actMiceH") }}
          </p>
          <p class="rounded-md mt-20 text-center textP">
            {{ $t("actMiceP") }}
          </p>
        </div>
      </div>
      <div class="">
        <div class="w-9/12 m-auto mt-10">
          <div class="mb-10">
            <ul class="list-disc text-gray-500">
              <li class="mb-3">{{ $t("actMiceL1") }}</li>
              <li class="mb-3">{{ $t("actMiceL2") }}</li>
              <li class="mb-3">{{ $t("actMiceL3") }}</li>
              <li class="mb-3">{{ $t("actMiceL4") }}</li>
              <li class="mb-3">{{ $t("actMiceL5") }}</li>
              <li class="mb-3">{{ $t("actMiceL6") }}</li>
              <li class="mb-3">{{ $t("actMiceL7") }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-10">
      <h5 class="uppercase m-auto w-40 text-4xl text-gray-500">gallery</h5>
      <carousel></carousel>
    </div>
  </NuxtLayout>
</template>

<script setup>
import carousel from "../../components/Carousel_Mice_Hotels";
</script>
<style scoped>
.parallax {
  min-height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/images/activities.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text2 {
  font-weight: 600;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: x-large;
  }
}
.textP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: small;
    margin-top: 40px;
  }
}
.mainDiv {
  @media (min-width: 320px) and (max-width: 820px) {
    padding-top: 220px;
    width: 80%;
  }
}
</style>
