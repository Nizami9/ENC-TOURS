<template>
  <div class="w-full mb-14">
    <div
      class="w-full"
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
    >
      <div class="w-11/12 m-auto mt-6 font-light text-5xl">
        <p class="w-4/12 md:w-1/2 text-center mb-6 m-auto pb-2">
          What Makes Us Different
        </p>
      </div>
      <div class="w-11/12 m-auto mt-6 mb-6 text-center">
        <p class="border-b-4 w-1/12 m-auto border-orange-400"></p>
      </div>
      <div
        class="text-center text-gray-600 w-10/12 m-auto border-b pb-6"
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
      <div class="flex w-10/12 m-auto mt-4 text-center border-b pb-3" v-motion
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
        }">
        <div class="w-1/3 border-r">
          <img
            src="@/assets/images/icon1.png"
            class="w-20 m-auto mb-6 mt-6"
            alt=""
          />
          <h4>OWN OPERATIONS</h4>
          <p class="p-6">
            A firm believer in operating in key destinations under our own name,
            Asian Trails is operational with more than 30 owner-operated offices
            in East and South-East Asia. We cover all aspects of quality assured
            travel operations, from private to seat-in-coach tours, with strict
            quality assurance.
          </p>
        </div>
        <div class="w-1/3 border-r">
          <img
            src="@/assets/images/icon2.png"
            class="w-20 m-auto mb-6 mt-6"
            alt=""
          />
          <h4>CUSTOMER FOCUSED</h4>
          <p class="p-6">
            We speak your language! Our value-for-money approach with (y)our
            customer at heart has been at the forefront since our inception. We
            are driven in igniting the wanderlust in travellers, in every aspect
            with the aim to exceed expectations.
          </p>
        </div>
        <div class="w-1/3">
          <img
            src="@/assets/images/icon3.webp"
            class="w-20 m-auto mb-6 mt-6"
            alt=""
          />
          <h4>GLOBAL REPRESENTATION</h4>
          <p class="p-6">
            Asian Trails prides itself on being present in every corner of ‘our
            Asia’ with our own dedicated offices and professionally-trained
            travel experts, backed by representative offices across the globe
            that offer support to our clients in their respective location and
            time zone.
          </p>
        </div>
      </div>

      <div
        class="flex w-10/12 m-auto mt-4 text-center border-b-2 border-orange-200 pb-3"
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
      >
        <div class="w-1/3 border-r">
          <img
            src="@/assets/images/icon4.png"
            class="w-20 m-auto mb-6 mt-6"
            alt=""
          />
          <h4>NO COMPROMISES</h4>
          <p class="p-6">
            We take guests to the ‘Real Asia’ so they touch, taste and
            experience the beating heart of every destination they visit. This
            comes with the assurance of operating in line with our core value of
            ‘practicing what we preach’ – and no compromises on our high service
            standards.
          </p>
        </div>
        <div class="w-1/3 border-r">
          <img
            src="@/assets/images/icon5.svg"
            class="w-20 m-auto mb-6 mt-6"
            alt=""
          />
          <h4>RESPONSIBLE OPERATIONS</h4>
          <p class="p-6">
            Choosing carefully, our approach in operating sustainably and
            supporting the right causes are recognized throughout the travel
            industry. From treading lightly where needed, to adhering to global
            standards, we ensure we contribute to our host communities and leave
            a minimal footprint so we leave our destinations in a pristine
            condition.
          </p>
        </div>
        <div class="w-1/3">
          <img
            src="@/assets/images/icon6.jpg"
            class="w-20 m-auto mb-6 mt-6"
            alt=""
          />
          <h4>PASSIONATE ABOUT TRAVEL</h4>
          <p class="p-6">
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

// useMotion handles the intersection observer logic
const { observe } = useMotion(motionElement);
</script>
