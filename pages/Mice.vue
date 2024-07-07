<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-8xl uppercase font-semibold">
            {{ $t("miceH1") }}
          </p>
          <p class="rounded-md mt-20 text-center textP">
            {{ $t("miceP1") }}
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
            {{ $t("miceIntro") }}
          </p>
        </div>
        <div class="flex mainSection w-11/12 m-auto mt-10 mb-6">
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
            class="w-1/4 sectionDiv"
          >
            <div
              class="pb-5 pr-2 cursor-pointer"
            >
              <NuxtLink :to="localePath('/mice/hotels')" class="uppercase mb-3">Hotels
                <p class="uppercase mb-3"></p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
              <img
                src="@/assets/images/conference.jpeg"
                class="imageStyle h-60 w-full hover:scale-95 duration-300 transition-all"
                alt=""
              />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 p-2 m-auto">
                {{ $t("miceHotelsP1") }}
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
                stiffness: 250,
                damping: 70,
                mass: 20,
              },
            }"
            class="w-1/4 sectionDiv"
          >
            <div
              class="pb-5 pr-2 cursor-pointer"
            >
              <NuxtLink :to="localePath('/mice/restaurants')" class="uppercase mb-3">Restaurants
                <p class="uppercase mb-3"></p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
              <img
                src="@/assets/images/nuxa.jpeg"
                class="imageStyle h-60 w-full hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
              />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 m-auto">
                {{ $t("miceRestP1") }}
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
                stiffness: 250,
                damping: 70,
                mass: 20,
              },
            }"
            class="w-1/4 sectionDiv"
          >
            <div
              class="pb-5 pr-2 cursor-pointer"
            >
              <NuxtLink :to="localePath('/mice/activities')" class="uppercase mb-3">Activities
                <p class="uppercase mb-3"></p>

              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>

              <img
                src="@/assets/images/activity.jpeg"
                class="imageStyle h-60 w-full hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
              />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 m-auto">
                {{ $t("miceActivP1") }}
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
                stiffness: 250,
                damping: 70,
                mass: 20,
              },
            }"
            class="w-1/4 sectionDiv"
          >
            <div
              class="pb-5 pr-2 cursor-pointer"
            >
              <NuxtLink :to="localePath('/mice/master_classes')" class="uppercase mb-3">Master Classes
                <p class="uppercase mb-3"></p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>

              <img
                src="@/assets/images/master.jpeg"
                class="imageStyle h-60 w-full hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
              />
              </NuxtLink>
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 m-auto">
                {{ $t("miceMasterClassP1") }}
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
  background-image: url("@/assets/images/mice1.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
  @media (min-width: 320px) and (max-width: 1024px) {
    width: 90%;
    font-size: small;
  }
}

.text2 {
  font-weight: 600;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: x-large;
  }
  @media (min-width: 821px) and (max-width: 1024px) {
    font-size: 70px;
  }
  @media (min-width: 1025px) and (max-width: 1400px) {
    font-size: 120px;
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
  @media (min-width: 821px) and (max-width: 1440px) {
    padding-top: 120px;
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
  @media (min-width: 320px) and (max-width: 375px) {
    height: 180px;
  }
  @media (min-width: 376px) and (max-width: 425px) {
    height: 220px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 400px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 160px;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    height: 220px;
  }
}
</style>
