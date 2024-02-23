<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 overlay m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase w-3/4 m-auto p-4 rounded-lg font-semibold">
            EXPLORE CAUCASUS & ANCIENT GREAT SILK ROAD
          </p>
          <p class="rounded-md w-1/2 m-auto mt-10 text-center">
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
            Unforgettable 9 day tour to these remote and mysterious countries of
            the Caucasus. Explore Azerbaijan with its fascinating shores of the
            Caspian Sea and countryside. Enjoy your tour to Georgia , visit
            Tbilisi, the charming capital and all the major highlights
          </p>
        </div>
        <div class="flex w-11/12 m-auto mt-10 mb-6">
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
            class="w-11/12 m-auto"
          >
            <div>
              <p class="uppercase text-3xl">HIGHLIGHTS</p>
              <carousel></carousel>
            </div>

            <div class="m-auto mt-10">
              <p class="uppercase text-3xl">AT A GLANCE</p>
              <div class="mt-10 mb-10">
                <div class="flex w-full justify-between mb-4">
                  <div class="bg-gray-400 text-white w-1/4 mr-4 p-5">
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase text-lg mb-5">MEALS</p>
                      <p>14 x Breakfasts</p>
                      <p>13 x Lunches</p>
                      <p>12 x Dinners</p>
                    </div>
                  </div>
                  <div class="bg-gray-400 text-white w-1/4 mr-4 p-5">
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">TRANSPORT</p>
                      <p class="leading-6">
                        On this tour we will use a high-speed train, coaster
                        buses, 4WD Jeeps and internal flights.
                      </p>
                    </div>
                  </div>
                  <div class="bg-gray-400 text-white w-1/4 mr-4 p-5">
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">GROUP SIZE</p>
                      <p>Maximum: 12</p>
                    </div>
                  </div>
                  <div class="bg-gray-400 text-white w-1/4 mr-4 p-5">
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">EXPERT TEAM</p>
                      <p class="leading-6">
                        The full services of a Wild Frontiers Tour Leader with
                        local guides where appropriate
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex w-full justify-between">
                  <div class="bg-gray-400 text-white w-1/4 mr-4 p-5">
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">ACCOMMODATION</p>
                      <p>7 nights x Premium</p>
                      <p>6 nights x Superior</p>
                      <p>1 night x Basic</p>
                    </div>
                  </div>
                  <div class="bg-gray-400 text-white w-1/4 mr-4 p-5">
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">ENTRANCE FEES</p>
                      <p class="leading-6">
                        All entrance fees for sights mentioned in the itinerary
                      </p>
                    </div>
                  </div>
                  <div class="bg-gray-400 text-white w-1/4 mr-4 p-5">
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">FITNESS RATING</p>
                      <p>Low</p>
                    </div>
                  </div>
                  <div class="bg-gray-400 text-white w-1/4 mr-4 p-5">
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">WILD MILES</p>
                      <p>This tour will earn you 6518 Wild Miles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div>
                <h3 class="mb-5 text-3xl">MAP & ITINERARY</h3>
                <p>
                  Individual departures may vary so please refer to the
                  information in the tour specific links in the Dates and Prices
                  section below
                </p>
              </div>
              <div class="m-auto mt-5 mb-5 w-1/2">
                <img
                  src="@/assets/images/MapAzExplore.jpeg"
                  class="border"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-200 w-ful">
          <div class="w-10/12 m-auto pt-10 pb-10">
            <div
              @click="clickOnDay1"
              class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
            >
              <p class="mt-1 text-lg">DAY 1: ARRIVAL</p>
              <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 duration-500"
              v-if="Day1"
            >
              <p class="transition-all animate-fadeIn duration-500">
                Arrival to Baku. Transfer to the hotel. Baku is the capital and
                largest city of Azerbaijan, as well as the largest city on the
                Caspian Sea and of the Caucasus region. It is a large
                scientific, cultural and industrial center. It was first
                mentioned in the Book of the Dead by the Egyptian Pharaoh
                Minesan in 3,500 BC. The ancient age of Baku is also evidenced
                by stone carvings dating back to 12,000 years ago and
                archeological excavations. Overnight in Baku
              </p>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay2"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 2: BAKU</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day2"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  After breakfast, visit Martyrs’ Alley, located on the higher
                  slopes of the city's west-end; this is the best place for
                  panorama view of the city and the Bay of Baku. Then your
                  guided walking tour of Baku includes the medieval walled city
                  "lcheri Sheher" with it is narrow alleyways, historic
                  caravanserais, mosques and Palace of the Shirvan Shahs, UNESCO
                  Heritage site. Visit the Maiden's Tower, UNESCO Heritage site
                  the imposing mansions of the oil barons, built in the oil boom
                  of 1870-1914 and Martyr's with its superb views over the Bay
                  of Baku. Complex of Shirvanshahs Palace was the last residence
                  of the rulers of Shirvan State with rich history. At mediaeval
                  times this state was the most powerful state in Azerbaijan.
                  The Shirvanshahs Palace is a two-storey building in an
                  irregular, rectangular shape. In order to provide better
                  illumination of the palace, the south-eastern part of the
                  building was constructed on different levels. Then you will
                  enjoy excursion to the Absheron Peninsula, visiting the
                  Ateshgah (or place of fire) a Zoroastrian Fire Temple and
                  Yanar Dag. The Temple of Eternal Fire - Ateshgah - is an
                  authentic Azerbaijani exotic. This territory is known for such
                  unique natural phenomenon as burning natural gas outlets
                  (underground gas coming onto surface contacts oxygen and
                  lights up). Yanar Dag is located 25 km to the north from Baku,
                  in Mehemmedi village. From the year 2007 Yanar Dag is declared
                  a state-protected conservation area. During the Absheron tour
                  you will see Quadranqular Tower, one of the ancient Absheron
                  towers located in Mardakan village. Overnight in Baku
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay3"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 3: BAKU – ABSHERON – BAKU</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day3"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  Today enjoy a half day excursion to the Absheron Peninsula,
                  visiting the Ateshgah (or place of fire) a Zoroastrian Fire
                  Temple, UNESCO Heritage site and natural burning mountain
                  Yanardagh. Also see the medieval fortress in Mardakan, which
                  in medieval times formed part of the defence system of the
                  Peninsula and the attractive mosque at Amirjan.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay4"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 4: BAKU – SHAMAKHI – SHEKI</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day4"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  Leaving Baku, depart with ENC guide for the Caucasus Mountains
                  in the northwest of Azerbaijan. The dry landscape gives way to
                  a densely forested mountain area. Visit the town of Shamakhi,
                  once the capital of Shirvan, and the charming village of
                  Lahij, a centre of Azerbaijani handicrafts, before arriving at
                  the historic town of Sheki. Overnight with dinner at an
                  atmospheric converted caravanserai.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay5"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 5: SHEKI – KISH – SHEKI</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day5"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  Visit the Royal Summer Palace of the Sheki Khans with its
                  magnificent frescoes and stained glass as well as Sheki Museum
                  and Fortress. In the afternoon drive into the countryside to
                  the village of Kish with the oldest church in the Caucasus
                  dating from the first century and enjoy a walk in the
                  surrounding Caucasus foothills. Transfer to the border with
                  Georgia. Change vehicle & guide. After crossing the border
                  lunch with famous Georgian wine and shashlik in local family.
                  Visit Gremi Complex before arriving in Telavi. Overnight in
                  Telavi.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay6"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 6: TELAVI – MTSKHETA – GUDAURI</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day6"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  We travel to Kakheti - the famous wine-growing region. In the
                  morning we visit Alaverdi Monastery. Visit local farmer's
                  family to see aunique 300-years old wine cellar. Visit the
                  ancient capital and religious centre of Georgia - Mtskheta and
                  its historical places: Jvari Monastery and Svetitskhoveli
                  Cathedral, where the Robe of Christ is buried. Both Jvari and
                  Svetitskhoveli are UNESCO World Heritage sites. Afternoon we
                  drive through the Great Caucasus along the Georgian Military
                  highway en-route visiting Ananuri complex. In the evening we
                  arrive in Gudauri skiresort.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay7"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 7: GUDAURI – KAZBEGI – TBILISI</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day7"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  A stunning drive from Gudauri along the Tergi River will bring
                  us to Kazbegi - the main town in the region. From Kazbegi 1.5
                  hour walk up through beautiful valleys and woodland leads us
                  to Gergeti Trinity Church located at 2170 m, offering
                  beautiful views of the Caucasus Mountains and the town of
                  Kazbegi. Weather permitting we may catch a glimpse of one of
                  the highest glaciers in the Caucasus -Mt Kazbegi (5047m). We
                  then drive through the dramatic Dariali Gorge before returning
                  to Tbilisi.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay8"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 8: TBILISI</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day8"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  Arrive in Tbilisi and transfer to hotel. Tbilisi sightseeing
                  tour - the Old and New Towns. The city offers a great variety
                  of sights, most of them very ancient. All the places of
                  interest in the Old Town are very close to each other, within
                  a few minutes' walk. We start our visit to Old Tbilisi from
                  Metekhi Church, then walk up to the brick-domed Sulphur Baths.
                  From the Baths we head up the hill to visit Narikala Fortress
                  - one of the oldest fortifications in the city. Afterwards we
                  continue to the Synagogue, Sioni Cathedral and Anchiskhati
                  Church. This marks the end of the Old Town. After lunch we
                  visit the stunning treasury of the Georgian National Museum,
                  before taking a stroll along Rustaveli Avenue - the main
                  street in Tbilisi.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay9"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 9: TBILISI – DEPARTURE</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day9"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  Transfer to the airport and departure.
                </p>
              </div>
            </div>
          </div>
          <div class="pb-5">
            <p class="text-2xl mb-3">* ADDITIONAL INFORMATION</p>
            <p>
              This tour is operated between April – October. Lahij and Mud
              volcanoes are subject to whether conditions. Kazbegi is subject to
              whether conditions
            </p>
          </div>
        </div>

        <div class="w-10/12 m-auto h-200 mt-10 mb-10">
          <div>
            <h4 class="text-3xl">ACCOMMODATION USED ON THIS TOUR</h4>
          </div>
          <div>
            <carouselAccomodation></carouselAccomodation>
          </div>
        </div>

        <div class="w-8/12 m-auto">
          <div>
            <h4 class="text-3xl uppercase mb-2">DATES AND PRICES</h4>
            <h5 class="w-2/3 m-auto text-center">
              The prices below are based on two sharing and exclude
              international flights. A 10% deposit of the tour price is required
              at time of booking.
            </h5>
          </div>
          <div class="border-b mb-5 mt-5 pb-3 flex justify-between w-full">
            <div class="w-1/3 text-left">
              <div class="w-1/3">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                  Available
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  STANDARD DEPARTURE
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 Days)</p>
              </div>
            </div>
            <div class="pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">Optional Single Supplement: + £495</p>
              </div>
            </div>
            <div class="w-1/3">
              <div class="flex justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">Send E-Mail</p>
              </div>
            </div>
          </div>
          <dates></dates>
          <dates></dates>
          <dates></dates>
          <dates></dates>
          <dates></dates>
        </div>
        <div class="w-10/12 bg-gray-200 m-auto mb-5 p-5">
          <h3 class="text-3xl p-5">PRIVATE HOLIDAYS: DATES DON’T FIT?</h3>
          <p>All group tours can be taken on a private basis.</p>
          <div class="flex w-1/2 mt-4 m-auto justify-between pb-5">
            <div class="flex">
              <img
                src="@/assets/images/phone.png"
                class="max-w-6 mr-4"
                alt=""
              />
              <p>Call +44 (0) 20 3925 9628</p>
            </div>
            <div class="flex">
              <div class="flex">
                <img
                  src="@/assets/images/mail.png"
                  class="max-w-6 mr-4"
                  alt=""
                />
                <p>Or ask an expert to tailor-make this trip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import carousel from "@/components/Carousel_Az_10_Days";
