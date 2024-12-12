// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@fortawesome/fontawesome-free/css/all.css";

// Vuetify
import { createVuetify } from "vuetify";

vuetify.use(Vuetify);

const vuetify = createVuetify({
  icons: {
    defaultSet: "fa", // Use FontAwesome as the default icon set
    sets: {
      fa: {
        component: "i", // Render <i> elements for FontAwesome icons
      },
    },
  },
});
