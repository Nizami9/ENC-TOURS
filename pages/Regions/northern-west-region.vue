<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-full m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl w-2/3 m-auto uppercase font-semibold spacing-2">
            NORTH-WEST REGIONS
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
              @click="clickOnGabala"
              class="flex text-white font-extrabold hover:scale-105 animate-hover duration-500 transition-all cursor-pointer uppercase mt-10 items-center bg-gray-500 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Gabala</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
              v-if="showGabala"
            >
              <img src="@/assets/images/gabala2.jpeg" alt="" />
              <p class="transition-all animate-fadeIn duration-500">
                It is a beautiful part of Azerbaijan with a rich and ancient
                history. At the time, this city (the Kabbalah) was the capital
                of Caucasian Albania (a former state that existed on the
                territory of modern Azerbaijan) for 600 years. Until now, you
                can still see the ruins of the ancient city and the main gate of
                the Caucasian Albania. There are a large number of historical
                and cultural monuments covering different eras in this region.
                Several 5-star hotels of the Azerbaijani hotel chain “Qafqaz “,
                small family hotels and several tourist camps are operating in
                Gabala. The largest amusement park in Azerbaijan-Gabaland is
                located in Gabala and covers an area of 16 hectares. It is great
                fun for children and adults. The city also hosts an annual
                international music festival featuring classical music, jazz and
                Mugham, featuring groups, performers and artists from around the
                world.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnGakh"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Gakh</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showGakh">
              <img src="@/assets/images/gakh.jpg" alt="" />
              <p>
                Gakh is a district on the border with Georgia. The climate in
                the southern part of the district is dry, subtropical and
                temperate in the mountains. There are many mountain rivers and
                waterfalls in this district. This region is rich in nature. In
                Iliisu national Park you can see bears, mountain goats, wolves,
                wild cats, wild boars, jackals and other wildlife. In this part
                of Azerbaijan you can see a number of ancient Albanian temples –
                these were the First Churches of the Caucasus and some of the
                first churches of the world.
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnSheki"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Sheki</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showSheki">
              <img src="@/assets/images/sheki3.jpeg" alt="" />
              <p>
                One of the oldest cities in Azerbaijan, Sheki rightly enjoys its
                reputation as the country’s architectural Reserve. The Sheki
                Khan Palace (1762) is of particular interest to tourists from
                all over the world. It is a rare example of an association of
                national architectural traditions and palaces. In the north of
                the city are the ruins of the one of the impregnable fortress
                “Gelersan – Gerarsan” (“come and see”) dating from the 15th and
                18th centuries. Sheki is also famous for his melting baklava,
                its «piti» (a stew with vegetables cooked in a clay pot) and the
                sense of humor of its inhabitants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const showGabala = ref(false);
const showSheki = ref(false);
const showGakh = ref(false);

const clickOnGabala = () => {
  showGabala.value = !showGabala.value;
};

const clickOnGakh = () => {
  showGakh.value = !showGakh.value;
};

const clickOnSheki = () => {
  showSheki.value = !showSheki.value;
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
  background-image: url("@/assets/images/sheki5.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
