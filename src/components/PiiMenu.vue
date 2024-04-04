<script lang="ts">
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showMenu = true;
    }, 2000);
  },
};
</script>

<template>
  <main class="fade_in" v-show="showMenu">
    <header>
      <h2>Projects</h2>
    </header>
  </main>
  <footer></footer>
</template>

<style scoped lang="scss">
header {
  display: flex;
}
header > * {
  flex: 1;
}
.fade_in {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
</style>
