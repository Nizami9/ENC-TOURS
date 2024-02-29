<template>
  <div class="w-full mb-14 text-color">
    <div class="w-full">
      <div class="w-11/12 m-auto mt-10 text-6xl">
        <p class="text-center mb-4 m-auto pb-2 text-main-color">
          What Makes Us Different
        </p>
      </div>
      <div class="w-11/12 m-auto mb-4 text-center">
        <p class="border-b-4 w-1/12 m-auto border-blue-900"></p>
      </div>
      <div
        class="text-center text-gray-600 w-10/12 m-auto border-b pb-6 text-color"
      >
        <p>
          Under our motto ‘Blazing New Paths in Travel’, Asian Trails’ extensive
          knowledge of its business-to-business customers has paved the way for
          unique, exciting and value for money itineraries where an eye for
          detail, a personalized approach and speaking the language of our
          guests has enabled us to truly blaze new paths in travel across Asia.
        </p>
      </div>
    </div>
    <div class="text-gray-600 md:text-sm lg:text-base xl:text-base">
      <div class="flex sections w-10/12 m-auto mt-4 text-center border-b pb-8">
        <div class="w-1/3 sectionDiv border-r">
          <img
            src="@/assets/images/icon1.png"
            class="w-20 m-auto mb-6 mt-10"
            alt=""
          />
          <h4>OWN OPERATIONS</h4>
          <p class="p-6 leading-7 text-color">
            A firm believer in operating in key destinations under our own name,
            Asian Trails is operational with more than 30 owner-operated offices
            in East and South-East Asia. We cover all aspects of quality assured
            travel operations, from private to seat-in-coach tours, with strict
            quality assurance.
          </p>
        </div>
        <div class="w-1/3 sectionDiv border-r">
          <img
            src="@/assets/images/icon2.png"
            class="w-20 m-auto mb-6 mt-10"
            alt=""
          />
          <h4>CUSTOMER FOCUSED</h4>
          <p class="p-6 leading-7 text-color">
            We speak your language! Our value-for-money approach with (y)our
            customer at heart has been at the forefront since our inception. We
            are driven in igniting the wanderlust in travellers, in every aspect
            with the aim to exceed expectations.
          </p>
        </div>
        <div class="w-1/3 sectionDiv">
          <img
            src="@/assets/images/icon3.webp"
            class="w-20 m-auto mb-6 mt-10"
            alt=""
          />
          <h4>GLOBAL REPRESENTATION</h4>
          <p class="p-6 leading-7 text-color">
            Asian Trails prides itself on being present in every corner of ‘our
            Asia’ with our own dedicated offices and professionally-trained
            travel experts, backed by representative offices across the globe
            that offer support to our clients in their respective location and
            time zone.
          </p>
        </div>
      </div>

      <div
        class="flex sections w-10/12 m-auto mt-4 text-center border-b-2 border-gray-100 pb-8"
      >
        <div class="w-1/3 sectionDiv border-r">
          <img
            src="@/assets/images/icon4.png"
            class="w-20 m-auto mb-6 mt-10"
            alt=""
          />
          <h4>NO COMPROMISES</h4>
          <p class="p-6 leading-7 text-color">
            We take guests to the ‘Real Asia’ so they touch, taste and
            experience the beating heart of every destination they visit. This
            comes with the assurance of operating in line with our core value of
            ‘practicing what we preach’ – and no compromises on our high service
            standards.
          </p>
        </div>
        <div class="w-1/3 sectionDiv border-r">
          <img
            src="@/assets/images/icon5.svg"
            class="w-20 m-auto mb-6 mt-10"
            alt=""
          />
          <h4>RESPONSIBLE OPERATIONS</h4>
          <p class="p-6 leading-7 text-color">
            Choosing carefully, our approach in operating sustainably and
            supporting the right causes are recognized throughout the travel
            industry. From treading lightly where needed, to adhering to global
            standards, we ensure we contribute to our host communities and leave
            a minimal footprint so we leave our destinations in a pristine
            condition.
          </p>
        </div>
        <div class="w-1/3 sectionDiv">
          <img
            src="@/assets/images/icon6.jpg"
            class="w-20 m-auto mb-6 mt-10"
            alt=""
          />
          <h4>PASSIONATE ABOUT TRAVEL</h4>
          <p class="p-6 leading-7 text-color">
            Our offices span all the corners of our destinations, guided by the
            principle that travel is more than just an experience. Engrained in
            our DNA, no stone is left unturned to deliver exploratory memories
            in a respectful and sustainable way.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMotion } from "@vueuse/motion";
import { MotionPlugin } from "@vueuse/motion";

const initial = {
  x: -50,
  opacity: 0,
  transition: {
    stifness: 100,
  },
};

const enter = {
  x: 0,
  opacity: 1,
  transition: {
    stifness: 100,
    ease: "easeInOut",
  },
};

const motionElement = ref(null);

const { observe } = useMotion(motionElement);
</script>

<style scoped>
.text-main-color {
  color: #24373d;
  font-weight: 200;
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

.text-color {
  color: #5a5858;
  font-weight: 200;
  font-size: small;
  line-height: 180%;
}

.sections {
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
</style>
