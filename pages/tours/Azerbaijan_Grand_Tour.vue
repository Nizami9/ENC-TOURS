<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">
            {{ $t("AzGrandH") }}
          </p>
          <p class="rounded-md mt-20 text-center textP">
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
        <div class="mainSection flex w-11/12 m-auto mt-10 mb-6">
          <div class="w-12/12 m-auto">
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
            >
              <p class="uppercase text-3xl">{{ $t("highlites") }}</p>
              <carousel></carousel>
            </div>
            <div class="w-full mt-10">
              <div>
                <h3 class="mb-5 text-3xl">{{ $t("mapAndIt") }}</h3>
                <p>
                  {{ $t("mapAndItP") }}
                </p>
              </div>
              <div class="m-auto mt-5 mb-16 mapSection w-1/2">
                <img src="@/assets/images/MapAz10.jpeg" class="border" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 w-full">
          <div class="w-10/12 m-auto pt-10 pb-10">
            <div class="row hover:scale(105)">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck1" />
                    <label class="tab-label" for="chck1">{{
                      $t("AzGrandD1")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP1") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck2" />
                    <label class="tab-label" for="chck2">{{
                      $t("AzGrandD2")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP2") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck3" />
                    <label class="tab-label" for="chck3">{{
                      $t("AzGrandD3")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP3") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck4" />
                    <label class="tab-label" for="chck4">{{
                      $t("AzGrandD4")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP4") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck5" />
                    <label class="tab-label" for="chck5">{{
                      $t("AzGrandD5")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP5") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck6" />
                    <label class="tab-label" for="chck6">{{
                      $t("AzGrandD6")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP6") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck7" />
                    <label class="tab-label" for="chck7">{{
                      $t("AzGrandD7")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP7") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck8" />
                    <label class="tab-label" for="chck8">{{
                      $t("AzGrandD8")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP8") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck9" />
                    <label class="tab-label" for="chck9">{{
                      $t("AzGrandD9")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP9") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck10" />
                    <label class="tab-label" for="chck10">{{
                      $t("AzGrandD10")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP10") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck11" />
                    <label class="tab-label" for="chck11">{{
                      $t("AzGrandD11")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP11") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck12" />
                    <label class="tab-label" for="chck12">{{
                      $t("AzGrandD12")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("AzGrandP12") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ß
        <div class="w-8/12 section4 m-auto mt-10">
          <div>
            <h4 class="text-3xl text2 uppercase mb-2">
              {{ $t("datesAndPr") }}
            </h4>
            <h5 class="w-2/3 section3 text m-auto text-center">
              {{ $t("datesAndPrP") }}
            </h5>
          </div>

          <TourInfo
            start="09th June 2024"
            end="15th June 2024"
            duration="6 days"
            price="4,330"
            singlesup="270"
          />
          <TourInfo
            start="12th April 2024"
            end="18th April 2024"
            duration="6 days"
            price="2,450"
            singlesup="350"
          />
          <TourInfo
            start="18th January 2025"
            end="24th January 2025"
            duration="6 days"
            price="1,500"
            singlesup="299"
          />
          <TourInfo
            start="22th December 2024"
            end="26th December 2024"
            duration="6 days"
            price="3,200"
            singlesup="480"
          />
          <TourInfo
            start="30th July 2025"
            end="06th August 2025"
            duration="6 days"
            price="1,900"
            singlesup="300"
          />
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
import TourInfo from "~~/components/TourInfo.vue";
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

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.row {
  display: flex;
  margin-bottom: 10px;
}

.row:hover {
  scale: 98%;
  background: rgb(234, 179, 6);
  transition: all ease-in 0.2s;
  border-radius: 8px;
}
.row .col {
  flex: 1;
}

.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 5px -4px rgba(0, 0, 0, 0.5);
}

.tab {
  width: 100%;
  overflow: hidden;
}

.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  cursor: pointer;
}

.tab-label::after {
  content: "❯";
  width: 1em;
  height: 1em;
  transition: all 0.3s;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  background: rgb(248, 248, 248);
  transition: all 0.3s;
}
.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  cursor: pointer;
}

input:checked + .tab-label::after {
  transform: rotate(90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
}
</style>
