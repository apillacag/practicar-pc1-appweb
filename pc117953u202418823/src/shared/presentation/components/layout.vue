<script lang="js" setup>
import {computed, onMounted} from "vue";
import {useI18n} from "vue-i18n";
import {presidentsStore} from "@/presidents/application/presidents.store.js";
import {LogoDevApi} from "@/shared/infrastructure/logo-dev-api.js";
import PresidentList from "@/presidents/presentation/components/president-list.vue";
import UnavailableContent from "@/presidents/presentation/components/unavailable-content.vue";
import LanguageSwitcher from "./language-switcher.vue";
import FooterContent from "./footer-content.vue";

/**
 * Root presentation layout for the Wikipedia President Registry application.
 *
 * @summary Coordinates the display of the toolbar, the main president
 * registry content area, and the footer. Bridges the UI with the
 * presidentsStore application service.
 * @author Andy Pillaca Gonzales
 */

const {t} = useI18n();

const logoDevApi = new LogoDevApi();
const wikipediaDomain = import.meta.env.VITE_WIKIPEDIA_DOMAIN;

/** @type {import('vue').ComputedRef<string>} */
const wikipediaLogoUrl = computed(() => logoDevApi.getUrlToLogoForDomain(wikipediaDomain));

/** @type {import('vue').ComputedRef<import('@/presidents/domain/model/president.entity.js').President[]>} */
const presidents = computed(() => presidentsStore.presidents);
/** @type {import('vue').ComputedRef<string[]>} */
const errors = computed(() => presidentsStore.errors);

onMounted(() => {
  presidentsStore.loadPresidents();
});
</script>

<template>
  <div class="layout-container">
    <header class="sticky-header">
      <pv-toolbar role="banner">
        <template #start>
          <img :src="wikipediaLogoUrl" :alt="t('app-title')" class="app-logo mr-2"/>
          <span class="font-bold text-xl">{{ t('app-title') }}</span>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-toolbar>
    </header>
    <main class="content-padding" role="main">
      <h2>{{ t('president-registry') }}</h2>
      <president-list v-if="presidents.length" :presidents="presidents"/>
      <unavailable-content v-else :errors="errors"/>
    </main>
    <footer-content/>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.app-logo {
  height: 2rem;
  width: auto;
}

.content-padding {
  padding: 1rem;
  flex: 1;
}

@media screen and (min-width: 768px) {
  .content-padding {
    padding: 2rem;
  }
}
</style>
