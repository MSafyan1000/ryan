import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render table of currencies', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <IntlProvider locale="en">
          <HomePage />
        </IntlProvider>
      </MockedProvider>,
    );
    expect(wrapper.find('header')).toHaveLength(1);
  });
});
