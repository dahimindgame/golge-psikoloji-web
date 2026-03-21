<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<script setup>
</script>

<style scoped>
.ui-container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .ui-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1200px) {
  .ui-container {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
</style>
