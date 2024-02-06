<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold">Hotels in SHAHDAG</p>
          <p class="rounded-md mt-5 text-2xl text-center">
            Journey Through Time: ENC Tours
          </p>
          <p class="text-2xl">Curated Museum Exploration in Azerbaijan</p>
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
            ENC Tours in Azerbaijan offers an immersive museum service, guiding
            visitors through the country's rich history and cultural legacy.
            With curated itineraries, travelers explore diverse museums, from
            the historic Azerbaijan National Museum to the contemporary Baku
            Museum of Modern Art. Expert guides provide insightful narratives,
            creating an educational and engaging experience for those eager to
            uncover Azerbaijan's cultural evolution. ENC Tours' museum service
            ensures a seamless and informative journey, allowing visitors to
            connect with the vibrant heritage of this fascinating destination.
          </p>
        </div>
        <div class="w-10/12 m-auto mt-10">
          <div
            class="w-full mb-4 text-left"
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
            <p class="border-b-2 pb-2 border-orange-400">
              Park Chalet, Shahdag, Autograph Collection 4*
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/shahdag1.jpeg"
                class="border-4 w-1/3 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                Each one of Park Chalet’s 164 elegant guest rooms reflects the
                perfect mix of rustic yet luxury design teamed with stunning
                mountain views. Custom furnishings include bespoke carpeting,
                lime washed oak panels and an oversized working desk. Standard
                rooms feature King or Twin Beds with all comforts.
              </p>
            </div>
          </div>
          <div
            class="w-full mb-4 text-left"
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
            <p class="border-b-2 pb-2 border-orange-400">
              P.I.K. Palace, Shahdag, Autograph Collection 5*
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/shahdag2.avif"
                class="border-4 w-1/3 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                Set amid majestic mountains, The Pik Palace Shahdag Hotel offers
                167 spacious bedrooms and suites with stunning views over the
                mountains Rooms feature large king-size beds, comfortable
                seating and working areas, and floor-to-ceiling windows with
                French balconies.
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
  min-height: 800px;
}
.parallax::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/images/shahdag.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
