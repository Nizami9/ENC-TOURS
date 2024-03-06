<!-- <template>
  <NuxtLayout>
    <div class="pt-32 bg-gray-200 w-full">
      <Carousel
        id="gallery"
        :items-to-show="parseInt(1)"
        :wrap-around="false"
        v-model="currentSlide"
        class="w-1/2 carousel m-auto text-xl text-bold"
      >
        <Slide :key="0">
          <div class="carousel__item" @click="slideTo(0)">
            <img
              src="@/assets/images/novruz3.jpeg"
              class="mainImage"
              alt="Slide 1"
            />
            <p>NOVRUZ FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="1">
          <div class="carousel__item" @click="slideTo(1)">
            <img
              src="@/assets/images/event2.jpeg"
              class="mainImage"
              alt="Slide 2"
            />
            <p>POMEGRENADE FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="2">
          <div class="carousel__item" @click="slideTo(2)">
            <img
              src="@/assets/images/wine.jpeg"
              class="mainImage"
              alt="Slide 3"
            />
            <p>WINE FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="3">
          <div class="carousel__item" @click="slideTo(3)">
            <img
              src="@/assets/images/murabba.jpeg"
              class="mainImage"
              alt="Slide 4"
            />
            <p>MURABBA FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="4">
          <div class="carousel__item" @click="slideTo(3)">
            <img
              src="@/assets/images/jazz.jpeg"
              class="mainImage"
              alt="Slide 4"
            />
            <p>BAKU JAZZ FESTIVAL</p>
          </div>
        </Slide>
        <Slide :key="5">
          <div class="carousel__item" @click="slideTo(3)">
            <img
              src="@/assets/images/f1.jpeg"
              class="mainImage"
              alt="Slide 4"
            />
            <p>FORMULA 1 BAKU GRAND PRIX</p>
          </div>
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        :items-to-show="parseInt(5)"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
        class="thumb"
      >
        <Slide :key="0">
          <div class="carousel__item" @click="slideTo(0)">
            <img
              src="@/assets/images/novruz3.jpeg"
              class="max-image"
              alt="Thumbnail 1"
            />
          </div>
        </Slide>
        <Slide :key="1">
          <div class="carousel__item" @click="slideTo(1)">
            <img
              src="@/assets/images/event2.jpeg"
              class="max-image"
              alt="Thumbnail 2"
            />
          </div>
        </Slide>
        <Slide :key="2">
          <div class="carousel__item" @click="slideTo(2)">
            <img
              src="@/assets/images/wine.jpeg"
              class="max-image"
              alt="Thumbnail 3"
            />
          </div>
        </Slide>
        <Slide :key="3">
          <div class="carousel__item" @click="slideTo(3)">
            <img
              src="@/assets/images/murabba.jpeg"
              class="max-image"
              alt="Thumbnail 4"
            />
          </div>
        </Slide>
        <Slide :key="4">
          <div class="carousel__item" @click="slideTo(4)">
            <img
              src="@/assets/images/jazz.jpeg"
              class="max-image"
              alt="Thumbnail 4"
            />
          </div>
        </Slide>
        <Slide :key="5">
          <div class="carousel__item" @click="slideTo(5)">
            <img
              src="@/assets/images/f1.jpeg"
              class="max-image"
              alt="Thumbnail 4"
            />
          </div>
        </Slide>
      </Carousel>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const currentSlide = ref(0);

const slideTo = (val) => {
  currentSlide.value = Number(val);
};
</script>

<style scoped>
.thumb {
  border: 2px solid rgb(222, 153, 26);
  padding-top: 5px;
  padding-bottom: 5px;
  max-height: 220px;
}

.max-image {
  height: 200px;
  width: 340px;
}

.mainImage {
  height: 500px;
  border: 4px solid rgb(222, 153, 26);
  border-radius: 1%;
}

.carousel {
  height: 560px;
}
</style> -->

