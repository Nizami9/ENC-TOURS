<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 mainDiv m-auto pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">Hotels in BAKU</p>
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
              City Park Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel1.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                The Museum of Contemporary Art in Baku was opened on March 20,
                2009. The museum has a collection of over 800 works by
                Azerbaijani artists and sculptors, mostly working in the
                avant-garde style. Responsible for the museum’s design is the
                well-known artist Altay Sadykhzadeh. The museum has a children’s
                art room, a library, a video room, a restaurant and an art cafe.
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
              Aksent Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel3.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Aksent Hotel lies 1100 meters away from Park of Officers,
                offering 24 rooms and featuring a beauty salon and a barber
                shop. It features airport shuttle service, laundry service and
                housekeeping as well as free car parking, a safe deposit box and
                a lift. This property is 10 minutes’ walk to Taza Pir Mosque.
                The venue is set within 1 km from Baku city center. Individual
                climate control, a mini bar, a laptop-size safe, coffee and tea
                making facilities and a cupboard are featured in every room.
                Other comforts include an electric kettle, a dishwasher and a
                fridge for self-catering. Heydar Aliyev airport lies 25 km away
                from Aksent Hotel and it takes about 30 minutes by car to get
                there.
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
              New Baku Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel4.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                New Baku Hotel is situated near the Embassies of Russian
                Federation, The Republic of Turkey and United States of America
                in the center of Baku. It takes 25 minutes to arrive at the
                hotel from Heydar Aliyev International Airport. Business and
                holiday travelers will meet a high level of service and friendly
                staff which will make them feel at home. There are 48
                comfortable rooms in our 7 floor New Baku Hotel. All rooms have
                an air conditioner, a hairdryer, satellite TV, bathroom, Wi-Fi
                internet access, minibar, and digital safe box.
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
              Central Park Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel5.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                The hotel is located five minutes walk from the marvelous
                Fountains Square and the Nizami Promenade where world famous
                brand boutiques are waiting to tempt you. Nearby, a brisk 20
                minute walk, is the wonderful Boulevard with breath taking views
                of the Caspian Sea and the exciting sky-line of Baku. Warm,
                relaxed rooms with homey decor offer Wi-Fi access, flat-screen
                TVs and balconies. Upgraded rooms add sitting areas and/or
                whirlpool tubs. Suites also include separate living areas.
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
              Qafqaz Baku City Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel6.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                The “Qafqaz Baku City Hotel & Residences” is the biggest four
                star hotel in Azerbaijan located in the centre of Baku city and
                in the vicinities of the leading business and commercial
                enterprises. Sophisticated rooms, elegantly decorated with plush
                fabrics, mirrored accents and warm tones, feature free Wi-Fi and
                flat-screen TVs. Posh suites include living rooms, dining areas
                and city views.this upscale tower hotel with a sleek, imposing
                exterior, is 4 km from Baku’s Old City and the landmark
                12th-century Maiden Tower. The shores of the Caspian Sea are 5
                km away
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
              Sapphire Inn Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel7.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Sapphire Inn Hotel is located in the very center of the city,
                which will allow you to see the sights of the city, visit trade
                and business centers.Modern style Sapphire Inn Hotel is a
                combination of contemporary facilities and high-class service.
                We have everything for the comfort and pleasant pastime of the
                guests. Property details: 56 spacious rooms with 23 business, 9
                deluxe and 24 family deluxe rooms
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
              Holiday Inn Hotel Baku 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/holiday.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Set in a sleek building, this polished hotel is 4 km from the
                Old City and 5 km from the 15th-century Palace of the
                Shirvanshahs. The contemporary rooms with colorful artwork come
                with free Wi-Fi, flat-screen TVs and safes, plus minibars, and
                tea and coffeemaking facilities. Suites have kitchenettes,
                living rooms and pull-out sofas. Room service is available 24/7.
                Kids age 17 and under stay at no extra cost with an adult.
                Property details: Number of Rooms: 223, 21 suites.
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
              Park Inn By Radisson Hotel 4*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel9.avif"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                With a central location, our Park Inn by Radisson in Baku is
                well placed for enjoying all that the Azerbaijan capital city
                has to offer. Next to the hotel, you’ll find the waterfront
                Milli Park, a 100-year-old promenade that runs along the
                seafront. We’re minutes from the buzzing shopping district. You
                can always relax in contemporary, well-equipped rooms with views
                over the city or the Caspian Sea. Property details: 248
                contemporary rooms and suites.
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
              Pullman Baku Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel10.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Pullman Baku is ideal for business and leisure. The hotel is
                located only 110 yards from the Botanical Garden and a 10-minute
                drive from the old city and Caspian coast and is the only resort
                hotel in Baku. Pullman Baku features a huge Aqua Park, 4 indoor
                and outdoor pools, 3,500 m² spa and an entertainment center. The
                full range of outstanding conference and banqueting facilities
                are available: 7 meeting rooms, 500 seat auditorium, and a
                spacious 600 m² ballroom. Free car park and high-speed WI-FI.
                The resort offers modern fully equipped rooms with bathroom and
                free WI-FI. “Peppermint” restaurant invites everyone to taste
                Azerbaijani and other cuisines, and “Chill” bar – to enjoy
                signature cocktails.
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
              ART Gallery Boutique Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel11.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Art Gallery Boutique Hotel is located in the center of Baku,
                next to the old city wall. The property is located in the
                historical center of Baku just 25 m from Maiden Tower. The
                property is around 1.1 km from Azerbaijan Opera and Ballet
                Theater and 1.1 km from The National Museum of History of
                Azerbaijan. All units in the hotel are equipped with a
                flat-screen TV. The private bathroom is fitted with a shower and
                free toiletries. The rooms at ART Gallery Boutique Hotel include
                air conditioning and a desk. Around-the-clock guidance is
                available at the reception, where staff speaks Azerbaijani,
                English and Russian. ART Gallery Boutique Hotel is a 5-minute
                walk from the Fountains Square.
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
              Boutique 19 Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotelbout.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Boutique 19 is a cozy hotel with the great location – Old City
                and a popular Fountain Square is just a short walk away from our
                boutique! The property lies within 200 meters from Maiden Tower.
                The hotel offers perfect location 8 km from the center of Baku.
                While staying at Boutique 19 Hotel guests can make use of
                climate control, a kitchenette, a dining area, a writing table
                and a sofa provided in the rooms. Boutique 19 Hotel features
                rooms with the garden view. They also include bathrooms with a
                shower, guest toiletries and terry bathrobes. International
                meals are served at the restaurant. The hotel offers a safe
                deposit box, an elevator and a luggage storage along with a
                business center, printers and a photocopier for both business
                and leisure guests.
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
              Sheraton Baku Intourist Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel13.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Discover an uncommon blend of style and substance at the
                Sheraton Baku Intourist Hotel. This 5-star hotel provides the
                ultimate in luxury accommodation, with spacious, elegantly
                appointed hotel rooms and suites, state-of-the-art amenities,
                and an ideal location in Baku. Property Details:150 guest rooms
                and suites
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
              JW Marriott Absheron Hotel Baku 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel14.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Discover an uncommon blend of style and substance at the
                Sheraton Baku Intourist Hotel. This 5-star hotel provides the
                ultimate in luxury accommodation, with spacious, elegantly
                appointed hotel rooms and suites, state-of-the-art amenities,
                and an ideal location in Baku. Property Details:150 guest rooms
                and suites
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
              Bilgah Beach Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel15.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Your journey begins with the premier accommodations‚ all with
                sea-facing balconies and thoughtful amenities ranging from
                complimentary wireless Internet access to spacious bathrooms
                with walk-in showers and separate bathtubs. Amenities include an
                opulent, rooftop Asian restaurant, and a lavish cocktail bar and
                nightclub. There’s an outdoor pool, a water park and a private
                beach, as well as a gym, a tennis clinic and a bowling alley.
                There’s also a luxe spa with an indoor pool. Property Details:
                14 Duplex Three-Bedroom Cottages, 176 sea-facing rooms & suites.
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
              Baku Marriott Hotel Boulevard 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel16.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Baku Marriott Hotel Boulevard is located in the heart of Baku
                White City district, along one of the main routes connecting the
                city center with Heydar Aliyev International Airport. Upscale
                comfort awaits in family-friendly hotel rooms, showcasing luxury
                bedding, free Wi-Fi and panoramic sea views. Thrill your palate
                with delicious dining at our distinctive restaurants. Energize
                in the well-equipped fitness center or refresh in the waters of
                the heated indoor pool. Celebrate and succeed in flexible event
                spaces, designed for flawless meetings, conferences and social
                affairs in Baku. The largest convention hotel in Azerbaijan,
                Baku Marriott Hotel Boulevard features 38,933 sq ft of elegant
                meeting spaces, including a magnificent pillar-free ballroom.
                After a day of business, shopping or enjoying the sea, soothe
                your senses with a beauty treatment at our luxury spa. Discover
                an exhilarating hotel stay in one of Azerbaijan’s most elegant
                destinations, perfectly placed along the glittering Caspian Sea.
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
              Hilton Baku Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel17.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Overlooking the Caspian Sea, this upscale, glass-sided hotel is
                1 km from the Baku Central Railway Station. The elegant rooms
                feature free Wi-Fi, flat-screens, minibars and sitting areas.
                Upgraded rooms provide access to an executive lounge offering
                free breakfast, while suites add living rooms and dining areas,
                plus superior city and sea views. Property Details: 309 rooms &
                suites, 18 meeting rooms.
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
              Fairmont Baku Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotelfair.avif"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Fairmont Baku, Flame Towers designed to exceed five-star
                standards and services, brings 318 superbly appointed guest
                rooms, suites, serviced apartments and an array of Fairmont Gold
                options. Set within a trio of sleek glass high-rises, this
                luxury hotel is 2 km from both the Old City and the Caspian Sea
                featuring city or sea views. Club-level rooms come with butler
                service and access to an exclusive lounge. Suites add living
                rooms; some feature kitchens and dining areas.
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
              Four Seasons Hotel 5*
            </p>
            <div class="eachMuseum flex p-8 pl-0">
              <img
                src="@/assets/images/hotel19.jpeg"
                class="imageStyle h-60 border-4 w-96 rounded-md border-gray-400"
                alt=""
              />
              <p class="w-2/3 text-color ml-10 max-h-52 overflow-scroll">
                Overlooking the Caspian Sea, this elegant luxury hotel in a
                beaux arts building is an 8-minute walk from the Old City and a
                metro stop. Most have balconies offering Old City or sea views.
                Suites include living rooms; some contain whirlpool tubs. Kids
                stay at no extra cost with an adult. Room service is available
                24/7. Property details: 171 guest rooms, 27 suites and 2
                presidential suites
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
  background-image: url("@/assets/images/carpetmuseum.jpeg");
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
