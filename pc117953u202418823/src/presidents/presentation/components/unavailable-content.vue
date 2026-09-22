<script setup lang="js">
import {useI18n} from "vue-i18n";

/**
 * Presentation component for displaying error messages or fallback content.
 *
 * @summary Rendered when no presidents are available or an error occurs while
 * fetching data from the presidents provider.
 * @author Andy Pillaca Gonzales
 */

/**
 * Properties for the UnavailableContent component.
 *
 * @typedef {Object} UnavailableContentProps
 * @property {Array<string>} errors - A list of error message strings to display.
 */

const {t} = useI18n();

/** @type {UnavailableContentProps} */
const {errors} = defineProps({errors: {type: Array, default: () => []}});
</script>

<template>
  <div class="flex flex-column align-items-center justify-content-center mt-8 text-color-secondary" role="alert">
    <i class="pi pi-exclamation-circle text-6xl mb-4" aria-hidden="true"/>
    <div><h4>{{ t('unavailable-presidents') }}</h4></div>
    <div v-for="error in errors" :key="error" class="mt-2">
      <h6>{{ error }}</h6>
    </div>
  </div>
</template>

<style scoped>
</style>
