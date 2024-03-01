<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto mainDiv pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-7xl uppercase font-semibold text2">About Us</p>
          <p class="rounded-md mt-2 textP">
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
          <p class="border-b-2 pt-4 w-20 border-gray-500 m-auto"></p>
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
        <p class="border-b pt-12 w-10/12 border-gray-500 m-auto"></p>

        <div class="flex mainSection w-10/12 m-auto border-b border-gray-400">
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visible="{
              opacity: 1,
              delay: 1000,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
            class="m-10 imageStyle2"
          >
            <img src="@/assets/images/encTeam.jpeg" alt="" />
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
            class="flex sections text-color flex-wrap w-9/12 flex-col justify-evenly h-80 text-center m-auto"
          >
            <h2 class="w-full font-semibold text-2xl">
              OUR PEOPLE ARE OUR GREATEST ASSET
            </h2>
            <p class="w-full">
              Our expertise is where our strength lies and we are proud to be
              recognized as one of Asia’s leading experts in travel-related
              experiences.
            </p>
            <p class="w-full">
              Our knowledge of each destination is paramount, backed by product
              innovation, training, consulting and investment into
              state-of-the-art technology.
            </p>
            <p class="w-full">
              But, the foundation of our success lies within the spirit, the
              zest, the passion of each and every single employee, dedicated to
              deliver exceeding expectations’ service standards.
            </p>
          </div>
        </div>
        <div class="flex mainSection w-10/12 m-auto border-b border-gray-400">
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
            class="flex sections text-color flex-wrap flex-col justify-evenly h-80 text-center m-auto"
          >
            <h2 class="w-full font-semibold text-2xl">
              EYES TOWARDS THE FUTURE
            </h2>
            <p class="w-full">
              Being recognized for our service standards across the globe, ENC
              Tours has received various international and company awards for
              operational standards and service-minded DMC innovations.
            </p>
            <p class="w-full">
              With the launch of various new technological platforms, ENC Tours
              upholds its commitment to innovate and follow the technology
              requirements for Asia’s travel partners.
            </p>
            <p class="w-full">
              We are constantly working towards new means to efficiently handle
              requirements without losing the human touch.
            </p>
          </div>
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visible="{
              opacity: 1,
              delay: 1000,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
            class="m-10 imageStyle2"
          >
            <img src="@/assets/images/team.jpeg" class="imageStyle" alt="" />
          </div>
        </div>
        <div class="flex mainSection w-10/12 m-auto border-b border-gray-400">
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visible="{
              opacity: 1,
              delay: 1000,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
            class="m-10 imageStyle2"
          >
            <img
              src="@/assets/images/team3.jpeg"
              class="imageStyle w-11/12"
              alt=""
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
                mass: 5,
              },
            }"
            class="flex flex-wrap sections text-color w-9/12 flex-col justify-evenly h-80 text-center m-auto"
          >
            <h2 class="w-full font-semibold text-2xl">
              OUR PEOPLE ARE OUR GREATEST ASSET
            </h2>
            <p class="w-full">
              But, the foundation of our success lies within the spirit, the
              zest, the passion of each and every single employee, dedicated to
              deliver exceeding expectations’ service standards.
            </p>
            <p class="w-full">
              Our expertise is where our strength lies and we are proud to be
              recognized as one of Asia’s leading experts in travel-related
              experiences.
            </p>
            <p class="w-full">
              Our knowledge of each destination is paramount, backed by product
              innovation, training, consulting and investment into
              state-of-the-art technology.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="text-center m-auto">
          <p class="text-2xl font-semibold m-4">Our Team</p>
          <p class="text-gray-400">Family of ENC Tours</p>
        </div>
        <div class="flex ourTeam justify-around m-5">
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visible="{
              opacity: 1,
              delay: 1000,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
          >
            <img
              src="@/assets/images/emil.jpeg"
              class="imageStyle w-60"
              alt=""
            />
            <h5 class="uppercase text-xl mt-3 font-semibold">Emil Nasibov</h5>
            <p>CEO and Founder</p>
          </div>
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visible="{
              opacity: 1,
              delay: 1000,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
          >
            <img
              src="@/assets/images/rasim.jpg"
              class="imageStyle w-60"
              alt=""
            />
            <h5 class="uppercase text-xl mt-3 font-semibold">
              Rasim Farzaliyev
            </h5>
            <p>Head of Operations</p>
          </div>
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visible="{
              opacity: 1,
              delay: 1000,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
          >
            <img
              src="@/assets/images/sabina.jpeg"
              class="imageStyle w-60"
              alt=""
            />
            <h5 class="uppercase text-xl mt-3 font-semibold">
              Sabina Rustamova
            </h5>
            <p>Senior Product Manager</p>
          </div>
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visible="{
              opacity: 1,
              delay: 1000,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 5,
              },
            }"
          >
            <img
              src="@/assets/images/amina.jpeg"
              class="imageStyle w-60"
              alt=""
            />
            <h5 class="uppercase text-xl mt-3 font-semibold">Amina Hasanova</h5>
            <p>Product Manager</p>
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
  background-image: url("@/assets/images/newAz1.jpeg");
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
.sections {
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
    height: 400px;
  }
}
.mainP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

.ourTeam {
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
  }
}

.imageStyle {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
  }
}

.imageStyle2 {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 10px;
  }
}
</style>