<!-- <template>
    <NuxtLayout>
      <div class="pt-32 bg-gray-200 w-full">
        <Carousel
          id="gallery"
          :items-to-show="1"
          :wrap-around="false"
          v-model="currentSlide"
          class="w-1/2 m-auto carousel text-xl text-bold"
        >
          <Slide :key="0">
            <div class="carousel__item" @click="slideTo('0')">
              <img
                src="@/assets/images/kebab.jpeg"
                class="mainImage"
                alt="Slide 1"
              />
              <p>ASSORTED KEBAB</p>
            </div>
          </Slide>
          <Slide :key="1">
            <div class="carousel__item" @click="slideTo('1')">
              <img
                src="@/assets/images/badimjan.jpeg"
                class="mainImage"
                alt="Slide 2"
              />
              <p>BADIMJAN DOLMASI</p>
            </div>
          </Slide>
          <Slide :key="2">
            <div class="carousel__item" @click="slideTo('2')">
              <img
                src="@/assets/images/cav.jpeg"
                class="mainImage"
                alt="Slide 3"
              />
              <p>CASPIAN BLACK CAVIAR</p>
            </div>
          </Slide>
          <Slide :key="3">
            <div class="carousel__item" @click="slideTo('3')">
              <img
                src="@/assets/images/dovga.avif"
                class="mainImage"
                alt="Slide 4"
              />
              <p>DOVGA</p>
            </div>
          </Slide>
          <Slide :key="4">
            <div class="carousel__item" @click="slideTo('4')">
              <img
                src="@/assets/images/dushbara.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>DUSHBARA</p>
            </div>
          </Slide>
          <Slide :key="5">
            <div class="carousel__item" @click="slideTo('5')">
              <img
                src="@/assets/images/plov.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>PLOV</p>
            </div>
          </Slide>
          <Slide :key="6">
            <div class="carousel__item" @click="slideTo('6')">
              <img
                src="@/assets/images/qutab.webp"
                class="mainImage"
                alt="Slide 4"
              />
              <p>QUTAB</p>
            </div>
          </Slide>
          <Slide :key="7">
            <div class="carousel__item" @click="slideTo('7')">
              <img
                src="@/assets/images/saj.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>SADJ ICHI</p>
            </div>
          </Slide>
          <Slide :key="8">
            <div class="carousel__item" @click="slideTo('8')">
              <img
                src="@/assets/images/sturgeon.webp"
                class="mainImage"
                alt="Slide 4"
              />
              <p>CASPIAN STURGEON KEBAB</p>
            </div>
          </Slide>
          <Slide :key="9">
            <div class="carousel__item" @click="slideTo('9')">
              <img
                src="@/assets/images/dolma.avif"
                class="mainImage"
                alt="Slide 4"
              />
              <p>YARPAQ DOLMASI</p>
            </div>
          </Slide>
          <Slide :key="10">
            <div class="carousel__item" @click="slideTo('10')">
              <img
                src="@/assets/images/murabba.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>MURABBA</p>
            </div>
          </Slide>
          <Slide :key="11">
            <div class="carousel__item" @click="slideTo('11')">
              <img
                src="@/assets/images/pakhlava.jpeg"
                class="mainImage"
                alt="Slide 4"
              />
              <p>PAKHLAVA</p>
            </div>
          </Slide>
        </Carousel>
        <Carousel
          id="thumbnails"
          :items-to-show="5"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
          class="thumb"
        >
          <Slide :key="0">
            <div class="carousel__item" @click="slideTo('0')">
              <img
                src="@/assets/images/kebab.jpeg"
                class="max-image"
                alt="Thumbnail 1"
              />
            </div>
          </Slide>
          <Slide :key="1">
            <div class="carousel__item" @click="slideTo('1')">
              <img
                src="@/assets/images/badimjan.jpeg"
                class="max-image"
                alt="Thumbnail 2"
              />
            </div>
          </Slide>
          <Slide :key="2">
            <div class="carousel__item" @click="slideTo('2')">
              <img
                src="@/assets/images/cav.jpeg"
                class="max-image"
                alt="Thumbnail 3"
              />
            </div>
          </Slide>
          <Slide :key="3">
            <div class="carousel__item" @click="slideTo('3')">
              <img
                src="@/assets/images/dovga.avif"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="4">
            <div class="carousel__item" @click="slideTo('4')">
              <img
                src="@/assets/images/dushbara.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="5">
            <div class="carousel__item" @click="slideTo('5')">
              <img
                src="@/assets/images/plov.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="6">
            <div class="carousel__item" @click="slideTo('6')">
              <img
                src="@/assets/images/qutab.webp"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="7">
            <div class="carousel__item" @click="slideTo('7')">
              <img
                src="@/assets/images/saj.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="8">
            <div class="carousel__item" @click="slideTo('8')">
              <img
                src="@/assets/images/sturgeon.webp"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="9">
            <div class="carousel__item" @click="slideTo('9')">
              <img
                src="@/assets/images/dolma.avif"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="10">
            <div class="carousel__item" @click="slideTo('10')">
              <img
                src="@/assets/images/murabba.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
          <Slide :key="11">
            <div class="carousel__item" @click="slideTo('11')">
              <img
                src="@/assets/images/pakhlava.jpeg"
                class="max-image"
                alt="Thumbnail 4"
              />
            </div>
          </Slide>
        </Carousel>
      </div>
    </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const currentSlide = ref(0);

