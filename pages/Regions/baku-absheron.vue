<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-full m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl w-2/3 m-auto uppercase font-semibold spacing-2">
            BAKU – ABSHERON
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
              @click="clickOnBaku"
              class="flex text-white font-extrabold hover:scale-105 animate-hover duration-500 transition-all cursor-pointer uppercase mt-10 items-center bg-gray-500 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Baku</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
              v-if="showBaku"
            >
              <img src="@/assets/images/baku4.jpeg" alt="" />
              <p class="transition-all animate-fadeIn duration-500">
                The capital of Azerbaijan, where past and present are
                intricately intertwined, has always attracted tourists. Of
                particular interest to guests of Baku is the Old City or Icheri
                Sheher (Inner City) with its fortress walls and Maiden Tower.
                These fascinating structures are in fact included in the UNESCO
                World Heritage List. Of no less interest for visitors is the
                modern appearance of the capital. Among the new landmarks of
                Baku one can distinguish the magnificent Flame Towers building,
                Heydar Aliyev Center and the sports, leisure and entertainment
                complex, Crystal Hall.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnAbsheron"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Absheron</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showAbsheron">
              <img src="@/assets/images/absheron.jpeg" alt="" />
              <p>
                Washed by the waters of the Caspian Sea, Absheron is especially
                famous for its sandy beaches and numerous suburban settlements
                as well as the developed infrastructure of its hotels, water
                parks, cafés and restaurants. The Absheron Peninsula has
                preserved a number of historical monuments: the “Ateshgah” fire
                temple (XVII-XVIII centuries), The 14th Century Nardaran Castle,
                the Round Castle (1232) and Quadrangular Castle (XII century) in
                Mardakan settlement, the 14th Century castle in Ramana and
                others.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnGobustan"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Gobustan (Reserve)</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showGobustan">
              <img src="@/assets/images/gobustan.jpeg" alt="" />
              <p>
                Sixty km south of Baku, in an area covering 537 hectares, there
                is the magnificent and fascinating Gobustan National
                Historical-Artistic Reserve. This is one of the world’s largest
                ancient petroglyph complexes, boasting more than 4,000
                petroglyphs on the site. The Cultural Landscape of Gobustan
                petroglyph is included in the UNESCO World Heritage List.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const showBaku = ref(false);
const showAbsheron = ref(false);
const showGobustan = ref(false);

const clickOnBaku = () => {
  showBaku.value = !showBaku.value;
};

const clickOnAbsheron = () => {
  showAbsheron.value = !showAbsheron.value;
};

const clickOnGobustan = () => {
  showGobustan.value = !showGobustan.value;
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
  background-image: url("@/assets/images/baku1.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
