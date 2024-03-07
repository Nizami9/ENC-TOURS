<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 mainDiv overlay m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p
            class="text2 text-7xl uppercase w-3/4 m-auto p-4 rounded-lg font-semibold"
          >
            {{ $t("azGeo") }}
            PEARL OF CASPIAN
          </p>
          <p class="rounded-md w-1/2 m-auto mt-10 text-center textP">
            Lauded for its extensive knowledge, its East-meets-West model and
            venturing responsibly into every corner of its destinations, it is
            our mission to show guests the beating heart of our Asia
          </p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="text-6xl mainP">INTRO</p>
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
          class="border introText w-1/2 m-auto p-8 text-customGray"
        >
          <p>
            Unforgettable 9 day tour to these remote and mysterious countries of
            the Caucasus. Explore Azerbaijan with its fascinating shores of the
            Caspian Sea and countryside. Enjoy your tour to Georgia , visit
            Tbilisi, the charming capital and all the major highlights
          </p>
        </div>
        <div class="mainSection flex w-11/12 m-auto mt-10 mb-6">
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
              <p class="uppercase text-3xl">{{ $t("azGeo") }} HIGHLIGHTS</p>
              <carousel></carousel>
            </div>

            <div class="m-auto mt-10">
              <p class="uppercase text-3xl">{{ $t("azGeo") }} AT A GLANCE</p>
              <div class="mt-10 mb-10">
                <div class="flex section2 w-full justify-between mb-4">
                  <div
                    class="bg-gray-400 text-white eachSection w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase text-lg mb-5">{{ $t("azGeo") }}MEALS</p>
                      <p>14 x {{ $t("azGeo") }}Breakfasts</p>
                      <p>13 x {{ $t("azGeo") }}Lunches</p>
                      <p>12 x {{ $t("azGeo") }}Dinners</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("azGeo") }}TRANSPORT</p>
                      <p class="leading-6">
                        {{ $t("azGeo") }}On this tour we will use a high-speed train, coaster
                        buses, 4WD Jeeps and internal flights.
                      </p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("azGeo") }}GROUP SIZE</p>
                      <p>{{ $t("azGeo") }}Maximum: 12</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("azGeo") }}EXPERT TEAM</p>
                      <p class="leading-6">
                        {{ $t("azGeo") }}The full services of a Wild Frontiers Tour Leader with
                        local guides where appropriate
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex section2 w-full justify-between">
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("azGeo") }}ACCOMMODATION</p>
                      <p>7 {{ $t("azGeo") }}nights x {{ $t("azGeo") }}Premium</p>
                      <p>6 {{ $t("azGeo") }}nights x {{ $t("azGeo") }}Superior</p>
                      <p>1 {{ $t("azGeo") }}night x {{ $t("azGeo") }}Basic</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("azGeo") }}ENTRANCE FEES</p>
                      <p class="leading-6">
                        {{ $t("azGeo") }}All entrance fees for sights mentioned in the itinerary
                      </p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("azGeo") }}FITNESS RATING</p>
                      <p>Low</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("azGeo") }}WILD MILES</p>
                      <p>{{ $t("azGeo") }}This tour will earn you 6518 Wild Miles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div>
                <h3 class="mb-5 text-3xl">{{ $t("azGeo") }}MAP & ITINERARY</h3>
                <p>
                  {{ $t("azGeo") }}Individual departures may vary so please refer to the
                  information in the tour specific links in the Dates and Prices
                  section below
                </p>
              </div>
              <div class="m-auto mt-5 mb-5 mapSection w-1/2">
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
              <p class="text mt-1 text-lg">{{ $t("azGeo") }}DAY 1: ARRIVAL</p>
              <img
                src="@/assets/images/plus-button.png"
                class="plusButton w-8"
                alt=""
              />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 duration-500"
              v-if="Day1"
            >
              <p class="text transition-all animate-fadeIn duration-500">
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
                <p class="text mt-1 text-lg">{{ $t("azGeo") }}DAY 2: BAKU– GOBUSTAN – BAKU</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all animate-fadeIn"
                v-if="Day2"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  After breakfast we will drive to Gobustan rock paintings
                  museum in the open air | UNESCO Heritage site which is
                  situated in 65 km from Baku. The museum is opened on the base
                  of one of the ancient settlements of neolith period. Then
                  visit active mud volcanoes plateau located in 12 km distance
                  from the museum. Drive back to the city. Lunch at local
                  restaurant. Then visit Martyrs’ Alley, enjoy panoramic view of
                  Baku bay. Then we continue the tour and visit famous Icheri
                  Shekher (Inner town) with its historical buildings and narrow
                  lanes. Enter the town through Shemakha gates, visit the Palace
                  of Shirvanshakhs’ 14-17 CC, the residence of one of the
                  powerful dynasties in the history of Azerbaijan. Then we walk
                  to medieval caravansaray that was one of the main stop points
                  for great caravans travelling along the ancient Great Silk
                  Road. After that we will see the charming Maiden Tower 09-12
                  cc, the symbol of city of Baku. The history of the tower is
                  full of many legends up to nowadays. You can see old medieval
                  bathes surrounding the tower. Enjoy the view of the imposing
                  mansions of the oil barons, built in the oil boom of
                  1870-1914. Overnight at the hotel.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay3"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("azGeo") }}DAY 3: BAKU – ABSHERON – BAKU</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day3"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  After breakfast you will enjoy half day excursion to the
                  Absheron Peninsula (30 km away from the city center), visiting
                  the Ateshgah (or place of fire) a Zoroastrian Fire Temple and
                  Yanar Dag. The Temple of Eternal Fire - Ateshgah - is an
                  authentic Azerbaijani exotic. This territory is known for such
                  unique natural phenomenon as burning natural gas outlets
                  (underground gas coming onto surface contacts oxygen and
                  lights up). Yanar Dag is located 25 km to the north from Baku,
                  in Mehemmedi village. From the year 2007 Yanar Dag is declared
                  a state-protected conservation area. Visit Mardakan Tower.
                  Visit Heydar Aliyev Cultural Center. Heydar Aliyev Center is a
                  cultural center, projected as a complex structure that
                  includes the auditorium (convention center), a museum,
                  exhibition halls, administrative offices. The project of the
                  center was designed by the winner of Pritzker prize and
                  internationally recognized architect Zaha Hadid. Free time.
                  Overnight in Baku.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay4"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">DAY 4: DEPARTURE</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day4"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  Breakfast at hotel Guided transfer to Baku Heydar Aliyev
                  Airport. Departure.
                </p>
              </div>
            </div>
          </div>
          <div class="pb-5">
            <p class="text text-2xl mb-3">* ADDITIONAL INFORMATION</p>
            <p class="text">
              Breakfast at hotel Guided transfer to Baku Heydar Aliyev Airport.
              Departure.
            </p>
          </div>
        </div>

        <div class="w-10/12 m-auto h-200 mt-10 mb-10">
          <div>
            <h4 class="text-3xl text2">ACCOMMODATION USED ON THIS TOUR</h4>
          </div>
          <div>
            <carouselAccomodation></carouselAccomodation>
          </div>
        </div>

        <div class="w-8/12 section4 m-auto">
          <div>
            <h4 class="text-3xl text2 uppercase mb-2">DATES AND PRICES</h4>
            <h5 class="w-2/3 section3 m-auto text-center">
              The prices below are based on two sharing and exclude
              international flights. A 10% deposit of the tour price is required
              at time of booking.
            </h5>
          </div>
          <div
            class="border-b mb-5 mt-5 section5 pb-3 flex justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
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
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">Optional Single Supplement: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">Send E-Mail</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 section5 pb-3 flex justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
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
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">Optional Single Supplement: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">Send E-Mail</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 section5 pb-3 flex justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
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
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">Optional Single Supplement: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">Send E-Mail</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 section5 pb-3 flex justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
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
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">Optional Single Supplement: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">Send E-Mail</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 section5 pb-3 flex justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
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
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">Optional Single Supplement: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">Send E-Mail</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 section5 pb-3 flex justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
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
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">Optional Single Supplement: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">Send E-Mail</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-10/12 bg-gray-200 m-auto mb-5 p-5">
          <h3 class="text-3xl p-5 text2">PRIVATE HOLIDAYS: DATES DON’T FIT?</h3>
          <p class="text">All group tours can be taken on a private basis.</p>
          <div class="flex endSection w-1/2 mt-4 m-auto justify-between pb-5">
            <div class="flex text w-full justify-around">
              <div class="flex justify-around w-full">
                <img src="@/assets/images/phone.png" class="h-6" alt="" />
                <p>Call +44 (0) 20 3925 9628</p>
              </div>
            </div>
            <div class="flex text w-full justify-around">
              <div class="flex justify-around w-full">
                <img src="@/assets/images/mail.png" class="h-6" alt="" />
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

const Day1 = ref(false);
const Day2 = ref(false);
const Day3 = ref(false);
const Day4 = ref(false);

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
</script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/newAz8.jpeg");
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
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
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
    margin-top: 40px;
  }
}
.mainDiv {
  @media (min-width: 320px) and (max-width: 820px) {
    padding-top: 220px;
    width: 80%;
  }
}
.mainSection {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: medium;
    display: block;
  }
}
.mainP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

.section2 {
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
  }
}

.section5 {
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
  }
}

.eachSection {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
    margin-bottom: 10px;
  }
}

.sec51 {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
    margin: auto;
    text-align: center;
  }
}

.sec51Pt {
  @media (min-width: 320px) and (max-width: 820px) {
    padding-top: 15px;
  }
}

.secAvailable {
  width: 120px;
  margin: auto;
}

.sec5end {
  @media (min-width: 320px) and (max-width: 820px) {
    justify-content: center;
  }
}

.mapSection {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
  }
}

.section3 {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
  }
}

.section4 {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 90%;
  }
}

.text {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: small;
    width: 100%;
  }
}

.plusButton {
  @media (min-width: 320px) and (max-width: 820px) {
    height: 28px;
    width: auto;
  }
}

.endSection {
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
  }
}
</style>
