<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-full m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl w-2/3 m-auto uppercase font-semibold spacing-2">
            Northern Regions
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
              @click="clickOnGuba"
              class="flex text-white font-extrabold hover:scale-105 animate-hover duration-500 transition-all cursor-pointer uppercase mt-10 items-center bg-gray-500 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Guba</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
              v-if="showGuba"
            >
              <img src="@/assets/images/guba.jpeg" alt="" />
              <p class="transition-all animate-fadeIn duration-500">
                Thanks to its convenient location and easily accessible and the
                infrastructure complete, the region of Guba is one of the most
                popular tourist destinations of Azerbaijan. Visitors may choose
                from a long Gechresh as a place to relax in the shady woods, the
                Gorge of Tangaalti where the river carries the stormy waters of
                the Velvelichai and the famous waterfall of Afurdzhi, listed in
                the List of monuments of Azerbaijan. The district has a
                mountainous village only known as Khinalig, which is situated at
                an altitude of 2100-2200 meters above sea level. The population
                of the village is a group ethnographic separate, with their own
                language, customs and culture. A unique place and worth a visit.
                Guba is famous for its apples, which have become for a long time
                his symbol. There are more than 40 different varieties of apples
                grown here. The village of Khinalig is located at an altitude of
                2100-2200 meters above sea level. They say that this area is
                associated with Noah. According to legend, when Noah saw this
                high ground and the flat, left again, and told all to leave the
                Boat. There are about 380 homes that have between 200-300 years.
                Because the slopes here are very steep, the houses are built
                very close to each other. The roof of a house is the yard for
                the one above. The inhabitants are a tribe of albanians, and
                speak a language completely original. The village of Khinalig is
                known not only for its ancient traditions, but also for the fact
                that Bigfoot was seen there … be Careful!
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div
              @click="clickOnShahdag"
              class="flex text-white font-extrabold hover:scale-105 duration-500 transition-all cursor-pointer uppercase items-center bg-gray-400 rounded-md p-2 pl-5 pr-5 justify-between m-auto"
            >
              <p>Shahdag mountain resort</p>
              <img src="@/assets/images/plus.png" class="w-8" alt="" />
            </div>
            <div class="mt-5 text-left" v-if="showShahdag">
              <img src="@/assets/images/shahdag.jpeg" alt="" />
              <p>
                The tourist complex “Shahdag” is the first ski resort in
                Azerbaijan. Shahdag is located in the north-east corner of the
                country on the territory of the National Park of Shahdag, in the
                region of Gusar of Azerbaijan, near the mountain Shahdag. This
                complex occupies a place well deserved in the list of the most
                beautiful corners of the Caucasus. Shahdag is suitable for
                experienced skiers and beginners. It is equipped with trails,
                both for beginners and for real professionals. It is also
                equipped with 11 cable cars of different types: chairlifts,
                lifts and gondola. 14 ski slopes, stretching for 17 kilometers
                and are designed for various levels of complexity – both for
                children and beginners, both for experienced skiers. Each path
                is prepared with the aid of generators of artificial snow,
                making the ski season longer and trails more qualitative and
                pleasant for skiing. Today, four high-class hotel, built
                according to european standards operating on the territory of
                the complex and is equipped with everything you need for active
                recreation. In the warm summer months, the complex is alive with
                activities such as horse riding, quad biking, paintball, or
                simply hide from the hustle and bustle of the city and enjoy the
                wonderful mountain scenery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const showGuba = ref(false);
const showShahdag = ref(false);

const clickOnGuba = () => {
  showGuba.value = !showGuba.value;
};

const clickOnShahdag = () => {
  showShahdag.value = !showShahdag.value;
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
  background-image: url("@/assets/images/north.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
