import React from 'react';

export default function Footer() {
  return (
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
          <a href="https://discordapp.com/invite/RYqkVuw" className="nav-link">
            Get Help
          </a>
        </nav>
      </div>
    </footer>
  );
}
