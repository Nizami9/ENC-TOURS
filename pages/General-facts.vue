<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p
            class="text2 text-7xl w-full m-auto uppercase font-semibold spacing-2"
          >
            GENERAL FACTS about azerbaijan
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
          class="border introText w-5/6 m-auto p-8 text-customGray"
        >
          <p class="mb-5">
            Welcome to Azerbaijan! This is the Land of Fire and the Pearl of the
            Caucasus, a land where eastern colors combine magnificently with
            western progress. Azerbaijan is a country of unique nature,
            unmatched culture, centuries of history with its customs and
            traditions and fine cuisine; a place which will satisfy the
            expectations of the most sophisticated gastronomists, and finally,
            it is the country of Caucasian hospitality and friendliness.
          </p>
          <p class="mb-5">
            Azerbaijan is situated at the eastern side of the Transcaucasia (or
            South Caucasus) on the shores of the Caspian Sea. The population of
            Azerbaijan exceeds 9.8 million and the territory covers an area of
            86 600 square kilometers. According to both of these figures,
            Azerbaijan is the largest country of the South Caucasus. The City of
            Baku is the capital and the country’s largest city. The National
            language here is Azerbaijani. However, Russian is also widely used
            and many younger residents also speak English. Azerbaijan shares
            borders with Iran (765 km), Turkey (15 km), Russia (390 km), Georgia
            (480 km) and Armenia (1007 km). The eastern shores of the country
            are washed by the waters of the Caspian Sea.
          </p>
          <p class="mb-5">
            Historically a part of the Great Silk Road and situated at the
            crossroads of the geopolitical, economic and cultural interests of
            many nations and civilizations, Azerbaijan has, since ancient times,
            aroused the interests of great minds, scientists, travelers and
            historians. References to this amazing land, located on the western
            coast of the Caspian Sea and in the eastern part of the South
            Caucasus, can be found in the ancient writings of Herodotus, Strabo,
            and Claudius Ptolemy. Azerbaijan has an amazing historical and
            cultural heritage with more than 7500 natural, archeological,
            architectural, and historical monuments. Cave drawings at Gobustan,
            Momine-Khatun and Garabaghlar mausoleums, the Palace of Sheki Khans,
            the Maiden Tower, the castles of Absheron, medieval manuscripts
            decorated with magnificent miniature paintings, antique rugs, and
            works of literature, arts and sculpture – all of this is just a
            small part of the country’s rich and priceless heritage.
          </p>
          <p class="mb-5">
            Azerbaijan is often referred to as the “Land of Fire”. It is known
            that the majority of those residing on this territory before the
            Common Era were fire worshippers. Since then, the country has
            preserved the ancient evidence of that era: cave paintings, statues
            of gods and ancient temples. Two of the most vivid examples of this
            heritage are the temple of fire-worshippers (“Ateshgah”) at
            Surakhani near Baku and “Yanardagh”, translated as the “burning
            mountain”. According to legend, “Ateshgah” temple was built by
            Indian fire worshippers, who arrived here after learning about the
            eternally burning fire, emitted from the ground, and were so amazed
            by what they had seen, that they decided to build a temple on this
            very place. These lands were considered to be sacred for centuries
            and throughout history were worshipped by the followers of
            Zoroastrianism, Hinduism and Sikhism.
          </p>
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
              <p>Area</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
              v-if="showArea"
            >
              <p class="textP transition-all animate-fadeIn duration-500">
                Azerbaijan is situated in the Caucasus region of Eurasia. Three
                physical features dominate Azerbaijan: the Caspian Sea, whose
                shoreline forms a natural boundary to the east; the Greater
                Caucasus mountain range to the north; and the extensive
                flatlands at the country’s center. About the size of Portugal or
                the state of Maine, Azerbaijan has a total land area of
                approximately 86,600 square kilometers, less than 1% of the land
                area of the former Soviet Union.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnPopulation"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>POPULATION</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showPopulation">
              <p class="textP">
                The current population of Azerbaijan is 10,126,684 as of Monday,
                May 11, 2020, based on the latest United Nations estimates.
                Azerbaijan population is equivalent to 0.13% of the total world
                population.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnCapital"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>CAPITAL</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showCapital">
              <p class="textP">
                Baku is the capital and largest city of Azerbaijan, as well as
                the largest city on the Caspian Sea and of the Caucasus region.
                Baku is located 28 meters below sea level, which also makes it
                the lowest lying national capital in the world.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnLanguage"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>LANGUAGE</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showLanguage">
              <p class="textP">
                Azerbaijani is the official language of Azerbaijan. It is also
                the language of the majority population of the country. Russian
                and English are widely spoken as well.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnReligion"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>RELIGION</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showReligion">
              <p class="textP">
                Majority of population is Muslim. Other religions are also
                practiced such as Judaism, Orthodox and Catholic. The country is
                tolerant and apart from the mosques you can find churches and
                synagogues both in the capital city Baku and the countryside as
                well
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnCurrency"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>CURRENCY</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showCurrency">
              <p class="textP">
                The Azerbaijan Manat is the currency of Azerbaijan. The current
                exchange rate is 1 USD is 1.70 AZN, 1 Euro is 1.84 AZN. Dollar
                and Euro can be easily exchanged at the local banks and airport.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnTime"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>TIME</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showTime">
              <p class="textP">
                AZT – Azerbaijan Time (Standard Time) currently has same time
                zone offset as AZT (UTC +4) but different time zone name.
                Azerbaijan Time (AZT) is 4 hours ahead of Coordinated Universal
                Time (UTC). This time zone is in use during standard time in:
                Asia.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnClimate"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>CLIMATE</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showClimate">
              <p class="textP">
                9 out of 11 climate zones are available in Azerbaijan, from
                Subtropics to Alpine climates can be witnessed.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnAirport"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>AIRPORTS</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showAirport">
              <p class="textP">
                International Airports: Baku, Ganja, Lankaran, Naxchivan, Gabala
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnCities"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>MAIN CITIES</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showCities">
              <p class="textP">
                Baku, Ganja, Sumqayit, Shamakhi, Quba, Sheki, Qabala, Lankaran
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnPoints"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>HIGHEST POINTS</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showPoints">
              <p class="textP">
                The highest peaks in the Republic of Azerbaijan are situated in
                the Greater Caucasus, the Lesser Caucasus and Talysh mountain
                systems. The highest peak in the Republic of Azerbaijan is
                Bazarduzu (Bigger Caucasus) (4,466 metres (14,656 ft)
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnRivers"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>MAIN RIVERS</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showRivers">
              <p class="textP">
                The rivers of Azerbaijan can be divided into three groups: the
                rivers of the Kursk basin (Kaniks, Kabirri, Turyan, Agstafa,
                Shekir, Terter, Khachin, etc.). the Rivers of the Araks basin
                (Arpachay, Nakhchivan, Ohchu, Hekeri). , Kondelenchay, etc.),
                which flows directly into the Caspian sea (Samur, Gudyal,
                Velvele, Vilesh, Lankaran, etc.)
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnLakes"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>MAIN LAKES</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showLakes">
              <p class="textP">
                The list includes only natural lakes. Artificial lakes, such as
                reservoirs, are excluded from this list. The Caspian sea, which
                is the largest lake on Earth, both in area and volume, and which
                borders Azerbaijan to the East, is also excluded from this list.
                There are about 450 lakes in Azerbaijan.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnElectricity"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>ELECTRICITY</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showElectricity">
              <p class="textP">
                Non-grounded outlets are more common than grounded ones. It is
                recommend both styles of adapters be taken. Azerbaijan has 220
                volt electricity, meaning unless your computer or appliance is
                dual voltage or designed for 220 volts, you will need a
                converter or transformer. The cycles (Hz) are 50 per second.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnVisa"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>REQUIREMENTS OF VISA</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showVisa">
              <p class="textP">Please, apply for e-Visa at www.evisa.gov.az</p>
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
  background-image: url("@/assets/images/baku3.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
  @media (min-width: 320px) and (max-width: 820px) {
    width: 90%;
    font-size: small;
  }
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
    margin-top: 20px;
  }
}
.mainDiv {
  @media (min-width: 320px) and (max-width: 820px) {
    padding-top: 220px;
    width: 80%;
  }
}
</style>
