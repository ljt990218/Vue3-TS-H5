import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import i18n from './lang/index'

import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "normalize.css";
import "./utils/rem";
import '@/assets/css/reset.css'
import '@/assets/css/index.css'

createApp(App).use(Vant).use(router).use(store).use(i18n).mount("#app");
