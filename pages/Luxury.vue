<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">
            ENC {{ $t("lux") }}
          </p>
          <p class="rounded-md mt-5 text-center textP">
            Lauded for its extensive knowledge, its East-meets-West model and
            venturing responsibly into every corner of its destinations, it is
            our mission to show guests the beating heart of our Asia
          </p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="text-6xl">INTRO</p>
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
              damping: 70,
              mass: 5,
            },
          }"
          class="border introText w-1/2 m-auto p-8 text-customGray"
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
        <div class="mainSection flex w-10/12 m-auto mt-10 uppercase mb-2">
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
            class="w-1/3 sectionDiv uppercase"
          >
            <img
              src="@/assets/images/yact.jpeg"
              class="imageStyle mb-3 h-60 w-11/12 m-auto border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
              alt=""
              @mouseover="addBorder1"
              @mouseout="removeBorder1"
            />
            <p
              ref="section1"
              class="pb-1"
              @mouseover="addBorder1"
              @mouseout="removeBorder1"
            >
              {{ $t("lux1") }}
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
                mass: 5,
              },
            }"
            class="w-1/3 uppercase sectionDiv"
          >
            <img
              src="@/assets/images/helic.jpeg"
              class="imageStyle mb-3 h-60 w-11/12 m-auto border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
              alt=""
              @mouseover="addBorder2"
              @mouseout="removeBorder2"
            />
            <p
              ref="section2"
              class="pb-1"
              @mouseover="addBorder2"
              @mouseout="removeBorder2"
            >
              {{ $t("lux2") }}
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
                mass: 5,
              },
            }"
            class="w-1/3 sectionDiv uppercase"
          >
            <img
              src="@/assets/images/retrocars.jpeg"
              class="imageStyle mb-3 h-60 w-11/12 m-auto border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
              alt=""
              @mouseover="addBorder3"
              @mouseout="removeBorder3"
            />
            <p
              ref="section3"
              class="pb-1"
              @mouseover="addBorder3"
              @mouseout="removeBorder3"
            >
              {{ $t("lux3") }}
            </p>
          </div>
        </div>
        <div class="mainSection flex justify-between w-10/12 m-auto mt-10 mb-8">
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
            class="w-1/3 uppercase sectionDiv"
          >
            <img
              src="@/assets/images/caviar1.jpeg"
              class="imageStyle mb-3 h-60 w-11/12 m-auto border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
              alt=""
              @mouseover="addBorder4"
              @mouseout="removeBorder4"
            />
            <p
              ref="section4"
              class="pb-1"
              @mouseover="addBorder4"
              @mouseout="removeBorder4"
            >
              {{ $t("lux4") }}
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
                mass: 5,
              },
            }"
            class="w-1/3 sectionDiv uppercase"
          >
            <img
              src="@/assets/images/lux4.jpeg"
              class="imageStyle mb-3 h-60 w-11/12 m-auto border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
              alt=""
              @mouseover="addBorder5"
              @mouseout="removeBorder5"
            />
            <p
              ref="section5"
              class="pb-1"
              @mouseover="addBorder5"
              @mouseout="removeBorder5"
            >
              {{ $t("lux5") }}
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
                mass: 5,
              },
            }"
            class="w-1/3 sectionDiv uppercase"
          >
            <img
              src="@/assets/images/golf.jpeg"
              class="imageStyle mb-3 h-60 w-11/12 m-auto border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
              alt="golf"
              @mouseover="addBorder6"
              @mouseout="removeBorder6"
            />
            <p
              ref="section6"
              class="pb-1"
              @mouseover="addBorder6"
              @mouseout="removeBorder6"
            >
              {{ $t("lux6") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const createHoverHandlers = (sectionRef) => {
  const addBorder = () => {
    sectionRef.value.classList.add("border-b-2", "border-gray-400");
  };

  const removeBorder = () => {
    sectionRef.value.classList.remove("border-b-2", "border-gray-400");
  };

  return { addBorder, removeBorder };
};

const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);
const section4 = ref(null);
const section5 = ref(null);
const section6 = ref(null);

const { addBorder: addBorder1, removeBorder: removeBorder1 } =
  createHoverHandlers(section1);
const { addBorder: addBorder2, removeBorder: removeBorder2 } =
  createHoverHandlers(section2);
const { addBorder: addBorder3, removeBorder: removeBorder3 } =
  createHoverHandlers(section3);
const { addBorder: addBorder4, removeBorder: removeBorder4 } =
  createHoverHandlers(section4);
const { addBorder: addBorder5, removeBorder: removeBorder5 } =
  createHoverHandlers(section5);
const { addBorder: addBorder6, removeBorder: removeBorder6 } =
  createHoverHandlers(section6);
</script>

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
  background-image: url("@/assets/images/lux5.webp");
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
    margin-bottom: 15px;
  }
}
.imageStyle {
  @media (min-width: 320px) and (max-width: 425px) {
    height: 160px;
    margin-bottom: 10px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 300px;
    margin-bottom: 10px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 180px;
    margin-bottom: 10px;
  }
}
</style>
