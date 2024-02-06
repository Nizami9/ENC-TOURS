<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto pt-48 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold">museums</p>
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
              MUSEUM OF MODERN ART
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum1.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
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
            <p class="border-b-2 pb-2 border-orange-400">
              AZERBAIJAN CARPET MUSEUM
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/carpetmuseum2.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                The Azerbaijan Carpet Museum was created in 1967. The museum’s
                new home was built within the National Seaside Park by decree of
                the President of the Republic of Azerbaijan Ilham Aliyev, signed
                in 2007. and was designed based on the plans of the Austrian
                architect, Franz Yants. It opened its doors in 2014. Today, the
                museum, an example of modern Baku architecture, functions not
                only as a storehouse for art and carpets, but also as a center
                for research in the field of carpet weaving and a place to
                exhibit the high level skills of our people.
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
              NIZAMI GANJAVI MUSEUM
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum2.webp"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                National Museum of Azerbaijani Literature named after Nizami
                Ganjavi was founded in 1939. The museum is located in the center
                of Baku, near the Fountain Square and next to the entrance of
                Icheri Sheher. To date, this museum is one of the largest and
                richest treasuries of Azerbaijani spiritual culture. In 30 main
                and 10 auxiliary rooms of the museum there are more than 3
                thousand manuscripts, rare books, illustrations, portraits,
                sculptures, miniatures, memoirs of writers and other
                expositions. Part of the building is allocated for a bookstore.
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
              THE SHEKI KHANS HOUSE
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum3.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                Built in the 18th century and recently thoroughly restored the
                house of Sheki Khans, owned by relatives of the Khans, is a
                transitional link from a national house to a palace type
                building. The interiors are richly decorated with murals and
                colorful shabaka, made by the same artists who painted the
                Palace of Sheki Khans.
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
              NATIONAL MUSEUM OF HISTORY
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum4.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                The National Museum of History of Azerbaijan has been operating
                since 1920 in the mansion of the well-known oil industrialist
                and philanthropist Haji Zeynalabdin Tagiyev. In May 1921 the
                museum received its first visitors. Until 1936 it was called the
                State Museum of the Azerbaijan SSR and was later renamed the
                Museum of History of Azerbaijan. The total number of museum
                items exceeds 300,000. 20 000 of them are exhibited; the rest
                are kept in scientific storage.
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
            <p class="border-b-2 pb-2 border-orange-400">ATASHGAH</p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum51.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                Historical monument. The temple of fire worshippers Ateshgah,
                located on the Absheron peninsula on the outskirts of Surakhani
                village was revered in different times by Zoroastrians, Hindus
                and Sikhs. The current constructions of the temple date back to
                the XVII century. As a result of excavations, far more ancient
                artifacts were discovered here. The pentagonal complex has an
                open courtyard with temple-altar in the center which was the
                place of pilgrimage for worshippers. By the decree of the
                President of Azerbaijan Ateshgah was declared a State
                historical-architectural reserve. This open-air museum has been
                recently restored. Different workshops and souvenir galleries
                are located here now.
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
              SHIRVANSHAH'S PALACE
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum6.webp"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                The palace was the former residence of the rulers of the
                Shirvanshahs. It is a complex where, in addition to the palace
                itself, can also be found a courtyard of the Diwankhana, the
                courthouse, the Shirvanshahs’ burial vault, the palace mosque of
                1441 with its minaret, the bathhouse and the mausoleum of the
                court scholar, Sayid Yahya Bakuvi. The palace complex was built
                in the period from the XIII to the XVI century. On the palace
                itself, no inscriptions have survived. Therefore, the time of
                its construction is determined by the dates on the inscriptions
                on various architectural monuments, which relate to the palace
                complex. In 1964, the palace complex was declared a
                museum-preserve. In 2000, a unique architectural and cultural
                ensemble, along with the fortified walls enclosed by the
                historic part of the city and the Maiden Tower, was included in
                the UNESCO World Heritage List. The Shirvanshahs Palace is
                considered one of the pearls of the architecture of Azerbaijan.
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
            <p class="border-b-2 pb-2 border-orange-400">MAIDEN TOWER</p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum7.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                The exact date of construction of the Maiden Tower is unknown.
                In the 12th century the Maiden Tower became part of the
                defensive system of Baku and was the main stronghold of the Baku
                fortress – one of the most powerful fortresses of the
                Shirvanshahs. But later studies of the Maiden Tower completely
                refuted all previous assumptions about its defensive purpose. In
                the XVIII-XIX centuries, the Maiden Tower was used as a beacon.
                On the facade of the tower from the entrance side there is a
                stone with an inscription in Kufic handwriting which says: «The
                Tower of Masud, the son of Dawood. » Since 2010, with the aim of
                popularizing the Maiden Tower, the International Festival of Art
                «The Maiden’s Tower» is held, in which artists from various
                countries adorn the tower with mock-ups.
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
              ALBANIAN TEMPLE - KISH
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/kish.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                In the villages of Sheki region there are several Christian
                architectural monuments of Caucasian Albania, the most famous of
                which is the church in the village of Kish. The official date of
                the laying of foundational stone of it is 1st century AD, the
                time when the territory of Azerbaijan was a part of the
                Caucasian Albania.Kish temple, built of limestone, is the first
                temple of hall type with a dome, created in the early Middle
                Ages. Currently, the historical and architectural monument works
                as a museum.
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
              HEYDAR ALIYEV CENTER
            </p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum8.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                The cultural center includes an auditorium (congress center), a
                museum, exhibition halls, administrative offices. The project of
                the center was developed in 2007 by the famous architect Zaha
                Hadid. The construction of the building was covered on the
                channels of Discovery and Science Channel, dedicated to the most
                courageous engineering projects of modernity and architectural
                masterpieces of the world. The opening took place on May 10,
                2012. In 2014, the Heydar Aliyev Center was awarded the Design
                of the Year. It is considered one of the symbols of modern Baku
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
            <p class="border-b-2 pb-2 border-orange-400">GOBUSTAN</p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum9.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                A reserva de Gobustan está localizada na parte oriental do
                Azerbaijão, na área das montanhas Boyukdash, Gobustan preserve
                is located in the eastern part of Azerbaijan, in the area of the
                Boyukdash, Kichikdash and Jingirdagh Mountains of Greater
                Gobustan. The Gobustan preserve is widely known,not only in our
                Republic but also worldwide, for its rock engravings and
                monuments of primitive culture. These monuments are ancient
                drawings, cupules for preparing drinks and gathering rain water,
                two-sided hollows for tying-up animals, signs, tamgas, ancient
                inscriptions and so on. Revealed and registered on more than a
                thousand rocks and stones these monuments were created by
                ancient man and are the reflection of his agricultural and
                intellectual activity. The Petroglyphs of Gobustan are artistic
                chronicles of the past. They bear great importance both for the
                study of the pre-history of humanity and for the study of lots
                of spheres of primitive art: graphics, music, dance, stone
                processing, etc. Gobustan’s monuments cover a period of
                approximately 20 thousands years beginning from the end of Upper
                Paleolith till the beginning of our era. e Jingirdagh da Grande
                Gobustan. A reserva Gobustan é amplamente conhecida, não apenas
                em nossa República, mas também em todo o mundo, por suas
                gravuras rupestres e monumentos da cultura primitiva. Esses
                monumentos são desenhos antigos, cúpulas para preparar bebidas e
                coletar água da chuva, cavidades nos dois lados para amarrar
                animais, sinais, tamgas, inscrições antigas e assim por diante.
                Revelados e registrados em mais de mil rochas e pedras, esses
                monumentos foram criados pelo homem antigo e são o reflexo de
                sua atividade agrícola e intelectual. Os petróglifos de Gobustan
                são crônicas artísticas do passado. Eles têm grande importância
                tanto para o estudo da pré-história da humanidade quanto para o
                estudo de muitas esferas da arte primitiva: gráficos, música,
                dança, processamento de pedra etc. Os monumentos de Gobustan
                cobrem um período de aproximadamente 20 mil anos a partir de o
                fim do Paleolítico Superior até o início de nossa era.
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
            <p class="border-b-2 pb-2 border-orange-400">SHEKI KHANS PALACE</p>
            <div class="flex p-8 pl-0">
              <img
                src="@/assets/images/museum10.jpeg"
                class="h-60 border-4 w-96 rounded-md border-orange-400"
                alt=""
              />
              <p class="w-2/3 ml-10 max-h-52 overflow-scroll">
                Unique in the architecture Sheki Khans Palace was built in 1762
                by Huseyn-khan. The palace has its own special original
                construction techniques. It is enough to say for example that
                each square meter of shabaka (box of small wooden parts to be
                filled with colored glass) consists of five thousand parts,
                connected with each other without nails!
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
  background-image: url("@/assets/images/carpetmuseum.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}
</style>
