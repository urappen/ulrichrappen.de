<template>
  <div :class="$style.address">
    <address>
      Dr. Ulrich Rappen<br>
      Mitteläckerring 39<br>
      76532 Baden-Baden<br>
      Telefon <a href="tel:+491713280286" target="_blank" rel="noopener noreferrer">0171 - 3280286</a><br>
      Email <a href="mailto:mail@ulrichrappen.de" target="_blank" rel="noopener noreferrer">mail@ulrichrappen.de</a>
    </address>
  </div>
</template>

<style module lang="scss">
.address {
  address {
    font-style: normal;

    a {
      text-decoration: underline;
    }
  }
}
</style>
