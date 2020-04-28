import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import HomePage, { EXCHANGE_RATES } from '../index';
import { messages } from '../messages';
const wait = require('waait');

const rates = [
  { currency: 'AED', rate: '3.6731' },
  { currency: 'AFN', rate: '76.149991' },
];

const mocks = [
  {
    request: {
      query: EXCHANGE_RATES,
    },
    result: {
      data: {
        rates,
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

    const ratesContainer = wrapper.find('[data-test="rates"]').text();

    expect(wrapper.find('h1').text()).toEqual(messages.header.defaultMessage);

    rates.forEach(element => {
      expect(ratesContainer).toContain(element.currency);
      expect(ratesContainer).toContain(element.rate);
    });
  });
});
