<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/3 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">contact us</p>
        </div>
      </div>
      <div class="text-center">
        <div class="p-8">
          <p class="font-semibold text-xl mainP">
            WE’RE ALWAYS EAGER TO HEAR FROM YOU.
          </p>
          <p class="border-b-2 pt-4 w-20 border-gray-500 m-auto"></p>
        </div>
        <div class="border introText w-1/2 m-auto p-8 text-customGray">
          <p
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
            For questions, assistance or requests for collaboration, Asian
            Trails is committed to reply to requests within the shortest time
            possible during office hours in each respective time zone. We’re
            taking great pride in responding to your travel needs, whether you
            contact one of our regional offices or one of our international
            sales offices.
          </p>
        </div>
        <div class="introText pt-8 pb-8">
          <p class="font-semibold text-xl mb-4">ENC TOURS - HEAD OFFICE</p>
          <div class="flex eachSec justify-between w-1/5 m-auto text-center">
            <img
              src="@/assets/images/home.png"
              class="h-6 mb-2"
              alt="homeIcon"
            />
            <p class="text-center w-full">4th floor, 47 Füzuli Küçəsi, Bakı 1014, Azerbaijan</p>
          </div>
          <div class="flex eachSec justify-between w-1/5 m-auto text-center">
            <img
              src="@/assets/images/mail.png"
              class="h-6 mb-2"
              alt="homeIcon"
            />
            <p class="text-center w-full">info@enctours.az</p>
          </div>
          <div class="flex eachSec justify-between w-1/5 m-auto text-center">
            <img
              src="@/assets/images/phone.png"
              class="h-6"
              alt="phoneIcon"
            />
            <p class="text-center w-full">+994124974020</p>
          </div>
          <p class="border-b-4 pt-4 w-40 border-gray-500 m-auto"></p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.412976769243!2d49.83602317627348!3d40.377538858023335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc7dabac3af%3A0xbd7c54823fa7fe28!2sENC%20Tours!5e0!3m2!1sen!2sde!4v1705311459771!5m2!1sen!2sde"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/newAz1.jpeg");
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
  background-image: url("@/assets/images/az12.webp");
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
    margin: auto;
  }
}
.mainDiv {
  @media (min-width: 320px) and (max-width: 820px) {
    padding-top: 220px;
    width: 80%;
  }
}
.eachSec {
  @media (min-width: 320px) and (max-width: 820px) {
    width: 60%;
  }
}
.mainP {
  @media (min-width: 320px) and (max-width: 820px) {
    font-size: xx-large;
  }
}
</style>
