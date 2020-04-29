import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import HomePage, { QUERY_ORDERS } from '../index';
import { messages } from '../messages';
const wait = require('waait');

const allOrders = [
  {
    id: 1,
    description: 'item-1',
    total: 100,
  },
  {
    id: 2,
    description: 'item-2',
    total: 120,
  },
];

const mocks = [
  {
    request: {
      query: QUERY_ORDERS,
    },
    result: {
      data: {
        allOrders,
      },
    },
  },
];

describe('<HomePage />', () => {
  it('should render table of currencies', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <IntlProvider locale="en">
          <HomePage />
        </IntlProvider>
      </MockedProvider>,
    );

    await wait(0);
    await wrapper.update();

    const ratesContainer = wrapper.find('[data-test="orders"]').text();

    expect(wrapper.find('h1').text()).toEqual(messages.header.defaultMessage);

    allOrders.forEach(element => {
      expect(ratesContainer).toContain(element.description);
      expect(ratesContainer).toContain(element.total);
    });
  });
});
