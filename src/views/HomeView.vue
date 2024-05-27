<template>
  <main class="pt-16 h-screen w-screen bg-slate-200">
    <section class="bg-slate-300 py-8">
      <AppMarquee
        class="h-64 py-4"
        v-slot="slotProps"
        :data="data"
        :itemsWidth="500"
      >
        <div class="h-64 rounded-md bg-slate-900" :style="slotProps.itemStyle">
          {{ slotProps.item }}
        </div>
      </AppMarquee>

      <AppMarquee
        class="h-64 py-4"
        v-slot="slotProps"
        :data="data"
        :itemsWidth="500"
        :scrollDirection="'right'"
      >
        <div class="h-64 rounded-md bg-slate-900" :style="slotProps.itemStyle">
          {{ slotProps.item }}
        </div>
      </AppMarquee>
    </section>
  </main>
</template>

<script lang="ts" setup>
import AppMarquee from "../components/AppMarquee.vue";

const data = [1, 2, 3, 4, 5];
</script>
