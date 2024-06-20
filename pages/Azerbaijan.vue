<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-8xl uppercase font-semibold">
            {{ $t("azeH1") }}
          </p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="text-6xl">INTRO</p>
          <p class="border-b-2 pt-4 w-20 border-orange-500 m-auto"></p>
        </div>
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 70,
              mass: 5,
            },
          }"
          class="border introText w-1/2 m-auto p-8 text-customGray"
        >
          <p>
            {{ $t("azeIntro") }}
          </p>
        </div>
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 70,
              mass: 20,
            },
          }"
          class="mainSection flex w-10/12 m-auto mt-10 mb-6"
        >
          <div class="w-1/3 sectionDiv">
            <div class="pb-5 pl-8 pr-8 cursor-pointer">
              <NuxtLink
                :to="localePath('/general-facts')"
                class="uppercase mb-3"
                >{{ $t("azeGenFacts") }}
                <p class="uppercase mb-3"></p>

                <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
                <img
                  src="@/assets/images/az17.jpg"
                  class="imageStyle h-60 w-full hover:scale-105 duration-500 transition-all"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-3 m-auto">
                {{ $t("azeGenFactsP") }}
              </p>
            </div>
          </div>
          <div class="w-1/3 sectionDiv">
            <div class="pb-5 pl-8 pr-8 cursor-pointer">
              <NuxtLink
                :to="localePath('/mapofazerbaijan')"
                class="uppercase mb-3"
                >{{ $t("azeMap") }}

                <p class="uppercase mb-3"></p>
                <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
                <img
                  src="@/assets/images/map.jpeg"
                  class="imageStyle h-60 w-full hover:scale-105 duration-500 transition-all cursor-pointer"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("azeMapP") }}
              </p>
            </div>
          </div>
          <div class="w-1/3 sectionDiv">
            <div class="pb-5 pl-8 pr-8 cursor-pointer">
              <NuxtLink
                :to="localePath('/azerbaijan_e_visa')"
                class="uppercase mb-3"
                >{{ $t("azeVisa") }}
                <p class="uppercase mb-3"></p>

                <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
                <img
                  src="@/assets/images/visa.avif"
                  class="imageStyle h-60 w-full hover:scale-105 duration-500 transition-all cursor-pointer"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("azeVisaP") }}
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 70,
              mass: 20,
            },
          }"
          class="mainSection flex w-10/12 m-auto mb-6"
        >
          <div class="w-1/3 sectionDiv">
            <div class="pb-5 pl-8 pr-8 cursor-pointer">
              <NuxtLink
                :to="localePath('/Tourist-regions')"
                class="uppercase mb-3"
                >{{ $t("azeRegions") }}
                <p class="uppercase mb-3"></p>
                <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
                <img
                  src="@/assets/images/guba.jpeg"
                  class="imageStyle h-60 w-full hover:scale-105 duration-500 transition-all cursor-pointer"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("azeRegionsP") }}
              </p>
            </div>
          </div>
          <div class="w-1/3 sectionDiv">
            <div class="pb-5 pl-8 pr-8 cursor-pointer">
              <NuxtLink :to="localePath('/cuisine')" class="uppercase mb-3"
                >{{ $t("azeCuisine") }}
                <p class="uppercase mb-3"></p>
                <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
                <img
                  src="@/assets/images/cuisineaz.jpeg"
                  class="imageStyle h-60 w-full hover:scale-105 duration-500 transition-all cursor-pointer"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("azeCuisineP") }}
              </p>
            </div>
          </div>
          <div class="w-1/3 sectionDiv">
            <div class="pb-5 pl-8 pr-8 cursor-pointer">
              <NuxtLink :to="localePath('/events')" class="uppercase mb-3"
                >{{ $t("azeEvents") }}
                <p class="uppercase mb-3"></p>
                <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
                <img
                  src="@/assets/images/event6.jpeg"
                  class="imageStyle h-60 w-full hover:scale-105 duration-500 transition-all cursor-pointer"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("azeEventsP") }}
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 70,
              mass: 20,
            },
          }"
          class="mainSection flex w-10/12 justify-center m-auto mb-6"
        >
          <div class="w-1/3 sectionDiv">
            <div class="pb-5 pl-8 pr-8 cursor-pointer">
              <NuxtLink
                :to="localePath('/unesco-heritage-list')"
                class="uppercase mb-3"
                >{{ $t("azeUnesco") }}
                <p class="uppercase mb-3"></p>
                <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
                <img
                  src="@/assets/images/unesco.png"
                  class="imageStyle h-60 w-full hover:scale-105 duration-500 transition-all cursor-pointer"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("azeUnescoP") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>
<style scoped>
.parallax {
  position: relative;
  min-height: 100vh;
}
.parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/images/az11.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
  @media (min-width: 320px) and (max-width: 820px) {
    width: 90%;
    font-size: small;
  }
}
.text2 {
  font-weight: 600;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: x-large;
  }
}
.introText {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 90%;
    font-size: small;
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
.mainSection {
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
.imageStyle {
  @media (min-width: 320px) and (max-width: 425px) {
    height: 160px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 300px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 180px;
  }
}
</style>
