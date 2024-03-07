<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">
            {{ $t("azGeo") }}
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
        <div class="flex mainSection w-11/12 m-auto mt-10 mb-6">
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

            <div class="m-auto mt-10">
              <p class="uppercase text-3xl">{{ $t("atAGlance") }}</p>
              <div class="mt-10 mb-10">
                <div class="flex section2 w-full justify-between mb-4">
                  <div
                    class="bg-gray-400 text-white eachSection w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase text-lg mb-5">{{ $t("meals") }}</p>
                      <p>14 x {{ $t("breakfast") }}</p>
                      <p>13 x {{ $t("lunches") }}</p>
                      <p>12 x {{ $t("dinners") }}</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("transportP") }}</p>
                      <p class="leading-6">
                        {{ $t("transportP") }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("groupSize") }}</p>
                      <p>{{ $t("max") }}: 12</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("expTeam") }}</p>
                      <p class="leading-6">
                        {{ $t("expTeamP") }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex section2 w-full justify-between">
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("accomodation") }}</p>
                      <p>7 {{ $t("nights") }} x {{ $t("premium") }}</p>
                      <p>6 {{ $t("nights") }} x {{ $t("superior") }}</p>
                      <p>1 {{ $t("night") }} x {{ $t("basic") }}</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("entrFees") }}</p>
                      <p class="leading-6">
                        {{ $t("entrFeesP") }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("fitnessRat") }}</p>
                      <p>{{ $t("low") }}</p>
                    </div>
                  </div>
                  <div
                    class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5"
                  >
                    <div class="m-auto w-6 mb-5">
                      <img src="@/assets/images/twit.png" class="h-5" alt="" />
                    </div>
                    <div class="text-sm min-h-36">
                      <p class="uppercase mb-5 text-lg">{{ $t("wildMiles") }}</p>
                      <p>{{ $t("wildMilesP") }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div>
                <h3 class="mb-5 text-3xl">{{ $t("mapAndIt") }}</h3>
                <p>
                  {{ $t("mapAndItP") }}
                </p>
              </div>
              <div class="m-auto mapSection mt-5 mb-5 w-1/2">
                <img
                  src="@/assets/images/MapToGeo.jpeg"
                  class="border"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-200 w-full">
          <div class="w-10/12 m-auto pt-10 pb-10">
            <div
              @click="clickOnDay1"
              class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
            >
              <p class="text mt-1 text-lg">{{ $t("AzGeoD1") }}</p>
              <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 duration-500"
              v-if="Day1"
            >
              <p class="transition-all animate-fadeIn duration-500">---</p>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay2"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("AzGeoD2") }}</p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day2"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  Arrival in Tiblisi in the morning and transfer to the hotel.
                  We begin to explore the capital of Georgia - Tbilisi in all
                  its beauty, with its narrow streets, colorful houses, carved
                  balconies, old neighborhoods and excellent samples of modern
                  architecture. We will stroll through the beautiful narrow
                  streets and visit the main sights of the city. We will enjoy
                  the magnificent panorama of the old city and passing through
                  the old Narikala Fortress we will visit the historic Sulfur
                  Baths, from which the name of the capital comes. Later, a
                  visit to the stunning treasury of the Museum of History will
                  assure us that Georgia truly is the country of the famous
                  Golden Fleece. Overnight at the hotel. (D / - / -)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay3"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">
                  {{ $t("AzGeoD3") }}
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day3"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  We head towards the most fertile and picturesque part of
                  Georgia - Kajetia, the cradle of wine. We will arrive at
                  Signagui - the “City of Love”, which will impress you with its
                  amazing, old wall and small wooden houses. We will visit the
                  Nunnery - Bodbe (11th century) with its beautiful garden,
                  where the godmother of the Georgians - Santa Nino is buried.
                  For lunch we will arrive at the village with a local family,
                  where we will learn about the life of the peasants and we will
                  see their gardens, vineyards and we will taste the delicious
                  homemade dishes. In the wine tank we will taste some famous
                  Georgian wines. At the end we will visit Gremi, 16th century
                  architectural monument - its citadel and the Church of the
                  Archangels in Kakheti. Arrival in Telavi, the main center of
                  the region. Overnight at the hotel. (D/A/–)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay4"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">
                  {{ $t("AzGeoD4") }}
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day4"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  After breakfast we will visit the Shuamta nunnery - "between
                  the mountains". Departure to the city-museum Mtsjeta,
                  headquarters of the Georgian Orthodox and Apostolic Church,
                  declared a World Heritage Site by UNESCO. We will visit the
                  Cathedral of Svetitskhoveli ("Pillar that gives life") and the
                  Jvari Monastery (6th - 7th centuries) "Church of the Holy
                  Cross". We will travel north along the Georgia Military
                  Highway and enjoy the spectacular scenery of the magnificent
                  Caucasus Mountains. On the way we will pass by the Ananuri
                  architectural complex and the Jinvaly water reservoir, of
                  surprising beauty. Arrival in Gudauri, the famous ski resort
                  located at 2 000 - 2 200 meters above sea level. Dinner and
                  accommodation at the hotel. (D / - / C)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay5"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">
                  {{ $t("AzGeoD5") }}
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day5"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  After breakfast we will go to Kazbegui. An impressive road
                  along the Terek river will take us to Kazbegui
                  (Stepantsminda). From the center we will make a 1.5-hour walk
                  (the climb and descent lasts 3 hours) to reach Guergueti, the
                  church of the Trinity located at 2170m above sea level. If
                  time permits you can take a look at one of the largest
                  glaciers in the Caucasus - Mt Kazbegui (5047m). Return on foot
                  to Kazbegui, where we will visit a local teacher who will
                  explain to us about "Teka", artifacts made of cloth. Here we
                  will taste the traditional sweets "Muraba". In the afternoon
                  we will return to Gudauri. Dinner and accommodation at the
                  hotel. Note: In Kazbegui you can rent the car (4X4) to go up
                  to the Church of the Trinity. (D / - / C)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay6"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">
                  {{ $t("AzGeoD6") }}
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day6"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  We will go to the small town of Gori. It is the hometown of
                  the famous Soviet leader Joseph Stalin. We stopped near his
                  museum to take photos. Arrival in the cave city of Uplistsije
                  (literally “fortress of the Lord”), one of the oldest urban
                  settlements in Georgia and a key point on the famous Silk Road
                  for its strategic position. We will continue to the west of
                  Georgia, to the land of the famous Golden Fleece. Arrival in
                  Kutaisi. Overnight at the hotel. (D / - / -)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay7"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">
                  {{ $t("AzGeoD7") }}
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day7"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  We will visit the spectacular Bagrati Cathedral - the
                  masterpiece of medieval Georgian architecture and the
                  impressive Monastery of the Virgin in Guelati, with its
                  beautiful mosaic frescoes. Then we will see the Prometheus
                  Grotto with its impressive stalactites and stalagmites,
                  petrified waterfalls, cave pearls and underground lakes, which
                  have stood for millennia of years. Return to Tiblisi. Hotel
                  accommodation. (D / - / -)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay8"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">
                  {{ $t("AzGeoD8") }}
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day8"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  Transfer to the border of Georgia and Azerbaijan. Border
                  formalities. After customs formalities we will drive to Sheki,
                  150 km (2.5 hours) Arrival in Sheki. Sheki City Tour: We will
                  start with the Sheki Khans Summer Palace with its magnificent
                  frescoes and stained glass windows. We will visit the local
                  Shebeke Stained Glass workshop where the famous handmade
                  stained glass windows of Sheki are assembled, a medieval
                  karavanserai that was one of the main stopping points for the
                  large caravans traveling along the ancient Silk Road. We will
                  continue to the town of Kish to visit the oldest church in the
                  Caucasus area dating from the s. I-V. Accommodation in Sheki.
                  (D/A/–)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay9"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">
                  {{ $t("AzGeoD9") }}
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day9"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  In the morning we will visit the local bazaar, a show of
                  colors and flavors in which we can interact with the local
                  population. Departure for Baku, 350 kilometers, we will make
                  several stops en route: visit the Lahij village, located in
                  the largest mountains of the Caucasus and famous for its
                  copper crafts recently included in the UNESCO heritage list.
                  (The excursion to Lahij is done only when the roads are dry
                  for safety reason). Another stop will be in Shemakha to visit
                  the Juma Mosque and then the Diri Baba Mausoleum carved out of
                  a rock in Maraza. Arrival in Baku. Night in Baku. (D/A/–)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay10"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">
                  {{ $t("AzGeoD10") }}
                </p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day10"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  Today we will go to Gobustan, 65 km from Baku, an open-air
                  museum of cave paintings, a World Heritage Site by UNESCO, an
                  ancient settlement from the Neolithic period. We will continue
                  12 km away to see active mud volcanoes. (The excursion to the
                  volcanoes operates only when the roads are dry). Then in the
                  afternoon your guided walking tour of Baku includes the walled
                  medieval city "Icheri Sheher" with its narrow streets,
                  historical caravanserais, mosques and the Palace of the
                  Shirvan Shas. We will also visit the symbol of the city: the
                  Tower of the Maiden, from the 12th century, from where we can
                  admire the imposing mansions of the oil magnates, built in the
                  oil boom of 1870-1914. We will continue along the Alley of the
                  Martyrs with its magnificent views over Baku Bay. (D/A/–)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay11"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("AzGeoD11") }}</p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day11"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  In the morning visit to the Absheron peninsula, where we will
                  visit Ateshgah the "temple of the eternal flame" (UNESCO
                  Heritage), built in the 18th century for the prayers of the
                  Zoroastrians who travel with commercial caravans through
                  Azerbaijan. We will continue the visit with the Mardakan
                  fortress that was part of the defense system of the peninsula
                  in the medieval centuries. Finally we will go to Yanardagh the
                  mountain of fire famous for its natural gas outlet. Return to
                  the hotel and accommodation. (D/A/–)
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay12"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("AzGeoD12") }}</p>
                <img src="@/assets/images/plus-button.png" class="w-8 plusButton" alt="" />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day12"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  Breakfast and at the scheduled time transfer to the airport to
                  catch the return flight. (- / - / -)
                </p>
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

        <div class="w-8 plusButton/12 section4 m-auto">
          <div>
            <h4 class="text-3xl uppercase mb-2">{{ $t("datesAndPr") }}</h4>
            <h5 class="w-2/3 m-auto text-center">
              {{ $t("datesAndPrP") }}
            </h5>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 section5 flex justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-b mb-5 mt-5 pb-3 flex section5 justify-between w-full"
          >
            <div class="w-1/3 sec51 text-left">
              <div class="w-1/3 secAvailable">
                <p
                  class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
                >
                {{ $t("available") }}
                </p>
              </div>
              <div>
                <p class="uppercase text-xl text-yellow-900 mb-2">
                  {{ $t("stDep") }}
                </p>
              </div>
              <div>
                <p>26th Apr 2024 - 10th May 2024</p>
              </div>
              <div>
                <p class="text-sm">(15 {{ $t("days") }})</p>
              </div>
            </div>
            <div class="sec51 sec51Pt pt-12 w-1/3">
              <div>
                <p class="text-xl font-bold">£4,195</p>
              </div>
              <div>
                <p class="text-sm">{{ $t("optSingleSupp") }}: + £495</p>
              </div>
            </div>
            <div class="sec51 w-1/3">
              <div class="flex sec5end sec51Pt justify-end pt-12">
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">{{ $t("sendEmail") }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-10/12 bg-gray-200 m-auto mb-5 p-5">
          <h3 class="text-3xl p-5 text2">{{ $t("privatHolidays") }}</h3>
          <p class="text">{{ $t("privatHolidaysP1") }}</p>
          <div class="flex endSection w-1/2 mt-4 m-auto justify-between pb-5">
            <div class="flex text justify-around w-full">
              <img
                src="@/assets/images/phone.png"
                class="h-6"
                alt=""
              />
              <p>{{ $t("privatHolidaysP2") }} +44 (0) 20 3925 9628</p>
            </div>
            <div class="flex text w-full justify-around">
              <div class="flex justify-around w-full">
                <img
                  src="@/assets/images/mail.png"
                  class="h-6"
                  alt=""
                />
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
import dates from "@/components/Dates_Prices.vue";

const Day1 = ref(false);
const Day2 = ref(false);
const Day3 = ref(false);
const Day4 = ref(false);
const Day5 = ref(false);
const Day6 = ref(false);
const Day7 = ref(false);
const Day8 = ref(false);
const Day9 = ref(false);
const Day10 = ref(false);
const Day11 = ref(false);
const Day12 = ref(false);

const clickOnDay1 = () => {
  Day1.value = !Day1.value;
};

const clickOnDay2 = () => {
  Day2.value = !Day2.value;
};

const clickOnDay3 = () => {
  Day3.value = !Day3.value;
};

const clickOnDay4 = () => {
  Day4.value = !Day4.value;
};

const clickOnDay5 = () => {
  Day5.value = !Day5.value;
};

const clickOnDay6 = () => {
  Day6.value = !Day6.value;
};

const clickOnDay7 = () => {
  Day7.value = !Day7.value;
};

const clickOnDay8 = () => {
  Day8.value = !Day8.value;
};

const clickOnDay9 = () => {
  Day9.value = !Day9.value;
};

const clickOnDay10 = () => {
  Day10.value = !Day10.value;
};

const clickOnDay11 = () => {
  Day11.value = !Day11.value;
};

const clickOnDay12 = () => {
  Day12.value = !Day12.value;
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
  background-image: url("@/assets/images/georg.jpeg");
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
</style>
