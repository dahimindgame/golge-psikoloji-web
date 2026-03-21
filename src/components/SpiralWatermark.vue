<template>
  <div class="spiral-watermark" :class="{ 'is-compact': compact }" aria-hidden="true">
    <img :src="logoSrc" alt="" />
  </div>
</template>

<script setup>
import logoSrc from '/brand/logo-mark.svg'

defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.spiral-watermark {
  position: absolute;
  right: -140px;
  top: 80px;
  width: clamp(220px, 28vw, 520px);
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}

.spiral-watermark img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .spiral-watermark {
    width: clamp(160px, 45vw, 300px);
    right: -60px;
    top: 20px;
    opacity: 0.04;
  }
}

@media (max-width: 480px) {
  .spiral-watermark {
    display: none;
  }
}
</style>
