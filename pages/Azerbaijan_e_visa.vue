<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-2/3 m-auto mainDiv pt-64 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 mb-10 text-7xl uppercase font-semibold">
            AZERBAIJAN E-VISA
          </p>
          <p class="textP rounded-md mt-2">
            Founded on the principle in offering seamless operational travel
            standards throughout Asia, ENC Tours is a company managed by
            passionate travelers who know the ins and outs of their respective
            destination like no other.
          </p>
        </div>
      </div>
      <div class="text-left mb-8">
        <div class="p-8 text-center">
          <p class="text-6xl mainP">About E-Visa</p>
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
            Azerbaijan offers an electronic visa (e-visa) system for travelers
            seeking entry into the country. The e-visa is a convenient and
            efficient way to obtain authorization for short-term visits to
            Azerbaijan.
          </p>
          <p class="pb-4">
            Travelers can apply for the e-visa online through the official
            portal of the State Migration Service of Azerbaijan. The e-visa is
            available for various purposes, including tourism, business, and
            official visits.
          </p>
          <p class="pb-4">
            Applicants need to fill out the online form, provide necessary
            documents, and pay the visa fee electronically.
          </p>
          <p class="pb-4">
            The processing time for the e-visa is typically short, and
            applicants receive their electronic visa via email.
          </p>

          <p class="pb-4">
            The e-visa for Azerbaijan is valid for a single entry and allows for
            a stay of up to 30 days within the specified validity period. It is
            essential for travelers to carefully review the visa requirements
            and ensure they meet all criteria before submitting their
            application.
          </p>
          <p class="pb-4">
            The introduction of the e-visa system reflects Azerbaijan's
            commitment to facilitating tourism and business activities while
            streamlining the visa application process.
          </p>
          <NuxtLink
            to="https://www.evisa.gov.az/en/"
            class="pb-4 hover:text-orange-600 hover:underline"
            >https://www.evisa.gov.az/en/</NuxtLink
          >
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
  background-image: url("@/assets/images/visa.avif");
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

.mainP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}

</style>
