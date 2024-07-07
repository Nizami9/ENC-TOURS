<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 mainDiv m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text2 text-7xl uppercase font-semibold">Hotels</p>
          <p class="rounded-md mt-20 text-center textP">
            Lauded for its extensive knowledge, its East-meets-West model and
            venturing responsibly into every corner of its destinations, it is
            our mission to show guests the beating heart of our Asia
          </p>
        </div>
      </div>
      <div class="">
        <div class="w-9/12 m-auto mt-10 mb-6">
          <div class="mb-10">
            <h4>{{ $t("hotelMiceFSH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceFS1") }}</li>
              <li>
                {{ $t("hotelMiceFS2") }}
              </li>
              <li>
                {{ $t("hotelMiceFS3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceMarH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceMar1") }}</li>
              <li>
                {{ $t("hotelMiceMar2") }}
              </li>
              <li>
                {{ $t("hotelMiceMar3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceRCH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceRC1") }}</li>
              <li>
                {{ $t("hotelMiceRC2") }}
              </li>
              <li>
                {{ $t("hotelMiceRC3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceMarH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceMar1") }}</li>
              <li>
                {{ $t("hotelMiceMar2") }}
              </li>
              <li>
                {{ $t("hotelMiceMar3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceHyattH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceHyatt1") }}</li>
              <li>
                {{ $t("hotelMiceHyatt2") }}
              </li>
              <li>
                {{ $t("hotelMiceHyatt3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceFairmH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceFairm1") }}</li>
              <li>
                {{ $t("hotelMiceFairm2") }}
              </li>
              <li>
                {{ $t("hotelMiceFairm3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceHiltonH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceHilton1") }}</li>
              <li>
                {{ $t("hotelMiceHilton2") }}
              </li>
              <li>
                {{ $t("hotelMiceHilton3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceInterH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceInter1") }}</li>
              <li>
                {{ $t("hotelMiceInter2") }}
              </li>
              <li>
                {{ $t("hotelMiceInter3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceSherH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceSher1") }}</li>
              <li>
                {{ $t("hotelMiceSher2") }}
              </li>
              <li>
                {{ $t("hotelMiceSher3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceRadisH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceRadis1") }}</li>
              <li>
                {{ $t("hotelMiceRadis2") }}
              </li>
              <li>
                {{ $t("hotelMiceRadis3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceCoutH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceCout1") }}</li>
              <li>
                {{ $t("hotelMiceCout2") }}
              </li>
              <li>
                {{ $t("hotelMiceCout3") }}
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>{{ $t("hotelMiceBoulevH") }}</h4>
            <ul class="list-disc text-gray-500">
              <li>{{ $t("hotelMiceBoulev1") }}</li>
              <li>
                {{ $t("hotelMiceBoulev2") }}
              </li>
              <li>
                {{ $t("hotelMiceBoulev3") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-20">
      <h5 class="uppercase m-auto w-40 text-4xl text-gray-500">gallery</h5>
      <carousel></carousel>
    </div>
  </NuxtLayout>
</template>

<script setup>
import carousel from "../../components/Carousel_Mice_Hotels";
</script>
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
  background-image: url("@/assets/images/shahdag1.jpeg");
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
</style>