const slideTo = (val) => {
  currentSlide.value = Number(val);
};
</script>

<style scoped>
.thumb {
  border: 2px solid rgb(222, 153, 26);
  padding-top: 5px;
  padding-bottom: 5px;
  max-height: 220px;
}

.max-image {
  height: 200px;
  width: 340px;
}

.mainImage {
  max-height: 500px;
  border: 4px solid rgb(222, 153, 26);
  border-radius: 1%;
}

.carousel {
  height: 560px;
}
</style> -->

<template>
  <NuxtLayout>
    <section>
      <div class="container">
        <div class="carousel">
          <input type="radio" name="slides" checked="checked" id="slide-1" />
          <input type="radio" name="slides" id="slide-2" />
          <input type="radio" name="slides" id="slide-3" />
          <input type="radio" name="slides" id="slide-4" />
          <input type="radio" name="slides" id="slide-5" />
          <input type="radio" name="slides" id="slide-6" />

          <ul class="carousel__slides">
            <li class="carousel__slide">
              <figure>
                <div>
                  <img src="@/assets/images/novruz3.jpeg" alt="" />
                </div>
                <figcaption class="max-h-2/3 overflow-scroll">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                  ut omnis nisi architecto porro, minus deserunt saepe, officiis
                  iste amet voluptatibus mollitia illum, ipsum autem earum
                  perspiciatis obcaecati aliquam! Hic. Nulla accusantium
                  sapiente ullam, repellenre, quia eos iusto fugiat aut optio
                  debitis pariatur! Fuga maiores ad inventore. Eum sit fuga,
                  totam dicta, voluptas quaerat alias recusandae provident, cum
                  itaque impedit eligendi minima exercitationem obcaecati!
                  Labore nulla re cum sit dolorem?
                  <span class="credit">Photo: Tim Marshall</span>
                </figcaption>
              </figure>
            </li>
            <li class="carousel__slide">
              <figure>
                <div>
                  <img src="@/assets/images/event2.jpeg" alt="" />
                </div>
                <figcaption class="max-h-2/3 overflow-scroll">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                  ut omnis nisi architecto porro, minus deserunt saepe, officiis
                  iste amet voluptatibus mollitia illum, ipsum autem earum
                  perspiciatis obcaecati aliquam! Hic. Nulla accusantium
                  sapiente ullam, repellenre, quia eos iusto fugiat aut optio
                  debitis pariatur! Fuga maiores ad inventore. Eum sit fuga,
                  totam dicta, voluptas quaerat alias recusandae provident, cum
                  itaque impedit eligendi minima exercitationem obcaecati!
                  Labore nulla re cum sit dolorem?
                  <span class="credit">Photo: Tim Marshall</span>
                </figcaption>
              </figure>
            </li>
            <li class="carousel__slide">
              <figure>
                <div>
                  <img src="@/assets/images/wine.jpeg" alt="" />
                </div>
                <figcaption class="max-h-2/3 overflow-scroll">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                  ut omnis nisi architecto porro, minus deserunt saepe, officiis
                  iste amet voluptatibus mollitia illum, ipsum autem earum
                  perspiciatis obcaecati aliquam! Hic. Nulla accusantium
                  sapiente ullam, repellenre, quia eos iusto fugiat aut optio
                  debitis pariatur! Fuga maiores ad inventore. Eum sit fuga,
                  totam dicta, voluptas quaerat alias recusandae provident, cum
                  itaque impedit eligendi minima exercitationem obcaecati!
                  Labore nulla re cum sit dolorem?
                  <span class="credit">Photo: Tim Marshall</span>
                </figcaption>
              </figure>
            </li>
            <li class="carousel__slide">
              <figure>
                <div>
                  <img src="@/assets/images/murabba.jpeg" alt="" />
                </div>
                <figcaption class="max-h-2/3 overflow-scroll">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                  ut omnis nisi architecto porro, minus deserunt saepe, officiis
                  iste amet voluptatibus mollitia illum, ipsum autem earum
                  perspiciatis obcaecati aliquam! Hic. Nulla accusantium
                  sapiente ullam, repellenre, quia eos iusto fugiat aut optio
                  debitis pariatur! Fuga maiores ad inventore. Eum sit fuga,
                  totam dicta, voluptas quaerat alias recusandae provident, cum
                  itaque impedit eligendi minima exercitationem obcaecati!
                  Labore nulla re cum sit dolorem?
                  <span class="credit">Photo: Tim Marshall</span>
                </figcaption>
              </figure>
            </li>
            <li class="carousel__slide">
              <figure>
                <div>
                  <img src="@/assets/images/jazz.jpeg" alt="" />
                </div>
                <figcaption class="max-h-2/3 overflow-scroll">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                  ut omnis nisi architecto porro, minus deserunt saepe, officiis
                  iste amet voluptatibus mollitia illum, ipsum autem earum
                  perspiciatis obcaecati aliquam! Hic. Nulla accusantium
                  sapiente ullam, repellenre, quia eos iusto fugiat aut optio
                  debitis pariatur! Fuga maiores ad inventore. Eum sit fuga,
                  totam dicta, voluptas quaerat alias recusandae provident, cum
                  itaque impedit eligendi minima exercitationem obcaecati!
                  Labore nulla re cum sit dolorem?
                  <span class="credit">Photo: Tim Marshall</span>
                </figcaption>
              </figure>
            </li>
            <li class="carousel__slide">
              <figure>
                <div>
                  <img src="@/assets/images/f1.jpeg" alt="" />
                </div>
                <figcaption class="max-h-2/3 overflow-scroll">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                  ut omnis nisi architecto porro, minus deserunt saepe, officiis
                  iste amet voluptatibus mollitia illum, ipsum autem earum
                  perspiciatis obcaecati aliquam! Hic. Nulla accusantium
                  sapiente ullam, repellenre, quia eos iusto fugiat aut optio
                  debitis pariatur! Fuga maiores ad inventore. Eum sit fuga,
                  totam dicta, voluptas quaerat alias recusandae provident, cum
                  itaque impedit eligendi minima exercitationem obcaecati!
                  Labore nulla re cum sit dolorem?
                  <span class="credit">Photo: Tim Marshall</span>
                </figcaption>
              </figure>
            </li>
          </ul>
          <ul class="carousel__thumbnails">
            <li>
              <label for="slide-1"
                ><img src="@/assets/images/novruz3.jpeg" alt=""
              /></label>
            </li>
            <li>
              <label for="slide-2"
                ><img src="@/assets/images/event2.jpeg" alt=""
              /></label>
            </li>
            <li>
              <label for="slide-3"
                ><img src="@/assets/images/wine.jpeg" alt=""
              /></label>
            </li>
            <li>
              <label for="slide-4"
                ><img src="@/assets/images/murabba.jpeg" alt=""
              /></label>
            </li>
            <li>
              <label for="slide-5"
                ><img src="@/assets/images/jazz.jpeg" alt=""
              /></label>
            </li>
            <li>
              <label for="slide-6"
                ><img src="@/assets/images/f1.jpeg" alt=""
              /></label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script></script>

