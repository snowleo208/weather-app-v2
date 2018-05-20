import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Loading from '../client/components/Loading';

describe('Loading Component', () => {
	it('should render loading indicator', () => {
        const wrapper = mount(<Loading onLoading={true} />);
        expect(wrapper.find('div').hasClass('u-loading')).to.equal(true);
        wrapper.unmount();
	});

	it('should disappear after loading finished', () => {
        const wrapper = mount(<Loading onLoading={false} />);
        expect(wrapper.find('div').hasClass('u-none')).to.equal(true);
        wrapper.unmount();
	});

})
