<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">{{ $t("ourSer") }}</p>
          <p class="rounded-md mt-20 text-center textP">
            {{ $t("ourSerP") }}
          </p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="text-6xl mainP">INTRO</p>
          <p class="border-b-2 pt-4 w-20 border-gray-400 m-auto"></p>
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
              damping: 50,
              mass: 5,
            },
          }"
          class="border introText w-1/2 m-auto p-8 text-customGray"
        >
          <p>
            {{ $t("ourSerPIntro") }}
          </p>
        </div>
        <div class="mainSection flex w-10/12 m-auto mt-10 mb-6">
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
                stiffness: 200,
                damping: 50,
                mass: 10,
              },
            }"
            class="w-1/3 sectionDiv"
          >
            <div
              class="pb-5 divImage pl-8 pr-8 cursor-pointer"
            >
              <NuxtLink :to="localePath('/museums')" class="uppercase mb-3">{{ $t("museums") }}
                <p class="uppercase mb-3"></p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
              <img
                src="@/assets/images/museum8.jpeg"
                class="imageStyle h-60 w-full hover:scale-105 duration-300 transition-all"
                alt=""
              />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-3 m-auto">
                {{ $t("ourSerP1") }}
              </p>
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
                stiffness: 200,
                damping: 50,
                mass: 10,
              },
            }"
            class="w-1/3 sectionDiv"
          >
            <div
              class="pb-5 divImage pl-8 pr-8 cursor-pointer"
            >
              <NuxtLink :to="localePath('/restaurants')" class="uppercase mb-3">{{ $t("ourSerH2") }}
                <p class="uppercase mb-3"></p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
              <img
                src="@/assets/images/mugam.webp"
                class="imageStyle h-60 w-full hover:scale-105 duration-300 transition-all cursor-pointer"
                alt=""
              />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("ourSerP2") }}
              </p>
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
                stiffness: 200,
                damping: 50,
                mass: 10,
              },
            }"
            class="w-1/3 sectionDiv"
          >
            <div
              class="pb-5 divImage pl-8 pr-8 cursor-pointer"
            >
              <NuxtLink :to="localePath('/hotels')" class="uppercase mb-3">{{ $t("ourSerH3") }}
                <p class="uppercase mb-3"></p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
              <img
                src="@/assets/images/shahdag2.avif"
                class="imageStyle h-60 w-full hover:scale-105 duration-300 transition-all cursor-pointer"
                alt=""
              />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("ourSerP3") }}
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
              stiffness: 200,
              damping: 70,
              mass: 10,
            },
          }"
          class="flex mainSection justify-center w-10/12 m-auto mb-6"
        >
          <div class="w-1/3 sectionDiv">
            <div class="pb-5 divImage pl-8 pr-8 cursor-pointer">
              <NuxtLink :to="localePath('/vehiclefleet')"  class="uppercase mb-3">{{ $t("ourSerH4") }}
                <p class="uppercase mb-3"></p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
              <img
                src="@/assets/images/rolls.jpeg"
                class="imageStyle h-60 w-full hover:scale-105 duration-300 transition-all cursor-pointer"
                alt=""
              />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                {{ $t("ourSerP4") }}
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
  background-image: url("@/assets/images/az15.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
  @media (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
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
  @media (min-width: 320px) and (max-width: 374px) {
    height: 160px;
  }
  @media (min-width: 375px) and (max-width: 424px) {
    height: 200px;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    height: 230px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 400px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    height: 150px;
  }
}
.mainP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

.divImage {
  @media (min-width: 320px) and (max-width: 820px) {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
