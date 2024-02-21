<template>
  <NuxtLayout>
    <div>
      <div>
        <div class="parallax h-full w-full flex flex-col items-center relative">
          <div class="overlay flex-col flex items-center">
            <p
              class="text2 w-full p-3 mt-60 text-center text-7xl text-white uppercase"
            >
              enc cultural and heritage tours
            </p>
            <p
              class="uppercase text-center w-1/3 text-xs leading-5 rounded-md p-2 top-96 pt-10 text-center text-white"
            >
              As an award-winning destination management company since 1999,
              Asian Trails has led the way in designing and executing travel
              services through its extensive network of offices across East and
              South-East Asia.
            </p>
            <img
              src="@/assets/images/arrowDown.png"
              class="w-20 mt-96"
              alt=""
              @click="scrollToComponent2"
            />
          </div>
        </div>
      </div>
      <component-2 ref="component2Ref"></component-2>
      <component-3></component-3>
      <component-4></component-4>
      <component-6></component-6>
      <component-5></component-5>
    </div>
  </NuxtLayout>
</template>

<script setup>
import Component2 from "@/components/MainPage/Component2.vue";
import Component3 from "@/components/MainPage/Component3.vue";
import Component4 from "@/components/MainPage/Component4.vue";
import Component5 from "@/components/MainPage/Component6.vue";
import Component6 from "@/components/MainPage/Component5.vue";

const component2Ref = ref(null);

onMounted(() => {
  component2Ref.value = ref.component2Ref;
});

// const scrollToComponent2 = () => {
//   if (component2Ref.value) {
//     component2Ref.value.$el.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "nearest",
//     });
//   }
// };

const scrollToComponent2 = () => {
  if (component2Ref.value) {
    const targetElement = component2Ref.value.$el;
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 3 seconds

    let startTimestamp;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
};
</script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/baku8.webp");
  min-height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.text2 {
  font-weight: 600;
}
</style>
