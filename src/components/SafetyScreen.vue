<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTriangleExclamation,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <main>
    <header>
      <h1>
        <FontAwesomeIcon :icon="faTriangleExclamation" />WARNING-HEALTH AND
        SAFETY
      </h1>
    </header>
    <article>
      <h3>THIS IS A PARODY AND TO SHOW ALL OF MY PROJECTS<br />ENJOY!</h3>
    </article>
    <footer>
      PRESS <FontAwesomeIcon :icon="faComputerMouse" /> TO CONTINUE
    </footer>
  </main>
</template>

<style scoped lang="scss">
* {
  font-family: Verdana, sans-serif;
  color: #ffffff;
  background-color: #000000;
}

main {
  display: flex;
  justify-self: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
}

main > * {
  text-align: center;
  font-size: 5rem;
}
main > * > h2 {
  text-align: center;
  font-size: 3rem;
}
</style>
