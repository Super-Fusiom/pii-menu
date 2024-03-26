<script setup lang="ts">
import SafetyScreen from "../components/SafetyScreen.vue";
</script>

<script lang="ts">
export default {
  methods: {
    goToProjects() {
      this.$router.push("/projects");
    },
  },
};
</script>

<template>
  <SafetyScreen />
</template>
