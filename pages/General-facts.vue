<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p
            class="text2 text-7xl w-full m-auto uppercase font-semibold spacing-2"
          >
            {{ $t("genFacts") }}
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
            {{ $t("genP1") }}
          </p>
          <p class="mb-5">
            {{ $t("genP2") }}
          </p>
          <p class="mb-5">
            {{ $t("genP3") }}
          </p>
          <p class="mb-5">
            {{ $t("genP4") }}
          </p>
          <p class="mb-5">
            {{ $t("genP5") }}
          </p>
          <p>
            {{ $t("genP6") }}
          </p>
        </div>
        <div class="w-9/12 m-auto">
          <div class="mb-6">
            <div
              @click="clickOnArea"
              class="flex text-white font-extrabold hover:scale-105 animate-hover duration-500 transition-all cursor-pointer uppercase mt-10 items-center bg-gray-500 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("area") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
              v-if="showArea"
            >
              <p class="textP transition-all animate-fadeIn duration-500">
                {{ $t("areaP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnPopulation"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("population") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showPopulation">
              <p class="textP">
                {{ $t("popP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnCapital"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("capital") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showCapital">
              <p class="textP">
                {{ $t("capP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnLanguage"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("lang") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showLanguage">
              <p class="textP">
                {{ $t("langP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnReligion"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("religion") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showReligion">
              <p class="textP">
                {{ $t("religP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnCurrency"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("currency") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showCurrency">
              <p class="textP">
                {{ $t("currencyP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnTime"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("time") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showTime">
              <p class="textP">
                {{ $t("timeP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnClimate"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("climate") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showClimate">
              <p class="textP">
                {{ $t("climP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnAirport"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("airports") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showAirport">
              <p class="textP">
                {{ $t("airP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnCities"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("mainCities") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showCities">
              <p class="textP">
                {{ $t("citiesP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnPoints"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("points") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showPoints">
              <p class="textP">
                {{ $t("pointsP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnRivers"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("mainRivers") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showRivers">
              <p class="textP">
                {{ $t("riversP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnLakes"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("mainLakes") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showLakes">
              <p class="textP">
                {{ $t("lakesP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnElectricity"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("electricity") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showElectricity">
              <p class="textP">
                {{ $t("elecP") }}
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnVisa"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>{{ $t("reqVisa") }}</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showVisa">
              <p class="textP">{{ $t("reqVisaP") }}</p>
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
