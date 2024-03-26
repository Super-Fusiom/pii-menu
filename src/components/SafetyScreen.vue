<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTriangleExclamation,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
</script>

<script lang="ts">
export default {
  data() {
    return {
      showElement: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showElement = true;
    }, 3000);
  },
};
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
      <h2>
        THIS IS A PARODY AND TO SHOW ALL OF MY PROJECTS<br />I AM ALSO NOT A
        LAWYER<br />ENJOY!
      </h2>
    </article>
    <footer v-show="showElement">
      PRESS <FontAwesomeIcon :icon="faComputerMouse" /> TO CONTINUE
    </footer>
  </main>
</template>

<style scoped lang="scss">
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

footer {
  animation: blink 1s linear infinite;
  font-size: 3rem;
  margin-top: 4rem;
  padding-bottom: 20rem;
}

* {
  font-family: Verdana, sans-serif;
  color: #ffffff;
  background-color: #000000;
}

main {
  display: flex;
  justify-self: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 50rem;
}

main > * {
  text-align: center;
}

main > header > h1 {
  font-size: 6rem;
}
main > article > h2 {
  font-size: 3rem;
}
</style>
