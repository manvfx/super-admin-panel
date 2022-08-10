import { createApp } from "vue";
import App from "./app.vue";
const app = createApp(App);
import "./style.css";

import { router } from "./router";
app.use(router);

app.mount("#app");
