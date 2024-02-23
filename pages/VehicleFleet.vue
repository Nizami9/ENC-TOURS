<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold">VEHICLE FLEET</p>
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
            ENC Tours specializes in Ethnographic Tours, providing a unique
            service that explores Azerbaijan's cultural heritage. Tailored for
            those interested in local traditions, these tours offer an immersive
            experience, featuring visits to traditional villages, engaging with
            artisanal crafts, and participating in authentic rituals. With
            expert guides, the tours provide insights into the historical
            significance of customs, ensuring a meaningful and educational
            journey. ENC Tours' Ethnographic Tours aim to offer a genuine
            encounter with Azerbaijan's diverse cultural traditions, making it
            an enriching experience for travelers.
          </p>
        </div>
        <div
          class="flex w-10/12 m-auto mt-10 uppercase mb-2"
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
        >
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/sedan.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
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
                SEDAN (AUTOMOBILE) – 3 SEATS
              </p>
            </div>
          </div>

          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/minibus.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
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
                MINIBUS – 6 SEATS
              </p>
            </div>
          </div>
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/minivan2.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
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
                MINIVAN – 17 SEATS
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex w-10/12 m-auto mt-10 uppercase mb-2"
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
        >
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/minivan1.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder4"
                @mouseout="removeBorder4"
              />
            </div>
            <div>
              <p
                ref="section4"
                class="pb-1"
                @mouseover="addBorder4"
                @mouseout="removeBorder4"
              >
                MINIVAN – 15 SEATS
              </p>
            </div>
          </div>

          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/bigbus.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
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
                BIG BUS – 45 SEATS
              </p>
            </div>
          </div>

          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/bentley2.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
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
                LUXURY CARS – BENTLEY
              </p>
            </div>
          </div>
        </div>

        <div
          class="flex w-10/12 m-auto mt-10 uppercase mb-2"
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
        >
          <div class="w-1/3 uppercase">
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/rolls.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
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
                LUXURY CARS – ROLLS ROYCE
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
  background-image: url("@/assets/images/buses3.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
