import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import HomePage, { QUERY_ORDERS } from '../index';
import { messages } from '../messages';
const wait = require('waait');

describe('<HomePage />', () => {
  it('should render table of currencies', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <IntlProvider locale="en">
          <HomePage />
        </IntlProvider>
      </MockedProvider>,
    );
  });
});
