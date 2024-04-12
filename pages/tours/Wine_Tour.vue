<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 mainDiv overlay m-auto pt-52 text-center z-10 uppercase text-white p-2"
        >
          <p
            class="text2 text-7xl uppercase w-3/4 m-auto p-4 rounded-lg font-semibold"
          >
            {{ $t("specialP5") }}
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
              <p class="uppercase text-3xl">{{ $t("highlites") }}</p>
              <carousel></carousel>
            </div>

            <AtAGlance
              breakfast="6"
              lunches="6"
              dinners="3"
              groupsize="10"
              premium="3"
              superior="2"
              basic="2"
              wild-miles="4320"
            />

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
        <div class="bg-gray-100 w-full">
          <div class="w-10/12 m-auto pt-10 pb-10">
            <div class="row hover:scale(105)">
              <div class="col">
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="chck1" />
                    <label class="tab-label" for="chck1">{{
                      $t("wineD1")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("wineP1") }}
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
                      $t("wineD2")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("wineP2") }}
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
                      $t("wineD3")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("wineP3") }}
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
                      $t("wineD4")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("wineP4") }}
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
                      $t("wineD5")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("wineP5") }}
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
                      $t("wineD6")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("wineP6") }}
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
                      $t("wineD7")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("wineP7") }}
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
                      $t("wineD8")
                    }}</label>
                    <div class="tab-content">
                      {{ $t("wineP8") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <h4 class="text-3xl text2 uppercase mb-2">
              {{ $t("datesAndPr") }}
            </h4>
            <h5 class="w-2/3 section3 m-auto text-center">
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
import carouselAccomodation from "@/components/Carousel_Accomodation";
import TourInfo from "@/components/TourInfo.vue";
import AtAGlance from "~~/components/AtAGlance.vue";
</script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/flamingo1.jpeg");
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
