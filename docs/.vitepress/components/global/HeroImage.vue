<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { isDark } = useData()
</script>

<template>
  <div :class="$style.heroimage">
    <img :src="isDark == true ? withBase('/images/hero.dark.svg') : withBase('/images/hero.light.svg')" alt="Dr. Ulrich Rappen" decoding="async" loading="lazy">
  </div>
</template>

<style module lang="scss">
.heroimage {
}
</style>