import carouselAccomodation from "@/components/Carousel_Accomodation";
import dates from "@/components/Dates_Prices.vue";

const Day1 = ref(false);
const Day2 = ref(false);
const Day3 = ref(false);
const Day4 = ref(false);
const Day5 = ref(false);
const Day6 = ref(false);
const Day7 = ref(false);
const Day8 = ref(false);
const Day9 = ref(false);
const Day10 = ref(false);

const clickOnDay1 = () => {
  Day1.value = !Day1.value;
};

const clickOnDay2 = () => {
  Day2.value = !Day2.value;
};

const clickOnDay3 = () => {
  Day3.value = !Day3.value;
};

const clickOnDay4 = () => {
  Day4.value = !Day4.value;
};

const clickOnDay5 = () => {
  Day5.value = !Day5.value;
};

const clickOnDay6 = () => {
  Day6.value = !Day6.value;
};

const clickOnDay7 = () => {
  Day7.value = !Day7.value;
};

const clickOnDay8 = () => {
  Day8.value = !Day8.value;
};

const clickOnDay9 = () => {
  Day9.value = !Day9.value;
};

const clickOnDay10 = () => {
  Day10.value = !Day10.value;
};
</script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/georg2.webp");
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
  background-image: url("@/assets/images/georg2.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

</style>
