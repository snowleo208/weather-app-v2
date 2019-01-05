import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'
import sample from './weather.json'
import location from './location.json'

import Weather from '../client/components/Weather';
import ReloadButton from '../client/components/ReloadButton';
import TriggerTempButton from '../client/components/TriggerTempButton';
import Loading from '../client/components/Loading';

describe('Weather Component', () => {
	const weather = sinon.stub();
	const location = sinon.stub();
	const onLoading = sinon.stub();
	const wrapper = mount(<Weather weather={weather} location={location} onLoading={onLoading} />);
	const spy = sinon.spy();

	// Re-render component.
	wrapper.update();

	it('renders correctly', () => {
		expect(wrapper.find(Weather).length).to.equal(1);
	});

	it('should render one div with the correct class applied', () => {
		expect(wrapper.find('#app').length).to.equal(1);
	});

	it('should start with an empty weather list', () => {
		expect(wrapper.state('weather')).to.eql({});
	});

	it('should start with an empty location list', () => {
		expect(wrapper.state('location')).to.eql({});
	});

	it('should be loading at render', () => {
		expect(wrapper.state('onLoading')).to.equal(true);
	});

	it('calls componentDidMount', () => {
		sinon.spy(Weather.prototype, 'componentDidMount');
		const wrapper = mount(<Weather />);
		expect(Weather.prototype.componentDidMount.calledOnce).to.equal(true);
	});

})

describe('Mocking API requests', function () {
	it('specify response for a specific request', () => {
		const wrapper = mount(<Weather />, { lifecycleExperimental: true });
		wrapper.setState({ weather: sample, onLoading: false, location: location });
		wrapper.update();
		expect(wrapper.state('weather').currently).to.not.eql({})
		wrapper.unmount();
	})

	it('weather summary appears after weather changes', () => {
		const wrapper = mount(<Weather />, { lifecycleExperimental: true });
		wrapper.setState({ weather: sample, onLoading: false, location: location });
		wrapper.update();
		expect(wrapper.find('.c-weather--summary').length).to.equal(1);
		wrapper.unmount();
	})
})