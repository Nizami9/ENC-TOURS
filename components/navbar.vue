<template>
  <div
    class="h-20 w-full text-white bg-gray-50 md:text-xs lg:text-sm xl:text-base transition"
    :style="{
      backgroundColor: navbarBackgroundColor,
      transition: 'background-color 0.5s ease',
    }"
  >
    <div class="flex">
      <div class="w-1/12 m-auto">
        <img
          src="@/assets/images/enclogo2.png"
          alt="ENC logo"
          class="w-5/6 xl:w-5/6 m-auto align-middle items-center"
        />
      </div>
      <div class="flex justify-between w-full md:ml-0 md:mr-0 m-5 p-3">
        <div class="flex uppercase justify-between w-2/3">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <div class="dropdown">
            <NuxtLink to="/" class="nav-link">Azerbaijan</NuxtLink>
            <div class="dropdown-content-aze">
              <NuxtLink to="/general-facts" class="nav-link"
                >General Facts</NuxtLink
              >
              <NuxtLink to="/mapofazerbaijan" class="nav-link"
                >Map of Azerbaijan</NuxtLink
              >
              <NuxtLink to="/azerbaijan_e_visa" class="nav-link"
                >Azerbaijan E-visa</NuxtLink
              >
              <NuxtLink to="/combinedtours" class="nav-link"
                >Toursit Regions</NuxtLink
              >
              <NuxtLink to="/cuisine" class="nav-link"
                >Azerbaijan Cuisines</NuxtLink
              >
              <NuxtLink to="/events" class="nav-link"
                >Events & Festivals</NuxtLink
              >
              <NuxtLink to="/unesco-heritage-list" class="nav-link"
                >UNESCO Heritage Sites</NuxtLink
              >
            </div>
          </div>

          <div class="dropdown">
            <NuxtLink to="/" class="nav-link">Tours</NuxtLink>
            <div class="dropdown-content-tours">
              <NuxtLink to="/bakuOutskirts" class="nav-link"
                >Baku and Outskirts</NuxtLink
              >
              <!-- <NuxtLink to="/culturalTours" class="nav-link"
                >Cultural and Heritage</NuxtLink
              > -->
              <div class="dropdown special-interest-dropdown">
                <NuxtLink to="/specialinteresttours" class="nav-link"
                  >Special Interest Tours ></NuxtLink
                >
                <div class="dropdown-content-special-interest">
                  <NuxtLink to="/culturalTours" class="nav-link"
                    >Cultural and Heritage</NuxtLink
                  >
                  <NuxtLink to="/etnoTours" class="nav-link"
                    >Etnographical Tours</NuxtLink
                  >
                </div>
              </div>
              <NuxtLink to="/combinedtours" class="nav-link"
                >Combined Tours</NuxtLink
              >
              <!-- <NuxtLink to="/etnoTours" class="nav-link"
                >Etnographical Tours</NuxtLink
              > -->
            </div>
          </div>

          <div class="dropdown">
            <NuxtLink to="/bakuOutskirts" class="nav-link"
              >Our Services</NuxtLink
            >
            <div class="dropdown-content-services">
              <NuxtLink to="/museums" class="nav-link">Museums</NuxtLink>
              <NuxtLink to="/restaurants" class="nav-link"
                >Restaurants</NuxtLink
              >
              <NuxtLink to="/hotels" class="nav-link">Hotels</NuxtLink>
              <NuxtLink to="/vehiclefleet" class="nav-link"
                >Vehicle Fleet</NuxtLink
              >
            </div>
          </div>
          <NuxtLink to="/" class="nav-link">Photogallery</NuxtLink>
          <NuxtLink to="/luxury" class="nav-link">enc luxury</NuxtLink>
          <NuxtLink to="/" class="nav-link">Mice</NuxtLink>
        </div>
        <div class="w-1/5 md:w-52 lg:w-48 flex uppercase justify-between">
          <NuxtLink to="/aboutUs" class="nav-link">About Us</NuxtLink>
          <NuxtLink to="/contactUs" class="nav-link">Contact Us</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  watchEffect,
  getCurrentInstance,
} from "vue";

const { emit } = getCurrentInstance();

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = document.documentElement.scrollTop > 0;
  emit("scroll", scrolled.value);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navbarBackgroundColor = ref("rgba(199, 191, 191, 0.5)");

watchEffect(() => {
  navbarBackgroundColor.value = scrolled.value
    ? "rgba(0, 0, 0, 1)"
    : "rgba(0, 0, 0, 0.5)";
});
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}

.nav-link:hover {
  border-bottom: 1px solid black;
  border-color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content-aze {
  display: none;
  position: absolute;
  width: 250%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  flex-direction: column;
}

.dropdown-content-services {
  display: none;
  position: absolute;
  width: 210%;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  border-radius: 10px;
  z-index: 1;
  flex-direction: column;
}

.dropdown-content-tours {
  display: none;
  position: absolute;
  width: 440%;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  border-radius: 10px;
  z-index: 1;
  flex-direction: column;
}

.dropdown-content-aze .nav-link,
.dropdown-content-services .nav-link,
.dropdown-content-tours .nav-link {
  display: block;
  margin: 10px;
}

.dropdown:hover .dropdown-content-aze,
.dropdown:hover .dropdown-content-services,
.dropdown:hover .dropdown-content-tours {
  display: flex;
}

.special-interest-dropdown {
  display: flex;
  align-items: center;
}

.dropdown-content-special-interest {
  display: none;
  position: absolute;
  width: 120%;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  z-index: 1;
  flex-direction: column;
  margin-top: 65px;
  margin-left: 229px;
}

.dropdown-content-special-interest .nav-link {
  display: block;
  margin: 10px;
}

.special-interest-dropdown:hover .dropdown-content-special-interest {
  display: flex;
}
</style>
