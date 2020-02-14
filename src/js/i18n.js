import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { messages } from './i18n-messages.js';
import { dateTimeFormats  } from './i18n-dateTimeFormats.js';
import { numberFormats  } from './i18n-numberFormats.js';
//

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'id',
    messages,
    dateTimeFormats,
    numberFormats
});

export { i18n }
