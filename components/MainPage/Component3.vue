<template>
  <div class="w-full mb-10">
    <div class="w-full">
      <div class="w-11/12 m-auto mt-10 text-6xl">
        <h1 class="text-center mainH mb-2 m-auto pb-2 text-main-color">
          {{ $t("comp3h1") }}
        </h1>
      </div>
      <div class="w-11/12 m-auto mb-8 text-center">
        <div
          style="border-color: rgba(152, 176, 226, 1)"
          class="border-b-8 w-1/6 m-auto"
        ></div>
      </div>
      <div class="text-center text-gray-600 w-10/12 m-auto border-b-2 pb-6">
        <p class="w-1/2 m-auto" style="line-height: 24px">
          {{ $t("comp3p1") }}
        </p>
      </div>
    </div>
    <div class="text-gray-600 md:text-sm lg:text-base xl:text-base">
      <div
        class="flex sections w-10/12 m-auto mt-4 text-center border-b-2 pb-8"
      >
        <div class="w-1/3 sectionDiv border-r mt-3 mb-3">
          <img
            src="@/assets/images/0006.png"
            class="w-20 border p-2 rounded-full borderColor mb-6 mt-3 m-auto"
          />
          <h4>{{ $t("comp3h2") }}</h4>
          <p class="p-6" style="line-height: 24px">
            {{ $t("comp3p2") }}
          </p>
        </div>
        <div class="w-1/3 sectionDiv border-r mt-3 mb-3">
          <img
            src="@/assets/images/0005.png"
            class="w-20 border p-2 rounded-full borderColor mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h3") }}</h4>
          <p class="p-6" style="line-height: 24px">
            {{ $t("comp3p3") }}
          </p>
        </div>
        <div class="w-1/3 sectionDiv mt-3 mb-3">
          <img
            src="@/assets/images/0002.png"
            class="w-20 border p-2 rounded-full borderColor mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h4") }}</h4>
          <p class="p-6" style="line-height: 24px">
            {{ $t("comp3p4") }}
          </p>
        </div>
      </div>

      <div class="flex sections w-10/12 m-auto mt-4 text-center border-b pb-8">
        <div class="w-1/3 sectionDiv border-r mt-3 mb-3">
          <img
            src="@/assets/images/0004.png"
            class="w-20 border p-2 rounded-full borderColor mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h5") }}</h4>
          <p class="p-6" style="line-height: 24px">
            {{ $t("comp3p5") }}
          </p>
        </div>
        <div class="w-1/3 sectionDiv border-r mt-3 mb-3">
          <img
            src="@/assets/images/0001.png"
            class="w-20 border p-2 rounded-full borderColor mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h6") }}</h4>
          <p class="p-6" style="line-height: 24px">
            {{ $t("comp3p6") }}
          </p>
        </div>
        <div class="w-1/3 sectionDiv mt-3 mb-3">
          <img
            src="@/assets/images/0003.png"
            class="w-20 border p-2 rounded-full borderColor mb-6 mt-3 m-auto"
            alt=""
          />
          <h4>{{ $t("comp3h7") }}</h4>
          <p class="p-6" style="line-height: 24px">
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

.mainH {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 64px;
}

.borderColor {
  border-color: rgba(152, 176, 226, 1);
}

p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: rgba(64, 64, 64, 1);
  opacity: 60%;
  line-height: 21px;
}

h4 {
  font-family: "Libre Baskerville", serif;
  font-weight: 0;
  font-style: normal;
  font-size: 20px;
  line-height: 24.8px;
  text-align: center;
}
</style>
