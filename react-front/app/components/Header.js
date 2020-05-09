import React from 'react';

export default function Header() {
  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <a href="/" id="mainMenuOpen" className="burger-menu">
        <i data-feather="menu" />
      </a>
      <div className="navbar-brand">
        <a href="/" className="df-logo">
          dash<span>forge</span>
        </a>
      </div>
      {/* navbar-brand */}
      <div id="navbarMenu" className="navbar-menu-wrapper">
        <div className="navbar-menu-header">
          <a href="/" className="df-logo">
            dash<span>forge</span>
          </a>
          <a id="mainMenuClose" href="/">
            <i data-feather="x" />
          </a>
        </div>
        {/* navbar-menu-header */}
        <ul className="nav navbar-menu">
          <li className="nav-label pd-l-20 pd-lg-l-25 d-lg-none">
            Main Navigation
          </li>

          <li className="nav-item">
            <a href="../../components/" className="nav-link">
              <i data-feather="box" /> Components
            </a>
          </li>
          <li className="nav-item">
            <a href="../../collections/" className="nav-link">
              <i data-feather="archive" /> Collections
            </a>
          </li>
        </ul>
      </div>
      {/* navbar-menu-wrapper */}
    </header>
  );
}
