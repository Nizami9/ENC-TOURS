<template>
<div
class="border-b mb-5 mt-5 section5 pb-3 flex justify-between w-full"
>
<div class="w-1/3 sec51 text-left">
  <div class="w-1/3 secAvailable">
    <p
      class="bg-gray-500 text-white border rounded-xl p-1 mb-2 text-center"
    >
      {{ $t("available") }}
    </p>
  </div>
  <div>
    <p class="uppercase text-xl text-yellow-900 mb-2">
      {{ $t("stDep") }}
    </p>
  </div>
  <div>
    <p>{{ start }} - {{ end }}</p>
  </div>
  <div>
    <p class="text-sm">({{ duration }} {{ $t("days") }})</p>
  </div>
</div>
<div class="sec51 sec51Pt pt-12 w-1/3">
  <div>
    <p class="text-xl font-bold">£{{ price }}</p>
  </div>
  <div>
    <p class="text-sm">{{ $t("optSingleSupp") }}: + £{{ singlesup }}</p>
  </div>
</div>
<div class="sec51 w-1/3">
  <div class="flex sec5end sec51Pt justify-end pt-12">
    <p class="bg-yellow-500 p-3 w-52 rounded-3xl">
      {{ $t("sendEmail") }}
    </p>
  </div>
</div>
</div>
</template>

<script setup>
const props = defineProps({
  start: String,
  end: String,
  duration: String,
  price: String,
  singlesup: String,
});
</script>
