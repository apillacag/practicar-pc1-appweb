<script lang="js" setup>
import {useI18n} from "vue-i18n";
import {useToast} from "primevue/usetoast";
import {President} from "@/presidents/domain/model/president.entity.js";

/**
 * Presentation component for rendering a single president registry card.
 *
 * @summary Displays a president's portrait, term, vice presidents and additional
 * details, and handles the "more information" and "share" interactions.
 * @author Andy Pillaca Gonzales
 */

/**
 * Properties for the PresidentItem component.
 *
 * @typedef {Object} PresidentItemProps
 * @property {President} president - The president entity to display.
 */

/** @type {PresidentItemProps} */
const {president} = defineProps({president: {type: President, required: true}});

const {t} = useI18n();
const toast = useToast();

/**
 * Shares the president's information using the Web Share API when available;
 * otherwise copies the Wikipedia URL to the clipboard.
 *
 * @returns {Promise<void>}
 */
const shareInformation = async () => {
  const shareData = {title: president.name, text: president.yearsInOffice, url: president.getWikipediaUrl()};
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error('Error sharing president information:', err);
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareData.url);
      toast.add({severity: 'success', summary: t('president.share-information'), detail: t('president.share-copied'), life: 3000});
    } catch (err) {
      console.error('Failed to copy the president URL:', err);
    }
  }
};
</script>

<template>
  <pv-card class="m-2 president-card">
    <template #header>
      <img :alt="t('president.photo-alt', {name: president.name})" :src="president.photo.toString()" class="image-fit"/>
    </template>
    <template #title>
      <p class="flex align-content-start flex-wrap">{{ president.name }}</p>
    </template>
    <template #subtitle>
      <p class="flex align-content-start flex-wrap">{{ president.yearsInOffice }}</p>
    </template>
    <template #content>
      <div class="flex flex-column gap-3">
        <p class="flex align-content-start flex-wrap">
          <span class="font-medium">{{ t('president.presidential-order') }}:</span>&nbsp;{{ president.ordinal }}
        </p>
        <div>
          <p class="font-medium mb-2">{{ t('president.vice-presidents') }}</p>
          <pv-listbox
              v-if="president.hasVicePresidents()"
              :options="president.vicePresidents"
              :aria-label="t('president.vice-presidents')"
              list-style="max-height: 10rem" />
          <p v-else class="text-color-secondary text-sm">{{ t('president.no-vice-presidents') }}</p>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-between align-items-center">
        <pv-button
            as="a"
            :href="president.getWikipediaUrl()"
            target="_blank"
            rel="noopener"
            :aria-label="t('president.more-information')"
            :label="t('president.more-information')"
            link
            class="p-0" />
        <pv-button
            :aria-label="t('president.share-information')"
            :label="t('president.share-information')"
            text
            size="small"
            icon="pi pi-share-alt"
            @click="shareInformation" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.president-card {
  height: 100%;
}

.image-fit {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  object-position: top;
}
</style>
