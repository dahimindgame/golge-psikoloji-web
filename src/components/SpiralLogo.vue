<template>
  <div class="spiral-logo" :style="{ '--logo-size': sizeStyle }" aria-hidden="true">
    <img class="spiral-logo__img" src="/brand/logo-mark.svg" alt="" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: [Number, String],
    default: 40,
  },
})

const sizeStyle = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size))
</script>

<style scoped>
.spiral-logo {
  width: var(--logo-size);
  height: var(--logo-size);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.spiral-logo__img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
