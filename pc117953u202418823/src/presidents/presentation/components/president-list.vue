<script setup lang="js">
import PresidentItem from "./president-item.vue";
import {President} from "@/presidents/domain/model/president.entity.js";

/**
 * Presentation component for rendering the president registry as a responsive grid.
 *
 * @summary Iterates over an array of President entities and lays them out
 * two cards per row on medium+ viewports, one per row on small viewports.
 * @author Andy Pillaca Gonzales
 */

/**
 * Properties for the PresidentList component.
 *
 * @typedef {Object} PresidentListProps
 * @property {President[]} presidents - The presidents to display.
 */
const {presidents} = defineProps({presidents: {type: Array, required: true}});
</script>

<template>
  <div class="grid" role="list">
    <div v-for="president in presidents" :key="president.name + president.yearsInOffice" class="col-12 md:col-6" role="listitem">
      <president-item :president="president"/>
    </div>
  </div>
</template>

<style scoped>
</style>
