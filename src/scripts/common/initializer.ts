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
export function getBrowserClassPrefix(userAgent: string) {
  if (/iPhone|iPod|iPad/.test(userAgent)) {
    let result = ' -ios';

    const matcher = userAgent.match(/OS (\d{1,2}_\d)/);

    if (!matcher) {
      return result;
    }

    const [major, minor] = matcher[1].split('_').map(num => parseInt(num, 10));

    if (major < 10) {
      return result;
    }

    result += ' -ios--play-video';

    if (minor < 3 && major < 11) {
      return result;
    }

    return `${result} -ios--grid-layout`;
  } else if (/Android/.test(userAgent)) {
    return ' -android';
  } else if (/rv:11\.0/.test(userAgent)) {
    return ' -ie -ie--11';
  } else if (/MSIE 10\.0/.test(userAgent)) {
    return ' -ie -ie--10 -ie--not-supported';
  } else if (/MSIE 9\.0/.test(userAgent)) {
    return ' -ie -ie--9 -ie--not-supported';
  } else if (/MSIE 8\.0/.test(userAgent)) {
    return ' -ie -ie--8 -ie--not-supported';
  } else if (/MSIE 7\.0/.test(userAgent)) {
    return ' -ie -ie--7 -ie--not-supported';
  }

  return '';
}

const browserClassPrefix = getBrowserClassPrefix(navigator.userAgent);

if (browserClassPrefix) {
  document.body.className += browserClassPrefix;
}

console.log('Dev by', Configs.author);
