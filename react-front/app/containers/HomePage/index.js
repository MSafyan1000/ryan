/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Header from 'components/Header';
import React from 'react';
import { Link } from 'react-router-dom';

import '../../../THEME/main/assets/css/dashforge.landing.css';

import img1 from '../../images/home-1.png';
import img2 from '../../images/home-2.png';
import img3 from '../../images/home-3.png';

export default function HomePage() {
  return (
    <>
      <Header />
      {/* navbar */}
      <div className="home-slider">
        <div className="home-lead">
          <div className="df-logo-initial mg-b-15">
            <p>df</p>
          </div>
          <p className="home-text">Responsive Bootstrap 4 Dashboard Template</p>
          <h6 className="home-headline">
            Make your dashboard app more professional with this{' '}
            <span>super awesome</span> and <span>premium quality</span>{' '}
            dashboard design template.
          </h6>
          <div className="d-flex wd-lg-350">
            <Link
              to="/sign_in"
              className="btn btn-brand-01 btn-uppercase flex-fill"
            >
              Login
            </Link>
            <Link
              to="/sign_up"
              className="btn btn-white btn-uppercase flex-fill mg-l-10"
            >
              Signup
            </Link>
          </div>
          <div className="d-flex tx-20 mg-t-40">
            <div className="tx-purple">
              <i className="fab fa-bootstrap" />
            </div>
            <div className="tx-orange pd-l-10">
              <i className="fab fa-html5" />
            </div>
            <div className="tx-primary pd-l-10">
              <i className="fab fa-css3-alt" />
            </div>
            <div className="tx-pink pd-l-10">
              <i className="fab fa-sass" />
            </div>
            <div className="tx-warning pd-l-10">
              <i className="fab fa-js" />
            </div>
            <div className="tx-danger pd-l-10">
              <i className="fab fa-npm" />
            </div>
            <div className="tx-danger pd-l-10">
              <i className="fab fa-gulp" />
            </div>
            <div className="bd-l mg-l-10 mg-sm-l-20 pd-l-10 pd-sm-l-20" />
            <div
              className="tx-color-03"
              data-toggle="tooltip"
              data-title="Ongoing development"
            >
              <i className="fab fa-angular" />
            </div>
            <div
              className="tx-color-03 pd-l-10"
              data-toggle="tooltip"
              data-title="Coming soon"
            >
              <i className="fab fa-react" />
            </div>
            <div
              className="tx-color-03 pd-l-10"
              data-toggle="tooltip"
              data-title="Coming soon"
            >
              <i className="fab fa-vuejs" />
            </div>
          </div>
          <div className="tx-12 mg-t-40">
            <a href="docs.html" className="link-03">
              Doc<span className="d-none d-sm-inline">umentation</span>
              <span className="d-sm-none">s</span>
            </a>
            <a href="changelog.html" className="link-03 mg-l-10 mg-sm-l-20">
              Changelog
            </a>
            <a
              href="https://themeforest.net/licenses/standard"
              target="_blank"
              className="link-03 mg-l-10 mg-sm-l-20"
            >
              Licenses
            </a>
            <a
              href="https://themeforest.net/page/customer_refund_policy"
              target="_blank"
              className="link-03 mg-l-10 mg-sm-l-20"
            >
              Refund Policy
            </a>
          </div>
        </div>
        <div className="home-slider-img">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="home-slider-bg-one" />
      </div>
    </>
  );
}
