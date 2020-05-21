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
        <div className="content content-fixed content-auth">
          <div className="container">Settings</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default withRouter(HomePage);
