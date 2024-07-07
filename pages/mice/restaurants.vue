<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">
            {{ $t("restMiceH") }}
          </p>
          <p class="rounded-md mt-20 text-center textP">
            {{ $t("restMiceIntro") }}
          </p>
        </div>
      </div>
      <div class="">
        <div class="w-9/12 m-auto mt-10 mb-6">
          <div class="mb-10">
            <h4>{{ $t("restMiceShirvH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("restMiceShirv1") }}</li>
              <li>{{ $t("restMiceShirv2") }}</li>
              <li>{{ $t("restMiceShirv3") }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("restMiceHanH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("restMiceHan1") }}</li>
              <li>{{ $t("restMiceHan2") }}</li>
              <li>{{ $t("restMiceHan3") }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("restMiceMangalH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("restMiceMangal1") }}</li>
              <li>{{ $t("restMiceMangal2") }}</li>
              <li>{{ $t("restMiceMangal3") }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("restMiceMugamH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("restMiceMugam1") }}</li>
              <li>{{ $t("restMiceMugam2") }}</li>
              <li>{{ $t("restMiceMugam3") }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("restMiceGalaH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("restMiceGala1") }}</li>
              <li>{{ $t("restMiceGala2") }}</li>
              <li>{{ $t("restMiceGala3") }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("restMicePriveH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("restMicePrive1") }}</li>
              <li>{{ $t("restMicePrive2") }}</li>
              <li>{{ $t("restMicePrive3") }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("restMicePassageH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("restMicePassage1") }}</li>
              <li>{{ $t("restMicePassage2") }}</li>
              <li>{{ $t("restMicePassage3") }}</li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("restMiceChaykiH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("restMiceChayki1") }}</li>
              <li>{{ $t("restMiceChayki2") }}</li>
              <li>{{ $t("restMiceChayki3") }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-20">
      <h5 class="uppercase m-auto w-40 text-4xl text-gray-500">gallery</h5>
      <carousel></carousel>
    </div>
  </NuxtLayout>
</template>

<script setup>
import carousel from "@/components/Carousel_Mice_Hotels";
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
  background-image: url("@/assets/images/rest.jpeg");
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
