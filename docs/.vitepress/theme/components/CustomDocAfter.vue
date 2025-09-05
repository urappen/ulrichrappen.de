<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { lang } = useData()
</script>

<template>
  <div :class="$style.customdocafter" align="center">
<!--
    <br>
    <hr>
    <br>
    <Address />
-->
  </div>
</template>

<style module lang="scss">
.customdocafter {
}
</style>
