import * as React from 'react';
import App from './index';
import { shallow } from 'enzyme';

test('<App />', () => {
    const wrapper = shallow(<App message={'Test'} />);
    expect(wrapper).toBeTruthy();
    const messageEl = wrapper.find('.message').at(0);
    expect(messageEl.text()).toEqual('Test');
});
