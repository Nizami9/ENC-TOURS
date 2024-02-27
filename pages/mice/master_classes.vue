<template>
  <NuxtLayout>
    <div>
      <div class="relative z-0 w-full parallax">
        <div
          class="w-1/2 m-auto pt-80 text-center z-10 uppercase text-white p-2"
        >
          <p class="text-8xl uppercase font-semibold">Master Classes</p>
          <p class="rounded-md mt-20 text-center">
            Lauded for its extensive knowledge, its East-meets-West model and
            venturing responsibly into every corner of its destinations, it is
            our mission to show guests the beating heart of our Asia
          </p>
        </div>
      </div>
      <div class="">
        <div class="w-9/12 m-auto mt-10 mb-6">
          <div class="mb-10">
            <h4>Culinary Master-class:</h4>
            <ul class="list-disc text-gray-500">
              <li class="mb-5 mt-5">
                Yogurt Master Class. The authentic name of local yogurt is
                “qatiq”. Qatiq is usually served with some traditional dishes
                that usually have vegetables or meat among its ingredients.
                During this master class you will be able to see and learn how
                qatiq is prepared and served. In addition, you will have the
                opportunity to try it out and some other dairy products.
              </li>
              <li>
                Sheki Halva is a traditional sweet and is considered the
                specialty of Sheki. Authentic halva is prepared in halva shops
                by a “halvachi”. Each halvachi has its own recipe, which is
                passed down from generation to generation and kept secret. Doing
                halva requires a lot of skill, time and patience.
              </li>
            </ul>
          </div>
          <div class="mb-10">
            <h4>Unique Experience:</h4>
            <ul class="list-disc text-gray-500">
              <li class="mb-5 mt-5">
                Shebeke Master Class. Shebeke in Sheki – is filled windows with
                colored glasses, created by the Azerbaijani folk artists of
                small wooden parts without glue and nails. The windows of Sheki
                Khan Palace are decorated shebeke. And most of residential stone
                houses XVIII-XIX centuries in Sheki, decorated shebeke.
              </li>
              <li class="mb-5">
                Copper craftsmanship of Lahij is the traditional practice of
                making and using copperware concentrated in the Lahij community
                in the Caucasus. The tradition is transmitted within families
                from father to son. Numerous families in Azerbaijan come to buy
                copperware in Lahij and use it in their daily lives believing it
                improves the health benefits of food. For artisans, the
                tradition represents a major source of living and provides a
                strong sense of identity and community pride.
              </li>
              <li>
                Master class of kelagai. Kelagai is Azerbaijani women’s national
                headscarf made from fine and soft silk in a four-cornered shape.
                Kelagai was an integral part of women’s national costume in
                Azerbaijan. Silk kelagai protected them from both the hot sun
                and cold wind as silk is cool in summer and warm in winter.
                Basqal settlement of the Ismayilli region was famous for high
                quality kelagai production.
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
  background-image: url("@/assets/images/kelagayi.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(55%);
  z-index: -1;
}

.text-color {
  color: #5a5858;
}
</style>
