<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p
            class="text2 text-7xl uppercase w-3/4 m-auto p-4 rounded-lg font-semibold"
          >
            {{ $t("exploreCau") }}
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
        <div class="flex mainSection w-11/12 m-auto mt-10 mb-6">
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
              <p class="uppercase text-3xl">{{ $t("highlites") }}</p>
              <carousel></carousel>
            </div>

            <div class="m-auto mt-10">
              <p class="uppercase text-3xl">{{ $t("atAGlance") }}</p>
              <div class="mt-10 mb-10">
                <div class="flex section2 w-full justify-between mb-4">
                  <div
                    class="bg-gray-400 text-white eachSection w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase text-lg mb-5">{{ $t("meals") }}</p>
                      <p>14 x {{ $t("breakfast") }}</p>
                      <p>13 x {{ $t("lunches") }}</p>
                      <p>12 x {{ $t("dinners") }}</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("transport") }}</p>
                      <p class="leading-6">
                        {{ $t("transportP") }}
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
                      <p class="uppercase mb-5 text-lg">{{ $t("groupSize") }}</p>
                      <p>{{ $t("max") }}: 12</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("expTeam") }}</p>
                      <p class="leading-6">
                        {{ $t("expTeamP") }}
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
                      <p class="uppercase mb-5 text-lg">{{ $t("accomodation") }}</p>
                      <p>7 {{ $t("nights") }} x {{ $t("premium") }}</p>
                      <p>6 {{ $t("nights") }} x {{ $t("superior") }}</p>
                      <p>1 {{ $t("night") }} x {{ $t("basic") }}</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("entrFees") }}</p>
                      <p class="leading-6">
                        {{ $t("entrFeesP") }}
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
                      <p class="uppercase mb-5 text-lg">{{ $t("fitnessRat") }}</p>
                      <p>{{ $t("low") }}</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("wildMiles") }}</p>
                      <p>{{ $t("wildMilesP") }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div>
                <h3 class="mb-5 text-3xl">{{ $t("mapAndIt") }}</h3>
                <p>
                  {{ $t("mapAndItP") }}
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
              <p class="text mt-1 text-lg">{{ $t("az10D1") }}</p>
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

          </div>
          <div class="pb-5">
            <p class="text-2xl mb-3 text">* ADDITIONAL INFORMATION</p>
            <p class="text">
              This tour is operated between April – October. Lahij and Mud
              volcanoes are subject to whether conditions. Kazbegi is subject to
              whether conditions
            </p>
          </div>
        </div>

        <div class="w-10/12 m-auto h-200 mt-10 mb-10">
          <div>
            <h4 class="text-3xl text2">{{ $t("accomUsed") }}</h4>
          </div>
          <div>
            <carouselAccomodation></carouselAccomodation>
          </div>
        </div>

        <div class="w-8/12 section4 m-auto">
          <div>
            <h4 class="text-3xl text2 uppercase mb-2">{{ $t("datesAndPr") }}</h4>
            <h5 class="w-2/3 section3 text m-auto text-center">
              {{ $t("datesAndPrP") }}
            </h5>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-10/12 bg-gray-200 m-auto mb-5 p-5">
          <h3 class="text-3xl p-5 text2">{{ $t("privatHolidays") }}</h3>
          <p class="text">{{ $t("privatHolidaysP1") }}</p>
          <div class="flex endSection w-1/2 mt-4 m-auto justify-between pb-5">
            <div class="flex text w-full justify-around">
              <div class="flex justify-around w-full">
                <img src="@/assets/images/phone.png" class="h-6" alt="" />
                <p>{{ $t("privatHolidaysP2") }} +44 (0) 20 3925 9628</p>
              </div>
            </div>
            <div class="flex text w-full justify-around">
              <div class="flex justify-around w-full">
                <img src="@/assets/images/mail.png" class="h-6" alt="" />
                <p>{{ $t("privatHolidaysP3") }}</p>
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
const Day5 = ref(false);
const Day6 = ref(false);
const Day7 = ref(false);
const Day8 = ref(false);
const Day9 = ref(false);

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
  background-image: url("@/assets/images/georg2.webp");
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
