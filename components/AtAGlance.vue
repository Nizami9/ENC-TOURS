<template>
  <div class="m-auto mt-10">
    <p class="uppercase text-3xl">{{ $t("atAGlance") }}</p>
    <div class="mt-10 mb-10">
      <div class="flex section2 w-full justify-between mb-4">
        <div class="bg-gray-400 text-white eachSection w-1/4 mr-4 p-5">
          <div class="m-auto w-6 mb-5">
            <img src="@/assets/images/twit.png" class="h-5" alt="" />
          </div>
          <div class="text-sm min-h-36">
            <p class="uppercase text-lg mb-5">
              {{ $t("meals") }}
            </p>
            <p>{{ breakfast }} x {{ $t("breakfast") }}</p>
            <p>{{ lunches }} x {{ $t("lunches") }}</p>
            <p>{{ dinners }} x {{ $t("dinners") }}</p>
          </div>
        </div>
        <div class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5">
          <div class="m-auto w-6 mb-5">
            <img src="@/assets/images/twit.png" class="h-5" alt="" />
          </div>
          <div class="text-sm min-h-36">
            <p class="uppercase mb-5 text-lg">
              {{ $t("transport") }}
            </p>
            <p class="leading-6">
              {{ $t("transportP") }}
            </p>
          </div>
        </div>
        <div class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5">
          <div class="m-auto w-6 mb-5">
            <img src="@/assets/images/twit.png" class="h-5" alt="" />
          </div>
          <div class="text-sm min-h-36">
            <p class="uppercase mb-5 text-lg">
              {{ $t("groupSize") }}
            </p>
            <p>{{ $t("max") }}: {{ groupsize }}</p>
          </div>
        </div>
        <div class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5">
          <div class="m-auto w-6 mb-5">
            <img src="@/assets/images/twit.png" class="h-5" alt="" />
          </div>
          <div class="text-sm min-h-36">
            <p class="uppercase mb-5 text-lg">
              {{ $t("expTeam") }}
            </p>
            <p class="leading-6">
              {{ $t("expTeamP") }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex section2 w-full justify-between">
        <div class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5">
          <div class="m-auto w-6 mb-5">
            <img src="@/assets/images/twit.png" class="h-5" alt="" />
          </div>
          <div class="text-sm min-h-36">
            <p class="uppercase mb-5 text-lg">
              {{ $t("accomodation") }}
            </p>
            <p>{{ premium }} {{ $t("nights") }} x {{ $t("premium") }}</p>
            <p>{{ superior }} {{ $t("nights") }} x {{ $t("superior") }}</p>
            <p>{{ basic }} {{ $t("night") }} x {{ $t("basic") }}</p>
          </div>
        </div>
        <div class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5">
          <div class="m-auto w-6 mb-5">
            <img src="@/assets/images/twit.png" class="h-5" alt="" />
          </div>
          <div class="text-sm min-h-36">
            <p class="uppercase mb-5 text-lg">
              {{ $t("entrFees") }}
            </p>
            <p class="leading-6">
              {{ $t("entrFeesP") }}
            </p>
          </div>
        </div>
        <div class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5">
          <div class="m-auto w-6 mb-5">
            <img src="@/assets/images/twit.png" class="h-5" alt="" />
          </div>
          <div class="text-sm min-h-36">
            <p class="uppercase mb-5 text-lg">
              {{ $t("fitnessRat") }}
            </p>
            <p>{{ $t("low") }}</p>
          </div>
        </div>
        <div class="bg-gray-400 eachSection text-white w-1/4 mr-4 p-5">
          <div class="m-auto w-6 mb-5">
            <img src="@/assets/images/twit.png" class="h-5" alt="" />
          </div>
          <div class="text-sm min-h-36">
            <p class="uppercase mb-5 text-lg">
              {{ $t("wildMiles") }}
            </p>
            <p>
              {{ $t("wildMilesP") }} {{ wildMiles }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  breakfast: String,
  lunches: String,
  dinners: String,
  groupsize: String,
  premium: String,
  superior: String,
  basic: String,
  wildMiles: String,
});
</script>
