import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'
import axios from 'axios';
import moxios from 'moxios'
import sample from './weather.json'

import Weather from '../client/components/Weather';
import ReloadButton from '../client/components/ReloadButton';
import TriggerTempButton from '../client/components/TriggerTempButton';

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


describe('mocking API requests', function () {
	const wrapper = mount(<Weather />, { lifecycleExperimental: true });

	describe('using moxios to mock axios requests', function () {

		beforeEach(function () {
			moxios.install()
			moxios.stubRequest('/api/weather', {
				status: 200,
				responseText: [...sample]
			})
			const resolved = new Promise((r) => r({ sample }));
			axios.get('/api/weather').then(resolved)
			wrapper.setState({ weather: resolved._v.sample, onLoading: false });
			wrapper.update();
		})

		afterEach(function () {
			moxios.uninstall()
		})

		it('specify response for a specific request', () => {
			const wrapper = mount(<Weather />, { lifecycleExperimental: true });
			wrapper.update();
			expect(wrapper.state('weather').currently).to.not.eql({})
		})

		// it('Weather summary appears after weather changes', () => {
		// 	wrapper.update();
		// 	expect(wrapper.find('.c-weather--grid').length).to.equal(1);
		// })

		// it('Weather summary appears after weather changes', () => {
		// 	expect(wrapper.find(TriggerTempButton).length).to.equal(1);
		// })

	})
})