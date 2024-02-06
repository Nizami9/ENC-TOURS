<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold">SPECIAL INTEREST TOURS</p>
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
          class="flex w-10/12 m-auto mt-10 uppercase mb-2"
        >
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/oil.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                OIL BOOM AND ARCHITECTURE TOUR
              </p>
            </div>
          </div>
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/flowers.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                FLOWER WATCHING TOURS
              </p>
            </div>
          </div>
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/kish.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                RELIGIOUS TOURS
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
          class="flex w-10/12 m-auto mb-2 uppercase"
        >
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/cuisineaz.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                GOURMET TOUR
              </p>
            </div>
          </div>

          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/flamingo1.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                BIRD WATCHING TOUR
              </p>
            </div>
          </div>
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/golf.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                GOLF TOUR
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
          class="flex w-10/12 m-auto mb-6"
        >
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/pomegranate.avif"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
                @mouseover="addBorder7"
                @mouseout="removeBorder7"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section7"
                class="pb-1"
                @mouseover="addBorder7"
                @mouseout="removeBorder7"
              >
                POMEGRANATE TOUR
              </p>
            </div>
          </div>

          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/tea.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
                @mouseover="addBorder8"
                @mouseout="removeBorder8"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section8"
                class="pb-1"
                @mouseover="addBorder8"
                @mouseout="removeBorder8"
              >
                AGRICULTURAL TOUR
              </p>
            </div>
          </div>
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/carpet1.jpeg"
                class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all cursor-pointer"
                alt=""
                @mouseover="addBorder9"
                @mouseout="removeBorder9"
              />
            </div>
            <div class="pl-8 pb-8 text-left">
              <p
                ref="section9"
                class="pb-1"
                @mouseover="addBorder9"
                @mouseout="removeBorder9"
              >
                CARPET AND LOCAL HERITAGE TOURS
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
  background-image: url("@/assets/images/carpet3.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
