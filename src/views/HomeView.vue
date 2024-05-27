<template>
  <main class="pt-16 h-screen w-screen bg-slate-200">
    <section id="marquee" class="bg-slate-300 py-8">
      <AppMarquee class="h-28 flex items-center" v-slot="slotProps" :data="data" :itemsWidth="400">
        <div
          class="h-24 rounded-md border-4 border-gray-800 p-2 flex justify-center items-center"
          :style="slotProps.itemStyle"
        >
          {{ slotProps.item }}
        </div>
      </AppMarquee>

      <AppMarquee
        class="h-28 flex items-center"
        v-slot="slotProps"
        :data="data"
        :itemsWidth="400"
        :scrollDirection="'right'"
      >
        <div
          class="h-24 rounded-md border-4 border-gray-800 p-2 flex justify-center items-center"
          :style="slotProps.itemStyle"
        >
          {{ slotProps.item }}
        </div>
      </AppMarquee>
      <AppMarquee class="h-28 flex items-center" v-slot="slotProps" :data="data" :itemsWidth="400" :delayDuration="25">
        <div
          class="h-24 rounded-md border-4 border-gray-800 p-2 flex justify-center items-center"
          :style="slotProps.itemStyle"
        >
          {{ slotProps.item }}
        </div>
      </AppMarquee>
    </section>
  </main>
</template>

<script lang="ts" setup>
import AppMarquee from "../components/AppMarquee.vue";

const data = [1, 2, 3, 4, 5, 6, 7, 8];
</script>
