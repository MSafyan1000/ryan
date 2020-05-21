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
import { Link } from 'react-router-dom';
import imgBg from '../../images/img18.png';

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="content content-fixed content-auth-alt">
        <div className="container d-flex justify-content-center ht-100p">
          <div className="mx-wd-300 wd-sm-450 ht-100p d-flex flex-column align-items-center justify-content-center">
            <div className="wd-80p wd-sm-300 mg-b-15">
              <img src={imgBg} className="img-fluid" alt="" />
            </div>
            <h4 className="tx-20 tx-sm-24">Reset your password</h4>
            <p className="tx-color-03 mg-b-30 tx-center">
              Enter your username or email address and we will send you a link
              to reset your password.
            </p>
            <div className="wd-100p d-flex flex-column flex-sm-row mg-b-40">
              <input
                type="text"
                className="form-control wd-sm-250 flex-fill"
                placeholder="Enter username or email address"
              />
              <button className="btn btn-brand-02 mg-sm-l-10 mg-t-10 mg-sm-t-0">
                Reset Password
              </button>
            </div>
            <span className="tx-12 tx-color-03">
              Key business concept vector is created by{' '}
              <a href="#">freepik (freepik.com)</a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
