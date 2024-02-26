<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-full m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl w-2/3 m-auto uppercase font-semibold spacing-2">
            CENTRAL REGIONS
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
              @click="clickOnArea"
              class="flex text-white font-extrabold hover:scale-105 animate-hover duration-500 transition-all cursor-pointer uppercase mt-10 items-center bg-gray-500 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>ismayilli</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
              v-if="showArea"
            >
              <img src="@/assets/images/ismayilli.jpeg" alt="" />
              <p class="transition-all animate-fadeIn duration-500">
                Ismayilli, located in the north of the country, had been part of
                the Caucasian Albania since the fourth century BC. Here, at the
                top of the highest mountain there are the ruins of a medieval
                fortress. Its construction is attributed to Dzhavanshir, 7th
                century ruler of the Caucasian Albania. The most famous and most
                important historical monument of this region is the Virgo Tower
                (7th-12th centuries) – a defensive structure located at the top
                of the steep mountain near the village of Khanagah. In addition
                to the Azeries, other nations and ethnic groups also live there.
                For example, in the famous Azerbaijani village of Ivanovka,
                there are the molokan descendants of those who were resettled
                from Russia. And in the village of Lahij located on the banks of
                the Girdimanchay River, at an altitude of 1,200 meters, live the
                Tats. The Copper art of Lahij, as well as the art of producing
                kelagai, are both on the UNESCO Intangible Cultural Heritage
                List.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnPopulation"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>shamakhi</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showPopulation">
              <img src="@/assets/images/shamakhi.jpeg" alt="" />
              <p>
                Shamakhi is a former City of Azerbaijan, capital of the Kingdom
                of Shirvan, State residence of Shirvanshahs and one of the most
                beautiful cities of the East. The homeland of Khagani, Nasimi
                and Mirza Alakbar Sabir, this city was the center of the Khanate
                of Shamakhi from the middle of the 18th century. The unique
                nature, temperate climate and natural mineral springs give this
                area a special beauty. Also one of the Mountaineers ‘ favorite
                peaks, Badabag, is here. The most popular place of pilgrimage
                for tourists is the village of Pirkuli, located 22 km from the
                centre of the district, 1400 m above the sea level. Here there
                are opportunities to ski in winter and summer. The largest
                Astrophysical Observatory in Azerbaijan and the Caucasus is also
                in the village of Pirkuli. The Shamakhi Astrophysical
                Observatory, named Nasī al-Dīn al-Tūsī, has the most modern
                facilities and it is the home of one of the largest telescopes
                in the Commonwealth of Independent States (CIS) with a 2 meter
                diameter mirror.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnCapital"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>lahij</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showCapital">
              <img src="@/assets/images/lahij.jpeg" alt="" />
              <p>
                The Alpine settlement of Lahij located in the district of
                Ismayilli is an original monument of ancient urban and
                architectural art. It is believed that the legendary monomaque
                crown, worn for centuries by the Russian tsars, was made here.
                Lahij became famous particularly for manufacturing copper knives
                and utensils decorated with engraved patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const showAirport = ref(false);
const showArea = ref(false);
const showCapital = ref(false);
const showLakes = ref(false);
const showTime = ref(false);
const showCities = ref(false);
const showClimate = ref(false);
const showElectricity = ref(false);
const showReligion = ref(false);
const showRivers = ref(false);
const showVisa = ref(false);
const showPopulation = ref(false);
const showCurrency = ref(false);
const showPoints = ref(false);
const showLanguage = ref(false);

const clickOnArea = () => {
  showArea.value = !showArea.value;
};

const clickOnAirport = () => {
  showAirport.value = !showAirport.value;
};

const clickOnCapital = () => {
  showCapital.value = !showCapital.value;
};

const clickOnLakes = () => {
  showLakes.value = !showLakes.value;
};

const clickOnTime = () => {
  showTime.value = !showTime.value;
};

const clickOnCities = () => {
  showCities.value = !showCities.value;
};

const clickOnClimate = () => {
  showClimate.value = !showClimate.value;
};

const clickOnElectricity = () => {
  showElectricity.value = !showElectricity.value;
};

const clickOnReligion = () => {
  showReligion.value = !showReligion.value;
};

const clickOnRivers = () => {
  showRivers.value = !showRivers.value;
};

const clickOnVisa = () => {
  showVisa.value = !showVisa.value;
};

const clickOnPopulation = () => {
  showPopulation.value = !showPopulation.value;
};

const clickOnCurrency = () => {
  showCurrency.value = !showCurrency.value;
};

const clickOnPoints = () => {
  showPoints.value = !showPoints.value;
};

const clickOnLanguage = () => {
  showLanguage.value = !showLanguage.value;
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
  background-image: url("@/assets/images/mosque.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
