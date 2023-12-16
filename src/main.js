import { createApp } from 'vue';
import '../css/main.css';
import App from './App.vue';
import router from './router';
import Aos from 'aos';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './assets/aos/aos.css';
import baseurl from './server/baseurl';
import util from './server/util';
const app = createApp(App);

app.config.globalProperties.$util = util;
app.config.globalProperties.$baseurl = baseurl;
app.use(router);
app.mount('#app');
Aos.init();
