import './common/initializer';
import Vue from 'vue';

import '../styles/index.css';
import App from './containers/App.vue';

Vue.config.productionTip = false;

const mountPointSelector = '#mount-point';
window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(App),
  }).$mount(mountPointSelector);
});
