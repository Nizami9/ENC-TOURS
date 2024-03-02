<template>
  <div class="ml-6 mr-4 allSec">
    <carousel items-to-show="1" class="w-full pt-7" :wrap-around="true">
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full flex eachSection">
          <div class="w-2/3 eachImage">
            <img
              src="@/assets/images/hotel2.jpeg"
              class="imageStyle w-full"
              alt="photo"
            />
          </div>
          <div class="w-2/3 eachText bg-gray-200">
            <h3 class="uppercase text-left pt-5 pl-5 text-xl font-bold">
              Sheki Park, Sheki
            </h3>
            <p class="text-left p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              soluta? A fuga, officia ullam quidem unde maiores molestias
              delectus et atque dolorum eaque maxime expedita, animi minima
              voluptatum doloribus culpa. Exercitationem quod, eveniet incidunt
              est dolorum recusandae numquam perspiciatis rerum molestiae
              laborum? Vero provident ab veritatis! Perferendis, esse
              doloremque. Laboriosam tempore illo quo! Voluptate quaerat ducimus
              beatae veniam laudantium? Ab. Maxime quisquam delectus doloribus
              ab aliquam, enim sapiente blanditiis modi, tempora repudiandae
              corporis recusandae cum alias ipsam obcaecati commodi voluptate
              assumenda vero excepturi! Cum vero volupt odio molestias nulla
              sunt. Autem nam minus fugiat ipsum! Facere quae quis eos! Nostrum,
              in soluta. Fuga, quae itaque ipsam recusandae tenetur pariatur ad
              dolorum amet corporis aut, dolor accusamus quas facere dicta qui
              molestias aliquid quisquam, quibusdam distinctio.
            </p>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full eachSection flex">
          <div class="w-2/3 eachImage">
            <img
              src="@/assets/images/hotel3.jpeg"
              class="imageStyle w-full"
              alt="photo"
            />
          </div>
          <div class="w-2/3 eachText bg-gray-200">
            <h3 class="uppercase text-left pt-5 pl-5 text-xl font-bold">
              Aksent Hotel, Baku
            </h3>
            <p class="text-left p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              soluta? A fuga, officia ullam quidem unde maiores molestias
              delectus et atque dolorum eaque maxime expedita, animi minima
              voluptatum doloribus culpa. Exercitationem quod, eveniet incidunt
              est dolorum recusandae numquam perspiciatis rerum molestiae
              laborum? Vero provident ab veritatis! Perferendis, esse
              doloremque. Laboriosam tempore illo quo! Voluptate quaerat ducimus
              beatae veniam laudantium? Ab. Maxime quisquam delectus doloribus
              ab aliquam, enim sapiente blanditiis modi, tempora repudiandae
              corporis recusandae cum alias ipsam obcaecati commodi voluptate
              assumenda vero excepturi! Cum vero volupt odio molestias nulla
              sunt. Autem nam minus fugiat ipsum! Facere quae quis eos! Nostrum,
              in soluta. Fuga, quae itaque ipsam recusandae tenetur pariatur ad
              dolorum amet corporis aut, dolor accusamus quas facere dicta qui
              molestias aliquid quisquam, quibusdam distinctio.
            </p>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full eachSection flex">
          <div class="w-2/3 eachImage">
            <img
              src="@/assets/images/hotelbout.jpeg"
              class="w-full imageStyle"
              alt="photo"
            />
          </div>
          <div class="w-2/3 eachText bg-gray-200">
            <h3 class="uppercase text-left pt-5 pl-5 text-xl font-bold">
              Boutique 19 Hotel, Baku
            </h3>
            <p class="text-left p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              soluta? A fuga, officia ullam quidem unde maiores molestias
              delectus et atque dolorum eaque maxime expedita, animi minima
              voluptatum doloribus culpa. Exercitationem quod, eveniet incidunt
              est dolorum recusandae numquam perspiciatis rerum molestiae
              laborum? Vero provident ab veritatis! Perferendis, esse
              doloremque. Laboriosam tempore illo quo! Voluptate quaerat ducimus
              beatae veniam laudantium? Ab. Maxime quisquam delectus doloribus
              ab aliquam, enim sapiente blanditiis modi, tempora repudiandae
              corporis recusandae cum alias ipsam obcaecati commodi voluptate
              assumenda vero excepturi! Cum vero volupt odio molestias nulla
              sunt. Autem nam minus fugiat ipsum! Facere quae quis eos! Nostrum,
              in soluta. Fuga, quae itaque ipsam recusandae tenetur pariatur ad
              dolorum amet corporis aut, dolor accusamus quas facere dicta qui
              molestias aliquid quisquam, quibusdam distinctio.
            </p>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full eachSection flex">
          <div class="w-2/3 eachImage">
            <img
              src="@/assets/images/hotel7.jpeg"
              class="w-full imageStyle"
              alt="photo"
            />
          </div>
          <div class="w-2/3 eachText bg-gray-200">
            <h3 class="uppercase text-left pt-5 pl-5 text-xl font-bold">
              Sapphire Inn Hotel 4*, Baku
            </h3>
            <p class="text-left p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              soluta? A fuga, officia ullam quidem unde maiores molestias
              delectus et atque dolorum eaque maxime expedita, animi minima
              voluptatum doloribus culpa. Exercitationem quod, eveniet incidunt
              est dolorum recusandae numquam perspiciatis rerum molestiae
              laborum? Vero provident ab veritatis! Perferendis, esse
              doloremque. Laboriosam tempore illo quo! Voluptate quaerat ducimus
              beatae veniam laudantium? Ab. Maxime quisquam delectus doloribus
              ab aliquam, enim sapiente blanditiis modi, tempora repudiandae
              corporis recusandae cum alias ipsam obcaecati commodi voluptate
              assumenda vero excepturi! Cum vero volupt odio molestias nulla
              sunt. Autem nam minus fugiat ipsum! Facere quae quis eos! Nostrum,
              in soluta. Fuga, quae itaque ipsam recusandae tenetur pariatur ad
              dolorum amet corporis aut, dolor accusamus quas facere dicta qui
              molestias aliquid quisquam, quibusdam distinctio.
            </p>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full eachSection flex">
          <div class="w-2/3 eachImage">
            <img
              src="@/assets/images/hotel11.jpeg"
              class="imageStyle w-full"
              alt="photo"
            />
          </div>
          <div class="w-2/3 eachText bg-gray-200">
            <h3 class="uppercase text-left pt-5 pl-5 text-xl font-bold">
              ART Gallery Boutique Hotel 5*, Baku
            </h3>
            <p class="text-left p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              soluta? A fuga, officia ullam quidem unde maiores molestias
              delectus et atque dolorum eaque maxime expedita, animi minima
              voluptatum doloribus culpa. Exercitationem quod, eveniet incidunt
              est dolorum recusandae numquam perspiciatis rerum molestiae
              laborum? Vero provident ab veritatis! Perferendis, esse
              doloremque. Laboriosam tempore illo quo! Voluptate quaerat ducimus
              beatae veniam laudantium? Ab. Maxime quisquam delectus doloribus
              ab aliquam, enim sapiente blanditiis modi, tempora repudiandae
              corporis recusandae cum alias ipsam obcaecati commodi voluptate
              assumenda vero excepturi! Cum vero volupt odio molestias nulla
              sunt. Autem nam minus fugiat ipsum! Facere quae quis eos! Nostrum,
              in soluta. Fuga, quae itaque ipsam recusandae tenetur pariatur ad
              dolorum amet corporis aut, dolor accusamus quas facere dicta qui
              molestias aliquid quisquam, quibusdam distinctio.
            </p>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div class="w-full eachSection flex">
          <div class="w-2/3 eachImage">
            <img
              src="@/assets/images/hotelfair.avif"
              class="imageStyle w-full"
              alt="photo"
            />
          </div>
          <div class="w-2/3 eachText bg-gray-200">
            <h3 class="uppercase text-left pt-5 pl-5 text-xl font-bold">
              Fairmont Baku Hotel 5*, Baku
            </h3>
            <p class="text-left p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              soluta? A fuga, officia ullam quidem unde maiores molestias
              delectus et atque dolorum eaque maxime expedita, animi minima
              voluptatum doloribus culpa. Exercitationem quod, eveniet incidunt
              est dolorum recusandae numquam perspiciatis rerum molestiae
              laborum? Vero provident ab veritatis! Perferendis, esse
              doloremque. Laboriosam tempore illo quo! Voluptate quaerat ducimus
              beatae veniam laudantium? Ab. Maxime quisquam delectus doloribus
              ab aliquam, enim sapiente blanditiis modi, tempora repudiandae
              corporis recusandae cum alias ipsam obcaecati commodi voluptate
              assumenda vero excepturi! Cum vero volupt odio molestias nulla
              sunt. Autem nam minus fugiat ipsum! Facere quae quis eos! Nostrum,
              in soluta. Fuga, quae itaque ipsam recusandae tenetur pariatur ad
              dolorum amet corporis aut, dolor accusamus quas facere dicta qui
              molestias aliquid quisquam, quibusdam distinctio.
            </p>
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
    <div>
      <p class="text-xs mt-5 endText">
        Accommodation displayed here should be taken as a guide only. *Please
        refer to the Detailed Itinerary of your individual departure for more
        information.
      </p>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
</script>

<style scoped>
.imageStyle {
  width: 100%;
  padding-right: 6px;
  @media (min-width: 320px) and (max-width: 425px) {
    height: 180px;
    padding-right: 0px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    height: 340px;
    padding-right: 0px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 440px;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    height: 450px;
  }
}

.eachSection {
  @media (min-width: 320px) and (max-width: 1024px) {
    display: block;
  }
}

.eachText {
  @media (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
    font-size: smaller;
    max-height: 200px;
    overflow-y: scroll;
    margin-top: 10px;
  }
}

.eachImage {
  @media (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
  }
}

.allSec {
  @media (min-width: 320px) and (max-width: 1024px) {
    margin: 0px;
  }
}

.endText {
  @media (min-width: 320px) and (max-width: 1024px) {
    margin-top: 20px;
  }
}
</style>
