/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import '../../../THEME/main/assets/css/dashforge.auth.css';
import { Link, withRouter } from 'react-router-dom';

function HomePage(props) {
  return (
    <>
      <div>
        <Header isAuthorized />
        {/* navbar */}

        <div>
          <div className="content content-fixed bd-b">
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                  <h4 className="mg-b-5">Help Support Center</h4>
                  <p className="mg-b-0 tx-color-03">
                    Search for any help questions or topics.
                  </p>
                </div>
                <div className="search-form mg-t-20 mg-sm-t-0">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search topic"
                  />
                  <button className="btn" type="button">
                    <i data-feather="search" />
                  </button>
                </div>
              </div>
            </div>
            {/* container */}
          </div>
          {/* content */}
          <div className="content">
            <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
              <div className="row">
                <div className="col-lg-3 col-xl-2 d-none d-lg-block">
                  <label className="tx-sans tx-10 tx-medium tx-spacing-1 tx-uppercase tx-color-03 mg-b-15">
                    Getting Started
                  </label>
                  <nav className="nav nav-classic">
                    <a href="#" className="nav-link">
                      Download
                    </a>
                    <a href="#" className="nav-link active">
                      Installation
                    </a>
                    <a href="#" className="nav-link">
                      Accessibility
                    </a>
                    <a href="#" className="nav-link">
                      Supported Devices
                    </a>
                  </nav>
                </div>
                {/* col */}
                <div className="col-lg-9 col-xl-10">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                      <li className="breadcrumb-item">
                        <a href="#">Help Center</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">
                          <span className="d-sm-none">...</span>
                          <span className="d-none d-sm-inline">
                            Getting Started
                          </span>
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Installation
                      </li>
                    </ol>
                  </nav>
                  <h3 className="mg-b-25">Installation</h3>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="bd pd-20">
                        <label className="tx-sans tx-10 tx-medium tx-spacing-1 tx-uppercase tx-color-03 mg-b-10">
                          NPM Installation
                        </label>
                        <ul className="list-unstyled lh-7 mg-b-0">
                          <li>
                            <a href="#" className="link-01">
                              Common errors when intalling NPM
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              NPM for Windows
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              Cannot install npm in mac
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              NPM does not recognize in local
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              NPM version not showing when doing command
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                      <div className="bd pd-20">
                        <label className="tx-sans tx-10 tx-medium tx-spacing-1 tx-uppercase tx-color-03 mg-b-10">
                          Bootstrap Installation
                        </label>
                        <ul className="list-unstyled lh-7 mg-b-0">
                          <li>
                            <a href="#" className="link-01">
                              Common errors when intalling Bootstrap
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              Migrating from Bootstrap 3
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              Bootstrap using Webpack
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              Bootstrap react components
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              Example of bootsrap page using navbar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 mg-t-20 mg-sm-t-30">
                      <div className="bd pd-20">
                        <label className="tx-sans tx-10 tx-medium tx-spacing-1 tx-uppercase tx-color-03 mg-b-10">
                          SASS Customization
                        </label>
                        <ul className="list-unstyled lh-7 mg-b-0">
                          <li>
                            <a href="#" className="link-01">
                              Minimize sass to css without bootstrap
                            </a>
                          </li>
                          <li>
                            <a href="#" className="link-01">
                              Adding more utilities classes in sass
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* row */}
                </div>
                {/* col */}
              </div>
              {/* row */}
              <hr className="mg-t-60 mg-b-30" />
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="card card-help">
                    <div className="card-body tx-13">
                      <div className="tx-60 lh-0 mg-b-25">
                        <i className="icon ion-ios-cog" />
                      </div>
                      <h5>
                        <a href="#" className="link-01">
                          Integrations
                        </a>
                      </h5>
                      <p className="tx-color-03 mg-b-0">
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molesti...
                      </p>
                    </div>
                    {/* card-body */}
                    <div className="card-footer tx-13">
                      <span>18 Topics</span>
                      <a href="#" className="tx-18 lh-0">
                        <i className="icon ion-md-arrow-forward" />
                      </a>
                    </div>
                    {/* card-footer */}
                  </div>
                  {/* card */}
                </div>
                {/* col */}
                <div className="col-sm-6 col-lg-3 mg-t-20 mg-sm-t-0">
                  <div className="card card-help">
                    <div className="card-body tx-13">
                      <div className="tx-60 lh-0 mg-b-25">
                        <i className="icon ion-ios-laptop" />
                      </div>
                      <h5>
                        <a href="#" className="link-01">
                          Supported Devices
                        </a>
                      </h5>
                      <p className="tx-color-03 mg-b-0">
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molesti...
                      </p>
                    </div>
                    {/* card-body */}
                    <div className="card-footer tx-13">
                      <span>22 Topics</span>
                      <a href="#" className="tx-18 lh-0">
                        <i className="icon ion-md-arrow-forward" />
                      </a>
                    </div>
                    {/* card-footer */}
                  </div>
                  {/* card */}
                </div>
                {/* col */}
                <div className="col-sm-6 col-lg-3 mg-t-20 mg-sm-t-30 mg-lg-t-0">
                  <div className="card card-help">
                    <div className="card-body tx-13">
                      <div className="tx-60 lh-0 mg-b-25">
                        <i className="icon ion-ios-cart" />
                      </div>
                      <h5>
                        <a href="#" className="link-01">
                          Pricing &amp; Billing
                        </a>
                      </h5>
                      <p className="tx-color-03 mg-b-0">
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molesti...
                      </p>
                    </div>
                    {/* card-body */}
                    <div className="card-footer tx-13">
                      <span>11 Topics</span>
                      <a href="#" className="tx-18 lh-0">
                        <i className="icon ion-md-arrow-forward" />
                      </a>
                    </div>
                    {/* card-footer */}
                  </div>
                  {/* card */}
                </div>
                {/* col */}
                <div className="col-sm-6 col-lg-3 mg-t-20 mg-sm-t-30 mg-lg-t-0">
                  <div className="card card-help">
                    <div className="card-body tx-13">
                      <div className="tx-60 lh-0 mg-b-25">
                        <i className="icon ion-ios-filing" />
                      </div>
                      <h5>
                        <a href="#" className="link-01">
                          Features
                        </a>
                      </h5>
                      <p className="tx-color-03 mg-b-0">
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molesti...
                      </p>
                    </div>
                    {/* card-body */}
                    <div className="card-footer tx-13">
                      <span>15 Topics</span>
                      <a href="#" className="tx-18 lh-0">
                        <i className="icon ion-md-arrow-forward" />
                      </a>
                    </div>
                    {/* card-footer */}
                  </div>
                  {/* card */}
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>
          </div>
          {/* content */}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default withRouter(HomePage);
