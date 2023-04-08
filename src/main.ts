import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import { createPinia } from 'pinia';
import '@/style.css';
import '@config/injectFluentDesignSystem';

import App from '@/App.vue';

const pinia = createPinia();

createApp(App).use(plugin, defaultConfig).use(pinia).mount('#app');
