<script setup lang="js">
import {useI18n} from "vue-i18n";

/**
 * Presentation component for the application footer.
 *
 * @summary Displays copyright information and developer attribution,
 * and supports localization.
 * @author Andy Pillaca Gonzales
 */
const {t} = useI18n();
</script>

<template>
  <footer class="grid mt-4 p-4 justify-content-center bg-primary text-primary-contrast text-center">
    <div class="col-12 flex flex-column align-items-center">
      <p>{{ t('footer.copyright') }}</p>
    </div>
    <div class="col-12 flex flex-column align-items-center">
      <p>{{ t('footer.developed-by') }} u202418823 - Andy Pillaca Gonzales</p>
    </div>
  </footer>
</template>

<style scoped>
</style>
