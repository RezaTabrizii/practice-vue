<template>
  <div class="wrapper">
    <template v-for="(item, index) in data" :key="index">
      <slot :item="item" :itemStyle="getItemStyle(index)"></slot>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: { type: Array, required: true },
  itemsWidth: { type: Number, required: true },
  delayDuration: { type: Number, required: false, default: 30 },
  scrollDirection: { type: String, required: false, default: "left" },
});

const scrollValue = `-${props.itemsWidth}px`;

const getItemStyle = (index: number) => {
  return `
    animation-delay: calc(${props.delayDuration}s / ${props.data.length} * (${props.data.length} - ${index + 1}) * -1);
        position: absolute;
        width: ${props.itemsWidth}px;
        ${props.scrollDirection}: max(calc(${props.itemsWidth}px * ${props.data.length}), 100%);
        animation-name: ${props.scrollDirection === "left" ? "scrollToLeft" : "scrollToRight"};
        animation-duration: ${props.delayDuration}s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;`;
};
</script>

<style>
.wrapper {
  width: 100%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
}

@keyframes scrollToLeft {
  to {
    left: v-bind(scrollValue);
  }
}

@keyframes scrollToRight {
  to {
    right: v-bind(scrollValue);
  }
}
</style>
