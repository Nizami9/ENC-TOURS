<template>
  <div class="w-full pb-9 bg-rgba text-color">
    <div class="m-auto w-7/12 text-center pt-6">
      <div>
        <p class="text-6xl font-thin text-main-color pt-16">
          {{ $t("comp2p1") }}
        </p>
      </div>
      <div class="mt-5 mb-3 text-center m-auto">
        <p class="border-b-4 w-40 m-auto border-blue-900"></p>
      </div>
      <div class="w-full">
        <p>{{ $t("comp2p2") }}</p>
        <p class="leading-7">
          {{ $t("comp2p3") }}
        </p>
      </div>
    </div>
    <div class="mb-8">
      <CarouselComp />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.text-main-color {
  color: #24373d;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

.text-color {
  color: #5a5858;
}
</style>
