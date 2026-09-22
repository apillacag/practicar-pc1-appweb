<script setup lang="js">
import {useI18n} from 'vue-i18n';

/**
 * Presentation component for switching the application's locale.
 *
 * @summary Uses the vue-i18n instance to display and update the current
 * language between English (en) and Spanish (es).
 * @author Andy Pillaca Gonzales
 */
const {locale, availableLocales, t} = useI18n();
</script>

<template>
  <pv-select-button
      v-model="locale"
      :options="availableLocales"
      :aria-label="t('language-switcher.label')"
  >
    <template #option="slotProps">
      <span>{{ slotProps.option.toUpperCase() }}</span>
    </template>
  </pv-select-button>
</template>

<style scoped>
</style>
