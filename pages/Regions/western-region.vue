<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-full m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl w-2/3 m-auto uppercase font-semibold spacing-2">
            WESTERN REGION
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
              @click="clickOnGanja"
              class="flex text-white font-extrabold hover:scale-105 animate-hover duration-500 transition-all cursor-pointer uppercase mt-10 items-center bg-gray-500 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Ganja</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
              v-if="showGanja"
            >
              <img src="@/assets/images/ganja2.jpeg" alt="" />
              <p class="transition-all animate-fadeIn duration-500">
                Ganja, with a history of more than 2500 years, is the second
                largest city in the country, a monument to its ancient culture,
                the industrial center of western Azerbaijan and the House of the
                great Nizami. Ganja is surrounded by forests, vineyards, lakes,
                rivers and mountains. The region is famous for its numerous
                mineral water sources and its unique medicinal oil –
                naphthalane, extracted 48 km from Ganja, in the town of
                Naftalan. In the neighbouring region of Goygol there is the
                Goygol Nature Reserve, which is the main reserve in Azerbaijan.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnGoygol"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Goygol</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showGoygol">
              <img src="@/assets/images/goygol2.jpeg" alt="" />
              <p>
                The Goygol, located in the west of Azerbaijan, is one of the
                most picturesque regions of the country. The Goygol State
                Reserve, created in 1925, is located on the banks of the famous
                Goygol lake, at an altitude of 1,600 meters. Lake Goygol is the
                cleanest mountain water reservoir in the Caucasus. The center of
                the district was formerly called Helenendorf. The settlement was
                founded by German settlers in August 1819 on the site of an old
                village, Hanlyglar, later the town of Hanlar. Today, the Goygol
                district is a symbol of the close friendship between Azerbaijan
                and the German nations. A lot of work has been done here to
                preserve the German heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const showGoygol = ref(false);
const showGanja = ref(false);

const clickOnGoygol = () => {
  showGoygol.value = !showGoygol.value;
};

const clickOnGanja = () => {
  showGanja.value = !showGanja.value;
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
  background-image: url("@/assets/images/goygol.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
