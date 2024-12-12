import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Import Vuetify styles
import * as components from "vuetify/components"; // Import Vuetify components
import * as directives from "vuetify/directives"; // Import Vuetify directives
import "@fortawesome/fontawesome-free/css/all.css"; // Import FontAwesome CSS

// Create the Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

// Create the Vue app instance
const app = createApp(App);

// Use Vuetify and the router
app.use(vuetify);
app.use(router);

// Mount the app
app.mount("#app");
