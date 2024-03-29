<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold">ETHNOGRAPHIC TOURS</p>
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
        <div class="w-10/12 m-auto mt-10">
          <div
            class="flex m-auto mt-10 mb-8"
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
              <div class="p-8 pb-2">
                <img
                  src="@/assets/images/khinakig.jpeg"
                  class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all"
                  alt=""
                  @mouseover="addBorder1"
                  @mouseout="removeBorder1"
                />
              </div>
              <div>
                <p
                  ref="section1"
                  class="pb-1"
                  @mouseover="addBorder1"
                  @mouseout="removeBorder1"
                >
                  KHINALIG VILLAGE
                </p>
              </div>
            </div>
            <div class="w-1/3 uppercase">
              <div class="p-8 pb-2">
                <img
                  src="@/assets/images/sloboda.jpeg"
                  class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all"
                  alt=""
                  @mouseover="addBorder2"
                  @mouseout="removeBorder2"
                />
              </div>
              <div>
                <p
                  ref="section2"
                  class="pb-1"
                  @mouseover="addBorder2"
                  @mouseout="removeBorder2"
                >
                  KRASNAYA SLOBODA (JEWISH HERITAGE)
                </p>
              </div>
            </div>
            <div class="w-1/3 uppercase">
              <div class="p-8 pb-2">
                <img
                  src="@/assets/images/nij.jpeg"
                  class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all"
                  alt=""
                  @mouseover="addBorder3"
                  @mouseout="removeBorder3"
                />
              </div>
              <div>
                <p
                  ref="section3"
                  class="pb-1"
                  @mouseover="addBorder3"
                  @mouseout="removeBorder3"
                >
                  NIDJ VILLAGE (UDINS HERITAGE)
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex m-auto mt-10 mb-8"
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
              <div class="p-8 pb-2">
                <img
                  src="@/assets/images/ivanovka.webp"
                  class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all"
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
                  IVANOVKA VILLAGE (MOLOKANS HERITAGE)
                </p>
              </div>
            </div>
            <div class="w-1/3 uppercase">
              <div class="p-8 pb-2">
                <img
                  src="@/assets/images/qakh.jpeg"
                  class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all"
                  alt=""
                  @mouseover="addBorder5"
                  @mouseout="removeBorder5"
                />
              </div>
              <div>
                <p
                  ref="section5"
                  class="pb-1"
                  @mouseover="addBorder5"
                  @mouseout="removeBorder5"
                >
                  QAKH (CAUCASUS MINORITIES HERITAGE)
                </p>
              </div>
            </div>
            <div class="w-1/3 uppercase">
              <div class="p-8 pb-2">
                <img
                  src="@/assets/images/lerik.jpeg"
                  class="h-60 w-full border-4 rounded-md border-orange-400 hover:scale-95 duration-300 transition-all"
                  alt=""
                  @mouseover="addBorder6"
                  @mouseout="removeBorder6"
                />
              </div>
              <div>
                <p
                  ref="section6"
                  class="pb-1"
                  @mouseover="addBorder6"
                  @mouseout="removeBorder6"
                >
                  LERIK (TALISH HERITAGE)
                </p>
              </div>
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
  min-height: 800px;
}
.parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/images/et1.jpeg");
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
* {
  font-family: "Questrial", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
