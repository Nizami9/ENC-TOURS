<template>
  <div
    class="p-2 text-white bg-gray-50 md:text-xs w-full lg:text-sm xl:text-sm transition"
    :style="{
      backgroundColor: navbarBackgroundColor,
      transition: 'background-color 0.5s ease',
    }"
  >
    <div class="flex">
      <div class="w-32 m-auto">
        <img
          src="@/assets/images/enclogo2.png"
          alt="ENC logo"
          class="w-16 m-auto align-middle items-center"
        />
      </div>
      <div class="flex justify-between w-full md:ml-0 md:mr-0 p-5">
        <div class="flex main-nav-custom uppercase justify-between w-1/2">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/" class="nav-link">Azerbaijan</NuxtLink>
          <NuxtLink to="/" class="nav-link">Tours</NuxtLink>
          <NuxtLink to="/bakuOutskirts" class="nav-link">Our Services</NuxtLink>
          <!-- 
          <div class="dropdown">
            <NuxtLink to="/" class="nav-link">Azerbaijan |</NuxtLink> -->
          <!-- <div class="dropdown-content-aze">
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
            </div> -->
          <!-- <div class="dropdown">
            <NuxtLink to="/" class="nav-link">Tours |</NuxtLink>
            <div class="dropdown-content-tours">
              <NuxtLink to="/bakuOutskirts" class="nav-link"
                >Baku and Outskirts</NuxtLink
              >
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
            </div>
          </div> -->

          <!-- <div class="dropdown">
            <NuxtLink to="/bakuOutskirts" class="nav-link"
              >Our Services |</NuxtLink
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
          </div> -->
          <NuxtLink to="/" class="nav-link">Photogallery</NuxtLink>
          <NuxtLink to="/luxury" class="nav-link">enc luxury</NuxtLink>
          <NuxtLink to="/" class="nav-link">Mice</NuxtLink>
        </div>
        <div class="w-1/5 notmain-nav-custom flex uppercase justify-between">
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
    ? "rgba(0, 0, 0, 0.8)"
    : "rgba(0, 0, 0, 0)";
});
</script>

<style scoped>
.nav-link {
  cursor: pointer;
  margin: auto;
  padding-right: 12px;
  border-right: 1px solid white;
}

.nav-link:hover {
  scale: 95%;
  transition: all 100ms;
}

/* .dropdown {
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
} */
/* 
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
} */

/* .dropdown:hover .dropdown-content-aze,
.dropdown:hover .dropdown-content-services,
.dropdown:hover .dropdown-content-tours {
  display: flex;
} */
/* 
.special-interest-dropdown {
  display: flex;
  align-items: center;
} */
/* 
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
} */
/* 
.dropdown-content-special-interest .nav-link {
  display: block;
  margin: 10px;
}

.special-interest-dropdown:hover .dropdown-content-special-interest {
  display: flex;
} */

.main-nav-custom {
  width: 100%;

  @media (min-width: 765px) and (max-width: 800px) {
    width: 70%;
    font-size: x-small;
    margin-left: 0%;
  }

  @media (min-width: 860px) and (max-width: 1060px) {
    width: 72%;
  }

  @media (min-width: 1061px) and (max-width: 1274px) {
    width: 65%;
  }

  @media (min-width: 1275px) and (max-width: 1480px) {
    width: 55%;
  }

  @media (min-width: 1480px) and (max-width: 2149px) {
    width: 45%;
  }

  @media (min-width: 2150px) {
    width: 30%;
  }
}

.notmain-nav-custom {
  @media (min-width: 600px) and (max-width: 800px) {
    width: 20%;
    font-size: x-small;
  }
  @media (min-width: 800px) and (max-width: 1060px) {
    width: 20%;
  }

  @media (min-width: 1061px) and (max-width: 1274px) {
    width: 20%;
  }

  @media (min-width: 1275px) and (max-width: 1535px) {
    width: 20%;
  }

  @media (min-width: 1536px) {
    width: 14%;
  }
}
</style>
