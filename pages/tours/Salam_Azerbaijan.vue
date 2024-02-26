<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold">SALAM AZERBAIJAN</p>
          <p class="rounded-md mt-20 text-center">
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
            THIS OUTSTANDING TRIP TAKES IN FOUR OF THE MOST IMPORTANT CITIES OF
            THE OLD SILK ROAD AND IS PERFECT IF CULTURE AND HISTORY ARE YOUR
            REASONS FOR TRAVEL. STARTING OUR TRIP IN UZBEKISTAN, WE WILL FIRST
            VISIT THE SPLENDOUR OF SAMARKAND AND BUKHARA BEFORE CROSSING THE
            FAMOUS RIVER OXUS AND ENTERING TURKMENISTAN. WE THEN TRAVEL ON TO
            MERV, ONE OF THE GREAT EMPORIUMS OF THE SILK ROAD (UNTIL A CERTAIN
            GENGHIS KHAN FLATTENED MOST OF IT) AND MARGUSH, WHERE THE BRONZE AGE
            ARCHAEOLOGICAL SITE OF GONUR DEPE LIES, BELIEVED BY SOME TO
            REPRESENT THE CAPITAL OF THE FIFTH GREAT CIVILISATION OF THE ANCIENT
            WORLD. AFTER THIS WE WILL TRAVEL TO THE CURIOUSLY NAMED AND TOTALLY
            WEIRD MODERN CAPITAL OF ASHGABAT (THE CITY OF LOVE) BEFORE DRIVING
            NORTH THROUGH THE KARAKUM DESERT TO SEE THE AMAZING DARVAZA GAS
            CRATER. CONTINUING NORTH TO VISIT KONYA URGENCH, WE THEN CROSS BACK
            INTO UZBEKISTAN AND ON TO KHIVA. THE TOUR ENDS WHERE IT STARTED
            AMONGST THE LEAFY STREETS OF TASHKENT. THIS IS AN INTERESTING AND
            ENTIRELY ORIGINAL ITINERARY YOU WILL FIND NOWHERE ELSE.
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
                  src="@/assets/images/MapSalam.jpg"
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
                Upon arrival in Baku today, you will be met by ENCTOURS driver
                and guide and transferred to your hotel. Baku is a city of huge
                contrasts; minarets have been superseded by the iconic
                architectural landmark that is The Flame Towers, which against
                all the odds work well in this city that has always been about
                old and new. While Old Baku had a reputation of a city blighted
                by oil extraction, it has recently been completely transformed
                into a 21st Century capital with seaside promenades and
                extraordinary architecture by such luminaries as Zaha Hadid.
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
                  After breakfast, your guided walking tour of Baku includes the
                  medieval walled city "lcheri Sheher" with it is narrow
                  alleyways, historic caravanserais, mosques and Palace of the
                  Shirvan Shahs, UNESCO Heritage site. We will see the Maiden's
                  Tower (external view), UNESCO Heritage site the imposing
                  mansions of the oil barons, built in the oil boom of 1870-1914
                  and Martyr's with its superb views over the Bay of Baku.
                  Complex of Shirvanshahs Palace was the last residence of the
                  rulers of Shirvan State with the history of thousand. At
                  mediaeval times this state was the most powerful state in
                  Azerbaijan. The Shirvanshahs Palace is a two-storey building
                  in an irregular, rectangular shape. In order to provide better
                  illumination of the palace, the south-eastern part of the
                  building was constructed on different levels. Then visit we
                  will visit Azerbaijan Carpet Museum. It has the largest
                  collection of Azerbaijani carpets in the world. The museum has
                  become a research-training and cultural-educational center
                  where many events, such as exhibitions, international
                  symposiums, and conferences, are held. Plans to move the
                  collection to a new purpose-built venue have been in the works
                  since 2010 when Azerbaijani carpets were proclaimed "a
                  Masterpiece of Intangible Heritage" by UNESCO. The structure
                  of the building is intended to look like a rolled carpet.
                  Designed by Austrian architect Franz Janz, the building took
                  over six years to construct. Overnight at the hotel in Baku.
                  (B/L/-) *Carpet Museum is closed on Mondays.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay3"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 3: BAKU – ABSHERON – BAKU, 60 KM</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day3"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  After breakfast you will enjoy half day excursion to the
                  Absheron Peninsula (30 km away from the city center), visiting
                  the Ateshgah (or place of fire) a Zoroastrian Fire Temple and
                  ethnographical museum Gala. The Temple of Eternal Fire -
                  Ateshgah - is an authentic Azerbaijani exotic. This territory
                  is known for such unique natural phenomenon as burning natural
                  gas outlets (underground gas coming onto surface contacts
                  oxygen and lights up). Visit Nobel House-Museum. Constructed
                  in 1884, Villa Petrolea was a residence for Nobel brothers for
                  almost 40 years. In 1879 they established the Brothers Nobel
                  Oil Company – “Branobel”, which very soon became one of the
                  biggest oil companies in the world. Visit Heydar Aliyev
                  Cultural Center. Heydar Aliyev Center is a cultural center,
                  projected as a complex structure that includes the auditorium
                  (convention center), a museum, exhibition halls,
                  administrative offices. The project of the center was designed
                  by the winner of Pritzker prize and internationally recognized
                  architect Zaha Hadid. Overnight in Baku. (B/L/-) *Heydar
                  Aliyev Center is closed on Mondays.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay4"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">
                  DAY 4: BAKU – SHEMAKHA – LAHIJ – SHEKI, 350 KM
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day4"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  Leaving Baku behind us, our journey takes us through beautiful
                  landscapes on the way to Shamakhi. Upon arrival in Shamakhi we
                  will have a sightseeing of historical Djuma Mosque (10th
                  century, reconstructed in the 19th century). This oldest and
                  largest mosque in Azerbaijan, Shamakhi Djuma, according to the
                  legend was built in the 8th century when Shamakhi was chosen
                  as residence by an Arabian caliph. Built more than 1,200 years
                  ago Shamakhi Djuma mosque still remains one of the largest
                  cult structures of the Caucasus. Then we will drive to Lahij
                  village built in the 5th century B.C. on the canyon of the
                  river Girdimanchay. The older villagers speak a dialect that
                  is nearer to Farsi than Azeri and claim that Lahij is named
                  for the Persian-Caspian town of Lahijun from which their
                  ancestors supposedly were emigrated a millennium ago, bringing
                  with them their famous skills. We can meet there unique
                  hand-made items from copper, adorned with carving in the form
                  of oriental ornaments, knitted and weaved goods, wood and
                  leather ware, souvenir knives and many other. Some items from
                  Lahij were included in the collection of Louvre and Bern
                  Museum. Here also we can enjoy beautiful master-class in the
                  art of engraving copper craft. *Trip to Lahij is subject to
                  weather conditions. Then we will arrive in Sheki. Overnight at
                  the hotel in Sheki. (B/L/-)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay5"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 5: SHEKI – GANJA, 150 KM</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day5"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  One of the most ancient cities of Azerbaijan, Sheki is rightly
                  called the architectural reserve of the country. Visit local
                  bazar. Of particular interest to the tourists from all over
                  the world is the Palace of Sheki Khans (1762) – a rare example
                  of combining the national and palace architecture traditions.
                  It is remarkable that during the construction of the palace,
                  not a single nail was used, and the colored glass for shebeke
                  (national mosaic) was brought from Venice. There were many
                  caravanserais in Sheki, which was famous for its trade. Two of
                  them are still here today; the Upper and the Lower
                  Caravanserais, both built in the 18th century. Then we will
                  visit a church of XII century in Kish that was visited by
                  famous Norwegian adventurer Thor Heyerdahl. Visit kelagai
                  workshop and see how kelagai is produced. Depart to Ganja.
                  Overnight in Ganja. (B/L/-)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay6"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">
                  DAY 6: GANJA – ISMAILLI – BAKU, 360 KM
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day6"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  Ganja is the second biggest city of Azerbaijan with more than
                  a million populations. Ganja is the birthplace of the great
                  Azerbaijani poet Nizami Ganjavi who made the invaluable
                  contribution to the history of not only Azerbaijani literature
                  but also the world literature. Nizami Ganjevi was born in
                  Ganja in 1141. He was one of the most educated people of the
                  time. Today we will visit the 17th century Shah Abbas Mosque,
                  Javadkhan Mousaleum (XIX century), the Orthodox church (
                  1815),Nizami Mousaleum and the "Bottle House", local icon in
                  Ganja decorated with 50,000 glass bottles. Visit Imamzade
                  Mosque. Return to Baku. On the way to Baku we will visit
                  Ismailli and Chateu Monolit, where we will have wine tasting
                  and get information about wines produced in Azerbaijan.
                  Overnight in Baku (B/L/-)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay7"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 7: BAKU – GOBUSTAN – BAKU</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day7"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  This morning we will leave Baku for Gobustan Historical
                  Reserve (65 km far). The reserve is well known with its
                  perfectly preserved rock paintings - petroglyphs - a kind of
                  artistic "archive" of human evolution on the Earth. They
                  reflect the history of this region for nearly 15,000 years -
                  since the end of the era of the Upper Paleolithic till the
                  Middle Ages. Before the start of the tour around Gobustan we
                  will visit the interactive museum with the same name, where
                  with the help of special programs and multimedia touch screens
                  we will get information about the nature, the flora of
                  Gobustan. In 2007 Gobustan was declared a UNESCO World
                  Heritage Site. During his visit to Azerbaijan Thor Heyerdahl
                  had long been fascinated with the rock carvings that date back
                  to about 8th-7th millennia BCE at Gobustan (about 30 miles/48
                  km west of Baku). He was convinced that their artistic style
                  closely resembled the carvings found in his native Norway. The
                  ship designs, in particular, were regarded by Heyerdahl as
                  similar and drawn with a simple sickle-shaped line,
                  representing the base of the boat, with vertical lines on
                  deck, illustrating crew or, perhaps, raised oars. Visit Mud
                  volcanoes (upon the weather conditions, operated only when the
                  roads are dry) Return to Baku. Evening free to explore the
                  capital. (B/L/D)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay8"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="mt-1 text-lg">DAY 8: DEPARTURE</p>
                <img src="@/assets/images/plus-button.png" class="w-8" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day8"
              >
                <p class="transition-all animate-fadeIn duration-500">
                  In the morning transfer to the airport. Departure (-/-/-)
                </p>
              </div>
            </div>
          </div>
          <div class="pb-5">
            <p>In the morning transfer to the airport. Departure (-/-/-)</p>
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
  background-image: url("@/assets/images/sheki1.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
}
</style>
