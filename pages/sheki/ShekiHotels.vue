<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 mainDiv m-auto pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">Hotels in Sheki</p>
          <p class="rounded-md mt-5 text-2xl text-center">
            Journey Through Time: ENC Tours
          </p>
          <p class="text-2xl textP">Curated Museum Exploration in Azerbaijan</p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="text-6xl mainP">INTRO</p>
          <p class="text-color border-b-2 pt-4 w-20 border-gray-500 m-auto"></p>
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
        <div class="w-10/12 mainSection m-auto mt-10">
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
            <p class="text-color border-b-2 pb-2 border-gray-400">Sheki Park Hotel 4*</p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/shekihotel.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                The resort offers comfortable, standard, and luxurious rooms,
                one of the most up-to-date standards in the hotel building, 1,
                2, 3 – bedrooms cottages, indoor and outdoor restaurants with
                access to the beauty of the mysterious nature. Of course, in
                this restaurant, along with the delicious dishes of Azerbaijan,
                especially the Shaki cuisine, European cuisine will also be
                offered to you. Breakfast is included in a room booking cost.
                “Housekeeping” service is available daily to keep your room
                clean and tidy. The hotel has a fitness room, sauna, healing
                massage, billiard room, karaoke – bar, volleyball court, tennis
                court and outdoor swimming pool for your guests’ leisure time.
                There is also a special meeting room for business meetings in
                “Sheki Park” Hotel. We have not forgotten to create a special
                corner for children to ensure that their parents are
                comfortable.
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
            <p class="text-color border-b-2 pb-2 border-gray-400">Sheki Palace 4*</p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/shekihotel2.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                The extraordinary and elegant Sheki Palace Hotel has opened its
                doors in the unique historic part of Sheki – Old City. The
                architecture successfully combines classical and national
                patterns. The Hotel is luxuriously decorated with marble and
                stone. Sheki Palace Hotel provides excellent business
                facilities. Businessmen are offered up to date office amenities,
                internet access and meeting room.
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
            <p class="text-color border-b-2 pb-2 border-gray-400">
              Sheki Saray Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/shekihotel3.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                The Sheki Saray Hotel is a four star deluxe hotel which offers
                leisure and business visitors to Sheki an entirely unique
                experience. The Sheki Saray Hotel enjoys uninterrupted views of
                the Caucasus Mountains and has been sensitively designed in a
                modern style.
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
            <p class="text-color border-b-2 pb-2 border-gray-400">
              Marxal Resort & SPA 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/shekihotel4.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                Marxal Hotel and Spa Complex is above of the sea level
                surrounded by mountains in the mysterious corner of Sheki. The
                geographical location of the Hotel makes it unique and
                special.The hotel is placed 80 km away from Gabala Airport, 300
                km away from Baku International Airport, 14 km away from Sheki
                Railway Station and 4 km away from Sheki City Center.
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
  background-image: url("@/assets/images/sheki5.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
    font-size: small;
    margin-left: 0px;
    margin-top: 10px;
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
.sectionDiv {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
    border-right: none;
  }
}
.imageStyle {
  @media (min-width: 320px) and (max-width: 374px) {
    height: 160px;
  }
  @media (min-width: 375px) and (max-width: 425px) {
    height: 200px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 300px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 180px;
  }
}
.mainP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

.eachMuseum {
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
    margin-bottom: 40px;
    padding: 0px;
  }
}
</style>

