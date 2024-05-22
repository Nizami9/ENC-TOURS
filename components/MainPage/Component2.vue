<template>
  <div class="w-full pb-9 bg-color text-color">
    <div class="m-auto w-7/12 text-center">
      <div>
        <p
          style="font-size: 64px"
          class="text-6xl font-thin text-main-color pt-10"
        >
          {{ $t("comp2h1") }}
        </p>
      </div>
      <div class="mt-5 mb-3 text-center m-auto">
        <p class="border-b-4 w-40 m-auto border-blue-900"></p>
      </div>
      <div class="w-full">
        <p class="leading-7">
          {{ $t("comp2p1") }}
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
* {
  font-family: "Lusitana", serif;
  font-weight: 400;
  font-style: normal;
}
.text-main-color {
  color: #24373d;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

.text-color {
  color: #5a5858;
}

.bg-color {
  background-color: rgba(226, 226, 226, 1);
}
</style>
