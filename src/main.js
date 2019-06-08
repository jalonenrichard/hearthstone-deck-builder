import Vue from "vue";
import App from "./App.vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import IonicVue from "@ionic/vue";
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(IonicVue);
new Vue({
  el: "#app",
  render: h => h(App)
});
