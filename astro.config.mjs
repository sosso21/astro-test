import react from "@astrojs/react";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [react(), vue({ appEntrypoint: "/src/pages/_app" })],

  vite: {
    ssr: {
      noExternal: ["vuetify", "@ui/**/*"],
    },
  },
});
