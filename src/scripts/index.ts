/* eslint-disable import/first */

import './common/initializer';
import Vue from 'vue';

import '../styles/index.css';
import App from './containers/App.vue';

const mountPointSelector = '#mount-point';
window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(App),
  }).$mount(mountPointSelector);
});
