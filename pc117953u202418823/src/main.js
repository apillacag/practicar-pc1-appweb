import {createApp} from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./i18n.js";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {Button, Card, Listbox, SelectButton, Toast, Toolbar} from "primevue";

/**
 * Application composition root.
 *
 * @summary Specifies the main entry point of the Vue application, configuring
 * global plugins and PrimeVue components, and mounting the app to the DOM.
 * @author Andy Pillaca Gonzales
 */

const primeUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;

createApp(App)
    .use(i18n)
    .use(PrimeVue, {ripple: true, theme: {preset: Material}, license: primeUiLicenseKey})
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-listbox', Listbox)
    .component('pv-toast', Toast)
    .mount('#app')
