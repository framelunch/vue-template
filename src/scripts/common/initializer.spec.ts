import { getBrowserClassPrefix } from './initializer';

const userAgents = {
  pc: {
    chrome:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3347.0 Safari/537.36',
    firefox: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0',
    safari:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15 ',
    ie11: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
    ie10: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
    ie9: 'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)',
    ie8: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
    ie7: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
    ie6: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',
  },
  sp: {
    ios9:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E188a Safari/601.1',
    ios10:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1',
    ios10_3:
      'Mozilla/5.0 (iPad; CPU OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1',
    ios11:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    android4_2:
      'Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; GT-N5110 Build/JDQ39) AppleWebKit/537.16 (KHTML, like Gecko) Version/4.0 Safari/537.16',
    android4_4:
      'Mozilla/5.0 (Linux; U; Android 4.4.4; En-us; D2212 Build/18.5.B.0.26) AppleWebKit/534.30 (KHTML, Like Gecko) Version/4.0 Safari/534.30',
    androidChrome:
      'Mozilla/5.0 (Linux; Android 8.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.3 Chrome/61.0.3163.81 Mobile Safari/537.36',
  },
};

describe('initializer', () => {
  describe('getBrowserClassPrefix', () => {
    describe('pc', () => {
      it('jsdom', () => {
        const { userAgent } = navigator;
        expect(getBrowserClassPrefix(userAgent)).toEqual('');
      });

      it('chrome', () => {
        const userAgent = userAgents.pc.chrome;
        expect(getBrowserClassPrefix(userAgent)).toEqual('');
      });

      it('firefox', () => {
        const userAgent = userAgents.pc.firefox;
        expect(getBrowserClassPrefix(userAgent)).toEqual('');
      });

      it('safari', () => {
        const userAgent = userAgents.pc.safari;
        expect(getBrowserClassPrefix(userAgent)).toEqual('');
      });

      it('ie11', () => {
        const userAgent = userAgents.pc.ie11;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ie -ie--11');
      });

      it('ie10', () => {
        const userAgent = userAgents.pc.ie10;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ie -ie--10 -ie--not-supported');
      });

      it('ie9', () => {
        const userAgent = userAgents.pc.ie9;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ie -ie--9 -ie--not-supported');
      });

      it('ie8', () => {
        const userAgent = userAgents.pc.ie8;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ie -ie--8 -ie--not-supported');
      });

      it('ie7', () => {
        const userAgent = userAgents.pc.ie7;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ie -ie--7 -ie--not-supported');
      });

      it('ie6', () => {
        const userAgent = userAgents.pc.ie6;
        expect(getBrowserClassPrefix(userAgent)).toEqual('');
      });
    });

    describe('sp', () => {
      it('ios11', () => {
        const userAgent = userAgents.sp.ios11;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ios -ios--play-video -ios--grid-layout');
      });

      it('ios10.3', () => {
        const userAgent = userAgents.sp.ios10_3;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ios -ios--play-video -ios--grid-layout');
      });

      it('ios10', () => {
        const userAgent = userAgents.sp.ios10;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ios -ios--play-video');
      });

      it('ios9', () => {
        const userAgent = userAgents.sp.ios9;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -ios');
      });

      it('Android Chrome', () => {
        const userAgent = userAgents.sp.androidChrome;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -android');
      });

      it('Android 4.4.4', () => {
        const userAgent = userAgents.sp.android4_4;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -android');
      });

      it('Android 4.2.2', () => {
        const userAgent = userAgents.sp.android4_2;
        expect(getBrowserClassPrefix(userAgent)).toEqual(' -android');
      });
    });
  });
});
