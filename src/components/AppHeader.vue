<template>
  <header
    class="fixed w-full bg-black text-slate-100 transition-all duration-500 ease-in-out overflow-hidden z-10 lg:py-4 lg:flex lg:justify-around lg:overflow-visible lg:max-h-16"
    :class="`${header_class}`"
  >
    <button
      class="group border-2 rounded-sm border-blue-600 p-1 m-0 absolute left-4 top-3.5 transition-all hover:bg-blue-300 hover:bg-opacity-40 lg:hidden"
      type="button"
      @click="toggleNavbar()"
    >
      <svg
        class="size-6 fill-blue-600 group-hover:fill-white"
        :class="btn_toggle_class"
      >
        <use :xlink:href="btn_toggle_xlink_href"></use>
      </svg>
    </button>

    <div class="text-center">
      <a
        class="text-2xl uppercase tracking-widest lg:text-3xl"
        style="line-height: 1"
        href="index.html"
        >practice</a
      >
    </div>

    <div class="lg:flex lg:justify-center lg:items-center px-3">
      <ul
        class="font-poppins font-semibold text-lg text-slate-100 bg-black border-t-2 border-gray-700 mt-4 lg:bg-transparent lg:flex lg:space-x-5 lg:mt-0 lg:border-none lg:text-base lg:font-normal"
      >
        <li
          class="flex hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
          @click.prevent="setActiveSection()"
        >
          <router-link
            :to="{ name: 'home', hash: '#home' }"
            :class="[
              {
                'link-active':
                  activeSection === '/#home' || activeSection === '/',
              },
            ]"
            class="py-3 px-3 transition-all duration-300"
            >HOME</router-link
          >
        </li>
        <li
          class="flex hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
          @click.prevent="setActiveSection()"
        >
          <router-link
            :to="{ name: 'home', hash: '#service' }"
            :class="[{ 'link-active': activeSection === '/#service' }]"
            class="py-3 px-3 transition-all duration-300"
            >SERVICE</router-link
          >
        </li>
        <li
          class="flex hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
          @click.prevent="setActiveSection()"
        >
          <router-link
            :to="{ name: 'home', hash: '#featured-cars' }"
            :class="[{ 'link-active': activeSection === '/#featured-cars' }]"
            class="py-3 px-3 transition-all duration-300"
            >FEATURED CARS</router-link
          >
        </li>
        <li
          class="flex hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
          @click.prevent="setActiveSection()"
        >
          <router-link
            :to="{ name: 'home', hash: '#new-cars' }"
            :class="[{ 'link-active': activeSection === '/#new-cars' }]"
            class="py-3 px-3 transition-all duration-300"
            >NEW CARS</router-link
          >
        </li>
        <li
          class="flex hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
          @click.prevent="setActiveSection()"
        >
          <router-link
            :to="{ name: 'home', hash: '#brands' }"
            :class="[{ 'link-active': activeSection === '/#brands' }]"
            class="py-3 px-3 transition-all duration-300"
            >BRANDS</router-link
          >
        </li>
        <li
          class="flex hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
          @click.prevent="setActiveSection()"
        >
          <router-link
            :to="{ name: 'home', hash: '#contact' }"
            :class="[{ 'link-active': activeSection === '/#contact' }]"
            class="py-3 px-3 transition-all duration-300"
            >CONTACT</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const is_navbar_closed = ref<boolean>(true);

const header_class = computed(() => {
  return is_navbar_closed.value === true ? "h-16 pt-4" : "h-96 pt-4";
});

const btn_toggle_class = computed(() => {
  return is_navbar_closed.value === true ? "lnr-men" : "lnr-cross";
});

const btn_toggle_xlink_href = computed(() => {
  return is_navbar_closed.value === true ? "#lnr-menu" : "#lnr-cross";
});

function toggleNavbar() {
  is_navbar_closed.value = !is_navbar_closed.value;
}

const activeSection = ref<string>("/");
const isManualScrolling = ref<boolean>(true);
function setActiveSection() {
  isManualScrolling.value = false;
  activeSection.value = route.fullPath;
  setTimeout(() => {
    isManualScrolling.value = true;
  }, 1000);
}

const handleResizeAndScroll = () => {
  if (!isManualScrolling.value) return;
  const sections = [
    "home",
    "service",
    "featured-cars",
    "new-cars",
    "brands",
    "contact",
  ];
  const currentSection = sections.find((section) => {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 500 && rect.bottom > 0;
    }
    return false;
  });

  if (currentSection) {
    activeSection.value = `/#${currentSection}`;
  }
};

onMounted(() => {
  handleResizeAndScroll();

  window.addEventListener("scroll", handleResizeAndScroll);
  window.addEventListener("resize", handleResizeAndScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleResizeAndScroll);
  window.removeEventListener("resize", handleResizeAndScroll);
});
</script>
