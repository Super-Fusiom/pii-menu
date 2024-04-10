<script lang="ts">
export default {
  data() {
      return {
        showMenu: false
      }
  },
  mounted() {
      setTimeout(() => {
        this.showMenu = true;
      }, 500)
  },
}
</script>


<template>
  <main v-show="showMenu">
    <header>
      <div><h3>test</h3></div>
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
}
header > div {
  border-color: grey;
  border-radius: 10%;
  flex: 1;
}
</style>
