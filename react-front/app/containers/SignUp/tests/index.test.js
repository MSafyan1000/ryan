import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import SignUp from '../index';

describe('<SignUp />', () => {
  it('should render table of currencies', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <IntlProvider locale="en">
          <SignUp />
        </IntlProvider>
      </MockedProvider>,
    );
  });
});
