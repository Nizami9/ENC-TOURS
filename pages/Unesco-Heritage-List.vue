<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold">UNESCO HERITAGE SITES</p>
          <p class="rounded-md mt-5 text-center">
            Lauded for its extensive knowledge, its East-meets-West model and
            venturing responsibly into every corner of its destinations, it is
            our mission to show guests the beating heart of our Asia
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
          class="border w-1/2 m-auto p-8 text-customGray"
        >
          <p>
            ENC Tours provides captivating combined tours that seamlessly unite
            the cultural treasures of Azerbaijan and Georgia. Tailored for a
            well-rounded experience, these tours offer a harmonious blend of
            diverse landscapes, historical wonders, and unique cultural
            encounters. From the vibrant streets of Tbilisi to the ancient
            marvels of Baku, ENC Tours ensures a curated and personalized
            exploration of both countries. With expert guides, travelers can
            delve into shared histories, savor local cuisines, and immerse
            themselves in the distinct traditions of Azerbaijan and Georgia.
            These combined tours promise a seamless and unforgettable journey
            for those seeking a comprehensive adventure across these captivating
            destinations.
          </p>
        </div>
        <div
          class="flex w-10/12 m-auto mt-10 mb-8"
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
        >
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/baku.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
                @mouseover="addBorder1"
                @mouseout="removeBorder1"
              />
            </div>
            <div class="pl-8 pb-8">
              <p
                ref="section1"
                class="pb-1"
                @mouseover="addBorder1"
                @mouseout="removeBorder1"
              >
                WALLED CITY OF BAKU WITH SHIRVANSHAH'S PALACE AND MAIDEN TOWER
              </p>
            </div>
          </div>
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/baku2.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
                @mouseover="addBorder2"
                @mouseout="removeBorder2"
              />
            </div>
            <div class="pl-8">
              <p
                ref="section2"
                class="pb-1"
                @mouseover="addBorder2"
                @mouseout="removeBorder2"
              >
                GOBUSTAN ROCK ART CULTURAL LANDSCAPE
              </p>
            </div>
          </div>
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/georg.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
                @mouseover="addBorder3"
                @mouseout="removeBorder3"
              />
            </div>
            <div class="pl-8">
              <p
                ref="section3"
                class="pb-1"
                @mouseover="addBorder3"
                @mouseout="removeBorder3"
              >
                THE PALACE OF SHAKI KHANS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const createHoverHandlers = (sectionRef) => {
  const addBorder = () => {
    sectionRef.value.classList.add("border-b-2", "border-orange-400");
  };

  const removeBorder = () => {
    sectionRef.value.classList.remove("border-b-2", "border-orange-400");
  };

  return { addBorder, removeBorder };
};

const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);

const { addBorder: addBorder1, removeBorder: removeBorder1 } =
  createHoverHandlers(section1);
const { addBorder: addBorder2, removeBorder: removeBorder2 } =
  createHoverHandlers(section2);
const { addBorder: addBorder3, removeBorder: removeBorder3 } =
  createHoverHandlers(section3);
</script>

<style scoped>
.parallax {
  position: relative;
  min-height: 800px;
}
.parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/images/unesco.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
