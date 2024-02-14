<template>
    <div class="w-full pb-10 bg-rgba text-color">
      <div class="m-auto w-5/12 text-center pt-9">
        <div>
          <p class="text-6xl font-thin text-main-color">Inspirations</p>
        </div>
        <div class="mt-6 mb-6 text-center ml-72">
          <p class="border-b-4 w-1/3 border-orange-400"></p>
        </div>
        <div class="w-full space-y-3">
          <p>The excitement never ends with us!</p>
          <p>
            Inspired by the abundance of travel options in our Asia, we have
            travelled to every nook and corner of our beloved destinations to
            find what we define as exemplary tours for discerning travel
            connoisseurs.
          </p>
        </div>
      </div>
      <div>
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