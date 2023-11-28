import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import uviewPlus from "uview-plus";
import App from "./App.vue";
import "./styles/index.scss";
import IconComponents from '@/components/Icon/index.vue'
export function createApp() {
  const pinia = createPinia();
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(uviewPlus);
  app.component('Icon', IconComponents)
  return {
    app,
    pinia,
  };
}
