<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">Hotels in GABALA</p>
          <p class="rounded-md mt-5 text-2xl text-center">
            Journey Through Time: ENC Tours
          </p>
          <p class="text-2xl textP">Curated Museum Exploration in Azerbaijan</p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="text-6xl mainP">INTRO</p>
          <p
            class="text-color border-b-2 pt-4 w-20 border-gray-500 m-auto"
          ></p>
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
        <div class="mainSection w-10/12 m-auto mt-10">
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
              Qafqaz Gabala City Hotel 3*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotelgabala.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                Sophisticated rooms, elegantly decorated with plush fabrics,
                mirrored accents and warm tones, feature Wi-Fi and flat-screen
                TVs. Posh suites include living rooms, dining areas and city
                views.
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
              Qafqaz Karvansaray Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotelgabala2.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                Qafqaz Karvansaray Hotel is a five star hotel located in the
                city center of Gabala. The hotel, operating since August 2013,
                is designed and built in “the Modern Art Deco” Style. The
                “Qafqaz Karvansaray” is a unique property that successfully
                combines the modernity and antiquity and it offers guests a
                delicious variation of the world and Azerbaijani cuisine.
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
              Qafqaz Sport Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotelgabala3.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                The “Qafqaz Sport” is a five star hotel located in a quiet area
                and in the lap of nature near the city of Gabala which lies at
                the foot of mountains. Our hotel offers high standard
                hospitality services delivered to all categories of the
                visitors, including solo travelers, family travelers and
                collectives. We offer tastefully decorated accommodation (rooms
                and cottages) at affordable prices, restaurants serving rich
                domestic and international cuisine, Spa and fitness centers
                equipped with all facilities necessary for health recovery, and
                a big conference hall for organizing various events
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
              Qafqaz Riverside Resort Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotelgabala4.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                The Qafqaz Riverside Resort Hotel is a five star luxurious hotel
                located at the foothills of the Caucasus on the bank of the
                river Damiraparan. The hotel has 164 modern and spacious guest
                rooms and nice cottages ideally suited for long weekends with
                friends and family.
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
              Qafqaz Thermal & Spa Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotelgabala6.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="text-color w-2/3 ml-10 max-h-52 overflow-scroll">
                Qafqaz Thermal & Spa Resort Hotel is a four star hotel located
                in the Yengidje village of Gabala district which started to
                operate in 2014. Our guests may wish to benefit from the thermal
                water and Naftalan oil treatment services offered by our hotel,
                besides taking a good and enjoyable rest in the lap of
                fascinatingly beautiful nature.
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
  background-image: url("@/assets/images/gabala2.jpg");
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
    width: 100%;
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