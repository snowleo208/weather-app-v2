import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'

import sample from './weather.json'
import location from './location.json'

import TriggerTempButton from '../client/components/TriggerTempButton';
import Weather from '../client/components/Weather';

describe('Temperature Trigger Component', () => {
	const onLoading = sinon.stub();
	const onTempTrigger = sinon.stub();
	const spy = sinon.spy();

	it('TriggerTempButton disappears before getting data', () => {
		const wrapper = mount(<Weather />, { lifecycleExperimental: true });
		wrapper.setState({ onLoading: true });
		wrapper.update();
		expect(wrapper.find(TriggerTempButton).length).to.equal(0);
		wrapper.unmount();
	})

	it('TriggerTempButton exists after got data', () => {
		const wrapper = mount(<Weather />, { lifecycleExperimental: true });
		wrapper.setState({ weather: sample, onLoading: false, location: location });
		wrapper.update();
		expect(wrapper.find(TriggerTempButton).length).to.equal(1);
		wrapper.unmount();
	})

	it('TriggerTempButton should change data between F/C degrees', () => {
		const wrapper = mount(<Weather />, { lifecycleExperimental: true });
		wrapper.setState({ weather: sample, onLoading: false, location: location, onTempTrigger: false });
		wrapper.update();
		expect(wrapper.find(TriggerTempButton).length).to.equal(1);
		wrapper.find(TriggerTempButton).simulate('click');
		expect(wrapper.state('onTempTrigger')).to.equal(true);
		wrapper.find(TriggerTempButton).simulate('click');
		expect(wrapper.state('onTempTrigger')).to.equal(false);
		wrapper.unmount();
	})

})
