import en from "./locales/en.json";
import es from "./locales/es.json";

import {createI18n} from "vue-i18n";

/**
 * Shared internationalization service used across presentation modules.
 *
 * @summary Configures vue-i18n with English as the default locale and
 * Spanish as an available alternative, per the application requirements.
 * @author Andy Pillaca Gonzales
 */
const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {en, es}
});

export default i18n;
