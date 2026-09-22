<script setup>
import Layout from "./shared/presentation/components/layout.vue";

/**
 * Presentation shell component.
 *
 * @summary Hosts the application layout and the global toast host, keeping
 * bootstrapping concerns out of feature components.
 * @author Andy Pillaca Gonzales
 */
</script>

<template>
  <pv-toast/>
  <layout/>
</template>

<style scoped>
</style>
