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
import Header from 'components/Header';

import '../../../THEME/main/assets/css/dashforge.profile.css';

export default function HomePage() {
  // const props = useQuery(QUERY_ORDERS);
  // const { loading, error, data } = props;

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <Header />
      {/* navbar */}
      <div className="content content-fixed content-profile">
        <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
          <div className="media d-block d-lg-flex">
            <div className="profile-sidebar pd-lg-r-25">
              <div className="row">
                <div className="col-sm-3 col-md-2 col-lg">
                  <div className="avatar avatar-xxl avatar-online">
                    <img
                      src="../../assets/img/img16.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                </div>
                {/* col */}
                <div className="col-sm-8 col-md-7 col-lg mg-t-20 mg-sm-t-0 mg-lg-t-25">
                  <h5 className="mg-b-2 tx-spacing--1">Fen Chiu Mao</h5>
                  <p className="tx-color-03 mg-b-25">@fenchiumao</p>
                  <div className="d-flex mg-b-25">
                    <button className="btn btn-xs btn-white flex-fill">
                      Message
                    </button>
                    <button className="btn btn-xs btn-primary flex-fill mg-l-10">
                      Follow
                    </button>
                  </div>
                  <p className="tx-13 tx-color-02 mg-b-25">
                    Redhead, Innovator, Saviour of Mankind, Hopeless Romantic,
                    Attractive 20-something Yogurt Enthusiast...{' '}
                    <a href="#">Read more</a>
                  </p>
                  <div className="d-flex">
                    <div className="profile-skillset flex-fill">
                      <h4>
                        <a href="#" className="link-01">
                          1.4k
                        </a>
                      </h4>
                      <label>Stars</label>
                    </div>
                    <div className="profile-skillset flex-fill">
                      <h4>
                        <a href="#" className="link-01">
                          2.8k
                        </a>
                      </h4>
                      <label>Followers</label>
                    </div>
                    <div className="profile-skillset flex-fill">
                      <h4>
                        <a href="#" className="link-01">
                          437
                        </a>
                      </h4>
                      <label>Following</label>
                    </div>
                  </div>
                </div>
                {/* col */}
                <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                  <label className="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">
                    Skills
                  </label>
                  <ul className="list-inline list-inline-skills">
                    <li className="list-inline-item">
                      <a href="#">HTML5</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Sass</a>
                    </li>
                  </ul>
                </div>
                {/* col */}
                <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                  <label className="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">
                    Websites &amp; Social Channel
                  </label>
                  <ul className="list-unstyled profile-info-list">
                    <li>
                      <i data-feather="globe" />{' '}
                      <a href="#">http://fenchiumao.me/</a>
                    </li>
                    <li>
                      <i data-feather="github" /> <a href="#">@fenchiumao</a>
                    </li>
                    <li>
                      <i data-feather="twitter" /> <a href="#">@fenmao</a>
                    </li>
                    <li>
                      <i data-feather="instagram" /> <a href="#">@fenchiumao</a>
                    </li>
                    <li>
                      <i data-feather="facebook" /> <a href="#">@fenchiumao</a>
                    </li>
                  </ul>
                </div>
                {/* col */}
                <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                  <label className="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">
                    Contact Information
                  </label>
                  <ul className="list-unstyled profile-info-list">
                    <li>
                      <i data-feather="briefcase" />{' '}
                      <span className="tx-color-03">
                        Bay Area, San Francisco, CA
                      </span>
                    </li>
                    <li>
                      <i data-feather="home" />{' '}
                      <span className="tx-color-03">
                        Westfield, Oakland, CA
                      </span>
                    </li>
                    <li>
                      <i data-feather="smartphone" />{' '}
                      <a href="#">(+1) 012 345 6789</a>
                    </li>
                    <li>
                      <i data-feather="phone" />{' '}
                      <a href="#">(+1) 987 654 3201</a>
                    </li>
                    <li>
                      <i data-feather="mail" /> <a href="#">me@fenchiumao.me</a>
                    </li>
                  </ul>
                </div>
                {/* col */}
                <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                  <label className="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">
                    Explore
                  </label>
                  <nav className="nav nav-classic tx-13">
                    <a href="#" className="nav-link">
                      <i data-feather="users" /> <span>Groups</span>
                    </a>
                    <a href="#" className="nav-link">
                      <i data-feather="calendar" /> <span>Events</span>
                    </a>
                    <a href="#" className="nav-link">
                      <i data-feather="briefcase" /> <span>Jobs</span>
                    </a>
                    <a href="#" className="nav-link">
                      <i data-feather="globe" /> <span>Discover People</span>
                    </a>
                    <a href="#" className="nav-link">
                      <i data-feather="shopping-bag" />{' '}
                      <span>Buy &amp; Sell</span>
                    </a>
                  </nav>
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>
            {/* profile-sidebar */}
            <div className="media-body mg-t-40 mg-lg-t-0 pd-lg-x-10">
              <div className="profile-update-option bg-white ht-50 bd d-flex justify-content-end mg-b-20 mg-lg-b-25 rounded">
                <div className="d-flex align-items-center pd-x-20 mg-r-auto">
                  <i data-feather="edit-3" />{' '}
                  <a href="#" className="link-03 mg-l-10">
                    <span className="d-none d-sm-inline">Share an</span> Update
                  </a>
                </div>
                <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                  <a
                    href="#"
                    className="link-03"
                    data-toggle="tooltip"
                    title="Publish Photo"
                  >
                    <i data-feather="image" />
                  </a>
                </div>
                <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                  <a
                    href="#"
                    className="link-03"
                    data-toggle="tooltip"
                    title="Publish Video"
                  >
                    <i data-feather="video" />
                  </a>
                </div>
                <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                  <a
                    href="#"
                    className="link-03"
                    data-toggle="tooltip"
                    title="Write an Article"
                  >
                    <i data-feather="file-text" />
                  </a>
                </div>
              </div>
              <div className="card mg-b-20 mg-lg-b-25">
                <div className="card-header pd-y-15 pd-x-20 d-flex align-items-center justify-content-between">
                  <h6 className="tx-uppercase tx-semibold mg-b-0">
                    Latest Activity
                  </h6>
                  <nav className="nav nav-icon-only">
                    <a href="#" className="nav-link">
                      <i data-feather="more-horizontal" />
                    </a>
                  </nav>
                </div>
                {/* card-header */}
                <div className="card-body pd-20 pd-lg-25">
                  <div className="media align-items-center mg-b-20">
                    <div className="avatar avatar-online">
                      <img
                        src="../../assets/img/img15.jpg"
                        className="rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="media-body pd-l-15">
                      <h6 className="mg-b-3">Dyanne Aceron</h6>
                      <span className="d-block tx-13 tx-color-03">
                        Cigarette Butt Collector
                      </span>
                    </div>
                    <span className="d-none d-sm-block tx-12 tx-color-03 align-self-start">
                      5 hours ago
                    </span>
                  </div>
                  {/* media */}
                  <p className="mg-b-20">
                    Our team is expanding again. We are looking for a Product
                    Manager and Software Engineer to drive our new aspects of
                    our capital projects. If you're interested, please drop a
                    comment here or simply message me.{' '}
                    <a href="#">#softwareengineer</a>{' '}
                    <a href="#">#engineering</a>
                  </p>
                  <div className="bd bg-gray-50 pd-y-15 pd-x-15 pd-sm-x-20">
                    <h6 className="tx-15 mg-b-3">
                      We're hiring of Product Manager
                    </h6>
                    <p className="mg-b-0 tx-14">
                      Full-time, $60,000 - $80,000 annual
                    </p>
                    <span className="tx-13 tx-color-03">
                      Bay Area, San Francisco, CA
                    </span>
                  </div>
                </div>
                <div className="card-footer bg-transparent pd-y-10 pd-sm-y-15 pd-x-10 pd-sm-x-20">
                  <nav className="nav nav-with-icon tx-13">
                    <a href="#" className="nav-link">
                      <i data-feather="thumbs-up" /> Like
                    </a>
                    <a href="#" className="nav-link">
                      <i data-feather="message-square" /> Comment
                    </a>
                    <a href="#" className="nav-link">
                      <i data-feather="share" /> Share
                    </a>
                  </nav>
                </div>
                {/* card-footer */}
              </div>
              {/* card */}
            </div>
            {/* media-body */}
            <div className="profile-sidebar mg-t-40 mg-lg-t-0 pd-lg-l-25">
              <div className="row">
                <div className="col-sm-6 col-md-5 col-lg">
                  <div className="d-flex align-items-center justify-content-between mg-b-20">
                    <h6 className="tx-13 tx-spacng-1 tx-uppercase tx-semibold mg-b-0">
                      Stories
                    </h6>
                    <a href="#" className="link-03">
                      Watch All
                    </a>
                  </div>
                  <ul className="list-unstyled media-list mg-b-15">
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-online">
                          <span className="avatar-initial rounded-circle bg-dark">
                            S
                          </span>
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-0">
                          <a href="#" className="link-01">
                            Socrates Itumay
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">2 hours ago</span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-online">
                          <span className="avatar-initial rounded-circle bg-primary">
                            I
                          </span>
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-0">
                          <a href="#" className="link-01">
                            Isidore Dilao
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">5 hours ago</span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assets/img/img8.jpg"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-0">
                          <a href="#" className="link-01">
                            Angeline Mercado
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">1 day ago</span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-online">
                          <span className="avatar-initial rounded-circle bg-info">
                            K
                          </span>
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-0">
                          <a href="#" className="link-01">
                            Kirby Avendula
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">2 days ago</span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-online">
                          <span className="avatar-initial rounded-circle bg-dark">
                            S
                          </span>
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-0">
                          <a href="#" className="link-01">
                            Socrates Itumay
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">2 hours ago</span>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="link-03 d-inline-flex align-items-center"
                  >
                    See more stories{' '}
                    <i className="icon ion-ios-arrow-down mg-l-5 mg-t-3 tx-12" />
                  </a>
                </div>
                {/* col */}
                <div className="col-sm-6 col-md-5 col-lg mg-t-40 mg-sm-t-0 mg-lg-t-40">
                  <div className="d-flex align-items-center justify-content-between mg-b-20">
                    <h6 className="tx-13 tx-spacing-1 tx-uppercase tx-semibold mg-b-0">
                      People Also Viewed
                    </h6>
                  </div>
                  <ul className="list-unstyled media-list mg-b-15">
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-online">
                          <img
                            src="../../assets/img/img6.jpg"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Roy Recamadas
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          UI/UX Designer &amp; Developer
                        </span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-offline">
                          <img
                            src="../../assets/img/img7.jpg"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Raymart Serencio
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          Full-Stack Developer
                        </span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-offline">
                          <span className="avatar-initial rounded-circle bg-teal">
                            R
                          </span>
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Rolando Paloso Jr
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          Licensed Architect
                        </span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-online">
                          <span className="avatar-initial rounded-circle bg-indigo">
                            R
                          </span>
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Robert Restificar
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          Business Analyst
                        </span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar avatar-online">
                          <span className="avatar-initial rounded-circle bg-gray-600">
                            A
                          </span>
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Archie Cantones
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          Senior Software Architect
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* col */}
                <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                  <div className="d-flex align-items-center justify-content-between mg-b-20">
                    <h6 className="tx-13 tx-uppercase tx-semibold mg-b-0">
                      People You May Know
                    </h6>
                  </div>
                  <ul className="list-unstyled media-list mg-b-15">
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar">
                          <img
                            src="../../assets/img/img21.jpg"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Allan Ray Palban
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          Senior Business Analyst
                        </span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar">
                          <img
                            src="../../assets/img/img22.jpg"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Rhea Castanares
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          Product Designer
                        </span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar">
                          <img
                            src="../../assets/img/img23.jpg"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Philip Cesar Galban
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          Executive Assistant
                        </span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar">
                          <img
                            src="../../assets/img/img24.jpg"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Randy Macapala
                          </a>
                        </p>
                        <span className="tx-12 tx-color-03">
                          Business Entrepreneur
                        </span>
                      </div>
                    </li>
                    <li className="media align-items-center">
                      <a href="#">
                        <div className="avatar">
                          <img
                            src="../../assets/img/img25.jpg"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="media-body pd-l-15">
                        <p className="tx-medium mg-b-2">
                          <a href="#" className="link-01">
                            Abigail Johnson
                          </a>
                        </p>
                        <span className="d-block tx-12 tx-color-03">
                          System Administrator
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* col */}
                <div className="col-sm-6 col-md-5 col-lg mg-t-40 order-sm-1">
                  <div className="d-flex align-items-center justify-content-between mg-b-15">
                    <h6 className="tx-13 tx-uppercase tx-semibold mg-b-0">
                      Mutual Connections
                    </h6>
                  </div>
                  <div className="img-group img-group-mutual mg-b-20 justify-content-start">
                    <img
                      src="../../assets/img/img10.jpg"
                      className="img rounded-circle"
                      alt=""
                    />
                    <img
                      src="../../assets/img/img11.jpg"
                      className="img rounded-circle"
                      alt=""
                    />
                    <img
                      src="../../assets/img/img12.jpg"
                      className="img rounded-circle"
                      alt=""
                    />
                    <img
                      src="../../assets/img/img13.jpg"
                      className="img rounded-circle"
                      alt=""
                    />
                    <img
                      src="../../assets/img/img9.jpg"
                      className="img rounded-circle"
                      alt=""
                    />
                  </div>
                  <h6>You have 18 mutual connection</h6>
                  <p className="tx-color-03 mg-b-0">
                    You and Fen both know Archie Cantones, Socrates Itumay, and
                    17 others
                  </p>
                </div>
                {/* col */}
                <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                  <div className="d-flex align-items-center justify-content-between mg-b-15">
                    <h6 className="tx-13 tx-uppercase tx-semibold mg-b-0">
                      Photos
                    </h6>
                    <a href="#" className="link-03">
                      Add Photo
                    </a>
                  </div>
                  <div className="row row-xxs">
                    <div className="col-4">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img2.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                    <div className="col-4">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img3.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                    <div className="col-4">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img4.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                    <div className="col-4 mg-t-2">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img5.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                    <div className="col-4 mg-t-2">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img6.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                    <div className="col-4 mg-t-2">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img7.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                    <div className="col-4 mg-t-2">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img18.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                    <div className="col-4 mg-t-2">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img19.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                    <div className="col-4 mg-t-2">
                      <a href="#" className="d-block ht-60">
                        <img
                          src="../../assets/img/img20.jpg"
                          className="img-fit-cover"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* col */}
                  </div>
                  {/* row */}
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>
            {/* profile-sidebar */}
          </div>
          {/* media */}
        </div>
        {/* container */}
      </div>
      {/* content */}
      <footer className="footer">
        <div>
          <span>© 2019 DashForge v1.0.0. </span>
          <span>
            Created by <a href="http://themepixels.me">ThemePixels</a>
          </span>
        </div>
        <div>
          <nav className="nav">
            <a
              href="https://themeforest.net/licenses/standard"
              className="nav-link"
            >
              Licenses
            </a>
            <a href="../../change-log.html" className="nav-link">
              Change Log
            </a>
            <a
              href="https://discordapp.com/invite/RYqkVuw"
              className="nav-link"
            >
              Get Help
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.array,
};
