<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-8xl uppercase font-semibold">Our Services</p>
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
              damping: 50,
              mass: 5,
            },
          }"
          class="border w-1/2 m-auto p-8 text-customGray"
        >
          <p>
            ENC Tours experience in designing exceptional experiences continues
            to cast an intimate spell. The almost mesmerizing bonds we have with
            our East and South East Asian destinations are amongst the closest
            one can find – be it a dreamy hideaway along sandy shores or a
            breathtaking moment overlooking its authentic vastness. It is all in
            delivering that perfect moment, where a second of tasting our Asia
            delivers a moment of eternal gratitude for all it encompasses. It is
            all about the local expertise, executive with passion and perfection
            for an exceeding expectations’experience.
          </p>
        </div>
        <div class="flex w-10/12 m-auto mt-10 mb-6">
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
                stiffness: 200,
                damping: 50,
                mass: 10,
              },
            }"
            class="w-1/3"
          >
            <div
              class="pb-5 pl-8 pr-8 cursor-pointer"
              @click="navigateTo('/museums')"
            >
              <p class="uppercase mb-3">Museums</p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
              <img
                src="@/assets/images/museum8.jpeg"
                class="h-60 w-full hover:scale-105 duration-300 transition-all"
                alt=""
              />
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-3 m-auto">
                CAMBODIA Once seen as the centre of the ancient world, Cambodia
                ignites the wanderlust in prospect visitors. Centred around the
                Angkor temples, the country’s immaculate immersion of natural
                and historical treasures are amongst the most sought-after
                reasons for entering a world of legacy and hospitality.
              </p>
            </div>
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
                stiffness: 200,
                damping: 50,
                mass: 10,
              },
            }"
            class="w-1/3"
          >
            <div
              class="pb-5 pl-8 pr-8 cursor-pointer"
              @click="navigateTo('/restaurants')"
            >
              <p class="uppercase mb-3">Restaurants</p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>
              <img
                src="@/assets/images/mugam.webp"
                class="h-60 w-full hover:scale-105 duration-300 transition-all cursor-pointer"
                alt=""
              />
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                Following in the footsteps of an imperial path, China’s
                centuries long history has shaped the grandeur within its
                vastness. Running like a red thread through the country’s past,
                present and future vision, no country has the ability to
                effortlessly blend its values from a bygone era into captivating
                sights for everyone.
              </p>
            </div>
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
                stiffness: 200,
                damping: 50,
                mass: 10,
              },
            }"
            class="w-1/3"
          >
            <div
              class="pb-5 pl-8 pr-8 cursor-pointer"
              @click="navigateTo('/hotels')"
            >
              <p class="uppercase mb-3">Hotels</p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>

              <img
                src="@/assets/images/shahdag2.avif"
                class="h-60 w-full hover:scale-105 duration-300 transition-all cursor-pointer"
                alt=""
              />
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                Thrilling with a pinch of British colonialism. Its unique
                position within Greater China has made Hong Kong a dashing
                example of city vibe with a deeply-rooted Chinese heritage with
                continuously embracing its heritage. No Asian metropole has the
                capacity to excite like Hong Kong when in need of a modern,
                Chinese sense of exploration.
              </p>
            </div>
          </div>
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
              stiffness: 200,
              damping: 70,
              mass: 10,
            },
          }"
          class="flex justify-center w-10/12 m-auto mb-6"
        >
          <div class="w-1/3" @click="navigateTo('/vehiclefleet')">
            <div class="pb-5 pl-8 pr-8 cursor-pointer">
              <p class="uppercase mb-3">Vehicle Fleet</p>
              <p class="border border-gray-400 mb-6 w-1/3 m-auto"></p>

              <img
                src="@/assets/images/rolls.jpeg"
                class="h-60 w-full hover:scale-105 duration-300 transition-all cursor-pointer"
                alt=""
              />
            </div>
            <div>
              <p class="text-color leading-6 w-11/12 p-2 mt-5 m-auto">
                VIETNAM Vietnam The country’s expansive coastline and towering
                mountain ranges have shaped Vietnam into the harmonious country
                it is now. Meandering rivers, an abundance of beaches, happing
                cities and remote villages in the vastness of its mountain
                ranges form the backbone of its ever-present popularity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>
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
  background-image: url("@/assets/images/az15.webp");
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
