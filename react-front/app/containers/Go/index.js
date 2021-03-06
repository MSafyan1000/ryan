/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Header from 'components/Header';
import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import '../../../THEME/main/assets/css/dashforge.auth.css';

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
    <>
      <Header isAuthorized />
      <div className="content content-fixed bd-b">
        <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                  <li className="breadcrumb-item">
                    <a href="/">Profile</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/">Discover</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Groups
                  </li>
                </ol>
              </nav>
              <h4 className="mg-b-0" data-test="title">
                Discover Group
              </h4>
            </div>
            <div className="search-form mg-t-20 mg-sm-t-0">
              <input
                type="search"
                className="form-control"
                placeholder="Search groups"
              />
              <button className="btn" type="button">
                <i data-feather="search" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
          <div className="row">
            <div className="col-lg-9" data-test="orders">
              <div className="row row-xs mg-b-25">
                {/* col */}
                <div className="col-sm-6 col-md-4 mg-t-10">
                  <ul className="list-group">
                    {data.allOrders.map(({ description, total, id }) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={id}
                      >
                        {description}: {total}
                        <span className="badge badge-primary badge-pill">
                          14
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>
            {/* col */}
            <div className="col-lg-3 mg-t-40 mg-lg-t-0">
              <h6 className="">Groups By Location</h6>
              <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
    </>
  );
}