<style scoped>
section {
  background: #f4f4f4;
  padding: 50px 0 0 0;
}

.container {
  width: 90%;
  margin: 0 auto;
  padding: 50px 20px;
}

.carousel {
  display: block;
  text-align: left;
  position: relative;
  margin-bottom: 22px;
}
.carousel > input {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
.carousel
  > input:nth-of-type(6):checked
  ~ .carousel__slides
  .carousel__slide:first-of-type {
  margin-left: -500%;
}
.carousel
  > input:nth-of-type(5):checked
  ~ .carousel__slides
  .carousel__slide:first-of-type {
  margin-left: -400%;
}
.carousel
  > input:nth-of-type(4):checked
  ~ .carousel__slides
  .carousel__slide:first-of-type {
  margin-left: -300%;
}
.carousel
  > input:nth-of-type(3):checked
  ~ .carousel__slides
  .carousel__slide:first-of-type {
  margin-left: -200%;
}
.carousel
  > input:nth-of-type(2):checked
  ~ .carousel__slides
  .carousel__slide:first-of-type {
  margin-left: -100%;
}
.carousel
  > input:nth-of-type(1):checked
  ~ .carousel__slides
  .carousel__slide:first-of-type {
  margin-left: 0%;
}

.carousel__thumbnails {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  margin: 0 -10px;
}

.carousel__thumbnails li {
  flex: 1 1 auto;
  max-width: calc((100% / 6) - 20px);
  margin: 10px 10px;
  transition: all 300ms ease-in-out;
  box-sizing: border-box;
  width: calc((100% / 6) - 20px);
}

.carousel
  > input:nth-of-type(1):checked
  ~ .carousel__thumbnails
  li:nth-of-type(1) {
  box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
  margin: 10px;
}
.carousel
  > input:nth-of-type(2):checked
  ~ .carousel__thumbnails
  li:nth-of-type(2) {
  box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
  margin: 10px;
}
.carousel
  > input:nth-of-type(3):checked
  ~ .carousel__thumbnails
  li:nth-of-type(3) {
  box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
  margin: 10px;
}
.carousel
  > input:nth-of-type(4):checked
  ~ .carousel__thumbnails
  li:nth-of-type(4) {
  box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
  margin: 10px;
}
.carousel
  > input:nth-of-type(5):checked
  ~ .carousel__thumbnails
  li:nth-of-type(5) {
  box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
  margin: 10px;
}
.carousel
  > input:nth-of-type(6):checked
  ~ .carousel__thumbnails
  li:nth-of-type(6) {
  box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
  margin: 10px;
}

.carousel__slides {
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
}

.carousel__slide {
  position: relative;
  display: block;
  flex: 1 0 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 300ms ease-out;
  box-sizing: border-box;
  white-space: normal;
}
.carousel__slide figure {
  display: flex;
  margin: 0;
  @media (min-width: 320px) and (max-width: 820px) {
    display: block;
    font-size: x-small;
  }
}
.carousel__slide div {
  position: relative;
  border: 4px solid rgba(149, 137, 250, 255);

  width: 100%;
}
.carousel__slide div:before {
  display: block;
  content: "";
  width: 100%;
  padding-top: 66.6666666667%;
}
.carousel__slide div > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.carousel__slide img {
  display: block;
  flex: 1 1 auto;
  object-fit: cover;
}
.carousel__slide figcaption {
  align-self: flex-start;
  padding: 0px 20px 0 20px;
  flex: 0 0 auto;
  width: 27%;
  min-width: 150px;
  @media (min-width: 320px) and (max-width: 820px) {
    width: 100%;
    padding: 0px;
    padding-top: 10px;
  }
}
.carousel__slide .credit {
  margin-top: 1rem;
  color: rgba(0, 0, 0, 0.5);
  display: block;
}
.carousel__slide.scrollable {
  overflow-y: scroll;
}

.carousel__thumbnails {
  list-style: none;
  margin: 0;
  display: flex;
  margin: 0 -10px;
}
.carousel__slides + .carousel__thumbnails {
  margin-top: 20px;
}
.carousel__thumbnails li {
  flex: 1 1 auto;
  max-width: calc((100% / 6) - 20px);
  margin: 10px 10px;
  transition: all 300ms ease-in-out;
}
.carousel__thumbnails label {
  display: block;
  position: relative;
}
.carousel__thumbnails label:before {
  display: block;
  content: "";
  width: 100%;
  padding-top: 100%;
}
.carousel__thumbnails label > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.carousel__thumbnails label:hover,
.carousel__thumbnails label:focus {
  cursor: pointer;
}
.carousel__thumbnails label:hover img,
.carousel__thumbnails label:focus img {
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease-in-out;
}
.carousel__thumbnails img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
