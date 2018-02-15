/* eslint-disable import/no-extraneous-dependencies */
import { shallow } from '@vue/test-utils';

import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg', () => {
    const msg = 'test message';
    const wrapper = shallow(HelloWorld, {
      propsData: { msg },
    });

    expect(wrapper.text()).toEqual(`Msg: ${msg}`);
  });
});
