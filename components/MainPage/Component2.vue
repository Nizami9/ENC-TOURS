<template>
    <div class="w-full pb-9 bg-rgba text-color">
      <div class="m-auto w-7/12 text-center pt-6">
        <div>
          <p class="text-6xl font-thin text-main-color">Inspirations</p>
        </div>
        <div class="mt-5 mb-3 text-center m-auto">
          <p class="border-b-4 w-40 m-auto border-orange-400"></p>
        </div>
        <div class="w-full">
          <p>The excitement never ends with us!</p>
          <p class="leading-7">
            Inspired by the abundance of travel options in our Asia, we have
            travelled to every nook and corner of our beloved destinations to
            find what we define as exemplary tours for discerning travel
            connoisseurs.
          </p>
        </div>
      </div>
      <div class="mb-8"> 
        <CarouselComp />
      </div>
    </div>    
</template>

<script setup></script>

<style scoped>
.text-main-color {
  color: #24373d;
}

.text-color {
  color: #5a5858;
}
</style>