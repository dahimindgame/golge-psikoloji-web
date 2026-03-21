<template>
  <div class="brand-motif" :style="{ '--motif-size': sizeStyle }" aria-hidden="true">
    <img :src="logoSrc" alt="" class="brand-motif__image" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import logoSrc from '../assets/brand/golge_spiral_transparent.png'

const props = defineProps({
  size: {
    type: [Number, String],
    default: 260,
  },
})

const sizeStyle = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size))
</script>

<style scoped>
.brand-motif {
  position: absolute;
  width: var(--motif-size);
  height: var(--motif-size);
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}

.brand-motif__image {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
