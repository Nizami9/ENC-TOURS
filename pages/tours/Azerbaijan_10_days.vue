<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">
            {{ $t("az10Days") }}
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
                      <p class="uppercase mb-5 text-lg">
                        {{ $t("transport") }}
                      </p>
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
                      <p class="uppercase mb-5 text-lg">
                        {{ $t("groupSize") }}
                      </p>
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
                      <p class="uppercase mb-5 text-lg">
                        {{ $t("accomodation") }}
                      </p>
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
                      <p class="uppercase mb-5 text-lg">
                        {{ $t("fitnessRat") }}
                      </p>
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
                      <p class="uppercase mb-5 text-lg">
                        {{ $t("wildMiles") }}
                      </p>
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
              <div class="m-auto mt-5 mb-5 mapSection w-1/2">
                <img src="@/assets/images/MapAz10.jpeg" class="border" alt="" />
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
              <p class="text mt-1 text-lg">{{ $t("az10D1") }}</p>
              <img
                src="@/assets/images/plus-button.png"
                class="plusButton w-8"
                alt=""
              />
            </div>
            <div
              class="mt-5 text-left transition-all duration-500 duration-500"
              v-if="Day1"
            >
              <p class="text transition-all animate-fadeIn duration-500">
                Arrival to Baku. Transfer to the hotel. Baku is the capital and
                largest city of Azerbaijan, as well as the largest city on the
                Caspian Sea and of the Caucasus region. It is a large
                scientific, cultural and industrial center. It was first
                mentioned in the Book of the Dead by the Egyptian Pharaoh
                Minesan in 3,500 BC. The ancient age of Baku is also evidenced
                by stone carvings dating back to 12,000 years ago and
                archeological excavations. Overnight in Baku
              </p>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay2"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D2") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day2"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  After breakfast, visit Martyrs’ Alley, located on the higher
                  slopes of the city's west-end; this is the best place for
                  panorama view of the city and the Bay of Baku. Then your
                  guided walking tour of Baku includes the medieval walled city
                  "lcheri Sheher" with it is narrow alleyways, historic
                  caravanserais, mosques and Palace of the Shirvan Shahs, UNESCO
                  Heritage site. Visit the Maiden's Tower, UNESCO Heritage site
                  the imposing mansions of the oil barons, built in the oil boom
                  of 1870-1914 and Martyr's with its superb views over the Bay
                  of Baku. Complex of Shirvanshahs Palace was the last residence
                  of the rulers of Shirvan State with rich history. At mediaeval
                  times this state was the most powerful state in Azerbaijan.
                  The Shirvanshahs Palace is a two-storey building in an
                  irregular, rectangular shape. In order to provide better
                  illumination of the palace, the south-eastern part of the
                  building was constructed on different levels. Then you will
                  enjoy excursion to the Absheron Peninsula, visiting the
                  Ateshgah (or place of fire) a Zoroastrian Fire Temple and
                  Yanar Dag. The Temple of Eternal Fire - Ateshgah - is an
                  authentic Azerbaijani exotic. This territory is known for such
                  unique natural phenomenon as burning natural gas outlets
                  (underground gas coming onto surface contacts oxygen and
                  lights up). Yanar Dag is located 25 km to the north from Baku,
                  in Mehemmedi village. From the year 2007 Yanar Dag is declared
                  a state-protected conservation area. During the Absheron tour
                  you will see Quadranqular Tower, one of the ancient Absheron
                  towers located in Mardakan village. Overnight in Baku
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay3"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D3") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day3"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  In the morning we will depart Baku and drive to Sheki. On the
                  way from Baku to Shamakhi there is Maraza village known for
                  its unique monument - two-storied mausoleum-mosque of the 15th
                  century called Diri-Baba, located across from the old
                  cemetery. For a long time the local residents have kept the
                  legend that there imperishable Saint Diri-Baba had been buried
                  there. Continue to Shamakha you will have a sightseeing of
                  historical Juma Mosque (10th century, reconstructed in the 19
                  th century), numerous ruins of the 10 th – 17 th centuries and
                  Yeddi Gumbez Mausoleum. Drive through Girdimanchay River’s
                  canyon to visit Lahij, the 5th century place rich in its
                  historic and architectural values. Lahij is an ancient village
                  with charming eye-catching sidewalks inlaid by stones. It is
                  famous for medieval water supply and sewage systems as well as
                  traditional workshops making jewelry, copperware, carpets,
                  pottery, daggers, and iron tools. *Trip to Lahij is subject of
                  weather conditions. Overnight in Lahij.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay4"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D4") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day4"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  In the morning we will leave Lahij for Sheki. On the way we
                  will stop in Gabala to see the church of local Christian
                  minority of udins in Nidj village. Upon arrival in Sheki visit
                  the Sheki Khan Palace. The unique beauty two-storied building
                  of the palace amazes with its magnificent interior and
                  exterior. The facade of the palace is richly painted with
                  anecdotal drawings displaying scenes of hunting and war as
                  well as intricate geometrical and vegetative patterns. In the
                  center is a huge stained-glass window from a multi-colored
                  glass mosaic (It is remarkable up to 5,000 glass pieces were
                  used per one square meter). Other smaller windows of the
                  palace are also made of pieces of colored glass and covered
                  with openwork stone lattices. The basic material for the
                  Palace construction was raw bricks, river stones, plane trees
                  and oaks. The most amazing is that not a single nail or glue
                  drop was used for the construction! Everything is in place due
                  to a special solution the formula of which was lost forever.
                  Also we will visit Carvanserai of 18th century in Sheki. Then
                  drive into the countryside to the village of Kish with the
                  oldest church in the Caucasus dating from the first century
                  and enjoy a walk in the surrounding Caucasus foothills.
                  Overnight in Sheki.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay5"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D5") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day5"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  This morning we will visit local Sheki bazar. Leave Sheki, for
                  Ganja. Ganja is the second biggest city of Azerbaijan with
                  more than a million populations. Ganja is the birthplace of
                  the great Azerbaijani poet Nizami Ganjavi who made the
                  invaluable contribution to the history of not only Azerbaijani
                  literature but also the world literature. Nizami Ganjevi was
                  born in Ganja in 1141. He was one of the most educated people
                  of the time. Today we will visit the 17th century Shah Abbas
                  Mosque, Javadkhan Mousaleum (XIX century), the Orthodox church
                  ( 1815),Nizami Mousaleum and the "Bottle House", local icon in
                  Ganja decorated with 50,000 glass bottles. Visit Imamzade
                  Mosque. Free time in Ganja. Overnight in Ganja.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay6"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D6") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day6"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  In the morning, leave Ganja and drive to Baku. On the way
                  Baku, we will visit the Museum of Petroglyphs another name of
                  which is Gobustan - a mountainous place in the southeast of
                  the Major Caucasian ridge located 60 km from Baku. There are
                  thousands of rock paintings from the early Stone Age depicting
                  hunting scenes, animals, people and ships as well as graffiti
                  left by Alexander the Great's army and Roman legionnaires. In
                  2007 Gobustan was declared a UNESCO World Heritage Site.
                  Arrival to Baku. Overnight in Baku.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay7"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D7") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day7"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  In the morning, check-out at the hotel and drive to Lankaran.
                  En-route to Lankaran, we will visit one of the main
                  attractions in Salyan, Shirvan National Park, created in 2003
                  out of a nature reserve that has existed here since 1969. It
                  covers the territory of 55 hectares and was founded to
                  preserve the local flora and fauna, especially gazelles listed
                  in the Red Book. Besides gazelles, there are 34 species of
                  birds in the reserve, 14 of which are listed in the Red Book.
                  After visiting the Shirvan National Park we will continue our
                  tour in Lankaran. Lankaran is a subtropical paradise and
                  resort. It is located in the southeast of Azerbaijan
                  practically on the border with Iran. In the east the city is
                  washed by the waters of the Caspian Sea. The nature of
                  Lankaran harmoniously combines high mountain tops, fertile
                  lowlands and pebbly sea coasts. Visit a local family to learn
                  about the customs and traditions of the Talysh people in
                  Lankaran. Later, enjoy the excursion of the tea plantation and
                  have tea-ceremony here. Overnight in Lankaran.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay8"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D8") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day8"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  Today you will depart with your driver and guide for Baku.
                  Before the departure to Baku, we will drive to Astara. Here we
                  will visit Yanar Bulaq. Yanar bulaq (Burning water) is fire
                  phenomenon in Astara. Yanar Bulag or the 'burning spring' is
                  located in the city of Astara in southern Azerbaijan. It
                  consists of a metal stand pipe inside a small pavilion through
                  which water comes gurgling out. It looks nothing unusual, but
                  when you light a match and touch the water, the water itself
                  is set ablaze. This occurs due to the water's high methane
                  content. The locals believe the water from the spring has
                  remedial properties, and would often take a drink while the
                  flame is alight. Overnight in Baku.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay9"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D9") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day9"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  In the morning visit Heydar Aliyev Cultural Center. Heydar
                  Aliyev Center is a cultural center, projected as a complex
                  structure that includes the auditorium (convention center), a
                  museum, exhibition halls, administrative offices. The project
                  of the center was designed by the winner of Pritzker prize and
                  internationally recognized architect Zaha Hadid. *Heydar
                  Aliyev Cultural Center is closed on Mondays. Then we will
                  visit Villa Petrolea, the House Museum of Nobel brothers. Free
                  time. Overnight at the hotel in Baku.
                </p>
              </div>
            </div>
            <div class="mb-6">
              <div
                @click="clickOnDay10"
                class="flex border-b pb-2 border-black justify-between duration-500 transition-all cursor-pointer mt-10"
              >
                <p class="text mt-1 text-lg">{{ $t("az10D10") }}</p>
                <img
                  src="@/assets/images/plus-button.png"
                  class="plusButton w-8"
                  alt=""
                />
              </div>
              <div
                class="mt-5 text-left transition-all duration-500 animate-fadeIn duration-500"
                v-if="Day10"
              >
                <p class="text transition-all animate-fadeIn duration-500">
                  Meet your driver for the transfer to the airport. Departure.
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

        <div class="w-8/12 section4 m-auto">
          <div>
            <h4 class="text-3xl text2 uppercase mb-2">
              {{ $t("datesAndPr") }}
            </h4>
            <h5 class="w-2/3 section3 text m-auto text-center">
              {{ $t("datesAndPrP") }}
            </h5>
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
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">
                  {{ $t("sendEmail") }}
                </p>
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
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">
                  {{ $t("sendEmail") }}
                </p>
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
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">
                  {{ $t("sendEmail") }}
                </p>
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
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">
                  {{ $t("sendEmail") }}
                </p>
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
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">
                  {{ $t("sendEmail") }}
                </p>
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
                <p class="bg-yellow-500 p-3 w-52 rounded-3xl">
                  {{ $t("sendEmail") }}
                </p>
              </div>
            </div>
          </div>
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
  background-image: url("@/assets/images/sheki1.jpeg");
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
