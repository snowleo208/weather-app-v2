import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'

import ReloadButton from '../client/components/ReloadButton';
import Weather from '../client/components/Weather';

describe('Reload Button Component', () => {
	const onLoading = sinon.stub();
	const spy = sinon.spy();

	it('click reload button and trigger reloadData function', (done) => {
		sinon.spy(Weather.prototype, 'reloadData');
		const wrapper = mount(<Weather />);
    	expect(wrapper.find(ReloadButton).length).to.equal(1);
    	const btn = wrapper.find('button');
		btn.simulate('click');
		expect(Weather.prototype.reloadData.calledOnce).to.equal(true);
    	done();
	})

})
