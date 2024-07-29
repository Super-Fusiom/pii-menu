<script lang="ts">
export default {
  data() {
    return {
      showMenu: { opacity: 0, transition: "" },
    };
  },
  mounted() {
    setTimeout(() => {
      this.showMenu = { opacity: 1, transition: "opacity 0.5s ease-in-out" };
    }, 500);
  },
};
</script>

<template>
  <main v-bind:style="showMenu">
    <header>
      <div><p>Github</p></div>
    </header>
  </main>
  <footer></footer>
</template>

<style scoped lang="scss">
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
header > div {
  border-color: grey;
  border-radius: 10%;
  flex: 1;
}
</style>
