/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const QUERY_ORDERS = gql`
  {
    allOrders {
      id
      description
      total
    }
  }
`;

export default function HomePage() {
  const props = useQuery(QUERY_ORDERS);
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div data-test="orders">
        {data.allOrders.map(({ description, total }, i) => (
          <div key={i}>
            <p>
              {description}: {total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.array,
};
