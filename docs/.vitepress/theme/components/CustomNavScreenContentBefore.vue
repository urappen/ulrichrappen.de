<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { lang } = useData()
</script>

<template>
  <div :class="$style.customnavscreencontentbefore" align="center">
<!--
    <br>
    <HeroImage />
    <br>
    <VPButton
      tag="a"
      size="medium"
      theme="brand"
      text="Visitenkarte"
      :href="withBase('/vcards/Dr_Ulrich_Rappen.vcf')"
      target="_blank"
      rel="noopener noreferrer"
    />
    <br>
    <br>
    <VPButton
      tag="a"
      size="medium"
      theme="alt"
      text="Telefon"
      href="tel:+491713280286"
      target="_blank"
      rel="noopener noreferrer"
    />
    <br>
    <br>
    <VPButton
      tag="a"
      size="medium"
      theme="alt"
      text="Email"
      href="mailto:mail@ulrichrappen.de"
      target="_blank"
      rel="noopener noreferrer"
    />
-->
  </div>
</template>

<style module lang="scss">
.customnavscreencontentbefore {
/*
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 40px;
  margin-bottom: 15px;
*/
}
</style>
