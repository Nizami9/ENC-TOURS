<template>
  <div class="w-full mb-14 text-color">
    <div class="w-full">
      <div class="w-11/12 m-auto mt-10 text-6xl">
        <p class="text-center mb-4 m-auto pb-2 text-main-color">
          {{ $t("comp3h1") }}
        </p>
      </div>
      <div class="w-11/12 m-auto mb-4 text-center">
        <p class="border-b-4 w-1/12 m-auto border-blue-900"></p>
      </div>
      <div
        class="text-center text-gray-600 w-10/12 m-auto border-b pb-6 text-color"
      >
        <p>
          {{ $t("comp3p1") }}
        </p>
      </div>
    </div>
    <div class="text-gray-600 md:text-sm lg:text-base xl:text-base">
      <div class="flex sections w-10/12 m-auto mt-4 text-center border-b pb-8">
        <div class="w-1/3 sectionDiv border-r">
          <img
            src="@/assets/images/icon1.png"
            class="w-20 mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h2") }}</h4>
          <p class="p-6 leading-7 text-color">
            {{ $t("comp3p2") }}
          </p>
        </div>
        <div class="w-1/3 sectionDiv border-r">
          <img
            src="@/assets/images/icon2.png"
            class="w-20 mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h3") }}</h4>
          <p class="p-6 leading-7 text-color">
            {{ $t("comp3p3") }}
          </p>
        </div>
        <div class="w-1/3 sectionDiv">
          <img
            src="@/assets/images/icon3.png"
            class="w-20 mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h4") }}</h4>
          <p class="p-6 leading-7 text-color">
            {{ $t("comp3p4") }}
          </p>
        </div>
      </div>

      <div
        class="flex sections w-10/12 m-auto mt-4 text-center border-b-2 border-gray-100 pb-8"
      >
        <div class="w-1/3 sectionDiv border-r">
          <img
            src="@/assets/images/icon4.png"
            class="w-20 mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h5") }}</h4>
          <p class="p-6 leading-7 text-color">
            {{ $t("comp3p5") }}
          </p>
        </div>
        <div class="w-1/3 sectionDiv border-r">
          <img
            src="@/assets/images/icon5.png"
            class="w-20 mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h6") }}</h4>
          <p class="p-6 leading-7 text-color">
            {{ $t("comp3p6") }}
          </p>
        </div>
        <div class="w-1/3 sectionDiv">
          <img
            src="@/assets/images/icon6.png"
            class="w-20 mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h7") }}</h4>
          <p class="p-6 leading-7 text-color">
            {{ $t("comp3p7") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.text-main-color {
  color: #24373d;
  font-weight: 200;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

.text-color {
  color: #5a5858;
  font-weight: 200;
  font-size: small;
  line-height: 180%;
}

.sections {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: medium;
    display: block;
  }
}

.sectionDiv {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
    border-right: none;
  }
}
</style>
