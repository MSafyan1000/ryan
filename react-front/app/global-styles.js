import { createGlobalStyle } from 'styled-components';

require('dashforge/lib/@fortawesome/fontawesome-free/css/all.min.css');
require('dashforge/lib/ionicons/css/ionicons.min.css');
require('dashforge/assets/css/dashforge.min.css');
require('dashforge/assets/css/dashforge.profile.css');

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
