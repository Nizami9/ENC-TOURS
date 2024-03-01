<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">
            Map of Azerbaijan
          </p>
          <p class="textP rounded-md mt-2">
            Founded on the principle in offering seamless operational travel
            standards throughout Asia, ENC Tours is a company managed by
            passionate travelers who know the ins and outs of their respective
            destination like no other.
          </p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="text-6xl mainP">About Us</p>
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
          class="border introText w-2/3 m-auto p-8 text-customGray"
        >
          <p class="pb-4">
            Founded in 1999, ENC Tours prides itself on its extensive
            specialized knowledge, expertise and integrity that has been the
            cornerstone of a “yes, we can” attitude.
          </p>
          <p class="pb-4">
            Our services range from tailor-made and wholesale leisure programs,
            MICE and corporate travel planning, and an extensive variety of
            theme-based programs – ranging from art, history or adventure –
            throughout Asia.
          </p>
          <p class="pb-4">
            Headquartered in Baku, the group continues to provide client-focused
            destination management services in all of its own-operated
            destinations; Cambodia, China, Hong Kong, Indonesia, Laos, Malaysia,
            Myanmar, Singapore, Thailand and Vietnam.
          </p>
        </div>
        <p class="border-b pt-12 w-10/12 border-orange-500 m-auto"></p>

        <div class="flex firstMap w-1/2 m-auto border-b border-orange-400">
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
            class="w-full m-6 flex m-auto"
          >
            <img
              src="@/assets/images/map.jpeg"
              class="w-full m-auto flex"
              alt="mapofazerbaijan"
            />
          </div>
        </div>
        <div class="maps flex w-11/12 m-auto border-b border-orange-400">
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
            class="w-full m-6 flex m-auto"
          >
            <img
              src="@/assets/images/map2.jpeg"
              class="w-full m-auto flex"
              alt="mapofazerbaijan"
            />
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
                mass: 20,
              },
            }"
            class="w-full m-6 flex m-auto"
          >
            <img
              src="@/assets/images/map4.jpeg"
              class="w-full m-auto flex"
              alt="mapofazerbaijan"
            />
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
  background-image: url("@/assets/images/map5.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
  @media (min-width: 320px) and (max-width: 820px) {
    width: 90%;
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
  @media (min-width: 320px) and (max-width: 425px) {
    height: 160px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 300px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 180px;
  }
}

.maps {
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
  }
}

.firstMap {
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
    width: 90%;
    margin-bottom: 10px;
  }
}

.mainP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}
</style>
