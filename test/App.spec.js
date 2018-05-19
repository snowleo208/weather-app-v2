import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'

import App from '../client/components/App';
import Weather from '../client/components/Weather';

describe('<App/>', () => {
    const wrapper = mount(<App/>);
    
    it('renders correctly', () => {
        expect(wrapper.find(App).length).to.equal(1);
    });

    it('renders Weather child component correctly', () => {
		expect(wrapper.find(Weather).length).to.equal(1);
	});
});