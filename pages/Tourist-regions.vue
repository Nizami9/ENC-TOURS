<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">TOURIST REGIONS</p>
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
            ENC Tours in Azerbaijan specializes in curated, special-interest
            tours, offering a unique blend of cultural, historical, and natural
            experiences. Tailoring each itinerary to individual preferences,
            they provide a personalized exploration of Azerbaijan's
            archaeological sites, local traditions, and diverse landscapes.
            Committed to quality, ENC Tours ensures seamless travel through
            expert guides, top-notch accommodations, and reliable
            transportation. With a focus on authenticity and cultural immersion,
            their special-interest tours promise an enriching and unforgettable
            journey for those seeking a deeper connection with Azerbaijan.
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
          class="flex mainSection w-10/12 m-auto mt-10 uppercase mb-2"
        >
          <div
            class="w-1/3 sectionDiv uppercase cursor-pointer"
            @click="navigateTo('../Regions/central-region')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/reg1.png"
                class="imageStyle h-64 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder1"
                @mouseout="removeBorder1"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section1"
                class="pb-1"
                @mouseover="addBorder1"
                @mouseout="removeBorder1"
              >
                CENTRAL REGIONS
              </p>
            </div>
          </div>
          <div
            class="w-1/3 uppercase sectionDiv"
            @click="navigateTo('../Regions/northern-region')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/reg2.png"
                class="imageStyle h-64 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder2"
                @mouseout="removeBorder2"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section2"
                class="pb-1"
                @mouseover="addBorder2"
                @mouseout="removeBorder2"
              >
                NORTHERN REGIONS
              </p>
            </div>
          </div>
          <div
            class="w-1/3 sectionDiv uppercase"
            @click="navigateTo('../Regions/northern-west-region')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/reg3.png"
                class="imageStyle h-64 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder3"
                @mouseout="removeBorder3"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section3"
                class="pb-1"
                @mouseover="addBorder3"
                @mouseout="removeBorder3"
              >
                NORTHERN-WEST REGIONS
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
          class="flex mainSection w-10/12 m-auto mb-2 uppercase"
        >
          <div
            class="w-1/3 sectionDiv uppercase"
            @click="navigateTo('../Regions/western-region')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/reg4.png"
                class="imageStyle h-64 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder4"
                @mouseout="removeBorder4"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section4"
                class="pb-1"
                @mouseover="addBorder4"
                @mouseout="removeBorder4"
              >
                WESTERN REGION
              </p>
            </div>
          </div>

          <div
            class="w-1/3 sectionDiv uppercase"
            @click="navigateTo('../Regions/southern-region')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/reg5.png"
                class="imageStyle h-64 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder5"
                @mouseout="removeBorder5"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section5"
                class="pb-1"
                @mouseover="addBorder5"
                @mouseout="removeBorder5"
              >
                SOUTHERN REGION
              </p>
            </div>
          </div>
          <div
            class="w-1/3 sectionDiv uppercase"
            @click="navigateTo('../Regions/baku-absheron')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/reg6.png"
                class="imageStyle h-64 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder6"
                @mouseout="removeBorder6"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section6"
                class="pb-1"
                @mouseover="addBorder6"
                @mouseout="removeBorder6"
              >
                BAKU - ABSHERON
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
const section7 = ref(null);
const section8 = ref(null);
const section9 = ref(null);

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
const { addBorder: addBorder7, removeBorder: removeBorder7 } =
  createHoverHandlers(section7);
const { addBorder: addBorder8, removeBorder: removeBorder8 } =
  createHoverHandlers(section8);
const { addBorder: addBorder9, removeBorder: removeBorder9 } =
  createHoverHandlers(section9);
</script>
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
  background-image: url("@/assets/images/newAz10.jpeg");
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
  }
}
.imageStyle {
  @media (min-width: 320px) and (max-width: 425px) {
    height: 200px;
  }
  @media (min-width: 426px) and (max-width: 767px) {
    height: 320px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 370px;
  }
}
</style>
