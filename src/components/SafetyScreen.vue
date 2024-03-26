<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <header>
    <FontAwesomeIcon :icon="faTriangleExclamation" />
    <h1>Warning</h1>
  </header>
</template>

<style scoped lang="scss">
* {
  color: #ffffff;
  background-color: #000000;
  margin: 0;
}
</style>
