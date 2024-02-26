<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-full m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl w-2/3 m-auto uppercase font-semibold spacing-2">
            SOUTHERN REGION
          </p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
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
          class="border w-5/6 m-auto p-8 text-customGray"
        >
          <p class="mb-5">
            The fire rhetoric, passed from generation to generation, has been
            reflected in the many artistic works of Azerbaijani masters
            throughout the centuries, and has recently reached its culmination
            in the form of The “Flame Towers” complex. Constructed in Baku not
            long ago, the Flame Towers have, in very a short period of time,
            become a breathtaking architectural landmark of the capital city,
            embodying a tribute to our history, and representing contemporary
            Azerbaijan – a new, ambitious country, developing and progressive,
            but still loyal to its roots and origins.
          </p>
          <p>
            Azerbaijan is the West in the East and the East in the West!
            Welcome!
          </p>
        </div>
        <div class="w-9/12 m-auto">
          <div class="mb-6">
            <div
              @click="clickOnLankaran"
              class="flex text-white font-extrabold hover:scale-105 animate-hover duration-500 transition-all cursor-pointer uppercase mt-10 items-center bg-gray-500 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Lankaran</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
              v-if="showLankaran"
            >
              <img src="@/assets/images/lankaran.jpeg" alt="" />
              <p class="transition-all animate-fadeIn duration-500">
                Lankaran is located in the south-eastern part of Azerbaijan on
                the Caspian Sea. This is one of the brightest and most beautiful
                cities in the country. Exquisite architecture, a wonderful
                climate and beautiful natural landscapes are the hallmarks of
                this city. A percentage of the population of the district is
                ethnic Talish, who have to this day preserved their ancient
                traditions and customs. The subtropical climate of Lankaran
                region is ideal for the growing of citrus fruits, rice, grapes
                and tobacco. Great attention is given to the production of
                Lankaran tea. Hirkan National Park (the habitat of the Asiatic
                leopard) and Gizilagaj Reserve are partially located on the
                territory of Lenkoran and are of considerable interest for
                eco-tourism enthusiasts. There are plenty of historical
                attractions in Lankaran and among them the most attractive is
                Lankaran Fortress, or to be more exact, the fragments of it
                which still remain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const showLankaran = ref(false);

const clickOnLankaran = () => {
  showLankaran.value = !showLankaran.value;
};
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
  background-image: url("@/assets/images/hirkan.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
