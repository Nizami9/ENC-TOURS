<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">{{ $t("rest") }}</p>
          <p class="rounded-md mt-5 text-center textP">
            {{ $t("restP1") }}
          </p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="text-6xl mainP">INTRO</p>
          <p class="border-b-2 pt-4 w-20 border-gray-400 m-auto"></p>
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
            {{ $t("restIntro") }}
          </p>
        </div>
        <div class="mainSection flex w-10/12 m-auto mt-10 uppercase mb-2">
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
            class="w-1/3 uppercase sectionDiv"
          >
            <div class="pb-2">
              <img
                src="@/assets/images/mugam.webp"
                class="imageStyle h-60 w-11/12 m-auto border-4 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder1"
                @mouseout="removeBorder1"
              />
            </div>
            <div class="pb-8">
              <p
                ref="section1"
                class="pb-1 text-color"
                @mouseover="addBorder1"
                @mouseout="removeBorder1"
              >
                Mugham Club, Baku
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
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
            class="w-1/3 uppercase sectionDiv"
          >
            <div class="pb-2">
              <img
                src="@/assets/images/artClub.jpeg"
                class="imageStyle h-60 w-11/12 m-auto border-4 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder2"
                @mouseout="removeBorder2"
              />
            </div>
            <div class="pb-8">
              <p
                ref="section2"
                class="pb-1 text-color"
                @mouseover="addBorder2"
                @mouseout="removeBorder2"
              >
                Art Club, Baku
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
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
            class="w-1/3 uppercase sectionDiv"
          >
            <div class="pb-2">
              <img
                src="@/assets/images/sumakh.jpeg"
                class="imageStyle h-60 w-11/12 m-auto border-4 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder3"
                @mouseout="removeBorder3"
              />
            </div>
            <div class="pb-8">
              <p
                ref="section3"
                class="pb-1 text-color"
                @mouseover="addBorder3"
                @mouseout="removeBorder3"
              >
                Sumakh, Baku
              </p>
            </div>
          </div>
        </div>
        <div class="mainSection flex w-10/12 m-auto mt-10 uppercase mb-2">
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
            class="w-1/3 uppercase sectionDiv"
          >
            <div class="pb-2">
              <img
                src="@/assets/images/chayki.jpeg"
                class="imageStyle h-60 w-11/12 m-auto border-4 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder4"
                @mouseout="removeBorder4"
              />
            </div>
            <div class="pb-8">
              <p
                ref="section4"
                class="pb-1 text-color"
                @mouseover="addBorder4"
                @mouseout="removeBorder4"
              >
                Chayki, Baku
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
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
            class="w-1/3 uppercase sectionDiv"
          >
            <div class="pb-2">
              <img
                src="@/assets/images/novbahar.jpeg"
                class="imageStyle h-60 w-11/12 m-auto border-4 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder5"
                @mouseout="removeBorder5"
              />
            </div>
            <div class="pb-8">
              <p
                ref="section5"
                class="pb-1 text-color"
                @mouseover="addBorder5"
                @mouseout="removeBorder5"
              >
                Novbahar, Baku
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
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
            class="w-1/3 uppercase sectionDiv"
          >
            <div class="pb-2">
              <img
                src="@/assets/images/atesh.jpeg"
                class="imageStyle h-60 w-11/12 m-auto border-4 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
                alt=""
                @mouseover="addBorder6"
                @mouseout="removeBorder6"
              />
            </div>
            <div class="pb-8">
              <p
                ref="section6"
                class="pb-1 text-color"
                @mouseover="addBorder6"
                @mouseout="removeBorder6"
              >
                Ateshgah, Baku
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mainSection justify-center text-center flex w-10/12 m-auto mt-10 uppercase mb-2"
      >
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
          class="w-1/3 uppercase sectionDiv"
        >
          <div class="pb-2">
            <img
              src="@/assets/images/karvanVIP.jpeg"
              class="imageStyle h-60 w-11/12 m-auto border-4 rounded-md border-gray-400 hover:scale-95 duration-300 transition-all"
              alt=""
              @mouseover="addBorder7"
              @mouseout="removeBorder7"
            />
          </div>
          <div class="pb-8">
            <p
              ref="section7"
              class="pb-1 text-color"
              @mouseover="addBorder7"
              @mouseout="removeBorder7"
            >
              Karvan VIP, Sheki
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const createHoverHandlers = (sectionRef) => {
  const addBorder = () => {
    sectionRef.value.classList.add("border-b-2", "border-gray-400");
  };

  const removeBorder = () => {
    sectionRef.value.classList.remove("border-b-2", "border-gray-400");
  };

  return { addBorder, removeBorder };
};

const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);
const section4 = ref(null);
const section5 = ref(null);
const section6 = ref(null);
const section7 = ref(null);
const section8 = ref(null);
const section9 = ref(null);
const section10 = ref(null);
const section11 = ref(null);

const { addBorder: addBorder1, removeBorder: removeBorder1 } =
  createHoverHandlers(section1);
const { addBorder: addBorder2, removeBorder: removeBorder2 } =
  createHoverHandlers(section2);
const { addBorder: addBorder3, removeBorder: removeBorder3 } =
  createHoverHandlers(section3);
const { addBorder: addBorder4, removeBorder: removeBorder4 } =
  createHoverHandlers(section4);
const { addBorder: addBorder5, removeBorder: removeBorder5 } =
  createHoverHandlers(section5);
const { addBorder: addBorder6, removeBorder: removeBorder6 } =
  createHoverHandlers(section6);
const { addBorder: addBorder7, removeBorder: removeBorder7 } =
  createHoverHandlers(section7);
const { addBorder: addBorder8, removeBorder: removeBorder8 } =
  createHoverHandlers(section8);
const { addBorder: addBorder9, removeBorder: removeBorder9 } =
  createHoverHandlers(section9);
const { addBorder: addBorder10, removeBorder: removeBorder10 } =
  createHoverHandlers(section10);
const { addBorder: addBorder11, removeBorder: removeBorder11 } =
  createHoverHandlers(section11);
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
  background-image: url("@/assets/images/cuisine3.jpeg");
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
    height: 190px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 320px;
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
</style>
