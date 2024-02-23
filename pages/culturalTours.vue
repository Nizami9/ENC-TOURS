<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-3/4 m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold">
            THE CULTURAL AND HERITAGE TOURS
          </p>
          <p class="rounded-md mt-5 w-2/3 m-auto text-center">
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
          class="border w-1/2 m-auto p-8 text-customGray"
        >
          <p>
            ENC Tours experience in designing exceptional experiences continues
            to cast an intimate spell. The almost mesmerizing bonds we have with
            our East and South East Asian destinations are amongst the closest
            one can find – be it a dreamy hideaway along sandy shores or a
            breathtaking moment overlooking its authentic vastness. It is all in
            delivering that perfect moment, where a second of tasting our Asia
            delivers a moment of eternal gratitude for all it encompasses. It is
            all about the local expertise, executive with passion and perfection
            for an exceeding expectations’experience.
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
          <div
            class="w-1/3 uppercase"
            @click="navigateTo('../tours/Azerbaijan_10_days')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/az3.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                AZERBAIJAN 10 DAYS
              </p>
            </div>
          </div>
          <div
            class="w-1/3 uppercase"
            @click="navigateTo('../tours/Explore_Caucasus')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/az5.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                EXPLORE CAUCASUS & ANCIENT GREAT SILK ROAD
              </p>
            </div>
          </div>
          <div
            class="w-1/3 uppercase"
            @click="navigateTo('../tours/Perl_Of_Caspian')"
          >
            <div class="pl-8 pb-2">
              <img
                src="@/assets/images/az10.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                PEARL OF CASPIAN
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex w-10/12 m-auto mb-6"
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
          <div
            class="w-1/3 uppercase"
            @click="navigateTo('../tours/Salam_Azerbaijan')"
          >
            <div class="p-8 pb-2">
              <img
                src="@/assets/images/newAz9.jpeg"
                class="h-60 w-full border-2 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all cursor-pointer"
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
                Salam Azerbaijan
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

const { addBorder: addBorder1, removeBorder: removeBorder1 } =
  createHoverHandlers(section1);
const { addBorder: addBorder2, removeBorder: removeBorder2 } =
  createHoverHandlers(section2);
const { addBorder: addBorder3, removeBorder: removeBorder3 } =
  createHoverHandlers(section3);
const { addBorder: addBorder4, removeBorder: removeBorder4 } =
  createHoverHandlers(section4);
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
  background-image: url("@/assets/images/newAz5.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
