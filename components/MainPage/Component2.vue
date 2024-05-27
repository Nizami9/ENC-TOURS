<template>
  <div class="w-full pb-9 bg-color text-color">
    <div class="m-auto w-1/2 text-center">
      <div>
        <h1 class="text-main-color pt-10">
          {{ $t("comp2h1") }}
        </h1>
      </div>
      <div class="w-11/12 m-auto mb-4 text-center">
        <div
          style="border-color: rgba(152, 176, 226, 1)"
          class="border-b-8 w-60 m-auto mt-4 mb-8"
        ></div>
      </div>
      <div class="w-11/12 m-auto text-center mb-3">
        <p>
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
p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(64, 64, 64, 1);
  opacity: 60%;
  text-align: center;
  line-height: 21px;
}
.text-main-color {
  font-family: "Lusitana";
  font-weight: 300;
  font-style: normal;
  font-size: 64px;
  line-height: 71.36px;
  color: rgba(64, 64, 64, 1);
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
