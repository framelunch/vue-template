/**
 * アプリ内で一度だけ読み込むファイルをここに書く
 * e.g. polyfill, RxJS
 */
import 'babel-polyfill';
import Vue from 'vue';

import * as Configs from './config';

/*
 * add vue configs
 */
Vue.config.productionTip = false;

/*
 * add browser prefix
 */
const { userAgent } = navigator;

if (/iPhone|iPod|iPad/.test(userAgent)) {
  document.body.className += ' -ios';

  const matcher = userAgent.match(/OS (\d{1,2}_\d)/);

  if (matcher) {
    const [major, minor] = matcher[1].split('_').map(num => parseInt(num, 10));

    if (major >= 10) {
      document.body.className += ' -ios--play-video';

      if (minor >= 3) {
        document.body.className += ' -ios--grid-layout';
      }
    }
  }
} else if (/Android/.test(userAgent)) {
  document.body.className += ' -android';
} else if (/rv:11\.0/.test(userAgent)) {
  document.body.className += ' -ie -ie--11';
} else if (/MSIE 10\.0/.test(userAgent)) {
  document.body.className += ' -ie -ie--10 -ie--not-supported';
} else if (/MSIE 9\.0/.test(userAgent)) {
  document.body.className += ' -ie -ie--9 -ie--not-supported';
} else if (/MSIE 8\.0/.test(userAgent)) {
  document.body.className += ' -ie -ie--8 -ie--not-supported';
} else if (/MSIE 7\.0/.test(userAgent)) {
  document.body.className += ' -ie -ie--7 -ie--not-supported';
}

console.log('Dev by', Configs.author);
