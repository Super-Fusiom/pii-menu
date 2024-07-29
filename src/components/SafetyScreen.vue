<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTriangleExclamation,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
</script>

<script lang="ts">
export default {
  methods: {
    handleClick() {
      if (this.isFadingEnable) {
        this.isFading = true;
        setTimeout(() => {
          this.$router.push({ path: "/home" });
        }, 3000);
      }
    },
  },
  data() {
    return {
      showElement: false,
      isFading: false,
      isFadingEnable: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showElement = true;
      this.isFadingEnable = true;
    }, 3000);
  },
};
</script>

<template>
  <main @click="handleClick" v-bind:class="{ fade_out: isFading }">
    <header>
      <h1>
        <FontAwesomeIcon
          style="color: yellow"
          :icon="faTriangleExclamation"
        />WARNING-HEALTH AND SAFETY
      </h1>
    </header>
    <article>
      <h2>
        THIS IS A PARODY AND TO SHOW ALL OF MY PROJECTS<br />I AM ALSO NOT A
        LAWYER<br />ENJOY!
      </h2>
      <h3>
        Repo is at
        <a href="https://github.com/Super-Fusiom/pii-menu"
          >https://github.com/Super-Fusiom/pii-menu</a
        >
      </h3>
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
  margin-top: 3rem;
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

.fade_out {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
</style>
