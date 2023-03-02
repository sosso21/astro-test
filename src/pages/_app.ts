import type { App } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default (app: App) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  });

  app.use(vuetify);
};
